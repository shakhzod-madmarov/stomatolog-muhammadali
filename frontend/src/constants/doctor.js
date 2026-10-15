/**
 * Single source of truth for Dr. MuhammadAli Davronov's credentials, career facts, and clinic hours.
 * Clinic: DM Stomatologiya (DM | Stomatology), Andijon
 */
export const DOCTOR_INFO = {
  name: "Dr. MuhammadAli Davronov",
  shortName: "Dr. Muhammad-Ali",
  fullName: "MuhammadAli Davronov",
  titleLang: {
    uz: "Shifokor-Stomatolog · Ortopediya, Terapiya va Implantologiya",
    ru: "Врач-Стоматолог · Ортопедия, Терапия и Имплантология",
    en: "Dental Specialist · Orthopedics, Therapy & Implantology",
  },
  titles: {
    uz: "Shifokor-Stomatolog · Ortopediya, Terapiya va Implantologiya",
    ru: "Врач-Стоматолог · Ортопедия, Терапия и Имплантология",
    en: "Dental Specialist · Orthopedics, Therapy & Implantology",
  },
  specialtiesText: "Ortopediya · Terapiya · Implantologiya · Tsirkon & Vinirlar · Og'riqsiz Davolash",
  specialtiesTextLang: {
    uz: "Ortopediya (Tsirkon & E-max) · Terapiya (Og'riqsiz davolash) · Implantologiya · Estetik Vinirlar · Badiiy Restavratsiya",
    ru: "Ортопедия (Цирконий и E-max) · Терапия (Лечение без боли) · Имплантология · Эстетические Виниры · Художественная Реставрация",
    en: "Orthopedics (Zirconia & E-max) · Therapy (Painless Care) · Implantology · Aesthetic Veneers · Artistic Restoration",
  },
  education: {
    uz: "Andijon davlat tibbiyot instituti (ADTI)",
    ru: "Андижанский государственный медицинский институт (АГМИ)",
    en: "Andijan State Medical Institute (ASMI)",
  },
  educationFull: {
    uz: "Andijon davlat tibbiyot instituti stomatologiya fakulteti bitiruvchisi",
    ru: "Выпускник стоматологического факультета Андижанского государственного медицинского института",
    en: "Graduate of the Faculty of Dentistry, Andijan State Medical Institute",
  },
  careerStartYear: 2021, // 5+ years of clinical experience in 2026
  experienceYears: 5,
  clinicName: "DM Stomatologiya",
  clinicBrand: "DM | Stomatology",
  clinicLocation: {
    uz: "DM Stomatologiya · Andijon shahar, Navoiy shoh ko'chasi 91-uy",
    ru: "DM Stomatology · г. Андижан, проспект Навои, 91-дом",
    en: "DM Stomatology · 91 Navoi Avenue, Andijan",
  },
  addressShort: {
    uz: "Andijon shahar, Navoiy shoh ko'chasi 91-uy",
    ru: "г. Андижан, проспект Навои 91-дом",
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
  telegramUrl: "https://t.me/dm_muxammadali",
  telegramHandle: "@dm_muxammadali",
  instagramUrl: "https://www.instagram.com/dm.muxammadali/",
  instagramHandle: "@dm.muxammadali",
  yandexMapsUrl: "https://yandex.uz/maps/org/stomatologiya/214793392317/",
  email: "dr@gmail.com",
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
  if (lang === "ru") return `${years} Лет Опыта · Ортопедия, Терапия, Имплантология · Андижан`;
  if (lang === "en") return `${years} Years Experience · Orthopedics, Therapy, Implantology · Andijan`;
  return `${years} Yillik Tajriba · Ortopediya, Terapiya, Implantologiya · Andijon`;
};

export const getServicesTag = (lang = "uz") => {
  const years = getYearsOfExperience();
  if (lang === "ru") return `${years} ЛЕТ ПРАКТИКИ · ОРТОПЕДИЯ, ТЕРАПИЯ И ИМПЛАНТОЛОГИЯ`;
  if (lang === "en") return `${years} YEARS EXPERIENCE · ORTHOPEDICS, THERAPY & IMPLANTOLOGY`;
  return `${years} YILLIK TAJRIBA · ORTOPEDIYA, TERAPIYA VA IMPLANTOLOGIYA`;
};
