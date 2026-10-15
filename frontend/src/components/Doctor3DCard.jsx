import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import { assets } from "../assets/assets";
import {
  IconTelegram,
  IconInstagram,
  IconShieldCheck,
  IconGraduationCap,
} from "./MedicalIcons";
import { DmToothEmblem } from "./Logo";

export const Doctor3DCard = () => {
  const { lang } = useLanguage();

  const labels = {
    uz: {
      badge: "SHIFOKOR HAQIDA",
      heading: "Dr. MuhammadAli Davronov",
      subheading: "Shifokor-Stomatolog · Ortoped, Terapevt & Implantolog (DM Stomatologiya, Andijon)",
      experience: "5 Yillik Klinik Tajriba",
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
      heading: "Д-р МухаммадАли Давронов",
      subheading: "Врач-Стоматолог · Ортопед, Терапевт и Имплантолог (DM Stomatology, Андижан)",
      experience: "5 Лет Клинической Практики",
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
      heading: "Dr. MuhammadAli Davronov",
      subheading: "Dental Specialist · Orthopedics, Therapy & Implantology (DM Stomatology, Andijan)",
      experience: "5 Years Clinical Excellence",
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
        {/* Left: Clear, Full Photo of Dr. MuhammadAli Davronov */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-sm sm:max-w-md aspect-[527/641] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white relative">
            <img
              src={assets.dr_muhammadali}
              alt="Dr. MuhammadAli Davronov — DM Stomatologiya"
              width="527"
              height="641"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay at the bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 sm:p-5 flex flex-col">
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
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] text-slate-900 font-bold flex items-center gap-1.5 shadow-sm border border-slate-200">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[8px] font-black flex items-center justify-center">
                ✓
              </span>
              <span>5 Yillik Tajriba</span>
            </div>
          </div>
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
