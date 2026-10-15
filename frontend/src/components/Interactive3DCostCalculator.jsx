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
      bookingServiceId: "implant",
      specialty: { uz: "Dental Implantologiya", ru: "Имплантология", en: "Implantology" },
      title: { uz: "Dental Implantatsiya", ru: "Имплантация Зубов", en: "Dental Implants" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 1,
      max: 12,
      defaultQty: 1,
      durationPerUnit: { uz: "20-25 daqiqa", ru: "20-25 минут", en: "20-25 mins" },
      visits: { uz: "2-3 qabul", ru: "2-3 визита", en: "2-3 visits" },
      warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
      tech: { uz: "Premium Biotitan & 3D Navigatsiya", ru: "Премиум Биотитан и 3D Навигация", en: "Premium Biotinium & 3D Guided" },
    },
    crowns: {
      id: "crowns",
      bookingServiceId: "crowns",
      specialty: { uz: "Ortopediya", ru: "Ортопедия", en: "Orthopedics" },
      title: { uz: "Tsirkon Koronkalar", ru: "Циркониевые Коронки", en: "Zirconia Crowns" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 1,
      max: 16,
      defaultQty: 2,
      durationPerUnit: { uz: "3-5 kun", ru: "3-5 дней", en: "3-5 days" },
      visits: { uz: "2 qabul", ru: "2 визита", en: "2 visits" },
      warranty: { uz: "15+ yillik chidamlilik", ru: "Служба 15+ лет", en: "15+ years durability" },
      tech: { uz: "Monolit Tsirkon & CAD/CAM", ru: "Монолитный Цирконий и CAD/CAM", en: "Monolithic Zirconia & CAD/CAM" },
    },
    veneers: {
      id: "veneers",
      bookingServiceId: "veneers",
      specialty: { uz: "Ortopediya & Estetika", ru: "Ортопедия и Эстетика", en: "Aesthetic Orthopedics" },
      title: { uz: "Keramik Vinirlar E-max", ru: "Керамические Виниры E-max", en: "E-max Ceramic Veneers" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 2,
      max: 20,
      defaultQty: 6,
      durationPerUnit: { uz: "5-7 kun", ru: "5-7 дней", en: "5-7 days" },
      visits: { uz: "2 qabul", ru: "2 визита", en: "2 visits" },
      warranty: { uz: "10-15 yil doimiy jilo", ru: "10-15 лет сияния", en: "10-15 years shine" },
      tech: { uz: "Shveytsariya IPS E-max 0.3 mm", ru: "Швейцарский IPS E-max 0.3 мм", en: "Swiss IPS E-max 0.3 mm" },
    },
    dentures: {
      id: "dentures",
      bookingServiceId: "dentures",
      specialty: { uz: "Ortopediya & Protezlash", ru: "Ортопедическое Протезирование", en: "Prosthodontics" },
      title: { uz: "Zamonaviy Tish Protezlari", ru: "Зубные Протезы", en: "Modern Dentures" },
      unitLabel: { uz: "jag'", ru: "челюсть", en: "arch(es)" },
      min: 1,
      max: 2,
      defaultQty: 1,
      durationPerUnit: { uz: "3-5 kun", ru: "3-5 дней", en: "3-5 days" },
      visits: { uz: "2-3 qabul", ru: "2-3 визита", en: "2-3 visits" },
      warranty: { uz: "Ishonchli xizmat kafolati", ru: "Гарантия на конструкцию", en: "Structural warranty" },
      tech: { uz: "Elastik Neylon va Byugel", ru: "Эластичный Нейлон и Бюгель", en: "Flexible Nylon & Clasp" },
    },
    therapy: {
      id: "therapy",
      bookingServiceId: "therapy",
      specialty: { uz: "Terapevtik Stomatologiya", ru: "Терапевтическая Стоматология", en: "Restorative Dentistry" },
      title: { uz: "Og'riqsiz Karies & Terapiya", ru: "Лечение Кариеса Без Боли", en: "Pain-Free Caries Therapy" },
      unitLabel: { uz: "ta tish", ru: "зуб(а)", en: "tooth/teeth" },
      min: 1,
      max: 8,
      defaultQty: 1,
      durationPerUnit: { uz: "30-40 daqiqa", ru: "30-40 минут", en: "30-40 mins" },
      visits: { uz: "1 qabul", ru: "1 визит", en: "1 visit" },
      warranty: { uz: "5 yillik sifat kafolati", ru: "5 лет гарантии на пломбу", en: "5-year restoration warranty" },
      tech: { uz: "2 Bosqichli Gel Anesteziya & Nano-Kompozit", ru: "Двухэтапная Анестезия и Нанокомпозит", en: "Two-Stage Anesthesia & Nano-Composite" },
    },
    whitening: {
      id: "whitening",
      bookingServiceId: "whitening",
      specialty: { uz: "Terapiya & Gigiyena", ru: "Терапия и Гигиена", en: "Therapy & Hygiene" },
      title: { uz: "Xavfsiz Tish Oqartirish", ru: "Отбеливание Зубов", en: "Safe Teeth Whitening" },
      unitLabel: { uz: "seans", ru: "сеанс", en: "session" },
      min: 1,
      max: 2,
      defaultQty: 1,
      durationPerUnit: { uz: "45-60 daqiqa", ru: "45-60 минут", en: "45-60 mins" },
      visits: { uz: "1 qabul", ru: "1 визит", en: "1 visit" },
      warranty: { uz: "6-8 ton yorqinlik (2 yilgacha)", ru: "На 6-8 тонов светлее (до 2 лет)", en: "6-8 shades lighter (up to 2 yrs)" },
      tech: { uz: "Shveytsariya AirFlow & Rem-Gel", ru: "Швейцарский AirFlow и Рем-Гель", en: "Swiss AirFlow & Rem-Gel" },
    },
  };

  const current = servicesData[selectedServiceId] || servicesData.implant;

  const handleServiceChange = (id) => {
    setSelectedServiceId(id);
    setQuantity(servicesData[id].defaultQty);
  };

  const labels = {
    uz: {
      badge: "MUOLAJA TAFSILOTLARI",
      title: "Ortopediya, Terapiya va Implantologiya Rejasini Baholang",
      subtitle: "Kerakli yo'nalishni tanlang, tishlar sonini belgilang va tashriflar soni hamda muolaja davomiyligini oldindan bilib oling.",
      step1: "1. Mutaxassislik bo'yicha xizmatni tanlang:",
      step2: "2. Tishlar sonini belgilang:",
      resultTitle: "Rejalashtirilgan muolaja parametrlari:",
      specialtyLabel: "Yo'nalish:",
      visits: "Klinikaga tashrif:",
      duration: "Kreslodagi vaqt:",
      warranty: "Rasmiy kafolat:",
      tech: "Qo'llaniladigan texnologiya:",
      bookBtn: "Ushbu muolajaga onlayn qabulga yozilish →",
      individualNote: "Har bir insonning tish tuzilishi individual. Aniq reja Dr. MuhammadAli Davronov shaxsiy 3D ko'rigida tuziladi.",
      decrease: "Miqdorni kamaytirish",
      increase: "Miqdorni oshirish",
    },
    ru: {
      badge: "ПАРАМЕТРЫ ЛЕЧЕНИЯ",
      title: "Расчёт времени и параметров ортопедии, терапии и имплантации",
      subtitle: "Выберите направление лечения и количество зубов, чтобы заранее оценить длительность процедур и количество визитов.",
      step1: "1. Выберите услугу:",
      step2: "2. Укажите количество зубов:",
      resultTitle: "Параметры плана лечения:",
      specialtyLabel: "Специализация:",
      visits: "Визиты в клинику:",
      duration: "Время в кресле:",
      warranty: "Официальная гарантия:",
      tech: "Используемые технологии:",
      bookBtn: "Записаться на этот приём онлайн →",
      individualNote: "Анатомия каждого пациента уникальна. Точный план формируется на личном 3D-осмотре у доктора МухаммадАли Давронова.",
      decrease: "Уменьшить количество",
      increase: "Увеличить количество",
    },
    en: {
      badge: "TREATMENT TIMELINE",
      title: "Plan Your Orthopedics, Therapy & Implant Care",
      subtitle: "Select your desired treatment and tooth count to preview chair time and visits before your personal consultation.",
      step1: "1. Select specialty treatment:",
      step2: "2. Specify number of teeth:",
      resultTitle: "Planned clinical parameters:",
      specialtyLabel: "Specialty:",
      visits: "Clinic visits:",
      duration: "Chair time:",
      warranty: "Official warranty:",
      tech: "Clinical protocol:",
      bookBtn: "Book This Treatment Online →",
      individualNote: "Every smile is anatomically unique. Finalized treatment plans are confirmed during in-person 3D digital consultation.",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
    },
  }[lang] || labels.uz;

  return (
    <section aria-labelledby="cost-calc-heading" className="w-full py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-red-50 border border-red-200 shadow-2xs mb-3 uppercase">
            {labels.badge}
          </span>
          <h2 id="cost-calc-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <Interactive3DTilt
          maxTilt={4}
          perspective={1000}
          scale={1.01}
          glare={false}
          className="max-w-4xl mx-auto"
        >
          <div className="p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col gap-6 sm:gap-8">
            {/* Step 1: Select Service */}
            <div>
              <span className="block text-xs sm:text-sm font-bold text-slate-900 mb-3">
                {labels.step1}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {Object.values(servicesData).map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => handleServiceChange(srv.id)}
                      className={`min-h-[46px] p-2 sm:p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-sm scale-102"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-primary/50 hover:bg-red-50/30"
                      }`}
                    >
                      <span className="block leading-tight">{srv.title[lang]}</span>
                      <span className={`text-[10px] mt-0.5 ${isSelected ? "text-red-100" : "text-slate-400"}`}>
                        {srv.specialty[lang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider Quantity */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {labels.step2}
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-primary bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  {quantity} {current.unitLabel[lang]}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(current.min, q - 1))}
                  disabled={quantity <= current.min}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 font-bold text-lg flex items-center justify-center shrink-0 cursor-pointer shadow-2xs"
                  aria-label={labels.decrease}
                >
                  -
                </button>

                <input
                  type="range"
                  min={current.min}
                  max={current.max}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="flex-1 accent-primary h-2 bg-slate-200 rounded-lg cursor-pointer"
                  aria-label={labels.step2}
                />

                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(current.max, q + 1))}
                  disabled={quantity >= current.max}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 font-bold text-lg flex items-center justify-center shrink-0 cursor-pointer shadow-2xs"
                  aria-label={labels.increase}
                >
                  +
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-red-50/50 via-white to-slate-50 border border-red-100 flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-red-100">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {labels.resultTitle}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {current.title[lang]} ({quantity} {current.unitLabel[lang]})
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase block truncate">
                    {labels.visits}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 block">
                    {current.visits[lang]}
                  </span>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase block truncate">
                    {labels.duration}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 block">
                    {current.durationPerUnit[lang]}
                  </span>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase block truncate">
                    {labels.warranty}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700 mt-1 block">
                    {current.warranty[lang]}
                  </span>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase block truncate">
                    {labels.tech}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-primary mt-1 block truncate">
                    {current.tech[lang]}
                  </span>
                </div>
              </div>

              {/* Individual Note */}
              <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
                <IconInfoCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{labels.individualNote}</span>
              </div>

              {/* Online Booking CTA with service pre-selected */}
              <button
                type="button"
                onClick={() => openBooking(current.bookingServiceId)}
                className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-colgate hover:shadow-colgate-lg active:scale-98 transition-all text-center flex items-center justify-center gap-2 mt-2"
              >
                <span>{labels.bookBtn}</span>
              </button>
            </div>
          </div>
        </Interactive3DTilt>
      </div>
    </section>
  );
};

export default Interactive3DCostCalculator;
