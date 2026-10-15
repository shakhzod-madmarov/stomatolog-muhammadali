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
import { IconScannerOptical3D, IconAligners, IconClock, IconShieldCheck } from "../components/MedicalIcons";
import { DmToothEmblem } from "../components/Logo";

/* ═══════════════════════════════════════════════════════════════════
   HERO SECTION — DR. MUHAMMADALI DAVRONOV (COLGATE CLEAN DESIGN)
   ═══════════════════════════════════════════════════════════════════ */
const HeroSection = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const T = {
    uz: {
      badge: "Shaxsiy Qabul · 5 Yillik Tajriba · Andijon",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Shifokor-Stomatolog · Ortopediya, Terapiya va Implantologiya",
      headline: "Sog'lom, oppoq va ishonchli tabassum sari birgalikda",
      subtitle:
        "Stomatologik muolajalardan xavotir olmang. Men har bir bemorimni shaxsan qabul qilaman: Andijon davlat tibbiyot institutining professional bilimlari, 5 yillik amaliy tajriba, yuqori aniqlikdagi tsirkon koronkalar, estetik vinirlar hamda 100% og'riqsiz davolash usullari.",
      ctaBook: "Qabulga Yozilish",
      ctaServices: "Xizmatlar bilan tanishish",
      stat1Num: "5+ Yil",
      stat1Label: "Klinik Tajriba",
      stat2Num: "3,500+",
      stat2Label: "Sog'lom Tabassumlar",
      stat3Num: "100%",
      stat3Label: "Og'riqsiz Muolaja",
      stat4Num: "CAD/CAM",
      stat4Label: "Tsirkon Aniqligi",
      floatBadge1: "Ortopediya & Tsirkon",
      floatBadge2: "Dental Implantologiya",
    },
    ru: {
      badge: "Личный Приём · 5 Лет Опыта · Андижан",
      doctorName: DOCTOR_INFO.name,
      specialtyTitle: "Врач-Стоматолог · Ортопедия, Терапия, Имплантология",
      headline: "Здоровая, белоснежная и уверенная улыбка без боли",
      subtitle:
        "Забудьте о страхе перед визитом к стоматологу. Доктор МухаммадАли Давронов ведёт приём лично в клинике DM Stomatology: точные циркониевые коронки, эстетические виниры E-max, надёжные титановые импланты и лечение кариеса с заботой о вашем комфорте.",
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
      headline: "A Healthy, Bright and Confident Smile with Gentle Care",
      subtitle:
        "Experience modern dental excellence with genuine personal attention. Dr. MuhammadAli Davronov welcomes patients at DM Stomatology: high-precision zirconia crowns, handcrafted veneers, gentle therapy, and lifetime biocompatible implants.",
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
    <section className="relative w-full pt-8 sm:pt-14 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
      {/* Subtle Colgate-style soft background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-50/70 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-slate-950 leading-[1.14] sm:leading-[1.12] tracking-tight mb-5">
              {t.headline}
            </h1>

            {/* Doctor Credentials Subhead */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary mb-3 flex-wrap">
              <span className="font-bold text-slate-900">{t.doctorName}</span>
              <span className="text-slate-300">·</span>
              <span>{t.specialtyTitle}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600">DM Stomatologiya (Navoiy shox 91)</span>
            </div>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-primary hover:bg-primary-hover active:scale-95 shadow-colgate hover:shadow-colgate-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t.ctaBook}</span>
                <span>→</span>
              </button>

              <Link
                to={to("/services")}
                className="px-7 py-3.5 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-primary hover:text-primary transition-all text-center shadow-2xs"
              >
                {t.ctaServices}
              </Link>
            </div>

            {/* Key Facts / Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200/80">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-primary block">
                  {t.stat1Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat1Label}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 block">
                  {t.stat2Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat2Label}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-primary block">
                  {t.stat3Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat3Label}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 block">
                  {t.stat4Num}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.stat4Label}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Colgate Clinical Doctor Preview Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle ambient red background blur */}
              <div className="absolute -inset-3 bg-red-100/60 rounded-3xl blur-2xl -z-10 animate-pulse-subtle" />

              {/* Floating Badge Top-Left */}
              <div className="absolute -top-3.5 left-1 sm:-left-4 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-[11px] font-bold text-slate-900 flex items-center gap-1.5 sm:gap-2 animate-float-slow z-20 pointer-events-none">
                <span className="w-5 h-5 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <IconScannerOptical3D className="w-3.5 h-3.5" />
                </span>
                <span>{t.floatBadge1}</span>
              </div>

              {/* Floating Badge Bottom-Right */}
              <div className="absolute -bottom-3.5 right-1 sm:-right-4 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-[11px] font-bold text-primary flex items-center gap-1.5 sm:gap-2 animate-float-3d z-20 pointer-events-none">
                <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                  <IconAligners className="w-3.5 h-3.5" />
                </span>
                <span>{t.floatBadge2}</span>
              </div>

              <Interactive3DTilt
                maxTilt={8}
                perspective={1000}
                scale={1.01}
                glare={false}
                className="w-full"
              >
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col gap-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <DmToothEmblem className="w-10 h-10" />
                      <div>
                        <h3 className="font-serif font-bold text-base text-slate-900 leading-tight">
                          Dr. MuhammadAli
                        </h3>
                        <p className="text-[11px] font-bold text-primary tracking-wider uppercase">
                          DM Stomatologiya
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-red-50 text-primary border border-red-200">
                      5 Yil Tajriba
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-xs relative group">
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
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-[10px] text-slate-900 font-bold z-10 border border-slate-200 shadow-xs">
                      DM Stomatologiya · Andijon
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Mutaxassislik:</span>
                      <span className="font-bold text-slate-800">Ortopediya · Terapiya · Implant</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400">Ta'limi:</span>
                      <span className="font-bold text-slate-800">Andijon davlat tibbiyot instituti</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400">Manzil:</span>
                      <span className="font-bold text-primary">Navoiy shoh ko'chasi, 91-uy</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-colgate transition-all text-center"
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
   MAIN HOME PAGE (COLGATE-INSPIRED CLEAN CLINICAL SECTIONS)
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

      {/* 3. Services Catalog Overview Grid (Clean Porcelain Section) */}
      <section className="w-full py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-red-50 border border-red-200/70 shadow-2xs mb-3 uppercase">
                {labels.servicesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                {labels.servicesTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                {labels.servicesSub}
              </p>
            </div>

            <Link
              to={to("/services")}
              className="text-xs sm:text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1.5 transition-colors self-start md:self-auto"
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
                glare={false}
                className="h-full"
              >
                <article className="h-full p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
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
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-primary border border-red-100 backdrop-blur-xs shadow-xs">
                          {service.featurePill[lang]}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                      {service.category[lang]}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                      {service.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 inline-flex items-center gap-1.5">
                      <IconClock className="w-3.5 h-3.5 text-primary" />
                      <span>{service.duration[lang]}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.id)}
                      className="px-4 py-2 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-2xs hover:shadow-colgate transition-all"
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
      <section className="w-full py-14 sm:py-20 bg-white">
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
