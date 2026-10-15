import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { assets } from "../assets/assets";
import { IconTelegram, IconInstagram, IconShieldCheck, IconLocationPin, IconPhone } from "./MedicalIcons";
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
      flipPrompt: isFlipped ? "Fotosuratni ko'rish (Front)" : "Klinika kartasini ko'rish (Back)",
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
    <div className="w-full p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-luxury relative overflow-hidden text-white">
      {/* Subtle digital background grid */}
      <div className="absolute inset-0 digital-grid-pattern opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: 3D Flippable Business Card with Interactive Tilt */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <Interactive3DTilt
            maxTilt={12}
            perspective={1100}
            scale={1.02}
            glare={true}
            className="w-full max-w-sm sm:max-w-md aspect-[4/5] sm:aspect-[16/11] cursor-pointer select-none"
          >
            <div
              className="w-full h-full relative focus:outline-none focus:ring-2 focus:ring-red-500 rounded-2xl"
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
                className={`w-full h-full relative transition-transform duration-700 preserve-3d rounded-2xl shadow-[0_10px_35px_rgba(255,0,0,0.25)] border-2 border-red-900/40 overflow-hidden ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Card Front: Real Photo of Dr. MuhammadAli Davronov */}
                <div className="absolute inset-0 backface-hidden bg-zinc-950 flex flex-col items-center justify-end overflow-hidden">
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
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 sm:p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <DmToothEmblem className="w-5 h-5" glow={false} />
                      <span className="text-xs font-bold text-red-400 tracking-wider uppercase">
                        DM | Stomatology
                      </span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-white font-serif">
                      Dr. MuhammadAli Davronov
                    </span>
                    <span className="text-[11px] text-zinc-300">
                      Ortopediya · Terapiya · Implantologiya
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-xs text-[10px] text-white font-medium flex items-center gap-1.5 shadow-xs border border-red-900/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>{labels.interactiveBadge}</span>
                  </div>
                </div>

                {/* Card Back: Clinic Credentials & Contacts */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#120505] via-[#0A0202] to-[#000000] p-6 flex flex-col justify-between border border-red-900/50">
                  <div className="flex items-center justify-between pb-3 border-b border-red-950/60">
                    <div className="flex items-center gap-2.5">
                      <DmToothEmblem className="w-8 h-8" />
                      <div>
                        <div className="font-serif font-black text-white text-base tracking-wide">
                          DM | STOMATOLOGY
                        </div>
                        <div className="text-[10px] text-red-400 uppercase tracking-widest font-semibold">
                          Dr. MuhammadAli Davronov
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-950 text-red-300 border border-red-800/40">
                      5 Yil
                    </span>
                  </div>

                  <div className="space-y-3 py-2 text-xs text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0 border border-red-900/30">
                        🎓
                      </div>
                      <span className="font-medium text-zinc-200">
                        {labels.education}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0 border border-red-900/30">
                        <IconLocationPin className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="text-zinc-300">
                        Andijon shahar, Navoiy shoh ko'chasi, 91-uy
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-red-950/60 text-red-400 flex items-center justify-center shrink-0 border border-red-900/30">
                        <IconPhone className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="font-mono text-zinc-200 font-bold">
                        +998 97 676 01 01
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-red-950/60 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Instagram: @dm.muxammadali</span>
                    <span className="text-red-400 font-medium">Andijon</span>
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
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-red-300 bg-red-950/60 hover:bg-red-900/80 px-4 py-2 rounded-full border border-red-800/40 shadow-xs transition-all hover:scale-102 active:scale-98 group"
          >
            <svg className="w-4 h-4 text-red-400 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{labels.flipPrompt}</span>
          </button>
        </div>

        {/* Right: Info, Credibility & Fast Contacts */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-950/70 text-red-300 border border-red-800/50">
                {labels.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center gap-1.5">
                <IconShieldCheck className="w-3.5 h-3.5 text-red-500" />
                {labels.experience}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {labels.heading}
            </h3>
            <p className="text-sm font-semibold text-red-400 mt-0.5">
              {labels.subheading}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2.5">
            <span className="text-base">🏛️</span>
            <div>
              <span className="font-semibold text-white block">
                {labels.education}
              </span>
              <span className="text-[11px] text-zinc-400">
                {lang === "ru"
                  ? "5 лет непрерывной клинической работы в стоматологии"
                  : lang === "en"
                  ? "5 years of dedicated dental practice and aesthetic smiles"
                  : "5 yillik uzluksiz shaxsiy klinik amaliyot"}
              </span>
            </div>
          </div>

          <ul className="space-y-2.5 my-2">
            {labels.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-red-950/80 text-red-400 border border-red-800/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-2xl bg-[#140606] border border-red-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
            <div>
              <span className="text-[11px] font-bold text-zinc-400 block uppercase tracking-wider">
                {labels.callDirect}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="font-mono text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 hover:underline whitespace-nowrap"
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
                className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 shadow-xs transition-colors"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4 text-white" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 shadow-xs transition-opacity"
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
