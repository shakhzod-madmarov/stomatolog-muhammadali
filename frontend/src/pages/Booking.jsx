import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import { buildBookingPageSchema } from "../utils/structuredData";
import { PAGE_SEO } from "../constants/seo";
import {
  IconPhone,
  IconShieldCheck,
  DentalDigitalScannerIcon,
} from "../components/MedicalIcons";

const Booking = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const years = getYearsOfExperience();
  const seo = PAGE_SEO.booking[lang] || PAGE_SEO.booking.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish", path: "/booking" },
  ];
  const bookingSchema = buildBookingPageSchema ? buildBookingPageSchema(lang, breadcrumbs) : null;

  return (
    <div className="py-6 sm:py-10 space-y-10">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={bookingSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-400 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary-electric transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-600">/</span>
        <span className="text-primary-electric font-bold" aria-current="page">
          {lang === "ru" ? "Запись на приём" : lang === "en" ? "Appointment Booking" : "Qabulga yozilish"}
        </span>
      </nav>

      {/* Doctor Summary Banner */}
      <header className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-surface-elevated/90 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary-dark/30 text-primary-electric text-xs font-black uppercase border border-primary-crimson/40">
              {DOCTOR_INFO.name}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 text-slate-300 text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <IconShieldCheck className="w-3.5 h-3.5 text-primary-electric" />
              <span>{years} {lang === "uz" ? "Yillik Klinik Tajriba" : lang === "ru" ? "Лет Клинического Опыта" : "Years Clinical Experience"}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-white font-serif tracking-tight">
            {lang === "uz"
              ? "Dr. MuhammadAli Davronov Qabuliga Onlayn Yozilish"
              : lang === "ru"
              ? "Онлайн Запись на Приём к Д-ру МухаммадАли Давронову"
              : "Book Online Appointment with Dr. MuhammadAli Davronov"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Dr. MuhammadAli Davronov qabuliga qulay vaqtni tanlang. Ortopediya, terapiya va implantologiya bo'yicha DM Stomatologiyada to'liq og'riqsiz, samimiy shaxsiy qabul."
              : lang === "ru"
              ? "Выберите удобное время для визита к доктору МухаммадАли Давронову в DM Stomatologiya. Ортопедия, терапия и дентальная имплантация на высшем уровне."
              : "Choose a convenient time for your consultation with Dr. MuhammadAli Davronov at DM Stomatology. Orthopedics, therapy, and dental implants with dedicated gentle care."}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-1">
            <span className="flex items-center gap-1.5">
              <DentalDigitalScannerIcon className="w-4 h-4 text-primary-electric" />
              <span>{DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <IconShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === "uz" ? "DM Stomatologiya · 100% Shaxsiy Qabul" : lang === "ru" ? "DM Stomatologiya · 100% Личный Приём" : "DM Stomatology · 100% Personal Care"}</span>
            </span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-2 shrink-0 text-center sm:text-left">
          <p className="font-bold text-white">{hours.full}</p>
          <p className="text-slate-400">{hours.sunday}</p>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-flex items-center gap-2 font-mono font-bold text-primary-electric hover:underline pt-1 text-sm"
          >
            <IconPhone className="w-4 h-4 text-primary-electric" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>
        </div>
      </header>

      {/* Main Interactive Booking Section */}
      <InlineBookingSection />
    </div>
  );
};

export default Booking;
