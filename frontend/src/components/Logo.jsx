import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";

export const DmToothEmblem = ({ className = "w-8 h-8", glow = true }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? "filter drop-shadow-[0_0_12px_rgba(255,0,0,0.45)]" : ""}`}
  >
    <defs>
      <linearGradient id="dmRedGradient" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#FF2E2E" />
        <stop offset="50%" stopColor="#BC0202" />
        <stop offset="100%" stopColor="#830000" />
      </linearGradient>
      <linearGradient id="dmRingGradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#BC0202" />
      </linearGradient>
      <linearGradient id="dmDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A0505" />
        <stop offset="100%" stopColor="#050202" />
      </linearGradient>
    </defs>

    {/* Background subtle shield/hex */}
    <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#dmDarkGrad)" stroke="#830000" strokeWidth="1.5" strokeOpacity="0.4" />

    {/* Back Arc of the Orbital Ring */}
    <path
      d="M 18 52 C 20 32, 60 22, 82 38"
      stroke="url(#dmRedGradient)"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.45"
    />

    {/* Stylized Tooth Body */}
    <path
      d="M32 28 C24 28, 20 38, 22 48 C24 57, 28 66, 34 82 C37 89, 41 89, 43 83 C45 77, 47 62, 50 62 C53 62, 55 77, 57 83 C59 89, 63 89, 66 82 C72 66, 76 57, 78 48 C80 38, 76 28, 68 28 C61 28, 54 33, 50 36 C46 33, 39 28, 32 28 Z"
      fill="url(#dmRedGradient)"
      stroke="#FF4D4D"
      strokeWidth="1.2"
    />

    {/* Inner Tooth Highlights / Reflection */}
    <path
      d="M34 33 C30 33, 27 38, 28 44 C29 50, 32 60, 36 72"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.75"
    />

    {/* Front Arc of the Orbital Ring (circling around the tooth) */}
    <path
      d="M 14 58 C 22 74, 72 76, 86 52 C 89 47, 88 42, 82 38"
      stroke="url(#dmRingGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Glowing Orbital Particle / Sparkle */}
    <circle cx="84" cy="50" r="3" fill="#FFFFFF" className="animate-pulse" />
  </svg>
);

const Logo = ({ className = "h-10 sm:h-11 w-auto", showText = true, isWhite = true }) => {
  const to = useLocalizedPath();
  const { lang } = useLanguage();

  const titleByLang = {
    uz: "STOMATOLOGIYA · ORTOPEDIYA · IMPLANT",
    ru: "СТОМАТОЛОГИЯ · ОРТОПЕДИЯ · ИМПЛАНТ",
    en: "DENTAL CLINIC · ORTHOPEDICS · IMPLANT",
  }[lang] || "STOMATOLOGIYA · ORTOPEDIYA · IMPLANT";

  return (
    <Link
      to={to("/")}
      className={`group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-all duration-300 active:scale-95 ${className}`}
      aria-label="Dr. MuhammadAli Davronov — DM Stomatologiya"
    >
      <div className="relative flex items-center justify-center rounded-2xl transition-all duration-300 shrink-0 w-9 h-9 sm:w-11 sm:h-11 group-hover:scale-105">
        <DmToothEmblem className="w-full h-full" glow={true} />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-serif text-[15px] sm:text-[18px] font-black tracking-wider text-white group-hover:text-red-400 transition-colors">
              DM
            </span>
            <span className="h-3.5 w-[2px] bg-red-600 rounded-full" />
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-wide text-zinc-200 uppercase font-sans">
              Stomatology
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[8.5px] sm:text-[10px] font-medium tracking-wider text-red-400/90 uppercase whitespace-nowrap">
              Dr. MuhammadAli
            </span>
            <span className="text-[8px] text-zinc-500">•</span>
            <span className="text-[8px] sm:text-[9.5px] font-normal tracking-wide text-zinc-400 whitespace-nowrap">
              Andijon
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
