import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { getServicesTag } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import Seo from "../components/Seo";
import { buildServicesCatalogSchema } from "../utils/structuredData";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import { IconShieldCheck } from "../components/MedicalIcons";
import Interactive3DTilt from "../components/Interactive3DTilt";

const Services = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.services[lang] || PAGE_SEO.services.uz;

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: { uz: "Barcha Xizmatlar", ru: "Все Услуги", en: "All Services" } },
    { id: "digital", label: { uz: "Raqamli & 3D", ru: "Цифровые & 3D", en: "Digital & 3D" } },
    { id: "implant", label: { uz: "Dental Implant", ru: "Имплантация", en: "Implants" } },
    { id: "ortho", label: { uz: "Elayner & Breket", ru: "Элайнеры & Брекеты", en: "Orthodontics" } },
    { id: "aesthetics", label: { uz: "Tsirkon & Vinir", ru: "Цирконий & Виниры", en: "Crowns & Veneers" } },
    { id: "therapy", label: { uz: "Terapiya & Protez", ru: "Терапия & Протезы", en: "Therapy & Dentures" } },
  ];

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "digital") return s.id.includes("digital");
    if (activeCategory === "implant") return s.id.includes("implant");
    if (activeCategory === "ortho") return s.id.includes("breket") || s.id.includes("elayner");
    if (activeCategory === "aesthetics") return s.id.includes("tsirkon") || s.id.includes("vinir") || s.id.includes("oqartirish");
    if (activeCategory === "therapy") return s.id.includes("terapiya") || s.id.includes("protez");
    return true;
  });

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar", path: "/services" },
  ];
  const catalogSchema = buildServicesCatalogSchema(SERVICES_CATALOG, lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={catalogSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-400 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary-electric transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-600">/</span>
        <span className="text-primary-electric font-bold" aria-current="page">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-primary-dark/30 text-primary-electric border border-primary-crimson/40 shadow-xs">
          <IconShieldCheck className="w-3.5 h-3.5 text-primary-electric" />
          <span>{getServicesTag(lang)}</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {lang === "uz"
            ? "Dr. MuhammadAli Davronovning Shaxsiy Muolajalari"
            : lang === "ru"
            ? "Клинические Услуги Д-ра МухаммадАли Давронова"
            : "Clinical Treatments & Care by Dr. MuhammadAli Davronov"}
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          {lang === "uz"
            ? "Ortopediya, terapiya va implantologiya bo'yicha 5 yillik tajriba. Tishlaringiz salomatligi va tabiiy go'zalligini 3D raqamli aniqlikda, to'liq og'riqsiz tiklaymiz."
            : lang === "ru"
            ? "5 лет клинического опыта в ортопедии, терапии и имплантологии. Восстановление здоровья и эстетики зубов с 3D точностью и искренней заботой."
            : "5 years of clinical experience in orthopedics, therapy, and implantology. Restoring your smile with precision and gentle comfort."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-1 no-scrollbar scroll-touch">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === c.id
                ? "bg-gradient-to-r from-primary-dark via-primary-crimson to-primary-electric text-white shadow-glow-red"
                : "bg-surface-elevated/80 text-slate-300 border border-white/10 hover:text-white hover:bg-surface-border/50"
            }`}
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <section aria-label={lang === "ru" ? "Каталог услуг" : lang === "en" ? "Services catalog" : "Xizmatlar katalogi"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service) => (
          <Interactive3DTilt
            key={service.id}
            maxTilt={6}
            perspective={950}
            scale={1.02}
            glare={true}
            className="h-full"
          >
            <article className="h-full p-6 rounded-3xl bg-surface-elevated/90 border border-white/10 shadow-xl hover:shadow-glow-red hover:border-primary-crimson/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative">
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    width="640"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/80 text-primary-electric border border-primary-crimson/40 backdrop-blur-xs shadow-xs">
                      {service.featurePill[lang]}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-primary-electric uppercase tracking-wider block mb-1">
                  {service.category[lang]}
                </span>
                <h3 className="text-lg font-bold text-white hover:text-primary-electric transition-colors">
                  {service.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {service.shortDesc[lang]}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {service.highlights[lang]?.slice(0, 2).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-electric font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={to(`/services/${service.id}`)}
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  {lang === "ru" ? "Подробнее →" : lang === "en" ? "Learn more →" : "Batafsil →"}
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary-dark via-primary-crimson to-primary-electric hover:shadow-glow-red hover:scale-102 active:scale-98 transition-all shadow-xs"
                >
                  {lang === "ru" ? "Записаться" : lang === "en" ? "Book Visit" : "Qabulga yozilish"}
                </button>
              </div>
            </article>
          </Interactive3DTilt>
        ))}
      </section>

      {/* Interactive Calculator */}
      <Interactive3DCostCalculator />

      {/* Smile Assessment Wizard */}
      <SmileAssessmentWizard />
    </div>
  );
};

export default Services;
