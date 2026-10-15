import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { DOCTOR_INFO, OPENING_HOURS } from "../constants/doctor";
import { IconLocationPin, IconClock, IconPhone } from "./MedicalIcons";

export const ClinicLocationMap = () => {
  const { lang } = useLanguage();

  const labels = {
    uz: {
      badge: "KLINIKA VA QABUL MANZILI",
      title: "DM Stomatologiya — Dr. MuhammadAli Davronov",
      subtitle: "Dr. MuhammadAli Davronov bemorlarni Andijon shahrida, Navoiy shoh ko'chasida joylashgan zamonaviy DM Stomatologiya klinikasida shaxsan qabul qiladi.",
      addressTitle: "Manzil:",
      landmarkTitle: "Mo'ljal:",
      hoursTitle: "Qabul vaqti:",
      openGoogle: "Google Maps orqali ochish ↗",
      openYandex: "Yandex Xaritada ochish ↗",
      callUs: "Qo'ng'iroq qilish",
      telegram: "Telegram orqali yozish",
      directionsBtn: "Marshrut chizish (Yandex) ↗",
    },
    ru: {
      badge: "ЛОКАЦИЯ И ПРИЁМ",
      title: "DM Stomatology — Д-р МухаммадАли Давронов",
      subtitle: "Персональный приём проходит в г. Андижан в современной клинике DM Stomatology на проспекте Навои, 91.",
      addressTitle: "Адрес:",
      landmarkTitle: "Ориентир:",
      hoursTitle: "Часы приёма:",
      openGoogle: "Открыть в Google Maps ↗",
      openYandex: "Открыть в Яндекс Картах ↗",
      callUs: "Позвонить",
      telegram: "Написать в Telegram",
      directionsBtn: "Маршрут в Яндекс Картах ↗",
    },
    en: {
      badge: "PRACTICE LOCATION",
      title: "DM Stomatology — Dr. MuhammadAli Davronov",
      subtitle: "Dr. MuhammadAli Davronov personally receives patients in Andijan at DM Stomatology, 91 Navoi Avenue.",
      addressTitle: "Address:",
      landmarkTitle: "Landmark:",
      hoursTitle: "Working Hours:",
      openGoogle: "Open in Google Maps ↗",
      openYandex: "Open in Yandex Maps ↗",
      callUs: "Call Hotline",
      telegram: "Message on Telegram",
      directionsBtn: "Directions on Yandex Maps ↗",
    },
  }[lang] || labels.uz;

  return (
    <section aria-labelledby="clinic-location-heading" className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-3 uppercase">
            {labels.badge}
          </span>
          <h2 id="clinic-location-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-md flex flex-col justify-between text-slate-900">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-primary tracking-wider uppercase block mb-1">
                  DM | Stomatology
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {PRIMARY_CLINIC.dentistOffice[lang]}
                </h3>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <IconLocationPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{labels.addressTitle}</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{PRIMARY_CLINIC.address[lang]}</p>
                  <p className="text-xs text-slate-600 mt-0.5">({PRIMARY_CLINIC.landmark[lang]})</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <IconClock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{labels.hoursTitle}</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{OPENING_HOURS.labels[lang].days}</p>
                  <p className="text-xs font-mono font-bold text-primary mt-0.5">{OPENING_HOURS.labels[lang].hours}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{OPENING_HOURS.labels[lang].sunday}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="flex items-center gap-3 text-sm font-bold text-slate-800 hover:text-primary transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span className="font-mono">{DOCTOR_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={PRIMARY_CLINIC.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center px-3.5 py-2.5 rounded-full text-center text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-colors"
              >
                {labels.openGoogle}
              </a>
              <a
                href={PRIMARY_CLINIC.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center px-3.5 py-2.5 rounded-full text-center text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-all shadow-md hover:shadow-colgate"
              >
                {labels.openYandex}
              </a>
            </div>
          </div>

          {/* Right Map View / Interactive Yandex Location Frame */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200 min-h-[380px] sm:min-h-[460px] relative bg-slate-100 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex-1">
              <iframe
                src={PRIMARY_CLINIC.maps.yandexWidget}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title={PRIMARY_CLINIC.dentistOffice[lang] || PRIMARY_CLINIC.name[lang]}
                className="w-full h-full"
              />

              {/* Floating Quick Action Button on Top of the Map */}
              <div className="absolute top-3 right-3 z-10 pointer-events-auto">
                <a
                  href={PRIMARY_CLINIC.maps.yandex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-primary hover:bg-primary hover:text-white border border-slate-200 shadow-md transition-all active:scale-95"
                >
                  <IconLocationPin className="w-3.5 h-3.5" />
                  <span>{labels.directionsBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocationMap;
