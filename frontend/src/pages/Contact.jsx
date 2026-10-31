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
  IconLocationPin,
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
    <div className="py-6 sm:py-10 space-y-12 text-slate-900">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={contactSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa va Manzil"}
        </span>
      </nav>

      {/* Header */}
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-1 uppercase">
          {lang === "uz" ? "BEVOSITA BOG'LANISH" : lang === "ru" ? "ПРЯМАЯ СВЯЗЬ" : "DIRECT HOTLINE"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz" ? "Aloqa va Qabulga Yozilish" : lang === "ru" ? "Контакты и Запись на Приём" : "Contact & Appointments"}
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          {lang === "uz"
            ? "Dr. MuhammadAli Davronov qabuliga telefon (+998 97 676 01 01), Instagram (@dm.muxammadali) yoki onlayn jadval orqali navbatsiz yozilishingiz mumkin."
            : lang === "ru"
            ? "Свяжитесь с Д-ром МухаммадАли Давроновым по номеру +998 97 676 01 01, в Instagram (@dm.muxammadali) или запишитесь через онлайн-график."
            : "Connect with Dr. MuhammadAli Davronov via phone (+998 97 676 01 01), Instagram (@dm.muxammadali), or our online appointment booking."}
        </p>
        <div className="pt-2">
          <Link
            to={to("/booking")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover hover:scale-102 active:scale-98 text-white text-sm sm:text-base font-bold shadow-md hover:shadow-colgate transition-all"
          >
            <span>{lang === "uz" ? "Onlayn Jadvaldan Vaqt Tanlash" : lang === "ru" ? "Онлайн Расписание и Запись" : "Book Online via Schedule"}</span>
            <span>→</span>
          </Link>
        </div>
      </header>

      {/* 4 Contact Cards */}
      <section aria-label={lang === "uz" ? "Aloqa vositalari" : lang === "ru" ? "Способы связи" : "Contact Methods"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        <h2 className="sr-only">
          {lang === "uz" ? "Shifokor bilan bog'lanish usullari" : lang === "ru" ? "Способы прямой связи с доктором" : "Direct Contact Channels"}
        </h2>
        {/* Phone 1 */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <IconPhone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {lang === "uz" ? "Asosiy Telefon" : lang === "ru" ? "Основной Телефон" : "Primary Phone"}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {hours.full}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.phoneHref}
            className="inline-block text-base sm:text-lg font-bold font-mono text-primary hover:underline"
          >
            {DOCTOR_INFO.phoneDisplay}
          </a>
        </div>

        {/* Location Info */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <IconLocationPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {lang === "uz" ? "Klinika Manzili" : lang === "ru" ? "Адрес Клиники" : "Clinic Location"}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {lang === "uz"
                  ? "Andijon shahri, Prospekt, Navoiy shoh ko'chasi, 91-uy (mo'ljal: SARIQ BOLA pizza yonida)"
                  : lang === "ru"
                  ? "г. Андижан, проспект, Навои, 91 (ориентир: рядом с пиццерией SARIQ BOLA)"
                  : "91 Navoi Avenue, Andijan (landmark: next to SARIQ BOLA pizza)"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 pt-2">
            <a
              href={DOCTOR_INFO.yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-primary hover:underline"
            >
              {lang === "uz" ? "Yandex Xaritada ochish ↗" : lang === "ru" ? "Открыть в Яндекс Картах ↗" : "Open in Yandex Maps ↗"}
            </a>
            <a
              href={DOCTOR_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-slate-600 hover:text-primary hover:underline"
            >
              {lang === "uz" ? "Google Maps orqali ochish ↗" : lang === "ru" ? "Открыть в Google Maps ↗" : "Open in Google Maps ↗"}
            </a>
          </div>
        </div>

        {/* Telegram */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-sky-500 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 border border-sky-100 flex items-center justify-center">
              <IconTelegram className="w-6 h-6 text-sky-500" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Telegram
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {lang === "uz" ? "24/7 tezkor xabarlar" : lang === "ru" ? "Быстрые ответы 24/7" : "Fast messaging 24/7"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-sky-500 hover:underline"
          >
            {DOCTOR_INFO.telegramHandle}
          </a>
        </div>

        {/* Instagram */}
        <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-pink-500 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 border border-pink-100 flex items-center justify-center">
              <IconInstagram className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Instagram
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {lang === "uz" ? "Klinik ishlar va videolar" : lang === "ru" ? "Работы и видео приёма" : "Cases & Clinical Videos"}
              </p>
            </div>
          </div>
          <a
            href={DOCTOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base font-bold text-pink-500 hover:underline"
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
