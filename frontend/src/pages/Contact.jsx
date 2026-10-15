import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { useClinicHours } from "../lib/medinsonBooking";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { buildContactPageSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import {
  IconPhone,
  IconTelegram,
  IconInstagram,
} from "../components/MedicalIcons";

const Contact = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.contact[lang] || PAGE_SEO.contact.uz;
  const hours = useClinicHours(lang);

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil", path: "/contact" },
  ];
  const contactSchema = buildContactPageSchema(lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12 text-white">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={contactSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-zinc-400 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-red-400 transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-red-400 font-bold" aria-current="page">
          {lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil"}
        </span>
      </nav>

      {/* Header */}
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-red-400 bg-red-950/70 border border-red-800/40 shadow-xs mb-1 uppercase">
          {lang === "uz" ? "BEVOSITA BOG'LANISH" : lang === "ru" ? "ПРЯМАЯ СВЯЗЬ" : "DIRECT HOTLINE"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {lang === "uz" ? "Aloqa va Qabulga Yozilish" : lang === "ru" ? "Контакты и Запись на Приём" : "Contact & Appointments"}
        </h1>
        <p className="text-sm sm:text-base text-zinc-300">
          {lang === "uz"
            ? "Dr. MuhammadAli Davronov qabuliga telefon (+998 97 676 01 01), Instagram (@dm.muxammadali) yoki onlayn jadval orqali navbatsiz yozilishingiz mumkin."
            : lang === "ru"
            ? "Свяжитесь с Д-ром МухаммадАли Давроновым по номеру +998 97 676 01 01, в Instagram (@dm.muxammadali) или запишитесь через онлайн-график."
            : "Connect with Dr. MuhammadAli Davronov via phone (+998 97 676 01 01), Instagram (@dm.muxammadali), or our online appointment booking."}
        </p>
        <div className="pt-2">
          <Link
            to={to("/booking")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] hover:scale-102 active:scale-98 text-white text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(255,0,0,0.4)] border border-red-500/40 transition-all"
          >
            <span>{lang === "uz" ? "Onlayn Jadvaldan Vaqt Tanlash" : lang === "ru" ? "Онлайн Расписание и Запись" : "Book Online via Schedule"}</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 4 Contact Cards */}
      <section aria-label={lang === "uz" ? "Aloqa vositalari" : lang === "ru" ? "Способы связи" : "Contact Methods"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Phone 1 */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-card hover:border-red-600/50 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-950/70 text-red-400 border border-red-900/40 flex items-center justify-center">
              <IconPhone className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {lang === "uz" ? "Asosiy Telefon" : lang === "ru" ? "Основной Телефон" : "Primary Phone"}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {hours.full}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-block text-base font-bold font-mono text-red-400 hover:text-red-300 hover:underline"
          >
            {DOCTOR_INFO.phoneDisplay}
          </a>
        </div>

        {/* Location Info */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-card hover:border-red-600/50 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-950/70 text-red-400 border border-red-900/40 flex items-center justify-center text-xl">
              📍
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {lang === "uz" ? "Klinika Manzili" : lang === "ru" ? "Адрес Клиники" : "Clinic Location"}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Andijon sh., Navoiy shox 91-uy
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold text-red-400 hover:text-red-300 hover:underline"
          >
            Yandex Xaritada ochish ↗
          </a>
        </div>

        {/* Telegram */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-card hover:border-red-600/50 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-950/70 text-sky-400 border border-sky-900/40 flex items-center justify-center">
              <IconTelegram className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Telegram
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === "uz" ? "24/7 tezkor xabarlar" : lang === "ru" ? "Быстрые ответы 24/7" : "Fast messaging 24/7"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-sky-400 hover:underline"
          >
            {DOCTOR_INFO.telegramHandle}
          </a>
        </div>

        {/* Instagram */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-card hover:border-red-600/50 transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-950/70 text-pink-400 border border-pink-900/40 flex items-center justify-center">
              <IconInstagram className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Instagram
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === "uz" ? "Klinik ishlar va videolar" : lang === "ru" ? "Работы и видео приёма" : "Cases & Clinical Videos"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-pink-400 hover:underline"
          >
            {DOCTOR_INFO.instagramHandle}
          </a>
        </div>
      </section>

      {/* Clinic Location Map */}
      <ClinicLocationMap />
    </div>
  );
};

export default Contact;
