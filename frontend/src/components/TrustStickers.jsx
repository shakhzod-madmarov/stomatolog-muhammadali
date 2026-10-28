import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  IconShieldCheck,
  IconGentleComfort,
  DentalDigitalScannerIcon,
  IconTrophyWarranty,
} from "./MedicalIcons";
import { DmToothEmblem } from "./Logo";

const STICKERS_DATA = [
  {
    id: "warranty",
    metric: "5 YIL KAFOLAT",
    metricRu: "5 ЛЕТ ГАРАНТИИ",
    metricEn: "5-YEAR WARRANTY",
    icon: <IconTrophyWarranty className="w-5 h-5 text-primary" />,
    title: {
      uz: "5 Yillik Rasmiy Kafolat",
      ru: "5 Лет Клинической Гарантии",
      en: "5-Year Clinical Warranty",
    },
    subtitle: {
      uz: "Biotitan implant va monolit sirkon karkaslarga rasmiy kafolat sertifikati",
      ru: "Официальный гарантийный сертификат на титановые импланты и цирконий",
      en: "Official clinical warranty on titanium implants and zirconia restorations",
    },
    verified: {
      uz: "Sertifikatlangan amaliyot",
      ru: "Сертифицированная практика",
      en: "Certified clinical practice",
    },
  },
  {
    id: "painless",
    metric: "100% OG'RIQSIZ",
    metricRu: "100% БЕЗ БОЛИ",
    metricEn: "100% PAIN-FREE",
    icon: <IconGentleComfort className="w-5 h-5 text-primary" />,
    title: {
      uz: "100% Og'riqsiz Davolash",
      ru: "100% Лечение Без Боли",
      en: "100% Pain-Free Care",
    },
    subtitle: {
      uz: "2 bosqichli mikro-gel anesteziya bilan xotirjam va qulay muolaja",
      ru: "Двухэтапная бережная гель-анестезия для спокойного лечения без страха",
      en: "Two-stage gentle topical anesthesia ensuring zero fear and discomfort",
    },
    verified: {
      uz: "Yumshoq anesteziya",
      ru: "Мягкая анестезия",
      en: "Gentle anesthesia",
    },
  },
  {
    id: "doctor_care",
    metric: "1:1 SHAXSIY QABUL",
    metricRu: "1:1 ЛИЧНЫЙ ПРИЁМ",
    metricEn: "1:1 PERSONAL CARE",
    icon: <IconShieldCheck className="w-5 h-5 text-primary" />,
    title: {
      uz: "Shaxsiy Shifokor Qabuli",
      ru: "Личный Приём Доктора",
      en: "Personal Doctor Care",
    },
    subtitle: {
      uz: "Har bir bemorni Dr. MuhammadAli Davronov shaxsan 1-xonada qabul qiladi",
      ru: "Д-р МухаммадАли Давронов лично принимает каждого пациента в каб. №1",
      en: "Dr. MuhammadAli Davronov personally consults and treats each patient",
    },
    verified: {
      uz: "Kutish va navbatsiz",
      ru: "Без очередей и ожидания",
      en: "Zero waiting time",
    },
  },
  {
    id: "scanner",
    metric: "3D CAD/CAM",
    metricRu: "3D CAD/CAM",
    metricEn: "3D CAD/CAM",
    icon: <DentalDigitalScannerIcon className="w-5 h-5 text-primary" />,
    title: {
      uz: "3D Raqamli Skanerlash",
      ru: "3D Цифровое Сканирование",
      en: "3D Digital Scanning",
    },
    subtitle: {
      uz: "Noqulay gips qoliplarisiz, 1 daqiqada og'iz bo'shlig'i aniq 3D modeli",
      ru: "Без неприятных слепочных масс — точная 3D модель челюсти за 1 минуту",
      en: "Putty-free optical scanning generating precise 3D anatomy in minutes",
    },
    verified: {
      uz: "Raqamli aniqlik",
      ru: "Цифровая точность",
      en: "Digital precision",
    },
  },
  {
    id: "clinic",
    metric: "DM STOMATOLOGIYA",
    metricRu: "DM STOMATOLOGY",
    metricEn: "DM STOMATOLOGY",
    icon: <DmToothEmblem className="w-5 h-5" glow={false} />,
    title: {
      uz: "Andijon Markaziy Klinika",
      ru: "Центральная Клиника",
      en: "Central Clinic Location",
    },
    subtitle: {
      uz: "Andijon sh., Prospekt, Navoiy shoh ko'chasi 91-uy (1-xona, qulay lokatsiya)",
      ru: "г. Андижан, проспект, Навои, 91 (кабинет №1, удобный подъезд)",
      en: "91 Navoi Avenue, Andijan (Room #1, convenient central access)",
    },
    verified: {
      uz: "Rasmiy litsenziya",
      ru: "Официальная лицензия",
      en: "Licensed clinic",
    },
  },
];

export const TrustStickers = ({ className = "" }) => {
  const { lang } = useLanguage();

  const labels = {
    uz: {
      badge: "KLINIK STANDARTLAR VA KAFOLATLAR",
      heading: "Dr. MuhammadAli Davronovning Rasmiy Davolash Kafolatlari",
      verified: "Tasdiqlangan",
    },
    ru: {
      badge: "КЛИНИЧЕСКИЕ СТАНДАРТЫ И ГАРАНТИИ",
      heading: "Официальные Клинические Стандарты Д-ра МухаммадАли Давронова",
      verified: "Подтверждено",
    },
    en: {
      badge: "CLINICAL STANDARDS & GUARANTEES",
      heading: "Official Treatment Assurances by Dr. MuhammadAli Davronov",
      verified: "Verified",
    },
  }[lang] || labels.uz;

  return (
    <section
      aria-label={labels.heading}
      className={`w-full ${className}`}
    >
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-primary bg-primary/10 border border-primary/20 shadow-xs mb-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {labels.badge}
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
          {labels.heading}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {STICKERS_DATA.map((sticker) => {
          const metricText = lang === "ru" ? sticker.metricRu : lang === "en" ? sticker.metricEn : sticker.metric;
          return (
            <div
              key={sticker.id}
              className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-primary/50 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50/80 border border-red-100 flex items-center justify-center shadow-2xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    {sticker.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-mono tracking-wider text-primary bg-primary/5 border border-primary/15 px-2.5 py-1 rounded-full uppercase">
                    {metricText}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight line-clamp-1">
                  {sticker.title[lang] || sticker.title.uz}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                  {sticker.subtitle[lang] || sticker.subtitle.uz}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  {sticker.verified[lang] || sticker.verified.uz}
                </span>
                <span className="text-emerald-700 font-bold text-xs sm:text-sm flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  <span>✓</span>
                  <span>{labels.verified}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustStickers;
