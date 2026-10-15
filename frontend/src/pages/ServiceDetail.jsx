import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { DOCTOR_INFO, getExperienceBadge } from "../constants/doctor";
import Seo from "../components/Seo";
import { buildMedicalProcedureSchema } from "../utils/structuredData";
import { IconPhone, IconLocationPin, IconShieldCheck } from "../components/MedicalIcons";
import { useBooking } from "../context/BookingContext";
import InlineBookingSection from "../components/InlineBookingSection";

const ServiceDetail = () => {
  const { serviceId, slug } = useParams();
  const activeServiceId = serviceId || slug;
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const { openBooking } = useBooking();

  const service =
    SERVICES_CATALOG.find((s) => s.id === activeServiceId) || SERVICES_CATALOG[0];

  const steps = {
    uz: [
      {
        num: "01",
        title: "3D Skanerlash va Raqamli Diagnostika",
        desc: "Dr. MuhammadAli Davronov intraoral 3D skaner orqali tish qatorini o'rganadi va ekranda virtual reja tuzadi.",
      },
      {
        num: "02",
        title: "2 Bosqichli 100% Og'riqsiz Anesteziya",
        desc: "Avval milk yuzasi anestetik gel bilan muzlatiladi, so'ngra zamonaviy og'riqsiz inyeksiya qilinadi.",
      },
      {
        num: "03",
        title: "Raqamli Aniqlikdagi Asosiy Muolaja",
        desc: "Biotitan implantlar, shaffof elaynerlar, tsirkon yoki kompozit materiallar yordamida mukammal tiklash.",
      },
      {
        num: "04",
        title: "Mukammal Estetika va Rasmiy Kafolat",
        desc: "Chaynash balansi tekshiriladi, sayqallanadi va Dr. MuhammadAli Davronov tomonidan shaxsiy rasmiy kafolat taqdim etiladi.",
      },
    ],
    ru: [
      {
        num: "01",
        title: "3D Сканирование и Диагностика",
        desc: "Д-р МухаммадАли Давронов проводит интраоральное 3D сканирование и составляет точный цифровой план лечения.",
      },
      {
        num: "02",
        title: "Двухэтапная Анестезия Без Боли",
        desc: "Десна обезболивается гелем, после чего аккуратно вводится современный европейский анестетик.",
      },
      {
        num: "03",
        title: "Высокоточное Лечение и Реставрация",
        desc: "Использование титановых имплантов, элайнеров, циркония и премиальных биоматериалов.",
      },
      {
        num: "04",
        title: "Контроль Прикуса и Официальная Гарантия",
        desc: "Финальная полировка, проверка окклюзии и выдача личной официальной гарантии Д-ра МухаммадАли Давронова.",
      },
    ],
    en: [
      {
        num: "01",
        title: "3D Intraoral Scan & Diagnostics",
        desc: "Dr. MuhammadAli Davronov creates a 3D digital model of your teeth and visualizes the procedure in advance.",
      },
      {
        num: "02",
        title: "Two-Stage Gentle Anesthesia",
        desc: "Topical numbing gel is applied prior to computer-controlled local anesthesia for zero pain.",
      },
      {
        num: "03",
        title: "Precision Restorative Procedure",
        desc: "Guided placement of implants, clear aligners, zirconia crowns, or nano-composite restorations.",
      },
      {
        num: "04",
        title: "Bite Calibration & Clinical Warranty",
        desc: "Final occlusion verification, high-gloss polish, and official personal warranty issued by Dr. MuhammadAli Davronov.",
      },
    ],
  }[lang] || steps.uz;

  const seoSuffix = {
    uz: "Dr. MuhammadAli Davronov | DM Stomatologiya",
    ru: "Д-р МухаммадАли Давронов | DM Stomatologiya",
    en: "Dr. MuhammadAli Davronov | DM Stomatology",
  }[lang];

  const title = `${service.title[lang]} — ${seoSuffix}`;
  const description = `${service.shortDesc[lang]} Dr. MuhammadAli Davronov (DM Stomatologiya, Andijon). Tel: ${DOCTOR_INFO.phoneDisplay}`;

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar", path: "/services" },
    { name: service.title[lang], path: `/services/${service.id}` },
  ];
  const schema = buildMedicalProcedureSchema(service, lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12">
      <Seo
        title={title}
        description={description}
        schemaJson={schema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2 flex-wrap">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-400">/</span>
        <Link to={to("/services")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Услуги" : lang === "en" ? "Services" : "Xizmatlar"}
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-primary font-bold" aria-current="page">
          {service.title[lang]}
        </span>
      </nav>

      {/* Main Hero Header */}
      <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              {service.badge[lang]}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs">
              {service.techTag[lang]}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
              <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
              {getExperienceBadge(lang)}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {service.title[lang]}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {service.shortDesc[lang]}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs shadow-2xs">
              <span className="text-slate-500 block text-[11px]">
                {lang === "ru" ? "Длительность" : lang === "en" ? "Duration" : "Vaqt / Muddat"}
              </span>
              <span className="font-bold text-slate-900 mt-0.5 block">{service.duration[lang]}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs shadow-2xs">
              <span className="text-slate-500 block text-[11px]">
                {lang === "ru" ? "Гарантия" : lang === "en" ? "Warranty" : "Kafolat"}
              </span>
              <span className="font-bold text-emerald-600 mt-0.5 block">{service.warranty[lang]}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs col-span-2 sm:col-span-1 shadow-2xs">
              <span className="text-slate-500 block text-[11px]">
                {lang === "ru" ? "Лечащий врач" : lang === "en" ? "Attending Doctor" : "Davolovchi Shifokor"}
              </span>
              <span className="font-bold text-primary mt-0.5 block whitespace-nowrap">Dr. MuhammadAli Davronov</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 font-medium pt-1 flex items-center gap-1.5">
            <IconLocationPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>
              {lang === "ru" ? "Приём в г. Андижан, DM Stomatologiya (ул. Навои 91)" : lang === "en" ? "Practice location: Andijan, DM Stomatology (Navoiy Ave 91)" : "Qabul manzili: Andijon sh., DM Stomatologiya (Navoiy shoh ko'chasi 91)"}
            </span>
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking(service.id)}
              className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-colgate active:scale-98 transition-all text-center"
            >
              {lang === "ru" ? "Записаться на эту процедуру" : lang === "en" ? "Book Appointment for this Treatment" : "Ushbu muolajaga yozilish"}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-colors text-center flex items-center justify-center gap-2"
            >
              <IconPhone className="w-4 h-4 text-primary" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-lg relative">
            <img
              src={service.image}
              alt={service.title[lang]}
              width="800"
              height="600"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Highlights & Features */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-6">
          {lang === "ru" ? "Ключевые преимущества и особенности" : lang === "en" ? "Key Treatment Highlights" : "Muolajaning Asosiy Afzalliklari"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.highlights[lang]?.map((hl, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {hl}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Treatment Pathway */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Этапы проведения процедуры" : lang === "en" ? "Procedure Pathway" : "Muolaja Bosqichlari"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-2xl font-serif font-bold text-primary block mb-2">
                  {st.num}
                </span>
                <h3 className="font-bold text-sm text-slate-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Booking Section */}
      <InlineBookingSection initialServiceId={service.id} />
    </div>
  );
};

export default ServiceDetail;
