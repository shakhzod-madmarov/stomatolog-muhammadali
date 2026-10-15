import React, { useState, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getA11yLabels } from "../constants/a11yLabels";
import { assets } from "../assets/assets";
import Interactive3DTilt from "./Interactive3DTilt";

const clamp = (n) => Math.max(0, Math.min(100, n));

const CASES = {
  veneers: {
    id: "veneers",
    label: { uz: "Vinir & Tsirkon", ru: "Виниры и Циркон", en: "Veneers & Zirconia" },
    tag: { uz: "Estetik Restavratsiya", ru: "Эстетическая Реставрация", en: "Aesthetic Restoration" },
    beforeImg: assets.treatment_therapy,
    afterImg: assets.treatment_veneers,
  },
  aligners: {
    id: "aligners",
    label: { uz: "Shaffof Elaynerlar", ru: "Элайнеры", en: "Clear Aligners" },
    tag: { uz: "Raqamli Ortodontiya", ru: "Цифровая Ортодонтия", en: "Digital Orthodontics" },
    beforeImg: assets.treatment_braces,
    afterImg: assets.treatment_aligners,
  },
  implant: {
    id: "implant",
    label: { uz: "Dental Implantatsiya", ru: "Имплантация", en: "Dental Implants" },
    tag: { uz: "Biotitan & Koronka", ru: "Биотитан и Коронка", en: "Titanium & Crown" },
    beforeImg: assets.treatment_surgery,
    afterImg: assets.treatment_implant,
  },
  whitening: {
    id: "whitening",
    label: { uz: "Tish Oqartirish", ru: "Отбеливание", en: "Teeth Whitening" },
    tag: { uz: "AirFlow & Lazer", ru: "AirFlow и Лазер", en: "AirFlow & Laser" },
    beforeImg: assets.treatment_therapy,
    afterImg: assets.treatment_whitening,
  },
};

export const BeforeAfterSlider = ({
  beforeLabel,
  afterLabel,
  title,
  subtitle,
}) => {
  const { lang } = useLanguage();
  const a11y = getA11yLabels(lang);
  const [activeCaseId, setActiveCaseId] = useState("veneers");
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const activeCase = CASES[activeCaseId] || CASES.veneers;

  const defaultBefore =
    beforeLabel ||
    (lang === "uz" ? "Muolajadan oldin" : lang === "ru" ? "До лечения" : "Before treatment");
  const defaultAfter =
    afterLabel ||
    (lang === "uz" ? "Muolajadan so'ng" : lang === "ru" ? "После лечения" : "After treatment");

  const defaultTitle =
    title ||
    (lang === "uz"
      ? "Haqiqiy Klinik Natijalar va O'zgarishlar"
      : lang === "ru"
      ? "Реальные результаты преображения улыбок"
      : "Real Clinical Smile Transformations");

  const defaultSub =
    subtitle ||
    (lang === "uz"
      ? "Chiziqchani surib, Dr. MuhammadAli Davronov tomonidan amalga oshirilgan tabiiy estetik va funksional o'zgarishlarni bevosita solishtiring."
      : lang === "ru"
      ? "Передвигайте бегунок влево и вправо, чтобы сравнить состояние до и после лечения у Д-ра МухаммадАли Давронова."
      : "Slide back and forth to compare clinical before-and-after transformations achieved by Dr. MuhammadAli Davronov.");

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      /* ignore */
    }
  };

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((p) => clamp(p - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((p) => clamp(p + step));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 sm:my-12 px-3.5 sm:px-6">
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-2 uppercase">
          {lang === "uz" ? "KLINIK TAJRIBA VA NATIJALAR" : lang === "ru" ? "КЛИНИЧЕСКИЕ РЕЗУЛЬТАТЫ" : "CLINICAL TRANSFORMATIONS"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
          {defaultTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
          {defaultSub}
        </p>

        {/* Case Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
          {Object.values(CASES).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseId(item.id);
                setSliderPos(50);
              }}
              className={`min-h-[40px] px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCaseId === item.id
                  ? "bg-primary text-white shadow-md scale-102"
                  : "bg-white text-slate-700 hover:text-primary hover:bg-slate-50 border border-slate-200 shadow-xs"
              }`}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>
      </div>

      <Interactive3DTilt
        maxTilt={6}
        perspective={1200}
        scale={1.01}
        glare={false}
        className="w-full"
      >
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label={a11y.beforeAfterSlider}
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative w-full aspect-[16/11] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 cursor-ew-resize select-none touch-pan-y focus:outline-none focus:ring-2 focus:ring-primary group"
        >
          {/* After Image (Background) */}
          <img
            src={activeCase.afterImg}
            alt={defaultAfter}
            width="960"
            height="600"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Before Image (Clipped overlay via modern CSS clip-path) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={activeCase.beforeImg}
              alt={defaultBefore}
              width="960"
              height="600"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(200,16,46,0.5)] pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            {/* Central Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-primary shadow-lg border-2 border-primary flex items-center justify-center font-bold text-xs sm:text-sm">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7l-4 4 4 4m8-8l4 4-4 4M4 11h16" />
              </svg>
            </div>
          </div>

          {/* Category Tag Top Center */}
          <div className="absolute top-2.5 sm:top-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 max-w-[80%]">
            <span className="px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white/90 text-primary backdrop-blur-md border border-slate-200 shadow-sm block truncate">
              {activeCase.tag[lang]}
            </span>
          </div>

          {/* Labels */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 pointer-events-none z-10 max-w-[42%]">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md shadow-xs border border-slate-700 block truncate">
              {defaultBefore}
            </span>
          </div>
          <div className="absolute bottom-2.5 sm:bottom-4 right-2.5 sm:right-4 pointer-events-none z-10 max-w-[42%]">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-primary text-white backdrop-blur-md shadow-sm border border-primary block truncate">
              {defaultAfter}
            </span>
          </div>
        </div>
      </Interactive3DTilt>
    </div>
  );
};

export default BeforeAfterSlider;
