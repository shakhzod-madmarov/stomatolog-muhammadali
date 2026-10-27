import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. MuhammadAli Davronov — Vrach Stomatolog | Ortopediya, Terapiya, Implantologiya | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov — ${years} yillik tajribaga ega shifokor-stomatolog. Ortopediya (sirkon, vinirlar), terapiya (og'riqsiz davolash), dental implantologiya. DM Stomatologiya, Andijon shahri, Prospekt Navoiy shoh ko'chasi 91-uy. Tel: +998 97 676 01 01.`,
      keywords: "dr muhammadali davronov, stomatolog muhammadali, stomatolog andijon, yaxshi stomatolog andijon, dm stomatologiya, ortopediya andijon, tish davolash andijon, ogriqsiz tish davolash, sirkon koronkalar andijon, vinirlar andijon, implantologiya andijon, dental implant, navoiy shoh 91",
    },
    ru: {
      title: "Д-р МухаммадАли Давронов — Врач-Стоматолог | Ортопедия, Терапия, Имплантология | DM Stomatology",
      description: `Врач-стоматолог Д-р МухаммадАли Давронов — ${years} лет успешной клинической практики. Выпускник АГМИ. Ортопедия (коронки, виниры), лечение зубов без боли, имплантация. Андижан, проспект Навои, 91. Тел: +998 97 676 01 01.`,
      keywords: "доктор мухаммадали давронов, стоматолог мухаммадали, стоматолог андижан, стоматология андижан, dm stomatology, ортопедия андижан, лечение зубов без боли, циркониевые коронки андижан, виниры e-max, имплантация зубов андижан, зубной врач андижан, проспект навои 91",
    },
    en: {
      title: "Dr. MuhammadAli Davronov — Dental Specialist | Orthopedics, Therapy & Implantology | DM Stomatology",
      description: `Dr. MuhammadAli Davronov — Dental specialist with ${years} years of clinical excellence. Graduate of ASMI. Orthopedics, pain-free therapy, dental implants, zirconia crowns and veneers. Andijan, 91 Navoi Ave. Tel: +998 97 676 01 01.`,
      keywords: "dr muhammadali davronov, dentist andijan, dental clinic andijan, dm stomatology, orthopedics andijan, painless dentistry, zirconia crowns andijan, dental veneers, dental implants andijan, english speaking dentist uzbekistan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | DM Stomatologiya",
      description:
        "Ortopediya (sirkon koronkalar, vinirlar, protezlar), terapiya (og'riqsiz davolash, endodontiya) va dental implantologiya. Dr. MuhammadAli Davronov shaxsiy qabuli.",
      keywords: "stomatologiya xizmatlari andijon, sirkon qoplama narxi, tish qoplatish andijon, tish implantatsiya narxi, tish oqartirish airflow, tish ildiz kanali davolash, tish protezi andijon",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р МухаммадАли Давронов | DM Stomatology",
      description:
        "Ортопедия (циркониевые коронки, виниры, протезы), терапия (лечение без боли, эндодонтия) и дентальная имплантация. Персональный приём в Андижане.",
      keywords: "услуги стоматологии андижан, циркониевые коронки цена, виниры андижан, установка импланта андижан, лечение каналов зуба, чистка airflow андижан, зубные протезы",
    },
    en: {
      title: "Dental Treatments & Services — Dr. MuhammadAli Davronov | DM Stomatology",
      description:
        "Orthopedics (zirconia crowns, veneers, dentures), therapy (pain-free fillings, endodontics), and dental implants by Dr. MuhammadAli Davronov.",
      keywords: "dental services andijan, zirconia crown cost, dental implants procedure, e-max veneers andijan, painless cavity filling, teeth whitening airflow, prosthodontics",
    },
  },
  about: {
    uz: {
      title: "Dr. MuhammadAli Davronov Haqida — 5 Yillik Klinik Tajriba | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov: ${years} yillik tajribali shifokor-stomatolog. Ortopediya, terapiya va implantologiya. DM Stomatologiya, Andijon shahri, Prospekt Navoiy shoh ko'chasi 91-uy.`,
      keywords: "dr muhammadali davronov biografiya, tajribali tish shifokori andijon, sirkon tishlar, dm stomatologiya shifokori",
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Врач-Стоматолог, Ортопед, Имплантолог",
      description: `О докторе МухаммадАли Давронове: выпускник АГМИ, ${years} лет клинической практики, современные технологии протезирования и бережное лечение зубов в Андижане.`,
      keywords: "доктор мухаммадали давронов биография, стоматолог выпускник агми, врач ортопед имплантолог андижан, dm stomatology врач",
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Dental Specialist & Implantologist",
      description: `Learn about Dr. MuhammadAli Davronov: graduate of ASMI, ${years} years of dental practice, tooth restoration, and aesthetic dentistry in Andijan.`,
      keywords: "about dr muhammadali davronov, andijan dental specialist, dental education asmi, certified implantologist andijan",
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Manzil — DM Stomatologiya | Dr. MuhammadAli Davronov (Andijon)",
      description:
        "Dr. MuhammadAli Davronov qabuliga yozilish — DM Stomatologiya (Andijon, Navoiy shox 91-uy, SARIQ BOLA pizza yonida). Tel: +998 97 676 01 01, Instagram: @dm.muxammadali.",
      keywords: "dr muhammadali davronov telefon, dm stomatologiya manzili, navoiy shoh 91 mo'ljal sariq bola pizza, stomatolog qabuliga yozilish andijon, telegram stomatolog",
    },
    ru: {
      title: "Контакты и Локация — DM Stomatology | Д-р МухаммадАли Давронов (Андижан)",
      description:
        "Запись на личный приём к Д-ру МухаммадАли Давронову — клиника DM Stomatology (Андижан, проспект Навои, 91, рядом с пиццерией SARIQ BOLA). Телефон: +998 97 676 01 01, Instagram: @dm.muxammadali.",
      keywords: "доктор мухаммадали давронов телефон, адрес dm stomatology андижан, проспект навои 91 ориентир sariq bola, запись к стоматологу андижан",
    },
    en: {
      title: "Contact & Location — DM Stomatology | Dr. MuhammadAli Davronov (Andijan)",
      description:
        "Book personal appointment with Dr. MuhammadAli Davronov — DM Stomatology (Andijan, 91 Navoi Avenue, next to SARIQ BOLA). Phone: +998 97 676 01 01, Instagram: @dm.muxammadali.",
      keywords: "dr muhammadali davronov phone number, dm stomatology location andijan, 91 navoi avenue dental clinic, book dentist andijan",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. MuhammadAli Davronov | DM Stomatologiya",
      description:
        "Dr. MuhammadAli Davronov qabuliga qulay vaqtni tanlang. Ortopediya, terapiya, implantologiya va navbatsiz shaxsiy qabul. Tel: +998 97 676 01 01.",
      keywords: "onlayn qabulga yozilish stomatolog, tish shifokoriga navbatsiz yozilish, dr muhammadali qabuli, bepul stomatolog konsultatsiyasi",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р МухаммадАли Давронов | DM Stomatology",
      description:
        "Удобная онлайн-запись на персональный приём к Д-ру МухаммадАли Давронову без очередей. Протезирование, лечение без боли и импланты. Тел: +998 97 676 01 01.",
      keywords: "онлайн запись к стоматологу андижан, записаться на прием к врачу мухаммадали, консультация стоматолога без очередей",
    },
    en: {
      title: "Book Online Appointment — Dr. MuhammadAli Davronov | DM Stomatology",
      description:
        "Reserve your personal consultation with Dr. MuhammadAli Davronov. Fast online booking, orthopedics, therapy, implants, and gentle care. Phone: +998 97 676 01 01.",
      keywords: "book dental appointment andijan, online reservation dr muhammadali davronov, free dental consultation andijan",
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
