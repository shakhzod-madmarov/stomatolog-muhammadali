import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Interactive3DTilt from "./Interactive3DTilt";
import {
  IconScannerOptical3D,
  IconVirtualSmile,
  IconPrecisionTarget,
  IconCadCamRobotics,
  IconShieldCheck,
} from "./MedicalIcons";

const renderStepIcon = (idx, className = "w-5 h-5") => {
  switch (idx) {
    case 0:
      return <IconScannerOptical3D className={className} />;
    case 1:
      return <IconVirtualSmile className={className} />;
    case 2:
      return <IconCadCamRobotics className={className} />;
    case 3:
      return <IconShieldCheck className={className} />;
    default:
      return <IconScannerOptical3D className={className} />;
  }
};

const renderFeatureIcon = (idx, className = "w-6 h-6") => {
  switch (idx) {
    case 0:
      return <IconScannerOptical3D className={className} />;
    case 1:
      return <IconVirtualSmile className={className} />;
    case 2:
      return <IconPrecisionTarget className={className} />;
    case 3:
      return <IconCadCamRobotics className={className} />;
    default:
      return <IconScannerOptical3D className={className} />;
  }
};

export const DigitalDentistryFeatures = () => {
  const { lang } = useLanguage();

  const content = {
    uz: {
      badge: "ZAMONAVIY USULLAR",
      title: "Nega Qabulimda 3D Texnologiyalardan Foydalanaman?",
      subtitle:
        "Eski uslubdagi noqulay gips qoliplar va og'riqli xavotirlar o'rniga — tezkor 60 soniyali optik skanerlash, tish shaklini birgalikda tanlash va zargarlik darajasidagi aniqlik.",
      workflowBadge: "BEMOR YO'LI",
      workflowTitle: "Yangi Tabassumingiz Qanday Yaratiladi?",
      workflowSubtitle:
        "Birinchi 3D ko'rikdan to yakuniy natijagacha bo'lgan 4 ta xotirjam va tushunarli qadam.",
      steps: [
        {
          step: "01",
          title: "60s Optik Skanerlash",
          desc: "Ko'ngilni aynituvchi gips massalarisiz, 60 soniyada tishlaringizning raqamli 3D modeli olinadi.",
        },
        {
          step: "02",
          title: "Tabassumni Birga Tanlash",
          desc: "Yuzingiz tuzilishi va kulgichingizga mos tushadigan tish shakli va oqligini ekranda birga ko'ramiz.",
        },
        {
          step: "03",
          title: "Zargarlik Ishlovi",
          desc: "Qoplamalar va shablonlar mikron aniqlikda tayyorlanadi — og'izda xuddi o'z tishingizdek tuyuladi.",
        },
        {
          step: "04",
          title: "Og'riqsiz Natija",
          desc: "Yumshoq anesteziya va ehtiyotkorona o'rnatish tufayli birinchi kundanoq erkin jilmayasiz.",
        },
      ],
      features: [
        {
          tag: "Qulaylik",
          title: "3D Optik Skaner (Gipssiz)",
          desc: "Eski uslubdagi noqulay qolip massasini unuting. Optik datchik og'iz bo'shlig'ini yengil va tezkor suratga oladi.",
        },
        {
          tag: "Isbotlangan Natija",
          title: "Virtual Tabassum Loyihasi",
          desc: "Kutilmagan xavotirlar yo'q: davolash boshlanishidan oldin natijani 3D ekranda o'zingiz ko'rib baholaysiz.",
        },
        {
          tag: "Xavfsizlik",
          title: "Navigatsion Implantatsiya",
          desc: "3D jarrohlik shabloni implantni asab va tomirlarga teginmasdan, eng xavfsiz nuqtaga joylashtirishni ta'minlaydi.",
        },
        {
          tag: "Aniqlik",
          title: "CAD/CAM Sirkon va E-max",
          desc: "Mikron darajasidagi robotlashtirilgan frezerlash: qoplamalar va vinirlar tishga ideal jipslashadi.",
        },
      ],
      workflowLocation: "Andijon · DM Stomatologiya",
      cardAuthor: "Dr. MuhammadAli Davronov",
      cardBadge: "DM Stomatologiya ✓",
    },
    ru: {
      badge: "СОВРЕМЕННЫЙ ПОДХОД",
      title: "Почему я использую 3D-технологии в своей практике?",
      subtitle:
        "Вместо неприятных слепков и тревоги перед креслом — быстрое сканирование за 60 секунд, совместный выбор формы зубов и ювелирная точность без боли.",
      workflowBadge: "ПУТЬ ПАЦИЕНТА",
      workflowTitle: "Как создаётся ваша новая улыбка?",
      workflowSubtitle:
        "Четыре спокойных и понятных шага: от первого 3D снимка до искренней уверенной улыбки.",
      steps: [
        {
          step: "01",
          title: "60s 3D Сканирование",
          desc: "Без рвотного рефлекса и слепочной массы: точный цифровой снимок челюсти за 60 секунд.",
        },
        {
          step: "02",
          title: "Совместный Дизайн Улыбки",
          desc: "Подбираем идеальную форму и оттенок зубов с учётом ваших пожеланий и анатомии лица.",
        },
        {
          step: "03",
          title: "Ювелирное Изготовление",
          desc: "Коронки и виниры создаются с микроной точностью — идеальное смыкание и лёгкость при еде.",
        },
        {
          step: "04",
          title: "Бережная Установка Без Боли",
          desc: "Мягкая анестезия и бережная фиксация: новая улыбка радует вас с первой же минуты.",
        },
      ],
      features: [
        {
          tag: "Комфорт",
          title: "3D Сканер вместо слепков",
          desc: "Забудьте о неприятной слепочной пасте во рту: оптический сканер бережно оцифровывает зубной ряд.",
        },
        {
          tag: "Предсказуемость",
          title: "3D Моделирование Улыбки",
          desc: "Никакой неизвестности: вы наглядно видите и утверждаете будущий результат ещё до начала лечения.",
        },
        {
          tag: "Безопасность",
          title: "Навигационная Имплантация",
          desc: "Индивидуальный 3D шаблон гарантирует установку импланта в безопасную зону без риска для нервов.",
        },
        {
          tag: "Точность",
          title: "CAD/CAM Цирконий и E-max",
          desc: "Роботизированная фрезеровка с микронной точностью: коронки и виниры идеально прилегают к десне.",
        },
      ],
      workflowLocation: "Андижан · DM Stomatologiya",
      cardAuthor: "Д-р МухаммадАли Давронов",
      cardBadge: "DM Stomatologiya ✓",
    },
    en: {
      badge: "MODERN GENTLE CARE",
      title: "Why 3D Digital Precision Makes All the Difference",
      subtitle:
        "No messy impressions, no guessing, no dental anxiety. Just comfortable 60-second scanning, collaborative smile previews, and pain-free precision.",
      workflowBadge: "YOUR PATIENT JOURNEY",
      workflowTitle: "How Your Confident Smile is Created",
      workflowSubtitle:
        "Four calm and transparent steps: from your initial 3D scan to a confident smile in the mirror.",
      steps: [
        {
          step: "01",
          title: "60s Optical 3D Scan",
          desc: "Gag-free, seamless scan capturing your dental anatomy in 60 seconds with micron accuracy.",
        },
        {
          step: "02",
          title: "Collaborative Smile Design",
          desc: "We preview and refine tooth contours and shade together on screen before treatment starts.",
        },
        {
          step: "03",
          title: "Jeweler's Precision Fit",
          desc: "Restorations and templates crafted with micron tolerances for an airtight, natural bite.",
        },
        {
          step: "04",
          title: "Comfortable, Painless Finish",
          desc: "Gentle local numbing and meticulous placement ensure you smile comfortably from day one.",
        },
      ],
      features: [
        {
          tag: "Patient Comfort",
          title: "3D Scanning (Putty-Free)",
          desc: "Say goodbye to messy paste in your mouth. An optical camera gently captures every tooth surface in seconds.",
        },
        {
          tag: "Clear Outcome",
          title: "Virtual Smile Simulation",
          desc: "No unexpected surprises: evaluate and approve your planned aesthetic result in 3D beforehand.",
        },
        {
          tag: "Safety",
          title: "Guided 3D Implants",
          desc: "Custom 3D surgical guides position implants at the safest anatomical depth and angle.",
        },
        {
          tag: "Precision",
          title: "CAD/CAM Zirconia & E-max",
          desc: "Robotic sub-micron milling: crowns and veneers fit seamlessly with natural bite alignment.",
        },
      ],
      workflowLocation: "Andijan · DM Stomatology",
      cardAuthor: "Dr. MuhammadAli Davronov",
      cardBadge: "DM Stomatology ✓",
    },
  }[lang] || content.uz;

  return (
    <section aria-labelledby="features-heading" className="w-full py-14 sm:py-20 relative overflow-hidden bg-slate-50 border-y border-slate-200/80">
      {/* Background soft red clinical glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-3 uppercase">
            {content.badge}
          </span>
          <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* 4-Step Interactive Digital Workflow Strip */}
        <div className="mb-14 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-100 gap-2">
            <div>
              <span className="text-[11px] font-bold text-primary tracking-wider uppercase block">
                {content.workflowBadge}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                {content.workflowTitle}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              {content.workflowLocation}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {content.steps.map((st, i) => (
              <div
                key={i}
                className="relative p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-primary text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {st.step}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-2xs">
                    {renderStepIcon(i, "w-4 h-4")}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Interactive 3D Tilt Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feat, idx) => (
            <Interactive3DTilt
              key={idx}
              maxTilt={8}
              perspective={900}
              scale={1.03}
              glare={true}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-primary/50 hover:shadow-colgate transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all shadow-xs">
                    {renderFeatureIcon(idx, "w-6 h-6")}
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-2.5">
                    {feat.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-primary font-bold">
                  <span>{content.cardAuthor}</span>
                  <span className="text-slate-500 text-[11px] font-semibold">{content.cardBadge}</span>
                </div>
              </div>
            </Interactive3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalDentistryFeatures;
