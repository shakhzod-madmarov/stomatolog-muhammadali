import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import Interactive3DTilt from "./Interactive3DTilt";
import {
  IconDentalImplant,
  IconAligners,
  IconBraces,
  IconDiamondGem,
  IconTherapeuticTooth,
  IconLaserWhitening,
  IconGentleComfort,
  IconEyeInvisible,
  IconSpeedLightning,
  IconTrophyWarranty,
} from "./MedicalIcons";

const renderComplaintIcon = (id, className = "w-5 h-5") => {
  switch (id) {
    case "implant":
      return <IconDentalImplant className={className} />;
    case "aligners":
      return <IconAligners className={className} />;
    case "braces":
      return <IconBraces className={className} />;
    case "veneers":
      return <IconDiamondGem className={className} />;
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

  const stepsData = {
    uz: {
      badge: "TABASSUM TAHLILI",
      title: "Sizga Qaysi Muolaja To'g'ri Keladi?",
      subtitle: "2 ta oddiy savolga javob bering va Dr. MuhammadAli Davronov tavsiya etadigan optimal davolash rejasini bilib oling.",
      step1Title: "1-qadam: Sizni nima bezovta qilmoqda?",
      complaints: [
        { id: "implant", label: "Tish yo'qotilgan yoki olingan", rec: "implant" },
        { id: "aligners", label: "Tishlar qiyshiq, ko'rinmas to'g'irlash kerak", rec: "aligners" },
        { id: "braces", label: "Murakkab prikus, breket qo'ymoqchiman", rec: "braces" },
        { id: "veneers", label: "Gollivud tabassumi va vinirlar kerak", rec: "veneers" },
        { id: "therapy", label: "Tishda karies yoki og'riq bor", rec: "therapy" },
        { id: "whitening", label: "Tishlarni oppoq oqartirish", rec: "whitening" },
      ],
      step2Title: "2-qadam: Siz uchun eng muhim mezon qaysi?",
      priorities: [
        { id: "painless", label: "100% og'riqsiz va qulay bo'lishi" },
        { id: "invisible", label: "Atrofdagilarga umuman sezilmasligi" },
        { id: "speed", label: "Imkon qadar tez va aniq bajarilishi" },
        { id: "longevity", label: "Umrbod yoki uzoq yillik kafolat" },
      ],
      resultTitle: "Siz uchun tavsiya etilgan dastlabki reja:",
      priorityLabel: "Ustuvorlik:",
      doctorNote: "Dr. MuhammadAli Davronov ko'rigida 3D skanerlash o'tkaziladi va sizga eng xavfsiz hamda mukammal natija beruvchi individual reja tuziladi.",
      restart: "Qaytadan tahlil qilish",
      bookCta: "Shifokor bilan 3D ko'rikka yozilish →",
    },
    ru: {
      badge: "ЭКСПРЕСС-ПОДБОР ЛЕЧЕНИЯ",
      title: "Какое лечение подойдёт именно вам?",
      subtitle: "Ответьте на 2 простых вопроса, чтобы узнать предварительную рекомендацию Д-ра МухаммадАли Давронова.",
      step1Title: "Шаг 1: Что именно вас беспокоит?",
      complaints: [
        { id: "implant", label: "Отсутствует один или несколько зубов", rec: "implant" },
        { id: "aligners", label: "Кривизна зубов, хочу незаметные капы", rec: "aligners" },
        { id: "braces", label: "Сложный прикус, нужны брекеты", rec: "braces" },
        { id: "veneers", label: "Хочу голливудскую улыбку и виниры", rec: "veneers" },
        { id: "therapy", label: "Боль в зубе или подозрение на кариес", rec: "therapy" },
        { id: "whitening", label: "Хочу белоснежное отбеливание", rec: "whitening" },
      ],
      step2Title: "Шаг 2: Что для вас важнее всего?",
      priorities: [
        { id: "painless", label: "Абсолютно без боли и страха" },
        { id: "invisible", label: "Максимальная незаметность для окружающих" },
        { id: "speed", label: "Быстрый и прогнозируемый результат" },
        { id: "longevity", label: "Пожизненная надёжность и гарантия" },
      ],
      resultTitle: "Рекомендованное направление лечения:",
      priorityLabel: "Приоритет:",
      doctorNote: "На очной консультации Д-р МухаммадАли Давронов проведёт цифровое 3D-сканирование и составит безопасный персональный план лечения.",
      restart: "Пройти тест заново",
      bookCta: "Записаться на 3D диагностику →",
    },
    en: {
      badge: "ONLINE SMILE ASSESSMENT",
      title: "Find Your Ideal Treatment in 1 Minute",
      subtitle: "Answer a couple of simple questions to receive Dr. MuhammadAli Davronov's recommended treatment pathway.",
      step1Title: "Step 1: What is your primary dental concern?",
      complaints: [
        { id: "implant", label: "Missing one or more natural teeth", rec: "implant" },
        { id: "aligners", label: "Crooked teeth, prefer invisible aligners", rec: "aligners" },
        { id: "braces", label: "Complex bite issues, interested in braces", rec: "braces" },
        { id: "veneers", label: "Dreaming of a Hollywood smile / veneers", rec: "veneers" },
        { id: "therapy", label: "Toothache or suspected dental cavity", rec: "therapy" },
        { id: "whitening", label: "Professional teeth whitening", rec: "whitening" },
      ],
      step2Title: "Step 2: What matters most to you?",
      priorities: [
        { id: "painless", label: "100% gentle and painless care" },
        { id: "invisible", label: "Discrete aesthetics with zero metal" },
        { id: "speed", label: "Fast, precise, and digital workflow" },
        { id: "longevity", label: "Lifetime durability and warranty" },
      ],
      resultTitle: "Your Recommended Pathway:",
      priorityLabel: "Priority:",
      doctorNote: "During your in-person visit, Dr. MuhammadAli Davronov will conduct 3D digital intraoral scanning to build an optimal, gentle treatment plan.",
      restart: "Retake Assessment",
      bookCta: "Schedule 3D Digital Consultation →",
    },
  }[lang] || stepsData.uz;

  const handleSelectComplaint = (item) => {
    setComplaint(item);
    setStep(2);
  };

  const handleSelectPriority = (item) => {
    setPriority(item);
    setStep(3);
  };

  const handleRestart = () => {
    setStep(1);
    setComplaint(null);
    setPriority(null);
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80" aria-labelledby="assessment-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-2 uppercase">
            {stepsData.badge}
          </span>
          <h2 id="assessment-heading" className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {stepsData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {stepsData.subtitle}
          </p>
        </div>

        <Interactive3DTilt
          maxTilt={4}
          perspective={1400}
          scale={1.01}
          glare={false}
          className="w-full"
        >
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label="Assessment Progress">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step
                    ? "w-10 bg-primary shadow-xs"
                    : s < step
                    ? "w-6 bg-primary/50"
                    : "w-6 bg-slate-200"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Complaint */}
          {step === 1 && (
            <fieldset>
              <legend className="text-base sm:text-lg font-bold text-slate-900 mb-4 text-center block w-full">
                {stepsData.step1Title}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3" role="group" aria-label={stepsData.step1Title}>
                {stepsData.complaints.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectComplaint(item)}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-primary/50 hover:bg-white transition-all flex items-center gap-3 sm:gap-3.5 text-left text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-colors">
                      {renderComplaintIcon(item.id, "w-4 h-4 sm:w-5 sm:h-5")}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 2: Priority */}
          {step === 2 && (
            <fieldset>
              <legend className="text-base sm:text-lg font-bold text-slate-900 mb-4 text-center block w-full">
                {stepsData.step2Title}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3" role="group" aria-label={stepsData.step2Title}>
                {stepsData.priorities.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectPriority(item)}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-primary/50 hover:bg-white transition-all flex items-center gap-3 sm:gap-3.5 text-left text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-colors">
                      {renderPriorityIcon(item.id, "w-4 h-4 sm:w-5 sm:h-5")}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Step 3: Result */}
          {step === 3 && complaint && (
            <div className="text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary border border-primary/20 mx-auto flex items-center justify-center mb-3 shadow-xs">
                {renderComplaintIcon(complaint.id, "w-8 h-8")}
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                {stepsData.resultTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {complaint.label}
              </h3>
              {priority && (
                <p className="text-xs text-slate-500 mt-1">
                  {stepsData.priorityLabel} {priority.label}
                </p>
              )}

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto my-6 text-xs text-slate-700 leading-relaxed text-left shadow-2xs">
                {stepsData.doctorNote}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openBooking({ service: complaint.rec, note: `Online tahlil: ${complaint.label}` })}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-colgate transition-all"
                >
                  {stepsData.bookCta}
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-4 py-3 rounded-full font-bold text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  {stepsData.restart}
                </button>
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
