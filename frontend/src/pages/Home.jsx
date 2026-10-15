import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO } from "../constants/doctor";
import Seo from "../components/Seo";
import InlineBookingSection from "../components/InlineBookingSection";
import ClinicLocationMap from "../components/ClinicLocationMap";
import FaqAccordion from "../components/FaqAccordion";
import { buildHomePageSchema } from "../utils/structuredData";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import DigitalDentistryFeatures from "../components/DigitalDentistryFeatures";
import Doctor3DCard from "../components/Doctor3DCard";
import Interactive3DCostCalculator from "../components/Interactive3DCostCalculator";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import SmileAssessmentWizard from "../components/SmileAssessmentWizard";
import Interactive3DTilt from "../components/Interactive3DTilt";
import { IconScannerOptical3D, IconAligners, IconClock } from "../components/MedicalIcons";
import { DmToothEmblem } from "../components/Logo";

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION — DR. MUHAMMADALI DAVRONOV
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badge: "Shaxsiy Qabul · 5 Yillik Tajriba · Andijon",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Shifokor-Stomatolog · Ortopediya, Terapiya va Implantologiya",
      headline: "Mukammal tabassum va og'riqsiz davolash san'ati",
      subtitle:
        "Stomatologik muolajalardan xavotir olmang. Men har bir bemorimni shaxsan qabul qilaman: Andijon davlat tibbiyot institutining fundamental bilimlari, 5 yillik amaliy tajriba, yuqori sifatli tsirkon koronkalar, estetik vinirlar hamda 100% og'riqsiz zamonaviy implant va terapiya muolajalari.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Xizmatlarni Ko'rish",
      stat1Num: "5+ Yil",
      stat1Label: "Klinik Tajriba",
      stat2Num: "3,500+",
      stat2Label: "Sog'lom Tabassumlar",
      stat3Num: "100%",
      stat3Label: "Og'riqsiz Terapiya",
      stat4Num: "CAD/CAM",
      stat4Label: "Tsirkon Aniqligi",
      floatBadge1: "Ortopediya & Tsirkon",
      floatBadge2: "Biotitan Implantologiya",
    },
    ru: {
      badge: "Личный Приём · 5 Лет Опыта · Андижан",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Врач-Стоматолог · Ортопедия, Терапия, Имплантология",
      headline: "Идеальная улыбка и бережное лечение без боли",
      subtitle:
        "Забудьте о страхе перед стоматологическим визитом. Доктор МухаммадАли Давронов ведёт приём лично в клинике DM Stomatology: точные циркониевые коронки, эстетические виниры E-max, надёжные титановые импланты и лечение кариеса без малейшей боли.",
      ctaBook: "Записаться на Приём",
      ctaServices: "Все Направления",
      stat1Num: "5+ Лет",
      stat1Label: "Клинического Опыта",
      stat2Num: "3,500+",
      stat2Label: "Довольных Пациентов",
      stat3Num: "100%",
      stat3Label: "Лечение Без Боли",
      stat4Num: "CAD/CAM",
      stat4Label: "Циркониевая Точность",
      floatBadge1: "Ортопедия и Виниры",
      floatBadge2: "Титановая Имплантация",
    },
    en: {
      badge: "Personal Care · 5 Years Experience · Andijan",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Dental Specialist · Orthopedics, Therapy & Implantology",
      headline: "Artistry in Aesthetic Smiles & Pain-Free Dental Care",
      subtitle:
        "Experience dental care that respects your time and peace of mind. Dr. MuhammadAli Davronov provides individualized treatments at DM Stomatology: premium zirconia crowns, E-max veneers, gentle therapy, and lifetime biocompatible dental implants.",
      ctaBook: "Book Appointment",
      ctaServices: "Explore Treatments",
      stat1Num: "5+ Yrs",
      stat1Label: "Clinical Mastery",
      stat2Num: "3,500+",
      stat2Label: "Restored Smiles",
      stat3Num: "100%",
      stat3Label: "Pain-Free Care",
      stat4Num: "CAD/CAM",
      stat4Label: "Zirconia Precision",
      floatBadge1: "Orthopedics & Veneers",
      floatBadge2: "Titanium Implants",
    },
  };
  const t = T[lang] || T.uz;

  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-16 sm:pb-20 overflow-hidden text-white">
      {/* Ambient background glow in brand crimson and ruby */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-950/40 via-red-900/10 to-transparent -z-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-800/50 shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold text-red-300 tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-white leading-[1.15] sm:leading-[1.12] tracking-tight mb-5">
              {t.headline}
            </h1>

            {/* Doctor Credentials Subhead */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-red-400 mb-3 flex-wrap">
              <span className="font-bold text-white">{t.doctorName}</span>
              <span>·</span>
              <span>{t.specialtyTitle}</span>
              <span>·</span>
              <span className="text-zinc-300">DM Stomatologiya (Navoiy shox 91)</span>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] hover:scale-102 active:scale-98 shadow-[0_4px_20px_rgba(255,0,0,0.4)] border border-red-500/40 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t.ctaBook}</span>
                <span>→</span>
              </button>

              <Link
                to={to("/services")}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 transition-colors text-center shadow-xs"
              >
                {t.ctaServices}
              </Link>
            </div>

            {/* Key Facts / Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-red-950/60">
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-red-400 block">
                  {t.stat1Num}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{t.stat1Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white block">
                  {t.stat2Num}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{t.stat2Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-red-400 block">
                  {t.stat3Num}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{t.stat3Label}</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white block">
                  {t.stat4Num}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{t.stat4Label}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Col (Interactive 3D Doctor Card Preview) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative red gradient orb */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] rounded-3xl opacity-25 blur-2xl -z-10 animate-pulse-subtle" />

              {/* Floating 3D Badge Top-Left */}
              <div className="absolute -top-3.5 left-1 sm:-left-4 px-3 sm:px-3.5 py-1.5 rounded-2xl bg-zinc-950/95 backdrop-blur-md border border-red-900/60 shadow-luxury text-[10.5px] sm:text-[11px] font-bold text-white flex items-center gap-1.5 sm:gap-2 animate-float-slow z-20 pointer-events-none">
                <span className="w-5 h-5 rounded-lg bg-red-950/80 text-red-400 flex items-center justify-center shrink-0">
                  <IconScannerOptical3D className="w-3.5 h-3.5" />
                </span>
                <span>{t.floatBadge1}</span>
              </div>

              {/* Floating 3D Badge Bottom-Right */}
              <div className="absolute -bottom-3.5 right-1 sm:-right-4 px-3 sm:px-3.5 py-1.5 rounded-2xl bg-zinc-950/95 backdrop-blur-md border border-red-900/60 shadow-luxury text-[10.5px] sm:text-[11px] font-bold text-red-400 flex items-center gap-1.5 sm:gap-2 animate-float-3d z-20 pointer-events-none">
                <span className="w-5 h-5 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <IconAligners className="w-3.5 h-3.5" />
                </span>
                <span>{t.floatBadge2}</span>
              </div>

              <Interactive3DTilt
                maxTilt={10}
                perspective={1000}
                scale={1.02}
                glare={true}
                className="w-full"
              >
                <div className="p-6 rounded-3xl bg-[#0C0505]/95 backdrop-blur-md border border-red-950/70 shadow-luxury flex flex-col gap-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-red-950/60">
                    <div className="flex items-center gap-3">
                      <DmToothEmblem className="w-10 h-10" />
                      <div>
                        <h3 className="font-serif font-bold text-base text-white leading-tight">
                          Dr. MuhammadAli
                        </h3>
                        <p className="text-[11px] font-bold text-red-400 tracking-wider uppercase">
                          DM | Stomatology
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-950/80 text-red-300 border border-red-800/40">
                      5 Yil Tajriba
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-red-900/40 shadow-xs relative group">
                    <img
                      src={assets.dr_muhammadali}
                      alt="Dr. MuhammadAli Davronov"
                      width="600"
                      height="450"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-xs text-[10px] text-white font-mono z-10 border border-red-900/40">
                      DM Stomatologiya · Andijon
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                      <span className="text-zinc-500">Mutaxassislik:</span>
                      <span className="font-bold text-zinc-200">Ortopediya · Terapiya · Implantologiya</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                      <span className="text-zinc-500">Ta'limi:</span>
                      <span className="font-bold text-zinc-200">Andijon davlat tibbiyot instituti</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-zinc-500">Manzil:</span>
                      <span className="font-bold text-red-400">Navoiy shoh ko'chasi, 91-uy</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] hover:scale-102 shadow-[0_4px_15px_rgba(255,0,0,0.35)] transition-all text-center border border-red-500/40"
                  >
                    Onlayn Qabulga Yozilish →
                  </button>
                </div>
              </Interactive3DTilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ═══════════════════════════════════════════════════════════════════ */
const Home = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    uz: {
      servicesBadge: "ASOSIY MUTAXASSISLIKLAR",
      servicesTitle: "Dr. MuhammadAli Davronov Xizmatlari",
      servicesSub: "Ortopediya, 100% og'riqsiz terapiya hamda yuqori aniqlikdagi dental implantologiya — barcha muolajalar shaxsan Dr. MuhammadAli tomonidan amalga oshiriladi.",
      viewAll: "Barcha Xizmatlar Ro'yxati →",
      bookNow: "Qabulga yozilish",
    },
    ru: {
      servicesBadge: "НАПРАВЛЕНИЯ ЛЕЧЕНИЯ",
      servicesTitle: "Услуги Доктора МухаммадАли",
      servicesSub: "Ортопедия, безболезненная терапия и современная дентальная имплантация — приём лично ведёт доктор МухаммадАли Давронов.",
      viewAll: "Смотреть все услуги →",
      bookNow: "Записаться",
    },
    en: {
      servicesBadge: "CLINICAL SPECIALTIES",
      servicesTitle: "Dr. MuhammadAli's Treatments",
      servicesSub: "Orthopedics, completely pain-free therapy, and precision dental implantology — all care personally provided by Dr. MuhammadAli Davronov.",
      viewAll: "View All Treatments →",
      bookNow: "Book Now",
    },
  }[lang] || labels.uz;

  return (
    <>
      <Seo page="home" schemaJson={buildHomePageSchema(lang)} />

      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Digital Dentistry & Innovation Showcase */}
      <DigitalDentistryFeatures />

      {/* 3. Services Catalog Overview Grid */}
      <section className="w-full py-14 sm:py-20 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-red-400 bg-red-950/70 border border-red-800/40 shadow-xs mb-3 uppercase">
                {labels.servicesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                {labels.servicesTitle}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
                {labels.servicesSub}
              </p>
            </div>

            <Link
              to={to("/services")}
              className="text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              {labels.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_CATALOG.slice(0, 6).map((service) => (
              <Interactive3DTilt
                key={service.id}
                maxTilt={6}
                perspective={950}
                scale={1.02}
                glare={true}
                className="h-full"
              >
                <article className="h-full p-6 rounded-3xl bg-[#0A0505] border border-red-950/60 shadow-card hover:shadow-[0_10px_35px_rgba(255,0,0,0.2)] hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between text-white">
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative">
                      <img
                        src={service.image}
                        alt={service.title[lang]}
                        width="640"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/85 text-red-400 border border-red-900/50 backdrop-blur-xs shadow-xs">
                          {service.featurePill[lang]}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      {service.category[lang]}
                    </span>
                    <h3 className="text-lg font-bold text-white hover:text-red-400 transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 inline-flex items-center gap-1.5">
                      <IconClock className="w-3.5 h-3.5 text-red-400" />
                      <span>{service.duration[lang]}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.id)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-red-950/80 hover:bg-red-600 border border-red-800/40 transition-all shadow-xs"
                    >
                      {labels.bookNow}
                    </button>
                  </div>
                </article>
              </Interactive3DTilt>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Doctor Profile & 3D Flippable Business Card */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Doctor3DCard />
        </div>
      </section>

      {/* 5. Interactive Cost & Timeline Calculator */}
      <Interactive3DCostCalculator />

      {/* 6. Before / After Smile Transformation */}
      <BeforeAfterSlider />

      {/* 7. Online Smile Assessment Wizard */}
      <SmileAssessmentWizard />

      {/* 8. Online Booking System Section */}
      <InlineBookingSection />

      {/* 9. Clinic Location Map */}
      <ClinicLocationMap />

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion />
    </>
  );
};

export default Home;
