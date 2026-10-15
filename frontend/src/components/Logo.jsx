import React from "react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "../context/LanguageContext";
import logoIcon from "../assets/logo_icon.webp";

export const DmToothEmblem = ({ className = "w-8 h-8", glow = false }) => (
  <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
    <img
      src={logoIcon}
      alt="Dr. MuhammadAli Davronov Logo"
      width="128"
      height="128"
      className={`w-full h-full object-contain ${
        glow ? "filter drop-shadow-[0_2px_10px_rgba(200,16,46,0.25)]" : ""
      }`}
      loading="eager"
      decoding="async"
    />
  </div>
);

const Logo = ({ className = "h-10 sm:h-11 w-auto", showText = true, isWhite = false }) => {
  const to = useLocalizedPath();

  return (
    <Link
      to={to("/")}
      className={`group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-all duration-300 active:scale-95 ${className}`}
      aria-label="Dr. MuhammadAli Davronov — Stomatolog"
    >
      <div className="relative flex items-center justify-center shrink-0 w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform duration-300">
        <DmToothEmblem className="w-full h-full" glow={!isWhite} />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-sans text-[12.5px] min-[360px]:text-[13.5px] sm:text-[17px] font-black tracking-wider transition-colors uppercase ${
                isWhite ? "text-white group-hover:text-red-200" : "text-slate-900 group-hover:text-primary"
              }`}
            >
              Muhammad Ali
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-[8.5px] min-[360px]:text-[9px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase whitespace-nowrap ${
                isWhite ? "text-red-200" : "text-primary"
              }`}
            >
              Stomatolog
            </span>
            <span className={isWhite ? "text-white/40 text-[7px]" : "text-slate-300 text-[7px]"}>•</span>
            <span
              className={`text-[7.5px] min-[360px]:text-[8px] sm:text-[9.5px] font-medium tracking-wide whitespace-nowrap uppercase ${
                isWhite ? "text-white/70" : "text-slate-500"
              }`}
            >
              Andijon
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
