import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import Interactive3DTilt from "./Interactive3DTilt";
import { IconInfoCircle } from "./MedicalIcons";

export const Interactive3DCostCalculator = () => {
  const { lang } = useLanguage();
  const { openBooking } = useBooking();

  const [selectedServiceId, setSelectedServiceId] = useState("implant");
  const [quantity, setQuantity] = useState(1);

  const servicesData = {
    implant: {
      id: "implant",
      title: { uz: "Dental Implantatsiya", ru: "Имплантация Зубов", en: "Dental Implants" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 1,
      max: 12,
      defaultQty: 1,
      durationPerUnit: { uz: "20 daqiqa", ru: "20 минут", en: "20 mins" },
      visits: { uz: "2-3 qabul", ru: "2-3 визита", en: "2-3 visits" },
      warranty: { uz: "Umrbod kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
      tech: { uz: "Premium Biotitan", ru: "Премиум Биотитан", en: "Premium Biotinium" },
    },
    aligners: {
      id: "aligners",
      title: { uz: "Shaffof Elaynerlar", ru: "Прозрачные Элайнеры", en: "Clear Aligners" },
      unitLabel: { uz: "jag'", ru: "челюсть", en: "arch(es)" },
      min: 1,
      max: 2,
      defaultQty: 2,
      durationPerUnit: { uz: "Har 2 haftada kapa", ru: "Смена кап каждые 2 недели", en: "Tray change every 2 wks" },
      visits: { uz: "1 oyda 1 marta nazorat", ru: "1 раз в месяц контроль", en: "1 monthly checkup" },
      warranty: { uz: "3D kafolatlangan prikus", ru: "3D гарантия прикуса", en: "3D bite warranty" },
      tech: { uz: "Ko'rinmas polimer", ru: "Невидимый полимер", en: "Invisible polymer" },
    },
    braces: {
      id: "braces",
      title: { uz: "Breket Tizimlari", ru: "Брекет-Системы", en: "Braces Systems" },
      unitLabel: { uz: "jag'", ru: "челюсть", en: "arch(es)" },
      min: 1,
      max: 2,
      defaultQty: 2,
      durationPerUnit: { uz: "O'rtacha 12-18 oy", ru: "В среднем 12-18 мес", en: "Avg 12-18 months" },
      visits: { uz: "Har 4-5 haftada aktivatsiya", ru: "Активация каждые 4-5 недель", en: "Activation every 4-5 wks" },
      warranty: { uz: "To'liq prikus kafolati", ru: "Гарантия ровного ряда", en: "Occlusion warranty" },
      tech: { uz: "Metall / Keramika / Sapfir", ru: "Металл / Керамика", en: "Metal / Ceramic" },
    },
    crowns: {
      id: "crowns",
      title: { uz: "Tsirkon Koronkalar", ru: "Циркониевые Коронки", en: "Zirconia Crowns" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 1,
      max: 16,
      defaultQty: 2,
      durationPerUnit: { uz: "3-5 kun", ru: "3-5 дней", en: "3-5 days" },
      visits: { uz: "2 qabul", ru: "2 визита", en: "2 visits" },
      warranty: { uz: "15+ yillik chidamlilik", ru: "Служба 15+ лет", en: "15+ years durability" },
      tech: { uz: "Zargarlik aniqligidagi monolit tsirkon", ru: "Высокоточный монолитный цирконий", en: "High-precision monolithic zirconia" },
    },
    veneers: {
      id: "veneers",
      title: { uz: "Keramik Vinirlar", ru: "Керамические Виниры", en: "Ceramic Veneers" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 2,
      max: 20,
      defaultQty: 6,
      durationPerUnit: { uz: "5-7 kun", ru: "5-7 дней", en: "5-7 days" },
      visits: { uz: "2 qabul", ru: "2 визита", en: "2 visits" },
      warranty: { uz: "10-15 yil porlash", ru: "10-15 лет белизны", en: "10-15 years shine" },
      tech: { uz: "E-max Press Keramika", ru: "E-max Пресс-керамика", en: "E-max Press Ceramic" },
    },
    whitening: {
      id: "whitening",
      title: { uz: "Tish Oqartirish", ru: "Отбеливание Зубов", en: "Teeth Whitening" },
      unitLabel: { uz: "seans", ru: "сеанс", en: "session" },
      min: 1,
      max: 2,
      defaultQty: 1,
      durationPerUnit: { uz: "45 daqiqa", ru: "45 минут", en: "45 mins" },
      visits: { uz: "1 qabul", ru: "1 визит", en: "1 visit" },
      warranty: { uz: "6-8 ton oqlik", ru: "На 6-8 тонов светлее", en: "6-8 shades lighter" },
      tech: { uz: "AirFlow & Professional Gel", ru: "AirFlow и Проф. Гель", en: "AirFlow & Pro Gel" },
    },
  };

  const current = servicesData[selectedServiceId] || servicesData.implant;

  const handleServiceChange = (id) => {
    setSelectedServiceId(id);
    setQuantity(servicesData[id].defaultQty);
  };

  const labels = {
    uz: {
      badge: "MUOLAJA BO'YICHA MA'LUMOT",
      title: "Vaqtingiz va Rejangizni Qulay Baholang",
      subtitle: "Kerakli muolajani tanlang, tishlar sonini belgilang va nechta tashrifda qancha vaqt ketishini oldindan bilib oling.",
      step1: "1. Xizmat turini tanlang:",
      step2: "2. Tishlar sonini belgilang:",
      resultTitle: "Davolash rejasi ma'lumotlari:",
      visits: "Klinikaga tashrif:",
      duration: "Muolaja vaqti:",
      warranty: "Kafolat:",
      tech: "Qo'llaniladigan texnologiya:",
      bookBtn: "Ushbu muolajaga qabulga yozilish →",
      individualNote: "Har bir insonning tish tuzilishi takrorlanmas. Yakuniy aniq reja shifokor bilan 3D ko'rikda belgilanadi.",
      decrease: "Miqdorni kamaytirish",
      increase: "Miqdorni oshirish",
    },
    ru: {
      badge: "ПАРАМЕТРЫ ЛЕЧЕНИЯ",
      title: "Удобный расчёт времени и параметров лечения",
      subtitle: "Выберите интересующую услугу и количество зубов, чтобы заранее узнать количество визитов и длительность процедур.",
      step1: "1. Выберите услугу:",
      step2: "2. Укажите количество зубов:",
      resultTitle: "Параметры плана лечения:",
      visits: "Визиты в клинику:",
      duration: "Время процедуры:",
      warranty: "Гарантия:",
      tech: "Используемая технология:",
      bookBtn: "Записаться на эту процедуру →",
      individualNote: "Каждая улыбка уникальна. Окончательный план лечения и материалы подбираются на личной 3D-консультации у врача.",
      decrease: "Уменьшить количество",
      increase: "Увеличить количество",
    },
    en: {
      badge: "TREATMENT PLANNER",
      title: "Estimate Your Treatment Timeline & Visits",
      subtitle: "Choose your desired treatment and tooth count to preview visit counts and estimated chair time before coming in.",
      step1: "1. Choose service:",
      step2: "2. Set tooth count:",
      resultTitle: "Treatment Plan Overview:",
      visits: "Clinic visits:",
      duration: "Procedure time:",
      warranty: "Warranty:",
      tech: "Technology used:",
      bookBtn: "Book Appointment for this Treatment →",
      individualNote: "Every patient is unique. Your exact tailored clinical plan and materials are finalized during your in-person 3D scan.",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
    },
  }[lang] || labels.uz;

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-2 uppercase">
            {labels.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {labels.subtitle}
          </p>
        </div>

        <Interactive3DTilt
          maxTilt={4}
          perspective={1400}
          scale={1.01}
          glare={false}
          className="w-full"
        >
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            {/* Step 1: Service Pills */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                {labels.step1}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {Object.values(servicesData).map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => handleServiceChange(svc.id)}
                    className={`px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all text-center leading-snug break-words ${
                      selectedServiceId === svc.id
                        ? "bg-primary text-white shadow-md scale-102"
                        : "bg-white text-slate-700 hover:text-primary hover:bg-slate-100 border border-slate-200 shadow-xs"
                    }`}
                  >
                    {svc.title[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity Slider / Buttons */}
            <div className="mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calculator-quantity-slider" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {labels.step2}
                </label>
                <span className="text-xs sm:text-sm font-bold text-primary">
                  {quantity} {current.unitLabel[lang]}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  aria-label={labels.decrease}
                  onClick={() => setQuantity(Math.max(current.min, quantity - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 text-slate-800 font-bold border border-slate-200 hover:bg-primary hover:text-white shadow-xs flex items-center justify-center transition-colors shrink-0"
                >
                  -
                </button>
                <input
                  id="calculator-quantity-slider"
                  type="range"
                  min={current.min}
                  max={current.max}
                  value={quantity}
                  aria-label={labels.step2}
                  aria-valuemin={current.min}
                  aria-valuemax={current.max}
                  aria-valuenow={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#C8102E] h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <button
                  type="button"
                  aria-label={labels.increase}
                  onClick={() => setQuantity(Math.min(current.max, quantity + 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 text-slate-800 font-bold border border-slate-200 hover:bg-primary hover:text-white shadow-xs flex items-center justify-center transition-colors shrink-0"
                >
                  +
                </button>
              </div>
            </div>

            {/* Summary Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs mb-6 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
                <span className="text-slate-500 block text-[11px]">{labels.visits}</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{current.visits[lang]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
                <span className="text-slate-500 block text-[11px]">{labels.duration}</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{current.durationPerUnit[lang]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
                <span className="text-slate-500 block text-[11px]">{labels.warranty}</span>
                <span className="font-bold text-emerald-600 mt-0.5 block">{current.warranty[lang]}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
                <span className="text-slate-500 block text-[11px]">{labels.tech}</span>
                <span className="font-bold text-primary mt-0.5 block">{current.tech[lang]}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-slate-500 text-center sm:text-left inline-flex items-center gap-1.5 justify-center sm:justify-start">
                <IconInfoCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{labels.individualNote}</span>
              </p>
              <button
                type="button"
                onClick={() => openBooking({ service: current.id, note: `${quantity} ${current.unitLabel.uz}` })}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-colgate active:scale-98 transition-all"
              >
                {labels.bookBtn}
              </button>
            </div>
          </div>
        </Interactive3DTilt>
      </div>
    </section>
  );
};

export default Interactive3DCostCalculator;
