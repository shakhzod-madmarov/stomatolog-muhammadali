import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { assets } from "../assets/assets";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  IconShieldCheck,
  IconGentleComfort,
  DentalToothMolar,
  IconLocationPin,
  IconClock,
  IconPhone,
} from "./MedicalIcons";

export const WorkingRoomShowcase = ({ _compact = false, className = "" }) => {
  const { lang } = useLanguage();
  const { onOpenBooking } = useBooking();

  const labels = {
    uz: {
      badge: "1-XONA · SHAXSIY QABULXONA",
      liveStatus: "Qabul Ochiq · Navbatsiz",
      heading: "Dr. MuhammadAli Davronovning Ish Xonasi",
      subheading:
        "DM Stomatologiya klinikasidagi 1-xona — har bir bemorni shaxsan qabul qilish, 100% og'riqsiz davolash va xalqaro sterilizatsiya standartlarini ta'minlash uchun maxsus jihozlangan qulay davolash muhiti.",
      clinicBrand: "DM STOMATOLOGIYA",
      roomNumberBadge: "1-Xona · Shaxsiy Qabulxona",
      doctorTag: "Dr. MuhammadAli",
      addressLine: "Andijon sh., Prospekt Navoiy 91 (Sariq Bola yonida)",
      workingHoursText: "Dushanba – Shanba: 08:30 – 18:30",
      roomBadge: "DAVOLASH VA KONSULTATSIYA ZONASI",
      roomTitle: "Zamonaviy Ergonomika va Yuqori Gigiyena",
      roomDesc:
        "Yumshoq anesteziya ostida davolash uchun qulay kreslo, tushunarli tahlil uchun anatomik ko'rgazma hamda xalqaro sterilizatsiya standartlari.",
      features: [
        {
          title: "Ergonomik Kreslo",
          desc: "Muolaja davomida bo'yin va belga ortiqcha bosimsiz maksimal qulaylik",
        },
        {
          title: "Shaxsiy Konsultatsiya",
          desc: "Davolash boshlanishidan oldin barcha savollarni ekranda birga ko'rish",
        },
        {
          title: "100% Sterilizatsiya",
          desc: "Xalqaro xavfsizlik protokollari asosida 4 bosqichli tozalangan asboblar",
        },
      ],
      doorBadge: "1-XONA ESHIGI",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Shifokor-Stomatolog (DM Stomatology)",
      doorDesc:
        "Klinikaga kelganingizda to'g'ridan-to'g'ri 1-xonaga kirasiz — navbatsiz va kutishlarsiz shaxsan Dr. MuhammadAli kutib oladi.",
      ctaBook: "1-xonaga Qabulga Yozilish",
      ctaCall: "Qo'ng'iroq qilish",
      locationPill: "Andijon sh., Prospekt Navoiy 91 · 1-xona",
    },
    ru: {
      badge: "КАБИНЕТ №1 · ПЕРСОНАЛЬНЫЙ ПРИЁМ",
      liveStatus: "Приём Открыт · Без Очередей",
      heading: "Рабочий Кабинет Д-ра МухаммадАли Давронова",
      subheading:
        "Кабинет №1 в клинике DM Stomatology — современное, стерильное и комфортное пространство, где доктор лично встречает каждого пациента, проводит осмотр и бережное лечение.",
      clinicBrand: "DM STOMATOLOGY",
      roomNumberBadge: "Кабинет №1 · Персональный приём",
      doctorTag: "Д-р МухаммадАли",
      addressLine: "г. Андижан, проспект Навои, 91 (рядом с Sariq Bola)",
      workingHoursText: "Понедельник – Суббота: 08:30 – 18:30",
      roomBadge: "ЗОНА ЛЕЧЕНИЯ И КОНСУЛЬТАЦИИ",
      roomTitle: "Современная Эргономика и Идеальная Чистота",
      roomDesc:
        "Эргономичное мягкое кресло для комфортного лечения без боли, стол для доверительной консультации и строгие стандарты антисептики.",
      features: [
        {
          title: "Эргономичное Кресло",
          desc: "Максимальный комфорт для шеи и спины на протяжении всего приёма",
        },
        {
          title: "Стол Консультаций",
          desc: "Подробный разбор плана лечения и стоимости до первого касания",
        },
        {
          title: "100% Стерильность",
          desc: "Многоступенчатая обработка инструментов по международным протоколам",
        },
      ],
      doorBadge: "ДВЕРЬ КАБИНЕТА №1",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Врач-Стоматолог (DM Stomatology)",
      doorDesc:
        "При визите в клинику вы сразу проходите в кабинет №1 — без очередей и задержек доктор лично примет вас в назначенное время.",
      ctaBook: "Записаться в Кабинет №1",
      ctaCall: "Позвонить",
      locationPill: "г. Андижан, проспект Навои, 91 · Кабинет №1",
    },
    en: {
      badge: "ROOM #1 · PRIVATE CLINICAL SUITE",
      liveStatus: "Practice Open · Zero Waiting",
      heading: "Dr. MuhammadAli Davronov's Clinical Suite",
      subheading:
        "Room #1 at DM Stomatology — a modern, sterile, and patient-centered clinical environment where Dr. MuhammadAli welcomes you personally for thorough consultations and gentle care.",
      clinicBrand: "DM STOMATOLOGY",
      roomNumberBadge: "Room #1 · Private Suite",
      doctorTag: "Dr. MuhammadAli",
      addressLine: "91 Navoi Avenue, Andijan (next to Sariq Bola)",
      workingHoursText: "Monday – Saturday: 08:30 – 18:30",
      roomBadge: "TREATMENT & CONSULTATION AREA",
      roomTitle: "Modern Ergonomics & Clinical Purity",
      roomDesc:
        "Comfort-contoured patient chair for pain-free treatments, private consultation desk, and hospital-grade sterilization protocols.",
      features: [
        {
          title: "Ergonomic Patient Chair",
          desc: "Total ergonomic support for maximum comfort during all procedures",
        },
        {
          title: "Private Consultation Desk",
          desc: "Transparent discussion of your treatment roadmap before we begin",
        },
        {
          title: "100% Sterilization Safety",
          desc: "Multi-stage instrument sterilization adhering to international safety protocols",
        },
      ],
      doorBadge: "ROOM #1 ENTRANCE",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Dental Specialist (DM Stomatology)",
      doorDesc:
        "Upon your arrival, head straight to Room #1 — no waiting or queues, Dr. MuhammadAli welcomes you directly at your booked slot.",
      ctaBook: "Book Visit to Room #1",
      ctaCall: "Call Directly",
      locationPill: "91 Navoi Avenue, Andijan · Room #1",
    },
  }[lang] || labels.uz;

  return (
    <section aria-labelledby="working-room-heading" className={`w-full ${className}`}>
      <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Section Header: 2-column balanced layout (resolves large empty space on the right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8 relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-primary/10 border border-primary/20 uppercase shadow-2xs">
                <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>{labels.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{labels.liveStatus}</span>
              </span>
            </div>
            <h2
              id="working-room-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
            >
              {labels.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {labels.subheading}
            </p>
          </div>

          {/* Quick Clinic Info Card on Right (fills previously empty space) */}
          <div className="lg:col-span-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between gap-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  {labels.clinicBrand}
                </span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5">
                  {labels.roomNumberBadge}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-red-50 text-primary text-[10px] font-extrabold border border-red-100">
                {labels.doctorTag}
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
              <div className="flex items-center gap-2">
                <IconLocationPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="line-clamp-1">{labels.addressLine}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{labels.workingHoursText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Grid: Room Interior (Col 7) & Room Door (Col 5) with balanced heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          {/* Main Working Room Photo Card */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
            <div className="relative overflow-hidden h-[240px] sm:h-[300px] lg:h-[320px] bg-slate-900">
              <img
                src={assets.clinic_room}
                alt={labels.roomTitle}
                loading="lazy"
                width={1024}
                height={724}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4 sm:p-5">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-primary text-white shadow-xs mb-1.5">
                    {labels.roomBadge}
                  </span>
                  <h3 className="text-white font-serif font-bold text-base sm:text-xl">
                    {labels.roomTitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Room Features & Description */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {labels.roomDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {labels.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-primary/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                      {idx === 0 && <IconGentleComfort className="w-4 h-4" />}
                      {idx === 1 && <DentalToothMolar className="w-4 h-4 text-primary" />}
                      {idx === 2 && <IconShieldCheck className="w-4 h-4 text-primary" />}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Door & Entrance Identification Card */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
            <div className="relative overflow-hidden h-[240px] sm:h-[300px] lg:h-[320px] bg-slate-900">
              <img
                src={assets.clinic_door}
                alt="1-Xona: Davronov Muhammad-Ali Stomatolog eshigi"
                loading="lazy"
                width={576}
                height={1024}
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-4 sm:p-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs mb-1.5 font-mono">
                    <span>№ 1</span>
                    <span>·</span>
                    <span>{labels.doorBadge}</span>
                  </div>
                  <h4 className="text-white font-mono font-bold text-sm sm:text-base tracking-wide">
                    {labels.doorTitle}
                  </h4>
                  <p className="text-amber-200 text-xs font-semibold">
                    {labels.doorRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Door Description and Action Buttons */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                  <IconLocationPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{labels.locationPill}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {labels.doorDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex-1 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-sm active:scale-98 transition-all text-center cursor-pointer"
                >
                  {labels.ctaBook}
                </button>
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-mono font-bold text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
                >
                  <IconPhone className="w-3.5 h-3.5 text-primary" />
                  <span>{DOCTOR_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingRoomShowcase;
