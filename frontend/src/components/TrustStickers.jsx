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
    badgeNumber: "5",
    badgeUnit: "Yil",
    icon: <IconTrophyWarranty className="w-5 h-5 text-primary" />,
    title: {
      uz: "5 Yillik Rasmiy Kafolat",
      ru: "5 Лет Гарантии",
      en: "5-Year Clinical Warranty",
    },
    subtitle: {
      uz: "Biotitan implant va sirkonlarga",
      ru: "На титановые импланты и цирконий",
      en: "On titanium implants & zirconia",
    },
    stampText: "KAFOLAT · 5 YIL",
    sealColor: "from-red-500/10 to-primary/5",
  },
  {
    id: "painless",
    badgeNumber: "100%",
    badgeUnit: "Qulay",
    icon: <IconGentleComfort className="w-5 h-5 text-primary" />,
    title: {
      uz: "100% Og'riqsiz Davolash",
      ru: "100% Лечение Без Боли",
      en: "100% Pain-Free Care",
    },
    subtitle: {
      uz: "2 bosqichli yumshoq anesteziya",
      ru: "Двухэтапное бережное обезболивание",
      en: "Two-stage gentle topical anesthesia",
    },
    stampText: "OG'RIQSIZ · ZERO PAIN",
    sealColor: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    id: "doctor_care",
    badgeNumber: "1:1",
    badgeUnit: "Shaxsiy",
    icon: <IconShieldCheck className="w-5 h-5 text-primary" />,
    title: {
      uz: "Shaxsiy Shifokor Qabuli",
      ru: "Личный Приём Доктора",
      en: "Personal Doctor Care",
    },
    subtitle: {
      uz: "Dr. MuhammadAli bilan yakkama-yakka",
      ru: "Индивидуальный приём у д-ра МухаммадАли",
      en: "One-on-one with Dr. MuhammadAli",
    },
    stampText: "SHAXSIY · E'TIBOR",
    sealColor: "from-sky-500/10 to-sky-500/5",
  },
  {
    id: "scanner",
    badgeNumber: "3D",
    badgeUnit: "CAD/CAM",
    icon: <DentalDigitalScannerIcon className="w-5 h-5 text-primary" />,
    title: {
      uz: "3D Raqamli Skanerlash",
      ru: "3D Цифровое Сканирование",
      en: "3D Optical Scanning",
    },
    subtitle: {
      uz: "Noqulay gips qoliplarisiz",
      ru: "Без слепков и дискомфорта",
      en: "No gag reflex putty molds",
    },
    stampText: "RAQAMLI · DIGITAL",
    sealColor: "from-amber-500/10 to-amber-500/5",
  },
  {
    id: "clinic",
    badgeNumber: "DM",
    badgeUnit: "Andijon",
    icon: <DmToothEmblem className="w-5 h-5" glow={false} />,
    title: {
      uz: "DM Stomatologiya",
      ru: "DM Stomatology",
      en: "DM Stomatology",
    },
    subtitle: {
      uz: "Navoiy shoh ko'chasi 91-uy",
      ru: "Андижан, пр-т Навои 91",
      en: "91 Navoi Ave, Andijan",
    },
    stampText: "ANDIJON · NAVOIY 91",
    sealColor: "from-primary/10 to-red-600/5",
  },
];

export const TrustStickers = ({ className = "" }) => {
  const { lang } = useLanguage();

  return (
    <section
      aria-label={
        lang === "ru"
          ? "Клинические стандарты и гарантии"
          : lang === "en"
          ? "Clinical standards and guarantees"
          : "Klinik standartlar va kafolatlar"
      }
      className={`w-full ${className}`}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {STICKERS_DATA.map((sticker, idx) => (
          <div
            key={sticker.id}
            className={`group relative p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden ${
              idx === STICKERS_DATA.length - 1 ? "col-span-2 sm:col-span-1 lg:col-span-1" : "col-span-1"
            }`}
          >
            {/* Soft decorative background tint */}
            <div
              className={`absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-gradient-to-br ${sticker.sealColor} pointer-events-none blur-xl group-hover:scale-150 transition-transform duration-500`}
            />

            {/* Sticker Top Header: Stamp Badge + Icon */}
            <div className="flex items-center justify-between mb-2.5 relative z-10">
              <span className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shadow-2xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {sticker.icon}
              </span>
              <span className="text-[9px] font-black tracking-widest text-primary/70 uppercase px-2 py-0.5 rounded-full bg-red-50/80 border border-red-100/60 font-mono">
                {sticker.badgeNumber}
              </span>
            </div>

            {/* Sticker Content */}
            <div className="relative z-10">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                {sticker.title[lang]}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-tight">
                {sticker.subtitle[lang]}
              </p>
            </div>

            {/* Verified micro-stamp */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-semibold text-slate-400 group-hover:text-primary transition-colors relative z-10">
              <span className="tracking-wide uppercase font-mono">{sticker.stampText}</span>
              <span className="text-primary font-bold">✓</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStickers;
