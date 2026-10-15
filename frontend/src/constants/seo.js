import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. MuhammadAli Davronov — Vrach Stomatolog | Ortopediya, Terapiya, Implantologiya | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov — ${years} yillik tajribaga ega shifokor-stomatolog. Andijon davlat tibbiyot instituti bitiruvchisi. Ortopediya (tsirkon, vinirlar), terapiya (og'riqsiz davolash), dental implantologiya. DM Stomatologiya, Andijon (Navoiy shox 91). Tel: +998 97 676 01 01.`,
    },
    ru: {
      title: "Д-р МухаммадАли Давронов — Врач-Стоматолог | Ортопедия, Терапия, Имплантология | DM Stomatology",
      description: `Врач-стоматолог Д-р МухаммадАли Давронов — ${years} лет успешной клинической практики. Выпускник АГМИ. Ортопедия (коронки, виниры), лечение зубов без боли, имплантация. Андижан, проспект Навои 91. Тел: +998 97 676 01 01.`,
    },
    en: {
      title: "Dr. MuhammadAli Davronov — Dental Specialist | Orthopedics, Therapy & Implantology | DM Stomatology",
      description: `Dr. MuhammadAli Davronov — Dental specialist with ${years} years of clinical excellence. Graduate of ASMI. Orthopedics, pain-free therapy, dental implants, zirconia crowns and veneers. Andijan, 91 Navoi Ave. Tel: +998 97 676 01 01.`,
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | DM Stomatologiya",
      description:
        "Ortopediya (tsirkon koronkalar, vinirlar, protezlar), terapiya (og'riqsiz davolash, endodontiya) va dental implantologiya. Dr. MuhammadAli Davronov shaxsiy qabuli.",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р МухаммадАли Давронов | DM Stomatology",
      description:
        "Ортопедия (циркониевые коронки, виниры, протезы), терапия (лечение без боли, эндодонтия) и дентальная имплантация. Персональный приём в Андижане.",
    },
    en: {
      title: "Dental Treatments & Services — Dr. MuhammadAli Davronov | DM Stomatology",
      description:
        "Orthopedics (zirconia crowns, veneers, dentures), therapy (pain-free fillings, endodontics), and dental implants by Dr. MuhammadAli Davronov.",
    },
  },
  about: {
    uz: {
      title: "Dr. MuhammadAli Davronov Haqida — 5 Yillik Klinik Tajriba | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov: Andijon davlat tibbiyot instituti bitiruvchisi, ${years} yillik tajribali shifokor-stomatolog, DM Stomatologiya asoschisi. Ortopediya, terapiya va implantologiya.`,
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Врач-Стоматолог, Ортопед, Имплантолог",
      description: `О докторе МухаммадАли Давронове: выпускник АГМИ, ${years} лет клинической практики, современные технологии протезирования и бережное лечение зубов в Андижане.`,
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Dental Specialist & Implantologist",
      description: `Learn about Dr. MuhammadAli Davronov: graduate of ASMI, ${years} years of dental practice, tooth restoration, and aesthetic dentistry in Andijan.`,
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — DM Stomatologiya | Dr. MuhammadAli Davronov (Andijon)",
      description:
        "Dr. MuhammadAli Davronov qabuliga yozilish — DM Stomatologiya (Andijon, Navoiy shox 91-uy, SARIQ BOLA pizza yonida). Tel: +998 97 676 01 01, Instagram: @dm.muxammadali.",
    },
    ru: {
      title: "Контакты и Локация — DM Stomatology | Д-р МухаммадАли Давронов (Андижан)",
      description:
        "Запись на личный приём к Д-ру МухаммадАли Давронову — клиника DM Stomatology (Андижан, проспект Навои 91, рядом с SARIQ BOLA). Телефон: +998 97 676 01 01, Instagram: @dm.muxammadali.",
    },
    en: {
      title: "Contact & Location — DM Stomatology | Dr. MuhammadAli Davronov (Andijan)",
      description:
        "Book personal appointment with Dr. MuhammadAli Davronov — DM Stomatology (Andijan, 91 Navoi Avenue, next to SARIQ BOLA). Phone: +998 97 676 01 01, Instagram: @dm.muxammadali.",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. MuhammadAli Davronov | DM Stomatologiya",
      description:
        "Dr. MuhammadAli Davronov qabuliga qulay vaqtni tanlang. Ortopediya, terapiya, implantologiya va navbatsiz shaxsiy qabul. Tel: +998 97 676 01 01.",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р МухаммадАли Давронов | DM Stomatology",
      description:
        "Удобная онлайн-запись на персональный приём к Д-ру МухаммадАли Давронову без очередей. Протезирование, лечение без боли и импланты. Тел: +998 97 676 01 01.",
    },
    en: {
      title: "Book Online Appointment — Dr. MuhammadAli Davronov | DM Stomatology",
      description:
        "Reserve your personal consultation with Dr. MuhammadAli Davronov. Fast online booking, orthopedics, therapy, implants, and gentle care. Phone: +998 97 676 01 01.",
    },
  },
  notFound: {
    uz: {
      title: "Sahifa topilmadi (404) — Dr. MuhammadAli Davronov",
      description: "Siz qidirgan sahifa topilmadi. Bosh sahifaga qaytishingiz mumkin.",
    },
    ru: {
      title: "Страница не найдена (404) — Д-р МухаммадАли Давронов",
      description: "Запрошенная страница не найдена. Вернитесь на главную страницу.",
    },
    en: {
      title: "Page Not Found (404) — Dr. MuhammadAli Davronov",
      description: "The page you are looking for does not exist. Please return to the homepage.",
    },
  },
};
