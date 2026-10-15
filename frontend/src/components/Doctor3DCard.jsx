import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { assets } from "../assets/assets";
import { IconTelegram, IconInstagram, IconShieldCheck, IconLocationPin, IconPhone, IconGraduationCap } from "./MedicalIcons";

import Interactive3DTilt from "./Interactive3DTilt";
import { DmToothEmblem } from "./Logo";

export const Doctor3DCard = () => {
  const { lang } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const labels = {
    uz: {
      badge: "SHIFOKOR HAQIDA",
      interactiveBadge: "3D Interaktiv Profil",
      heading: "Dr. MuhammadAli Davronov",
      subheading: "Shifokor-Stomatolog · Ortoped, Terapevt & Implantolog (DM Stomatologiya, Andijon)",
      experience: "5 Yillik Klinik Tajriba",
      flipPrompt: isFlipped ? "Fotosuratni ko'rish (Oldi)" : "Klinika kartasini ko'rish (Orqasi)",
      education: "Andijon davlat tibbiyot instituti (ADTI) bitiruvchisi",
      highlights: [
        "Andijon davlat tibbiyot instituti (ADTI) stomatologiya fakulteti tayyorgarligi",
        "Ortopediya: Tsirkon koronkalar, E-max press-vinirlar va estetik protezlash",
        "Terapiya: 100% og'riqsiz karies va ildiz kanallarini (endodontiya) zich plombalash",
        "Dental Implantologiya: Biotitan implantlar va 3D navigatsion jarrohlik",
      ],
      callDirect: "Dr. MuhammadAli bilan to'g'ridan-to'g'ri bog'lanish:",
    },
    ru: {
      badge: "О СПЕЦИАЛИСТЕ",
      interactiveBadge: "3D Интерактивный Профиль",
      heading: "Д-р МухаммадАли Давронов",
      subheading: "Врач-Стоматолог · Ортопед, Терапевт и Имплантолог (DM Stomatology, Андижан)",
      experience: "5 Лет Клинической Практики",
      flipPrompt: isFlipped ? "Показать фото доктора" : "Показать карту клиники",
      education: "Выпускник Андижанского государственного медицинского института (АГМИ)",
      highlights: [
        "Фундаментальное образование: Андижанский государственный медицинский институт (АГМИ)",
        "Ортопедия: Циркониевые коронки, эстетические виниры E-max и точное протезирование",
        "Терапия: 100% безболезненное лечение кариеса и корневых каналов без страха",
        "Имплантология: Биосовместимые титановые импланты и цифровая навигация",
      ],
      callDirect: "Связаться с доктором МухаммадАли:",
    },
    en: {
      badge: "DOCTOR PROFILE",
      interactiveBadge: "3D Interactive Card",
      heading: "Dr. MuhammadAli Davronov",
      subheading: "Dental Specialist · Orthopedics, Therapy & Implantology (DM Stomatology, Andijan)",
      experience: "5 Years Clinical Excellence",
      flipPrompt: isFlipped ? "View Doctor Portrait" : "View Clinic Back Card",
      education: "Graduate of Andijan State Medical Institute (ASMI)",
      highlights: [
        "Comprehensive training at Andijan State Medical Institute (ASMI)",
        "Orthopedics: Zirconia crowns, E-max veneers, and precision prosthetics",
        "Therapy: 100% painless cavity treatment and microscopically sealed root canals",
        "Dental Implantology: Biocompatible titanium implants and 3D guided surgery",
      ],
      callDirect: "Direct contact with Dr. MuhammadAli:",
    },
  }[lang] || labels.uz;

  return (
    <div className="w-full p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Left: 3D Flippable Business Card with Interactive Tilt */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <Interactive3DTilt
            maxTilt={10}
            perspective={1100}
            scale={1.01}
            glare={false}
            className="w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-[16/11] cursor-pointer select-none"
          >
            <div
              className="w-full h-full relative focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
              onClick={() => setIsFlipped(!isFlipped)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              aria-label={labels.flipPrompt}
              title={labels.flipPrompt}
            >
              <div
                className={`w-full h-full relative transition-transform duration-700 preserve-3d rounded-2xl shadow-md hover:shadow-xl border-2 border-slate-200 overflow-hidden ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Card Front: Real Photo of Dr. MuhammadAli Davronov */}
                <div className="absolute inset-0 backface-hidden bg-slate-100 flex flex-col items-center justify-end overflow-hidden">
                  <img
                    src={assets.dr_muhammadali}
                    alt="Dr. MuhammadAli Davronov — DM Stomatologiya"
                    width="600"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-4 sm:p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <DmToothEmblem className="w-5 h-5" glow={false} />
                      <span className="text-xs font-bold text-red-300 tracking-wider uppercase">
                        DM Stomatologiya
                      </span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white font-serif">
                      Dr. MuhammadAli Davronov
                    </span>
                    <span className="text-[11px] text-zinc-300">
                      Ortopediya · Terapiya · Implantologiya
                    </span>
                  </div>

                  {/* Top-Left Verified Clinic Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] text-slate-900 font-bold flex items-center gap-1.5 shadow-sm border border-slate-200">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[8px] font-black flex items-center justify-center">
                      ✓
                    </span>
                    <span>DM Stomatologiya</span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] text-slate-800 font-bold flex items-center gap-1.5 shadow-sm border border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{labels.interactiveBadge}</span>
                  </div>
                </div>


                {/* Card Back: Clinic Credentials & Contacts */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-white via-slate-50 to-red-50/40 p-4 sm:p-6 flex flex-col justify-between border border-slate-200">
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <DmToothEmblem className="w-7 h-7 sm:w-8 sm:h-8" glow={true} />
                      <div>
                        <div className="font-sans font-black text-slate-900 text-sm sm:text-base tracking-wide">
                          MUHAMMAD ALI
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-primary uppercase tracking-widest font-bold">
                          Stomatolog
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold bg-red-50 text-primary border border-red-200">
                      5 Yil Tajriba
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3 py-1.5 sm:py-2 text-[11.5px] sm:text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0 border border-red-100 font-bold">
                        <IconGraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-slate-900 line-clamp-2">
                        {labels.education}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0 border border-red-100">
                        <IconLocationPin className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-slate-700 line-clamp-2">
                        Andijon shahar, Navoiy shoh ko'chasi, 91-uy
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0 border border-red-100">
                        <IconPhone className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-mono text-slate-900 font-bold">
                        +998 97 676 01 01
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-slate-200 flex items-center justify-between text-[10.5px] sm:text-[11px] text-slate-500 font-medium">
                    <span className="font-semibold text-slate-700">@dm.muxammadali</span>
                    <span className="px-2 py-0.5 rounded-full bg-red-50 text-primary border border-red-200 font-mono text-[9.5px] sm:text-[10px] font-bold">
                      Kafolat 5 Yil
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </Interactive3DTilt>

          {/* Flip Button Control */}
          <button
            type="button"
            onClick={() => setIsFlipped(!isFlipped)}
            aria-pressed={isFlipped}
            aria-label={labels.flipPrompt}
            className="mt-4 min-h-[44px] inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-primary px-4 py-2.5 rounded-full border border-slate-200 transition-all active:scale-95 group shadow-2xs"
          >
            <svg className="w-4 h-4 text-primary transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{labels.flipPrompt}</span>
          </button>
        </div>

        {/* Right: Info, Credibility & Fast Contacts */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-primary border border-red-200">
                {labels.badge}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5">
                <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {labels.experience}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              {labels.heading}
            </h3>
            <p className="text-sm font-bold text-primary mt-0.5">
              {labels.subheading}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-red-50 text-primary border border-red-100 flex items-center justify-center shrink-0">
              <IconGraduationCap className="w-4 h-4 text-primary" />
            </span>
            <div>
              <span className="font-bold text-slate-900 block">
                {labels.education}
              </span>
              <span className="text-[11px] text-slate-500">
                {lang === "ru"
                  ? "5 лет непрерывной клинической работы в стоматологии"
                  : lang === "en"
                  ? "5 years of dedicated dental practice and aesthetic smiles"
                  : "5 yillik uzluksiz shaxsiy klinik amaliyot"}
              </span>
            </div>
          </div>

          <ul className="space-y-2.5 my-1">
            {labels.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-red-50 text-primary border border-red-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                {labels.callDirect}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="font-mono text-sm sm:text-base font-bold text-primary hover:underline whitespace-nowrap"
                >
                  {DOCTOR_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 shadow-xs transition-colors"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4 text-white" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 shadow-xs transition-opacity"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor3DCard;
