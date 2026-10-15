import React from "react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "../context/LanguageContext";
import logoIcon from "../assets/logo_icon.webp";

export const DmToothEmblem = ({ className = "w-8 h-8", glow = true }) => (
  <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
    <img
      src={logoIcon}
      alt="Dr. MuhammadAli Davronov Logo"
      width="128"
      height="128"
      className={`w-full h-full object-contain ${
        glow ? "filter drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]" : ""
      }`}
      loading="eager"
      decoding="async"
    />
  </div>
);

const Logo = ({ className = "h-10 sm:h-11 w-auto", showText = true, isWhite = true }) => {
  const to = useLocalizedPath();

  return (
    <Link
      to={to("/")}
      className={`group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary-electric rounded-xl transition-all duration-300 active:scale-95 ${className}`}
      aria-label="Dr. MuhammadAli Davronov — Stomatolog"
    >
      <div className="relative flex items-center justify-center shrink-0 w-9 h-9 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform duration-300">
        <DmToothEmblem className="w-full h-full" glow={true} />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-sans text-[14px] sm:text-[17px] font-black tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
              Muhammad Ali
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10.5px] font-bold tracking-[0.22em] text-primary-electric uppercase whitespace-nowrap">
              Stomatolog
            </span>
            <span className="text-[7.5px] text-zinc-600">•</span>
            <span className="text-[8px] sm:text-[9.5px] font-medium tracking-wide text-zinc-400 whitespace-nowrap uppercase">
              Andijon
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
