/**
 * Single source of truth for the public route table.
 *
 * Consumed by:
 *   - scripts/generate-sitemap.mjs (writes dist/sitemap.xml after `vite build`)
 *   - scripts/prerender.mjs        (renders each route × language to static HTML)
 */

export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

export const LANGS = ["uz", "ru", "en"];
export const DEFAULT_LANG = "uz";

/** Turn a canonical (Uzbek) path into its equivalent in `lang`. */
export const localizePath = (routePath = "/", lang = DEFAULT_LANG) => {
  const clean = routePath.startsWith("/") ? routePath : `/${routePath}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
};

export const ROUTES = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    image: {
      src: "public/dr_muhammadali_og.png",
      title: "Dr. MuhammadAli Davronov — DM Stomatologiya (5 Yillik Tajriba)",
      caption: "Dr. MuhammadAli Davronov shaxsiy qabuli. Implantologiya, Ortopediya va Terapiya (DM Stomatologiya, Andijon shahri, Prospekt Navoiy shoh ko'chasi 91-uy).",
    },
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov",
      caption: "Dental implantatsiya, ortopediya, terapiya, sirkon koronkalar, vinirlar va og'riqsiz davolash.",
    },
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.9",
    image: {
      src: "src/assets/dr_muhammadali.png",
      title: "Dr. MuhammadAli Davronov Haqida — 5 Yillik Klinik Tajriba",
      caption: "Dr. MuhammadAli Davronov — implantologiya, ortopediya va terapiya mutaxassisi (DM Stomatologiya).",
    },
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/booking",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/qabul",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/services/digital-dentistry",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/clinic_room.webp",
      title: "Raqamli Diagnostika & 3D Rejalashtirish — Dr. MuhammadAli Davronov",
      caption: "3D optik skanerlash va kompyuterda tabassum dizayni",
    },
  },
  {
    path: "/services/dental-implant",
    changefreq: "monthly",
    priority: "0.85",
    image: {
      src: "src/assets/treatment_implant.webp",
      title: "Dental Implantatsiya (Biotitan) — Dr. MuhammadAli Davronov",
      caption: "Biotitan implantlar bilan yo'qotilgan tishlarni og'riqsiz va mustahkam tiklash",
    },
  },
  {
    path: "/services/tsirkon-keramika-koronka",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_crowns.webp",
      title: "Sirkon va Keramika Koronkalar — Dr. MuhammadAli Davronov",
      caption: "CAD/CAM frezerlash orqali yuqori mustahkamlikdagi va tabiiy shaffoflikdagi sirkon qoplamalar",
    },
  },
  {
    path: "/services/vinirlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_veneers.webp",
      title: "Estetik Keramik Vinirlar — Dr. MuhammadAli Davronov",
      caption: "Gollivud tabassumi, E-max press-keramika va tish shakli hamda rangini mukammallashtirish",
    },
  },
  {
    path: "/services/protezlar",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_dentures.webp",
      title: "Zamonaviy Tish Protezlari va Ko'priklar — Dr. MuhammadAli Davronov",
      caption: "Byugel, neylon va ko'prikli tish protezlari",
    },
  },
  {
    path: "/services/ogriqsiz-terapiya",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_therapy.webp",
      title: "100% Og'riqsiz Terapiya va Plombalash — Dr. MuhammadAli Davronov",
      caption: "Karies va asab kanallarini 100% og'riqsiz, zamonaviy nano-kompozitlar bilan davolash",
    },
  },
  {
    path: "/services/tish-oqartirish",
    changefreq: "monthly",
    priority: "0.8",
    image: {
      src: "src/assets/treatment_whitening.webp",
      title: "Professional Gigiyena va Tish Oqartirish — Dr. MuhammadAli Davronov",
      caption: "AirFlow ultratovush tozalash va emalga zarar yetkazmasdan tishlarni oqartirish",
    },
  },
];
