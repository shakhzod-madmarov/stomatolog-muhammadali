export const BOOKING_SERVICES = [
  {
    id: "consultation",
    name: {
      uz: "Bepul Konsultatsiya & 3D Diagnostika",
      ru: "Бесплатная Консультация & 3D Диагностика",
      en: "Free Consultation & 3D Diagnostics",
    },
    specialty: "all",
    duration: 30,
    price: { uz: "Bepul", ru: "Бесплатно", en: "Free" },
  },
  {
    id: "implant",
    name: {
      uz: "Dental Implantologiya (Biotitan Implant)",
      ru: "Дентальная Имплантология (Биотитан)",
      en: "Dental Implantology (Biotitanium)",
    },
    specialty: "implantology",
    duration: 45,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "crowns",
    name: {
      uz: "Ortopediya: Sirkon va Keramika Koronkalar",
      ru: "Ортопедия: Циркониевые и Керамические Коронки",
      en: "Orthopedics: Zirconia & Ceramic Crowns",
    },
    specialty: "orthopedia",
    duration: 40,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "veneers",
    name: {
      uz: "Ortopediya: Estetik Keramik Vinirlar E-max",
      ru: "Ортопедия: Керамические Виниры E-max",
      en: "Orthopedics: Aesthetic E-max Veneers",
    },
    specialty: "orthopedia",
    duration: 45,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "dentures",
    name: {
      uz: "Ortopediya: Zamonaviy Yengil Tish Protezlari",
      ru: "Ортопедия: Современные Зубные Протезы",
      en: "Orthopedics: Modern Ergonomic Dentures",
    },
    specialty: "orthopedia",
    duration: 40,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "therapy",
    name: {
      uz: "Terapiya: 100% Og'riqsiz Karies va Plombalash",
      ru: "Терапия: 100% Безболезненное Лечение и Пломбирование",
      en: "Therapy: 100% Pain-Free Caries Care & Fillings",
    },
    specialty: "therapy",
    duration: 45,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "endodontics",
    name: {
      uz: "Terapiya: Tish Kanallarini Zich Plombalash (Endodontiya)",
      ru: "Терапия: Лечение Корневых Каналов (Эндодонтия)",
      en: "Therapy: Root Canal Treatment (Endodontics)",
    },
    specialty: "therapy",
    duration: 50,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
  {
    id: "whitening",
    name: {
      uz: "Terapiya / Gigiyena: Xavfsiz Tish Oqartirish & AirFlow",
      ru: "Терапия / Гигиена: Профессиональное Отбеливание & AirFlow",
      en: "Therapy / Hygiene: Safe Teeth Whitening & AirFlow",
    },
    specialty: "therapy",
    duration: 60,
    price: { uz: "Ko'rikdan so'ng", ru: "После осмотра", en: "After assessment" },
  },
];

export const normalizeBookingServiceId = (id) => {
  if (!id) return "consultation";
  const map = {
    "sirkon-keramika-koronka": "crowns",
    "tsirkon-keramika-koronka": "crowns",
    crowns: "crowns",
    "dental-implant": "implant",
    implant: "implant",
    vinirlar: "veneers",
    veneers: "veneers",
    protezlar: "dentures",
    dentures: "dentures",
    "ogriqsiz-terapiya": "therapy",
    therapy: "therapy",
    endodontics: "endodontics",
    "tish-oqartirish": "whitening",
    whitening: "whitening",
    "digital-dentistry": "consultation",
    consultation: "consultation",
  };
  return map[id] || (BOOKING_SERVICES.some((s) => s.id === id) ? id : "consultation");
};
