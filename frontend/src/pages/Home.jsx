import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import ClinicLocationMap from "../components/ClinicLocationMap";
import FaqAccordion from "../components/FaqAccordion";
import WorkingRoomShowcase from "../components/WorkingRoomShowcase";
import { buildHomePageSchema } from "../utils/structuredData";
import {
  IconPhone,
  IconShieldCheck,
  IconClock,
  IconGraduationCap,
  IconTelegram,
  IconInstagram,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalImplantFixture,
} from "../components/MedicalIcons";

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION — DR. MUHAMMADALI DAVRONOV (CLEAN & INDIVIDUAL)
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();

  const T = {
    uz: {
      badge: "Shifokor-Stomatolog · 5 Yillik Tajriba · Andijon",
      name: DOCTOR_INFO.name,
      specialty: "Implantologiya · Ortopediya · Terapiya",
      bio: "DM Stomatologiya klinikasida har bir bemorni shaxsan qabul qilaman — mustahkam biotitan implantlar, zamonaviy sirkon koronkalar va 100% og'riqsiz davolash.",
      ctaBook: "Qabulga Yozilish",
      ctaCall: "Qo'ng'iroq qilish",
      stat1Val: "5 Yil",
      stat1Lbl: "Klinik Tajriba",
      stat2Val: "100%",
      stat2Lbl: "Og'riqsiz Davolash",
      stat3Val: "Kafolat",
      stat3Lbl: "Sifat va Ishonch",
      cardPill: "Shaxsiy Qabul · Andijon",
      cardRole: "Implantologiya, Ortopediya, Terapiya",
    },
    ru: {
      badge: "Врач-Стоматолог · 5 Лет Опыта · Андижан",
      name: DOCTOR_INFO.name,
      specialty: "Имплантология · Ортопедия · Терапия",
      bio: "Веду персональный приём в клинике DM Stomatology: надёжная дентальная имплантация, точные циркониевые коронки и лечение кариеса без боли.",
      ctaBook: "Записаться на Приём",
      ctaCall: "Позвонить",
      stat1Val: "5 Лет",
      stat1Lbl: "Клинического Опыта",
      stat2Val: "100%",
      stat2Lbl: "Лечение Без Боли",
      stat3Val: "Гарантия",
      stat3Lbl: "Качество и Забота",
      cardPill: "Личный Приём · Андижан",
      cardRole: "Имплантология, Ортопедия, Терапия",
    },
    en: {
      badge: "Dental Specialist · 5 Years Experience · Andijan",
      name: DOCTOR_INFO.name,
      specialty: "Implantology · Orthopedics · Therapy",
      bio: "Providing dedicated personal care at DM Stomatology: lifetime biocompatible dental implants, high-precision zirconia crowns, and 100% pain-free treatments.",
      ctaBook: "Book Appointment",
      ctaCall: "Call Doctor",
      stat1Val: "5 Years",
      stat1Lbl: "Clinical Mastery",
      stat2Val: "100%",
      stat2Lbl: "Pain-Free Care",
      stat3Val: "Quality",
      stat3Lbl: "Safety & Precision",
      cardPill: "Personal Practice · Andijan",
      cardRole: "Implantology, Orthopedics, Therapy",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative w-full pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-red-50/30 via-white to-white">
      {/* Soft Colgate glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-24 left-6 w-80 h-80 bg-red-50/60 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column: Focused entirely on Doctor MuhammadAli */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-xs font-bold text-primary tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Main Headline: Doctor Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 leading-[1.12] tracking-tight mb-3">
              {t.name}
            </h1>

            {/* Doctor Subhead: 3 Specialties */}
            <p className="text-base sm:text-xl font-bold text-primary mb-4">
              {t.specialty}
            </p>

            {/* Bio paragraph: Concise, warm, personal */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8">
              {t.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-primary hover:bg-primary-hover active:scale-95 shadow-colgate hover:shadow-colgate-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t.ctaBook}</span>
                <span>→</span>
              </button>

              <a
                href={DOCTOR_INFO.phoneHref}
                className="px-6 py-3.5 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-primary hover:text-primary transition-all text-center flex items-center justify-center gap-2 shadow-2xs"
              >
                <IconPhone className="w-4 h-4 text-primary" />
                <span className="font-mono">{DOCTOR_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* 3 Simple Key Facts */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg pt-6 border-t border-slate-200/80">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-primary block">
                  {t.stat1Val}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat1Lbl}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 block">
                  {t.stat2Val}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat2Lbl}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-primary block">
                  {t.stat3Val}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat3Lbl}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Clear, Large, Beautiful Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Subtle ambient red background blur */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-500/10 via-transparent to-red-100/50 rounded-3xl blur-2xl -z-10 pointer-events-none" />

              {/* Clean Doctor Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl group">
                <img
                  src={assets.dr_muhammadali}
                  alt="Dr. MuhammadAli Davronov — Shifokor-Stomatolog"
                  width="527"
                  height="641"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto aspect-[527/641] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Clean Bottom Glass Info Bar */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {t.cardPill}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-tight truncate mt-0.5">
                      {DOCTOR_INFO.name}
                    </h2>
                    <p className="text-[11px] font-semibold text-primary truncate">
                      {t.cardRole}
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-50 text-primary border border-red-200/80">
                    {lang === "ru" ? "5 Лет Опыта" : lang === "en" ? "5 Yrs Exp" : "5 Yil Tajriba"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   3 CORE SPECIALTIES SECTION (SIMPLE & DIRECT)
   ═══════════════════════════════════════════════════════════════════ */
const CoreSpecialtiesSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    uz: {
      badge: "ASOSIY 3 YO'NALISH",
      title: "Dr. MuhammadAli Davronov Xizmatlari",
      subtitle: "Barcha muolajalar shaxsan Dr. MuhammadAli tomonidan zamonaviy uskunalar bilan 100% og'riqsiz amalga oshiriladi.",
      viewAll: "Barcha xizmatlar →",
      bookBtn: "Qabulga yozilish",
      services: [
        {
          id: "dental-implant",
          title: "Dental Implantologiya",
          subtitle: "Premium biotitan implantlar va jarrohlik",
          desc: "Yo'qotilgan tishlarni zamonaviy biotitan implantlar bilan og'riqsiz tiklash. Bir kunda tish qo'yish imkoniyati.",
          image: assets.treatment_implant,
          icon: <DentalImplantFixture className="w-6 h-6 text-primary" />,
          duration: "15-30 daqiqa",
          pill: "Biotitan",
        },
        {
          id: "tsirkon-keramika-koronka",
          title: "Ortopediya & Vinirlar",
          subtitle: "Sirkon koronkalar, E-max vinirlar va ko'priklar",
          desc: "Monolit sirkoniy va press-keramikadan tabiiy tishdek mustahkam va shaffof qoplamalar. 15+ yillik chidamlilik.",
          image: assets.treatment_crowns,
          icon: <DentalVeneerCrown className="w-6 h-6 text-primary" />,
          duration: "2-3 qabul",
          pill: "Sirkon & E-max",
        },
        {
          id: "ogriqsiz-terapiya",
          title: "100% Og'riqsiz Terapiya",
          subtitle: "Karies, asab (kanal) davolash va restavratsiya",
          desc: "Yumshoq anesteziya ostida karies va ildiz kanallarini og'riqsiz davolash. Nano-kompozitlar bilan tabiiy shaklni tiklash.",
          image: assets.treatment_therapy,
          icon: <DentalToothMolar className="w-6 h-6 text-primary" />,
          duration: "30-50 daqiqa",
          pill: "Og'riqsiz",
        },
      ],
    },
    ru: {
      badge: "3 ОСНОВНЫХ НАПРАВЛЕНИЯ",
      title: "Направления Лечения Д-ра МухаммадАли",
      subtitle: "Все процедуры выполняет лично доктор МухаммадАли Давронов с применением проверенных материалов и анестезии без боли.",
      viewAll: "Все услуги →",
      bookBtn: "Записаться",
      services: [
        {
          id: "dental-implant",
          title: "Дентальная Имплантация",
          subtitle: "Биосовместимый титан и хирургия",
          desc: "Восстановление утраченных зубов надёжными титановыми имплантами. Приживаемость более 98%, имплантация за один день.",
          image: assets.treatment_implant,
          icon: <DentalImplantFixture className="w-6 h-6 text-primary" />,
          duration: "15-30 минут",
          pill: "Биотитан",
        },
        {
          id: "tsirkon-keramika-koronka",
          title: "Ортопедия и Виниры",
          subtitle: "Циркониевые коронки, виниры E-max и мосты",
          desc: "Сверхпрочный монолитный цирконий и эстетическая керамика. Натуральный блеск и идеальное прилегание на 15+ лет.",
          image: assets.treatment_crowns,
          icon: <DentalVeneerCrown className="w-6 h-6 text-primary" />,
          duration: "2-3 визита",
          pill: "Цирконий и E-max",
        },
        {
          id: "ogriqsiz-terapiya",
          title: "Терапия Без Боли",
          subtitle: "Лечение кариеса, каналов и реставрация",
          desc: "100% безболезненное лечение кариеса и пломбирование каналов под мягкой анестезией. Художественное восстановление зубов.",
          image: assets.treatment_therapy,
          icon: <DentalToothMolar className="w-6 h-6 text-primary" />,
          duration: "30-50 минут",
          pill: "Без боли",
        },
      ],
    },
    en: {
      badge: "3 CORE SPECIALTIES",
      title: "Clinical Specialties of Dr. MuhammadAli",
      subtitle: "All procedures are performed personally by Dr. MuhammadAli Davronov using modern pain-free technology.",
      viewAll: "All services →",
      bookBtn: "Book Now",
      services: [
        {
          id: "dental-implant",
          title: "Dental Implantology",
          subtitle: "Biotitanium implants & oral surgery",
          desc: "Permanent tooth replacement with premium biocompatible titanium implants. Safe, gentle, and long-lasting.",
          image: assets.treatment_implant,
          icon: <DentalImplantFixture className="w-6 h-6 text-primary" />,
          duration: "15-30 mins",
          pill: "Titanium",
        },
        {
          id: "tsirkon-keramika-koronka",
          title: "Orthopedics & Veneers",
          subtitle: "Zirconia crowns, E-max veneers & bridges",
          desc: "Monolithic zirconia and press-ceramics restoring natural strength and translucency for 15+ years of durability.",
          image: assets.treatment_crowns,
          icon: <DentalVeneerCrown className="w-6 h-6 text-primary" />,
          duration: "2-3 visits",
          pill: "Zirconia & E-max",
        },
        {
          id: "ogriqsiz-terapiya",
          title: "Pain-Free Therapy",
          subtitle: "Cavity treatment, root canals & restorations",
          desc: "100% pain-free cavity removal and sealed root canal therapy under gentle anesthesia. Natural tooth preservation.",
          image: assets.treatment_therapy,
          icon: <DentalToothMolar className="w-6 h-6 text-primary" />,
          duration: "30-50 mins",
          pill: "Zero Pain",
        },
      ],
    },
  }[lang] || labels.uz;

  return (
    <section className="w-full py-12 sm:py-16 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-red-50 border border-red-200/70 shadow-2xs mb-2.5 uppercase">
              {labels.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              {labels.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              {labels.subtitle}
            </p>
          </div>

          <Link
            to={to("/services")}
            className="text-xs sm:text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            {labels.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labels.services.map((svc) => (
            <article
              key={svc.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-primary border border-red-100 shadow-xs">
                      {svc.pill}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-8 h-8 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0">
                    {svc.icon}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-primary mb-2">
                  {svc.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 inline-flex items-center gap-1.5">
                  <IconClock className="w-3.5 h-3.5 text-primary" />
                  <span>{svc.duration}</span>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(svc.id)}
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-2xs hover:shadow-colgate transition-all"
                >
                  {labels.bookBtn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   ABOUT THE DENTIST SECTION (PERSONAL & DEDICATED)
   ═══════════════════════════════════════════════════════════════════ */
const AboutDoctorSection = () => {
  const { lang } = useLanguage();

  const labels = {
    uz: {
      badge: "SHIFOKOR HAQIDA",
      title: "Dr. MuhammadAli Davronov",
      subtitle: "DM Stomatologiya, 1-xona · Implantologiya, Ortopediya va Terapiya",
      p1: "Klinikamizda har bir bemorni shaxsan qabul qilaman va davolash rejasini individual tarzda tuzaman. Zamonaviy stomatologik uskunalar, xalqaro sterilizatsiya va professional ko'rik yordamida har bir muolaja yuqori aniqlikda, sifatli va to'liq og'riqsiz amalga oshiriladi.",
      p2: "DM Stomatologiyada biz faqat 3 ta asosiy yo'nalishga chuqur ixtisoslashganmiz: zamonaviy Dental Implantologiya, Ortopediya (estetik sirkon koronkalar va vinirlar) hamda Terapiya (tishlarni og'riqsiz davolash va restavratsiya).",
      feat1Title: "Shaxsiy Qabul",
      feat1Desc: "Har bir bemor bilan shaxsan o'zim ishlayman, muolajaning har bir bosqichi qat'iy nazoratim ostida o'tadi.",
      feat2Title: "Zamonaviy Standartlar",
      feat2Desc: "DM Stomatologiya ilg'or texnologiyalari, xalqaro sanitariya va xavfsiz davolash protokollari.",
      feat3Title: "100% Og'riqsiz Muolaja",
      feat3Desc: "Yumshoq zamonaviy anesteziya va ehtiyotkorona yondashuv — muolaja davomida hech qanday og'riq sezmaysiz.",
      callTitle: "To'g'ridan-to'g'ri bog'lanish:",
    },
    ru: {
      badge: "О ВРАЧЕ",
      title: "Д-р МухаммадАли Давронов",
      subtitle: "DM Stomatology, кабинет №1 · Имплантология, Ортопедия и Терапия",
      p1: "В нашей клинике я лично веду приём каждого пациента и составляю индивидуальный план лечения. Современное оборудование, точный осмотр и строгие стандарты стерилизации позволяют выполнять лечение зубов с максимальной точностью и без боли.",
      p2: "В DM Stomatology мы сфокусированы на 3 ключевых направлениях: надёжная Дентальная Имплантация, Ортопедия (циркониевые коронки и виниры) и Терапия (лечение и реставрация зубов без боли).",
      feat1Title: "Личный Приём",
      feat1Desc: "Я лично провожу каждый этап лечения, без передачи пациентов ассистентам.",
      feat2Title: "Современные Стандарты",
      feat2Desc: "Передовое оборудование клиники DM Stomatology и строжайшие протоколы антисептики.",
      feat3Title: "Лечение Без Боли",
      feat3Desc: "Эффективная бережная анестезия гарантирует абсолютный комфорт на протяжении всего визита.",
      callTitle: "Прямая связь с доктором:",
    },
    en: {
      badge: "ABOUT THE DOCTOR",
      title: "Dr. MuhammadAli Davronov",
      subtitle: "DM Stomatology, Room #1 · Implantology, Orthopedics & Therapy",
      p1: "At DM Stomatology, I personally welcome each patient and develop tailored treatment plans. Utilizing advanced dental technology, thorough clinical evaluation, and rigorous sterilization protocols, every treatment is delivered with uncompromising precision and total comfort.",
      p2: "Our clinical focus is dedicated to 3 core dental specialties: Dental Implantology, Orthopedics (aesthetic zirconia crowns and veneers), and Therapy (gentle, pain-free restorative care).",
      feat1Title: "Personal Doctor Care",
      feat1Desc: "Every stage of your treatment is carried out directly by Dr. MuhammadAli himself.",
      feat2Title: "Modern Clinic Standards",
      feat2Desc: "Advanced digital equipment at DM Stomatology and international sterilization safety.",
      feat3Title: "100% Pain-Free Care",
      feat3Desc: "Gentle local anesthesia and attentive handling ensure a completely stress-free experience.",
      callTitle: "Direct contact with Dr. MuhammadAli:",
    },
  }[lang] || labels.uz;

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Doctor Bio */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs uppercase">
                {labels.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                {labels.title}
              </h2>
              <p className="text-sm font-bold text-primary">
                {labels.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {labels.p1}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {labels.p2}
              </p>

              {/* Direct Contact Bar */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {labels.callTitle}
                  </span>
                  <a
                    href={DOCTOR_INFO.phoneHref}
                    className="font-mono text-base font-bold text-primary hover:underline"
                  >
                    {DOCTOR_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={DOCTOR_INFO.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors shadow-2xs"
                    aria-label="Telegram"
                  >
                    <IconTelegram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={DOCTOR_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                    aria-label="Instagram"
                  >
                    <IconInstagram className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Clean Value Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <IconShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {labels.feat1Title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {labels.feat1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <IconGraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {labels.feat2Title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {labels.feat2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <DentalToothMolar className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {labels.feat3Title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {labels.feat3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME PAGE COMPONENT (CLEAN, SIMPLE & FOCUSED)
   ═══════════════════════════════════════════════════════════════════ */
const Home = ({ onOpenBooking }) => {
  const { lang } = useLanguage();

  return (
    <>
      <Seo page="home" schemaJson={buildHomePageSchema(lang)} />

      {/* 1. Clear Doctor Hero Section */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Focused 3 Specialties (Orthopedics, Therapy, Implantology) */}
      <CoreSpecialtiesSection onOpenBooking={onOpenBooking} />

      {/* 3. About Dr. MuhammadAli Davronov & Personal Philosophy */}
      <AboutDoctorSection />

      {/* 3b. Dr. MuhammadAli's Private Working Room (Room #1) */}
      <section className="w-full pb-12 sm:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkingRoomShowcase />
        </div>
      </section>

      {/* 4. Direct Online Booking Section */}
      <InlineBookingSection />

      {/* 5. Practice Location Map (Google & Yandex Maps) */}
      <ClinicLocationMap />

      {/* 6. Concise FAQ */}
      <FaqAccordion />
    </>
  );
};

export default Home;
