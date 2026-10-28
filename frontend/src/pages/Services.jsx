import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { getServicesTag } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import Seo from "../components/Seo";
import { buildServicesCatalogSchema } from "../utils/structuredData";
import { IconShieldCheck } from "../components/MedicalIcons";
import Interactive3DTilt from "../components/Interactive3DTilt";


const Services = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.services[lang] || PAGE_SEO.services.uz;

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: { uz: "Barcha Xizmatlar", ru: "Все Услуги", en: "All Services" } },
    { id: "implantology", label: { uz: "Dental Implantologiya", ru: "Имплантология", en: "Implantology" } },
    { id: "orthopedia", label: { uz: "Ortopediya & Protezlash", ru: "Ортопедия & Протезы", en: "Orthopedics" } },
    { id: "therapy", label: { uz: "Terapiya & Oqartirish", ru: "Терапия & Лечение", en: "Therapy" } },
    { id: "digital", label: { uz: "Raqamli Stomatologiya", ru: "Цифровая Стоматология", en: "Digital Dentistry" } },
  ];

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "orthopedia") return s.specialtyKey === "orthopedia";
    if (activeCategory === "therapy") return s.specialtyKey === "therapy";
    if (activeCategory === "implantology") return s.specialtyKey === "implantology";
    if (activeCategory === "digital") return s.specialtyKey === "digital";
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
      <nav aria-label="Breadcrumb" className="text-sm sm:text-base font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 shadow-xs">
          <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
          <span>{getServicesTag(lang)}</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz"
            ? "Dr. MuhammadAli Davronovning Shaxsiy Muolajalari"
            : lang === "ru"
            ? "Клинические Услуги Д-ра МухаммадАли Давронова"
            : "Clinical Treatments & Care by Dr. MuhammadAli Davronov"}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
          {lang === "uz"
            ? "Mustahkam biotitan implantlar, estetik sirkon qoplamalar va 100% og'riqsiz davolash. Tishlaringizning tabiiy go'zalligi va chaynash qulayligini 5 yillik tajriba hamda zargarlik aniqligida qayta tiklaymiz."
            : lang === "ru"
            ? "Надёжная дентальная имплантация, эстетичный цирконий и 100% лечение без боли. Возвращаем естественную красоту улыбки и комфорт жевания с ювелирной точностью и 5-летним клиническим опытом."
            : "Biocompatible dental implants, aesthetic zirconia restorations, and 100% pain-free care. Restoring your natural smile and chewing comfort with artisan precision and 5 years of clinical mastery."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        role="tablist"
        aria-label={lang === "ru" ? "Категории услуг" : lang === "en" ? "Service categories" : "Xizmat toifalari"}
        className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 pb-2 no-scrollbar scroll-touch px-1"
      >
        {categories.map((c) => {
          const isSelected = activeCategory === c.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(c.id)}
              className={`shrink-0 whitespace-nowrap min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-white shadow-md scale-102"
                  : "bg-white text-slate-700 border border-slate-200 hover:text-primary hover:bg-slate-50 shadow-2xs"
              }`}
            >
              {c.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <section aria-label={lang === "ru" ? "Каталог услуг" : lang === "en" ? "Services catalog" : "Xizmatlar katalogi"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        <h2 className="sr-only">
          {lang === "ru" ? "Список стоматологических процедур" : lang === "en" ? "Dental Procedures Directory" : "Stomatologik muolajalar ro'yxati"}
        </h2>
        {filteredServices.map((service) => (
          <Interactive3DTilt
            key={service.id}
            maxTilt={6}
            perspective={950}
            scale={1.02}
            glare={true}
            className="h-full"
          >
            <article className="h-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-colgate hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
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
                  </div>

                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider block mb-1.5">
                  {service.category[lang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-primary transition-colors leading-snug">
                  {service.title[lang]}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {service.shortDesc[lang]}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  {service.highlights[lang]?.slice(0, 2).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={to(`/services/${service.id}`)}
                  className="text-sm sm:text-base font-bold text-slate-600 hover:text-primary transition-colors"
                >
                  {lang === "ru" ? "Подробнее →" : lang === "en" ? "Learn more →" : "Batafsil →"}
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-sm hover:shadow-colgate active:scale-98 transition-all"
                >
                  {lang === "ru" ? "Записаться" : lang === "en" ? "Book Visit" : "Qabulga yozilish"}
                </button>
              </div>
            </article>
          </Interactive3DTilt>
        ))}
      </section>
    </div>
  );
};

export default Services;
