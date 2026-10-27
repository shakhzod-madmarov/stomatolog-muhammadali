import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import Interactive3DTilt from "./Interactive3DTilt";
import {
  IconDentalImplant,
  IconDiamondGem,
  IconTherapeuticTooth,
  IconLaserWhitening,
  DentalVeneerCrown,
  DentalDenturesIcon,
  IconGentleComfort,
  IconEyeInvisible,
  IconSpeedLightning,
  IconTrophyWarranty,
} from "./MedicalIcons";

const renderComplaintIcon = (id, className = "w-5 h-5") => {
  switch (id) {
    case "implant":
      return <IconDentalImplant className={className} />;
    case "crowns":
      return <DentalVeneerCrown className={className} />;
    case "veneers":
      return <IconDiamondGem className={className} />;
    case "dentures":
      return <DentalDenturesIcon className={className} />;
    case "therapy":
      return <IconTherapeuticTooth className={className} />;
    case "whitening":
      return <IconLaserWhitening className={className} />;
    default:
      return <IconDentalImplant className={className} />;
  }
};

const renderPriorityIcon = (id, className = "w-5 h-5") => {
  switch (id) {
    case "painless":
      return <IconGentleComfort className={className} />;
    case "invisible":
      return <IconEyeInvisible className={className} />;
    case "speed":
      return <IconSpeedLightning className={className} />;
    case "longevity":
      return <IconTrophyWarranty className={className} />;
    default:
      return <IconGentleComfort className={className} />;
  }
};

export const SmileAssessmentWizard = () => {
  const { lang } = useLanguage();
  const { openBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [complaint, setComplaint] = useState(null);
  const [priority, setPriority] = useState(null);

  const STEPS_DATA = {
    uz: {
      badge: "ONLAYN MUOLAJA TAHLILI",
      title: "Sizga Qaysi Muolaja To'g'ri Keladi?",
      subtitle: "2 ta oddiy savolga javob bering va Dr. MuhammadAli Davronov tavsiya etadigan optimal davolash yo'nalishini bilib oling.",
      step1Title: "1-qadam: Sizni qanday holat bezovta qilmoqda?",
      complaints: [
        { id: "implant", label: "Tish yo'qotilgan yoki olingan (Implantologiya)", rec: "implant" },
        { id: "crowns", label: "Tish singan / yemirilgan, mustahkam qoplama kerak (Ortopediya)", rec: "crowns" },
        { id: "veneers", label: "Gollivud tabassumi, oqlik va nozik vinirlar (Ortopediya)", rec: "veneers" },
        { id: "dentures", label: "Bir nechta yoki barcha tishlarni protezlash (Ortopediya)", rec: "dentures" },
        { id: "therapy", label: "Tishda karies, og'riq yoki plomba kerak (Terapiya)", rec: "therapy" },
        { id: "whitening", label: "Tishlarni xavfsiz tozalash va oppoq oqartirish (Terapiya)", rec: "whitening" },
      ],
      step2Title: "2-qadam: Siz uchun eng muhim mezon qaysi?",
      priorities: [
        { id: "painless", label: "100% og'riqsiz va qulay bo'lishi" },
        { id: "invisible", label: "Tabiiy tishdan aslo ajralmasligi" },
        { id: "speed", label: "Imkon qadar tez va aniq bajarilishi" },
        { id: "longevity", label: "Umrbod yoki uzoq yillik rasmiy kafolat" },
      ],
      resultTitle: "Siz uchun tavsiya etilgan mutaxassislik yo'nalishi:",
      priorityLabel: "Ustuvor mezon:",
      doctorNote: "Dr. MuhammadAli Davronov shaxsiy qabulida to'liq professional ko'rik o'tkaziladi va sizga eng xavfsiz hamda uzoq muddatli individual davolash rejasi tuziladi.",
      restart: "Qaytadan tahlil qilish",
      bookCta: "Ushbu muolajaga onlayn qabulga yozilish →",
    },
    ru: {
      badge: "ОНЛАЙН-ПОДБОР ЛЕЧЕНИЯ",
      title: "Какое лечение подойдёт именно вам?",
      subtitle: "Ответьте на 2 простых вопроса, чтобы узнать предварительную рекомендацию Д-ра МухаммадАли Давронова.",
      step1Title: "Шаг 1: Что именно вас беспокоит?",
      complaints: [
        { id: "implant", label: "Отсутствует зуб, нужен надёжный имплант (Имплантология)", rec: "implant" },
        { id: "crowns", label: "Зуб разрушен / сколот, нужна точная коронка (Ортопедия)", rec: "crowns" },
        { id: "veneers", label: "Хочу голливудскую улыбку и тонкие виниры (Ортопедия)", rec: "veneers" },
        { id: "dentures", label: "Восстановление нескольких или всех зубов (Ортопедия)", rec: "dentures" },
        { id: "therapy", label: "Боль в зубе, кариес или замена пломбы (Терапия)", rec: "therapy" },
        { id: "whitening", label: "Профессиональная чистка и отбеливание (Терапия)", rec: "whitening" },
      ],
      step2Title: "Шаг 2: Что для вас важнее всего?",
      priorities: [
        { id: "painless", label: "Абсолютно без боли и страха" },
        { id: "invisible", label: "100% естественность и незаметность" },
        { id: "speed", label: "Быстрый и прогнозируемый результат" },
        { id: "longevity", label: "Пожизненная надёжность и официальная гарантия" },
      ],
      resultTitle: "Рекомендованное направление лечения:",
      priorityLabel: "Главный приоритет:",
      doctorNote: "На очной консультации Д-р МухаммадАли Давронов проведёт подробный клинический осмотр и составит безопасный персональный план лечения.",
      restart: "Пройти опрос заново",
      bookCta: "Записаться на этот приём онлайн →",
    },
    en: {
      badge: "ONLINE SMILE ASSESSMENT",
      title: "Find Your Ideal Treatment in 1 Minute",
      subtitle: "Answer 2 simple questions to receive Dr. MuhammadAli Davronov's tailored treatment recommendation.",
      step1Title: "Step 1: What is your primary dental need?",
      complaints: [
        { id: "implant", label: "Missing natural tooth, need solid implant (Implantology)", rec: "implant" },
        { id: "crowns", label: "Damaged or worn tooth needing crown (Orthopedics)", rec: "crowns" },
        { id: "veneers", label: "Dreaming of a bright smile with veneers (Orthopedics)", rec: "veneers" },
        { id: "dentures", label: "Replacing multiple missing teeth with dentures (Orthopedics)", rec: "dentures" },
        { id: "therapy", label: "Toothache, cavity, or gentle filling (Therapy)", rec: "therapy" },
        { id: "whitening", label: "Safe professional cleaning & whitening (Therapy)", rec: "whitening" },
      ],
      step2Title: "Step 2: What matters most to you?",
      priorities: [
        { id: "painless", label: "100% gentle and pain-free care" },
        { id: "invisible", label: "Completely natural, lifelike aesthetics" },
        { id: "speed", label: "Fast, precise, and digital workflow" },
        { id: "longevity", label: "Long-term durability and clinical warranty" },
      ],
      resultTitle: "Your Recommended Pathway:",
      priorityLabel: "Priority criteria:",
      doctorNote: "During your personal visit, Dr. MuhammadAli Davronov will perform a comprehensive clinical examination to craft an optimal treatment plan.",
      restart: "Retake Assessment",
      bookCta: "Book Online for This Treatment →",
    },
  };
  const stepsData = STEPS_DATA[lang] || STEPS_DATA.uz;

  const currentComplaint = stepsData.complaints.find((c) => c.id === complaint);

  const handleSelectComplaint = (item) => {
    setComplaint(item.id);
    setStep(2);
  };

  const handleSelectPriority = (item) => {
    setPriority(item.id);
    setStep(3);
  };

  const handleRestart = () => {
    setStep(1);
    setComplaint(null);
    setPriority(null);
  };

  const recommendedBookingService = currentComplaint?.rec || "consultation";

  return (
    <section aria-labelledby="smile-wizard-heading" className="w-full py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-red-50 border border-red-200 shadow-2xs mb-3 uppercase">
            {stepsData.badge}
          </span>
          <h2 id="smile-wizard-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {stepsData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {stepsData.subtitle}
          </p>
        </div>

        <Interactive3DTilt
          maxTilt={4}
          perspective={1000}
          scale={1.01}
          glare={false}
          className="max-w-3xl mx-auto"
        >
          <div className="p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            {/* Step 1: Complaint */}
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                    {stepsData.step1Title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-primary bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    1 / 2
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {stepsData.complaints.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectComplaint(item)}
                      className="min-h-[48px] p-3 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-primary hover:bg-red-50/40 text-left transition-all flex items-center gap-3 cursor-pointer group shadow-2xs"
                    >
                      <span className="w-9 h-9 rounded-xl bg-red-50 text-primary border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {renderComplaintIcon(item.id)}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Priority */}
            {step === 2 && (
              <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                    {stepsData.step2Title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-primary bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    2 / 2
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {stepsData.priorities.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectPriority(item)}
                      className="min-h-[48px] p-3 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-primary hover:bg-red-50/40 text-left transition-all flex items-center gap-3 cursor-pointer group shadow-2xs"
                    >
                      <span className="w-9 h-9 rounded-xl bg-red-50 text-primary border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        {renderPriorityIcon(item.id)}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Result & Direct Booking */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="p-4 sm:p-6 rounded-2xl bg-white border border-red-100 shadow-sm flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <span>✓</span>
                    <span>{stepsData.resultTitle}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex items-center gap-3.5">
                    <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                      {renderComplaintIcon(complaint, "w-6 h-6")}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                        {stepsData.complaints.find((c) => c.id === complaint)?.label}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        <span className="font-semibold text-slate-700">{stepsData.priorityLabel}</span>{" "}
                        {stepsData.priorities.find((p) => p.id === priority)?.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stepsData.doctorNote}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => openBooking(recommendedBookingService)}
                      className="flex-1 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-colgate hover:shadow-colgate-lg active:scale-98 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <span>{stepsData.bookCta}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRestart}
                      className="px-5 py-3.5 rounded-full font-bold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                    >
                      {stepsData.restart}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Interactive3DTilt>
      </div>
    </section>
  );
};

export default SmileAssessmentWizard;
