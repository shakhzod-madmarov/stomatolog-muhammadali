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
} from "./MedicalIcons";

export const WorkingRoomShowcase = ({ compact = false, className = "" }) => {
  const { lang } = useLanguage();
  const { onOpenBooking } = useBooking();

  const labels = {
    uz: {
      badge: "1-XONA · SHAXSIY QABULXONA",
      heading: "Dr. MuhammadAli Davronovning Ish Xonasi",
      subheading:
        "DM Stomatologiya klinikasidagi 1-xona — har bir bemorni shaxsan qabul qilish uchun maxsus jihozlangan steril, shinam va zamonaviy davolash muhiti.",
      doorBadge: "1-XONA ESHIGI",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Shifokor-Stomatolog (DM Stomatology)",
      doorDesc:
        "Klinikaga kelganingizda to'g'ridan-to'g'ri 1-xonaga kirasiz — navbatsiz va kutishlarsiz shaxsan Dr. MuhammadAli kutib oladi.",
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
          title: "Shaxsiy Konsultatsiya Stoli",
          desc: "Davolash boshlanishidan oldin barcha savollarni ekranda birga muhokama qilish",
        },
        {
          title: "100% Sterilizatsiya Zonasi",
          desc: "Xalqaro xavfsizlik protokollari asosida tozalangan uskunalar",
        },
      ],
      ctaBook: "1-xonaga Qabulga Yozilish",
      ctaCall: "Qo'ng'iroq qilish",
      locationPill: "Andijon sh., Prospekt Navoiy 91 · 1-xona",
    },
    ru: {
      badge: "КАБИНЕТ №1 · ПЕРСОНАЛЬНЫЙ ПРИЁМ",
      heading: "Рабочий Кабинет Д-ра МухаммадАли Давронова",
      subheading:
        "Кабинет №1 в клинике DM Stomatology — современное, стерильное и комфортное пространство, где доктор лично встречает каждого пациента.",
      doorBadge: "ДВЕРЬ КАБИНЕТА №1",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Врач-Стоматолог (DM Stomatology)",
      doorDesc:
        "При визите в клинику вы сразу проходите в кабинет №1 — без очередей и задержек доктор примет вас в назначенное время.",
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
      ctaBook: "Записаться в Кабинет №1",
      ctaCall: "Позвонить",
      locationPill: "г. Андижан, проспект Навои, 91 · Кабинет №1",
    },
    en: {
      badge: "ROOM #1 · PRIVATE CLINICAL SUITE",
      heading: "Dr. MuhammadAli Davronov's Clinical Suite",
      subheading:
        "Room #1 at DM Stomatology — a modern, sterile, and patient-centered clinical environment where Dr. MuhammadAli welcomes you personally.",
      doorBadge: "ROOM #1 ENTRANCE",
      doorTitle: "DAVRONOV MUHAMMAD-ALI",
      doorRole: "Dental Specialist (DM Stomatology)",
      doorDesc:
        "Upon your arrival, head straight to Room #1 — no waiting or queues, Dr. MuhammadAli welcomes you directly.",
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

        {/* Section Header */}
        <div className="max-w-3xl mb-8 relative z-10 space-y-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-primary bg-primary/10 border border-primary/20 uppercase shadow-2xs">
            <IconShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>{labels.badge}</span>
          </span>
          <h2
            id="working-room-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
          >
            {labels.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {labels.subheading}
          </p>
        </div>

        {/* Visual Grid: Room Interior (Col 7-8) & Room Door (Col 4-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          {/* Main Working Room Photo Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-slate-900">
              <img
                src={assets.clinic_room}
                alt={labels.roomTitle}
                loading="lazy"
                width={1024}
                height={724}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-primary text-white shadow-xs mb-1.5">
                    {labels.roomBadge}
                  </span>
                  <h3 className="text-white font-serif font-bold text-base sm:text-xl">
                    {labels.roomTitle}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-lg">
                    {labels.roomDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Room Features */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-slate-100 bg-white">
              {labels.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
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

          {/* Door & Entrance Identification Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
            <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] max-h-[380px] lg:max-h-none bg-slate-900">
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

            <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1 border-t border-slate-100">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                  <IconLocationPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{labels.locationPill}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {labels.doorDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex-1 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-primary hover:bg-primary-hover shadow-sm active:scale-98 transition-all text-center cursor-pointer"
                >
                  {labels.ctaBook}
                </button>
                <a
                  href={DOCTOR_INFO.phoneHref}
                  className="px-4 py-2.5 rounded-xl font-mono font-bold text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
                >
                  {DOCTOR_INFO.phoneDisplay}
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
