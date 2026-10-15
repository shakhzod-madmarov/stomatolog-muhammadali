/**
 * Prerender every indexable route to static HTML.
 * Runs after `vite build` and `vite build --ssr`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ROUTES, SITE_ORIGIN, LANGS, DEFAULT_LANG, localizePath } from "./site-config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const replaceContent = (html, matcher, value) => {
  if (value == null) return html;
  return html.replace(matcher, (tag) =>
    tag.replace(/content="[^"]*"/, `content="${escapeAttr(value)}"`)
  );
};

const setMetaName = (html, name, value) =>
  replaceContent(html, new RegExp(String.raw`<meta\s+name="${name}"[^>]*>`), value);

const setMetaProperty = (html, property, value) =>
  replaceContent(html, new RegExp(String.raw`<meta\s+property="${property}"[^>]*>`), value);

const setTitle = (html, value) =>
  value == null
    ? html
    : html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(value)}</title>`);

const setCanonical = (html, value) =>
  value == null
    ? html.replace(/<link\s+rel="canonical"[^>]*>\s*/, "")
    : html.replace(/<link\s+rel="canonical"[^>]*>/, (tag) =>
        tag.replace(/href="[^"]*"/, `href="${escapeAttr(value)}"`)
      );

const setHtmlLang = (html, lang) =>
  html.replace(/<html([^>]*)\s+lang="[^"]*"/, `<html$1 lang="${lang}"`);

const injectAlternates = (html, alternates) => {
  let cleaned = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>\s*\n?/gi, "");
  if (!alternates || alternates.length === 0) return cleaned;
  const tags = alternates
    .map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${escapeAttr(a.href)}" />`)
    .join("\n");
  return cleaned.replace(/(<link\s+rel="canonical"[^>]*>)/, `$1\n${tags}`);
};

const setNoindex = (html) =>
  html
    .replace(/<meta\s+name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
    .replace(/<meta\s+name="googlebot"[^>]*>/, '<meta name="googlebot" content="noindex, follow" />');

const setOgLocales = (html, currentLocale) => {
  const allLocales = ["uz_UZ", "ru_RU", "en_US"];
  const alternates = allLocales.filter((l) => l !== currentLocale);
  let cleaned = html
    .replace(/<meta\s+property="og:locale"[^>]*>/, `<meta property="og:locale" content="${currentLocale}" />`)
    .replace(/<meta\s+property="og:locale:alternate"[^>]*>\s*\n?/gi, "");
  const altTags = alternates
    .map((l) => `    <meta property="og:locale:alternate" content="${l}" />`)
    .join("\n");
  return cleaned.replace(
    /(<meta\s+property="og:locale"[^>]*>)/,
    `$1\n${altTags}`
  );
};

const injectSchema = (html, json) => {
  if (!json) return html;
  const safe = (typeof json === "string" ? json : JSON.stringify(json)).split("<").join(String.raw`\u003c`);
  return html.replace(
    "</head>",
    `  <script id="seo-schema-json" type="application/ld+json" data-prerendered="true">${safe}</script>\n  </head>`
  );
};

const { render } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);
const template = fs.readFileSync(templatePath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  console.error("prerender: could not find the empty #root div in dist/index.html");
  process.exit(1);
}

const NOT_FOUND_ROUTE = "/__not-found__";

const routes = [
  ...ROUTES.flatMap((r) => LANGS.map((lang) => localizePath(r.path, lang))),
  NOT_FOUND_ROUTE,
];
console.log(`prerender: ${routes.length} routes (pages x languages + 404)\n`);

let failed = 0;

for (const route of routes) {
  let rendered;
  try {
    rendered = render(route);
  } catch (err) {
    console.error(`  FAIL ${route} (render threw):`, err.message);
    failed++;
    continue;
  }

  const { html: appHtml, seo = {} } = rendered;
  let pageHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const langMatch = route.match(/^\/(ru|en)(\/|$)/);
  const routeLang = langMatch ? langMatch[1] : DEFAULT_LANG;
  pageHtml = setHtmlLang(pageHtml, routeLang);

  const ogLocale = seo.ogLocale || (routeLang === "ru" ? "ru_RU" : routeLang === "en" ? "en_US" : "uz_UZ");
  pageHtml = setOgLocales(pageHtml, ogLocale);

  if (seo.title) {
    pageHtml = setTitle(pageHtml, seo.title);
    pageHtml = setMetaName(pageHtml, "title", seo.title);
    pageHtml = setMetaProperty(pageHtml, "og:title", seo.title);
    pageHtml = setMetaName(pageHtml, "twitter:title", seo.title);
  }
  if (seo.description) {
    pageHtml = setMetaName(pageHtml, "description", seo.description);
    pageHtml = setMetaProperty(pageHtml, "og:description", seo.description);
    pageHtml = setMetaName(pageHtml, "twitter:description", seo.description);
  }
  if (seo.keywords) {
    pageHtml = setMetaName(pageHtml, "keywords", seo.keywords);
  }
  if (seo.canonical) {
    pageHtml = setCanonical(pageHtml, seo.canonical);
    pageHtml = setMetaProperty(pageHtml, "og:url", seo.canonical);
  }
  if (seo.alternates) {
    pageHtml = injectAlternates(pageHtml, seo.alternates);
  }
  if (seo.ogImage) {
    pageHtml = setMetaProperty(pageHtml, "og:image", seo.ogImage);
    pageHtml = setMetaName(pageHtml, "twitter:image", seo.ogImage);
  }
  if (seo.noindex || route === NOT_FOUND_ROUTE) {
    pageHtml = setNoindex(pageHtml);
  }
  if (seo.schemaJson) {
    pageHtml = injectSchema(pageHtml, seo.schemaJson);
  }

  let outFile;
  if (route === NOT_FOUND_ROUTE) {
    outFile = path.join(distDir, "404.html");
  } else if (route === "/") {
    outFile = path.join(distDir, "index.html");
  } else {
    const cleanRoute = route.replace(/^\/+/, "").replace(/\/+$/, "");
    const dir = path.join(distDir, cleanRoute);
    fs.mkdirSync(dir, { recursive: true });
    outFile = path.join(dir, "index.html");
  }

  fs.writeFileSync(outFile, pageHtml, "utf-8");
  console.log(`  OK   ${route} -> ${path.relative(distDir, outFile)}`);
}

if (failed > 0) {
  console.error(`\nprerender: completed with ${failed} failures`);
  process.exit(1);
} else {
  console.log(`\nprerender: successfully generated static HTML for all routes.`);
}
