import { assets } from "../assets/assets.js";

/**
 * Single source of truth for Dr. MuhammadAli Davronov's credentials, career facts, and clinic hours.
 * Clinic: DM Stomatologiya (DM | Stomatology), Andijon
 */
export const DOCTOR_INFO = {
  name: "Dr. MuhammadAli Davronov",
  shortName: "Dr. Muhammad-Ali",
  fullName: "MuhammadAli Davronov",
  titleLang: {
    uz: "Shifokor-Stomatolog · Implantologiya, Ortopediya va Terapiya",
    ru: "Врач-Стоматолог · Имплантология, Ортопедия и Терапия",
    en: "Dental Specialist · Implantology, Orthopedics & Therapy",
  },
  titles: {
    uz: "Shifokor-Stomatolog · Implantologiya, Ortopediya va Terapiya",
    ru: "Врач-Стоматолог · Имплантология, Ортопедия и Терапия",
    en: "Dental Specialist · Implantology, Orthopedics & Therapy",
  },
  specialtiesText: "Implantologiya · Ortopediya · Terapiya · Sirkon & Vinirlar · Og'riqsiz Davolash",
  specialtiesTextLang: {
    uz: "Implantologiya (Biotitan) · Ortopediya (Sirkon & E-max) · Terapiya (Og'riqsiz davolash) · Estetik Vinirlar",
    ru: "Имплантология (Биотитан) · Ортопедия (Цирконий и E-max) · Терапия (Лечение без боли) · Эстетические Виниры",
    en: "Implantology (Biotitanium) · Orthopedics (Zirconia & E-max) · Therapy (Painless Care) · Aesthetic Veneers",
  },
  education: {
    uz: "Andijon davlat tibbiyot instituti — Yuz-jag' jarrohligi klinik ordinatori",
    ru: "Андижанский государственный медицинский институт — Клинический ординатор ЧЛХ (АГМИ)",
    en: "Andijan State Medical Institute — Clinical Resident in Oral & Maxillofacial Surgery",
  },
  educationFull: {
    uz: "Andijon davlat tibbiyot instituti (Yuz-jag' jarrohligi klinik ordinatori) hamda DM Stomatologiya shifokor-stomatologi",
    ru: "Клинический ординатор по челюстно-лицевой хирургии в АГМИ. Врач-стоматолог клиники DM Stomatology",
    en: "Clinical Resident in Oral & Maxillofacial Surgery at ASMI. Dental specialist at DM Stomatology",
  },
  residency: {
    institution: {
      uz: "Andijon davlat tibbiyot instituti (ADTI)",
      ru: "Андижанский государственный медицинский институт (АГМИ)",
      en: "Andijan State Medical Institute (ASMI)",
    },
    specialty: {
      uz: "Yuz-jag' jarrohligi",
      ru: "Челюстно-лицевая хирургия (ЧЛХ)",
      en: "Oral & Maxillofacial Surgery (OMFS)",
    },
    status: {
      uz: "Klinik ordinator",
      ru: "Клинический ординатор",
      en: "Clinical Resident",
    },
  },
  careerStartYear: 2021, // 5+ years of clinical experience in 2026
  experienceYears: 5,
  certificationsCount: 3,
  accreditations: [
    "DIO Implant Digital System",
    "Dentium Implant System (South Korea)",
    "Moissanite One-Stage Implantology",
  ],
  clinicName: "DM Stomatologiya",
  clinicBrand: "DM | Stomatology",
  clinicLocation: {
    uz: "DM Stomatologiya · Andijon shahri, Prospekt, Navoiy shoh ko'chasi 91-uy",
    ru: "DM Stomatology · г. Андижан, проспект, Навои, дом 91",
    en: "DM Stomatology · 91 Navoi Avenue, Andijan",
  },
  addressShort: {
    uz: "Andijon shahri, Prospekt, Navoiy shoh ko'chasi 91-uy",
    ru: "г. Андижан, проспект, Навои, дом 91",
    en: "91 Navoi Avenue, Andijan",
  },
  phone: "+998 (97) 676-01-01",
  phoneDisplay: "+998 97 676 01 01",
  phoneHref: "tel:+998976760101",
  phoneRaw: "+998976760101",
  secondaryPhone: "+998 (97) 676-01-01",
  secondaryPhoneDisplay: "+998 97 676 01 01",
  secondaryPhoneHref: "tel:+998976760101",
  secondaryPhoneRaw: "+998976760101",
  telegramUrl: "https://t.me/+998976760101",
  telegramHandle: "+998 97 676 01 01",
  instagramUrl: "https://www.instagram.com/dm.muxammadali/",
  instagramHandle: "@dm.muxammadali",
  yandexMapsUrl: "https://yandex.uz/maps/-/CXBjRG4Q",
  googleMapsUrl: "https://share.google/BCXsYyZgbu8x3mQ4Z",
  googleKgmid: "/g/11nr3dmbmh",
  plusCode: "Q9H3+8WG, Andijan",
  email: "muhammadali.medinson@gmail.com",
  siteUrl: "https://stomatolog-muhammadali.uz",
  medinsonSiteId: "ny54hk66wu",
  medinsonLicense: "Medinson-Dentist-20261014-123316-A9BE4F",
};

export const getYearsOfExperience = () => 5;

export const OPENING_HOURS = {
  weekdays: { opens: "08:30", closes: "18:30" },
  labels: {
    uz: {
      days: "Dushanba – Shanba",
      hours: "08:30 – 18:30",
      full: "Dushanba – Shanba: 08:30 – 18:30",
      sunday: "Yakshanba — oldindan yozilish bo'yicha",
    },
    ru: {
      days: "Понедельник – Суббота",
      hours: "08:30 – 18:30",
      full: "Понедельник – Суббота: 08:30 – 18:30",
      sunday: "Воскресенье — по предварительной записи",
    },
    en: {
      days: "Monday – Saturday",
      hours: "08:30 – 18:30",
      full: "Monday – Saturday: 08:30 – 18:30",
      sunday: "Sunday — by prior appointment",
    },
  },
};

export const getExperienceText = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} лет клинического опыта`;
  if (lang === "en") return `${years} Years of Clinical Excellence`;
  return `${years} yillik klinik tajriba`;
};

export const getExperienceBadge = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} Лет Опыта`;
  if (lang === "en") return `${years} Years Experience`;
  return `${years} Yillik Tajriba`;
};

export const getHeroTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} Лет Опыта · Имплантология, Ортопедия, Терапия · Андижан`;
  if (lang === "en") return `${years} Years Experience · Implantology, Orthopedics, Therapy · Andijan`;
  return `${years} Yillik Tajriba · Implantologiya, Ortopediya, Terapiya · Andijon`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} ЛЕТ ПРАКТИКИ · ИМПЛАНТОЛОГИЯ, ОРТОПЕДИЯ И ТЕРАПИЯ`;
  if (lang === "en") return `${years} YEARS EXPERIENCE · IMPLANTOLOGY, ORTHOPEDICS & THERAPY`;
  return `${years} YILLIK TAJRIBA · IMPLANTOLOGIYA, ORTOPEDIYA VA TERAPIYA`;
};

/**
 * Verified Official Certificates for Dr. MuhammadAli Davronov
 */
export const CERTIFICATES = [
  {
    id: "dio-implant",
    title: {
      uz: "DIO IMPLANT — Raqamli Implantologiya va To'liq Klinik Keyslar",
      ru: "DIO IMPLANT — Цифровая имплантология и разбор полных клинических кейсов",
      en: "DIO IMPLANT — Digital Implantology & Complete Clinical Cases",
    },
    courseTopic: {
      uz: "«Raqamli Implantologiya va To'liq Klinik Keyslar Tahlili»",
      ru: "«Цифровая имплантология и разбор полных клинических кейсов»",
      en: "Digital Implantology & Complete Clinical Case Studies",
    },
    system: "DIO Implant System",
    issuer: {
      uz: "DIO IMPLANT (70 dan ortiq davlatda qo'llaniladigan xalqaro implant tizimi)",
      ru: "DIO IMPLANT (Международная цифровая система имплантов в 70+ странах)",
      en: "DIO IMPLANT (Renowned dental implant solution in over 70 countries)",
    },
    speakers: {
      uz: "Spikerlar: Dr. O'tkirbek Vohidov, Dr. Faridun Axtamov",
      ru: "Спикеры: Др. Уткирбек Вахидов, Др. Фаридун Ахтамов",
      en: "Speakers: Dr. Utkirbek Vakhidov, Dr. Faridun Akhtamov",
    },
    location: {
      uz: "Andijon shahri",
      ru: "г. Андижан",
      en: "Andijan",
    },
    date: {
      uz: "1-Fevral",
      ru: "1 февраля",
      en: "February 1",
    },
    badge: {
      uz: "Raqamli 3D Navigatsiya",
      ru: "Цифровая 3D Навигация",
      en: "Digital 3D Guided",
    },
    image: assets.cert_dio_implant,
    orientation: "portrait",
    aspectRatio: "717/1024",
    highlights: {
      uz: [
        "3D navigatsion jarrohlik shablonlari asosida implant o'rnatish",
        "To'liq tishsizlik (adentiya) holatlarida murakkab keyslar yechimi",
        "Jag' suyagi va asab tolalarini 100% xavfsiz himoyalash",
      ],
      ru: [
        "Установка имплантов по 3D хирургическим шаблонам с точностью до микрон",
        "Разбор и решение сложных клинических кейсов при полной адентии",
        "Максимальная безопасность анатомических структур и нервных каналов",
      ],
      en: [
        "Sub-millimeter 3D computer-guided surgical template implant placement",
        "Complex clinical case restoration for full-arch edentulism",
        "Total protection of vital anatomical nerves and bone structures",
      ],
    },
    description: {
      uz: "DIO Implant xalqaro tizimi bo'yicha 3D kompyuter-navigatsiyasi va murakkab to'liq adentiya keyslarini asoratsiz tiklashga bag'ishlangan seminar sertifikati.",
      ru: "Официальный сертификат о прохождении курса по цифровой навигационной имплантологии и решению комплексных клинических кейсов на системе DIO Implant.",
      en: "Official certificate for the completion of the Digital Implantology seminar focusing on 3D computer-guided protocols and complex clinical case analysis.",
    },
  },
  {
    id: "dentium-implant",
    title: {
      uz: "DENTIUM IMPLANT SYSTEM — Boshlang'ich va Jarrohlik Kursi",
      ru: "DENTIUM IMPLANT SYSTEM — Базовый хирургический курс по имплантации",
      en: "DENTIUM IMPLANT SYSTEM — Basic Course for Implantation",
    },
    courseTopic: {
      uz: "«Dentium Implant Tizimida Implantatsiyaning Asosiy Kursi»",
      ru: "«Basic course for implantation of Dentium Implant System»",
      en: "Basic Course for Implantation of Dentium Implant System",
    },
    system: "Dentium Implant System (South Korea)",
    issuer: {
      uz: "Dentium Uzbekistan (Dentium Implant Since 2007)",
      ru: "Dentium Uzbekistan (Dentium Implant 2007)",
      en: "Dentium Uzbekistan (Dentium Implant 2007)",
    },
    speakers: {
      uz: "KOL (Key Opinion Leader) Dr. Yusupov U.",
      ru: "KOL (Key Opinion Leader) Др. Юсупов У.",
      en: "KOL (Key Opinion Leader) Dr. Yusupov U.",
    },
    location: {
      uz: "O'zbekiston",
      ru: "Узбекистан",
      en: "Uzbekistan",
    },
    date: {
      uz: "9-10 Dekabr 2023",
      ru: "9-10 декабря 2023",
      en: "9-10 December 2023",
    },
    badge: {
      uz: "Dentium Tizimi (Koreya)",
      ru: "Система Dentium (Корея)",
      en: "Dentium System (Korea)",
    },
    image: assets.cert_dentium,
    orientation: "landscape",
    aspectRatio: "1024/693",
    highlights: {
      uz: [
        "Janubiy Koreyaning premium Dentium biotitan implantatlarini to'g'ri o'rnatish",
        "Bemor suyagi bilan 99.2% muvaffaqiyatli osteointegratsiya",
        "Xalqaro jarrohlik xavfsizlik va sterilizatsiya protokollari",
      ],
      ru: [
        "Хирургические протоколы премиальной южнокорейской системы Dentium",
        "Надёжная остеоинтеграция и биосовместимость с костной тканью",
        "Безупречная долговечность и приживаемость имплантов",
      ],
      en: [
        "Surgical placement protocols for South Korea's premium Dentium titanium implants",
        "High-affinity osseointegration and long-term bone preservation",
        "International clinical safety and aseptic standards",
      ],
    },
    description: {
      uz: "Janubiy Koreyaning dunyoga mashhur Dentium biotitan implantatlarini jarrohlik yo'li bilan o'rnatish va mustahkam suyak integratsiyasini ta'minlash bo'yicha amaliy sertifikat.",
      ru: "Сертификат об успешном завершении базового практического курса по дентальной имплантации на системе Dentium Implant System.",
      en: "Certified clinical qualification covering the fundamentals of surgical implantation and bone biology on the Dentium Implant System.",
    },
  },
  {
    id: "one-stage-implant",
    title: {
      uz: "MOISSANITE DENTAL — One-Stage Implant (Bir Bosqichli Implantatsiya)",
      ru: "MOISSANITE DENTAL — One-Stage Implant (Одноэтапная имплантация)",
      en: "MOISSANITE DENTAL — One-Stage Implant (Immediate Placement)",
    },
    courseTopic: {
      uz: "«ONE-STAGE IMPLANT — 8 Hours Intensive»",
      ru: "«ONE-STAGE IMPLANT — 8 часов интенсивной практики»",
      en: "ONE-STAGE IMPLANT — 8 Hours Intensive Hands-On",
    },
    system: "One-Stage Immediate Implant Protocol",
    issuer: {
      uz: "Moissanite Dental (Certificate of Completion, Since 2023)",
      ru: "ООО Moissanite Dental (Certificate of Completion)",
      en: "Moissanite Dental LLC (Certificate of Completion)",
    },
    speakers: {
      uz: "Trener: Dr. E. Mustafaev",
      ru: "Тренер: Др. Э. Мустафаев",
      en: "Trainer: Dr. E. Mustafaev",
    },
    location: {
      uz: "O'zbekiston",
      ru: "Узбекистан",
      en: "Uzbekistan",
    },
    date: {
      uz: "22 Iyun 2024",
      ru: "22 июня 2024",
      en: "22 June 2024",
    },
    badge: {
      uz: "Bir Bosqichli (Tezkor)",
      ru: "Одноэтапная (Быстрая)",
      en: "One-Stage (Immediate)",
    },
    image: assets.cert_one_stage,
    orientation: "portrait",
    aspectRatio: "677/1024",
    highlights: {
      uz: [
        "Tish sug'urilgan zahoti o'sha joyga implantat o'rnatish texnikasi",
        "Oylab kutmasdan darhol estetik tish (vaqtinchalik koronka) o'rnatish",
        "Milk to'qimasining tabiiy shaklini saqlab qolish",
      ],
      ru: [
        "Установка импланта сразу в лунку удалённого зуба за 1 визит",
        "Немедленная нагрузка временной коронкой — улыбка без пауз и ожидания",
        "Сохранение естественного контура десны и эстетики улыбки",
      ],
      en: [
        "Immediate placement into fresh extraction sockets in a single visit",
        "Immediate provisional aesthetic loading without waiting months",
        "Preservation of natural gingival contours and pink aesthetics",
      ],
    },
    description: {
      uz: "Tish sug'urilgan kunda o'sha zahoti implantat qo'yish va bemorni yangi tish bilan chiqarish (bir bosqichli amaliyot) bo'yicha 8 soatlik intensiv mahorat kursi.",
      ru: "Интенсивный 8-часовой практический курс по протоколам немедленной имплантации и ранней функционально-эстетической нагрузки.",
      en: "Intensive 8-hour certification covering advanced immediate extraction socket implant placement and same-day aesthetic restoration.",
    },
  },
];
