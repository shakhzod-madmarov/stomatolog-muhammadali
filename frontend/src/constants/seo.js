import { getYearsOfExperience } from "./doctor.js";

export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

const years = getYearsOfExperience();

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. MuhammadAli Davronov — Vrach Stomatolog | Implantologiya, Ortopediya, Terapiya | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov — ${years} yillik tajribaga ega shifokor-stomatolog. Dental implantologiya (biotitan implantlar), ortopediya (sirkon, vinirlar), terapiya (og'riqsiz davolash). DM Stomatologiya, Andijon shahri, Prospekt Navoiy shoh ko'chasi 91-uy. Tel: +998 97 676 01 01.`,
      keywords: "implantologiya andijon, dental implant, dr muhammadali davronov, stomatolog muhammadali, stomatolog andijon, yaxshi stomatolog andijon, dm stomatologiya, ortopediya andijon, tish davolash andijon, ogriqsiz tish davolash, sirkon koronkalar andijon, vinirlar andijon, navoiy shoh 91",
    },
    ru: {
      title: "Д-р МухаммадАли Давронов — Врач-Стоматолог | Имплантология, Ортопедия, Терапия | DM Stomatology",
      description: `Врач-стоматолог Д-р МухаммадАли Давронов — ${years} лет успешной клинической практики. Дентальная имплантация, ортопедия (коронки, виниры), лечение зубов без боли. Андижан, проспект Навои, 91. Тел: +998 97 676 01 01.`,
      keywords: "имплантация зубов андижан, доктор мухаммадали давронов, стоматолог мухаммадали, стоматолог андижан, стоматология андижан, dm stomatology, ортопедия андижан, лечение зубов без боли, циркониевые коронки андижан, виниры e-max, зубной врач андижан, проспект навои 91",
    },
    en: {
      title: "Dr. MuhammadAli Davronov — Dental Specialist | Implantology, Orthopedics & Therapy | DM Stomatology",
      description: `Dr. MuhammadAli Davronov — Dental specialist with ${years} years of clinical excellence. Dental implants, orthopedics, pain-free therapy, zirconia crowns and veneers. Andijan, 91 Navoi Ave. Tel: +998 97 676 01 01.`,
      keywords: "dental implants andijan, dr muhammadali davronov, dentist andijan, dental clinic andijan, dm stomatology, orthopedics andijan, painless dentistry, zirconia crowns andijan, dental veneers, english speaking dentist uzbekistan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | DM Stomatologiya",
      description:
        "Dental implantologiya (biotitan implantlar), ortopediya (sirkon koronkalar, vinirlar, protezlar) va terapiya (og'riqsiz davolash). Dr. MuhammadAli Davronov shaxsiy qabuli.",
      keywords: "tish implantatsiya narxi, dental implantatsiya andijon, stomatologiya xizmatlari andijon, sirkon qoplama narxi, tish qoplatish andijon, tish oqartirish airflow, tish ildiz kanali davolash, tish protezi andijon",
    },
    ru: {
      title: "Стоматологические Услуги — Д-р МухаммадАли Давронов | DM Stomatology",
      description:
        "Дентальная имплантация, ортопедия (циркониевые коронки, виниры, протезы) и терапия (лечение без боли, эндодонтия). Персональный приём в Андижане.",
      keywords: "установка импланта андижан, имплантация зубов андижан, услуги стоматологии андижан, циркониевые коронки цена, виниры андижан, лечение каналов зуба, чистка airflow андижан, зубные протезы",
    },
    en: {
      title: "Dental Treatments & Services — Dr. MuhammadAli Davronov | DM Stomatology",
      description:
        "Dental implants, orthopedics (zirconia crowns, veneers, dentures), and pain-free therapy by Dr. MuhammadAli Davronov.",
      keywords: "dental implants procedure, dental services andijan, zirconia crown cost, e-max veneers andijan, painless cavity filling, teeth whitening airflow, prosthodontics",
    },
  },
  about: {
    uz: {
      title: "Dr. MuhammadAli Davronov Haqida — 5 Yillik Klinik Tajriba | DM Stomatologiya",
      description: `Dr. MuhammadAli Davronov: Andijon davlat tibbiyot instituti yuz-jag' jarrohligi klinik ordinaturasi, ${years} yillik tajriba. Implantologiya, ortopediya va terapiya. DM Stomatologiya, Andijon, Prospekt Navoiy 91.`,
      keywords: "dr muhammadali davronov, yuz jag jarrohligi ordinatura, stomatolog andijon, dental implantologiya, dm stomatologiya shifokori",
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Врач-Стоматолог, Ортопед, Имплантолог",
      description: `Д-р МухаммадАли Давронов: ординатура по челюстно-лицевой хирургии в АГМИ, ${years} лет клинической практики, имплантология, ортопедия и бережное лечение зубов в Андижане.`,
      keywords: "доктор мухаммадали давронов, челюстно лицевой хирург андижан, ординатура члх агми, врач имплантолог андижан, dm stomatology",
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Dental Specialist & Implantologist",
      description: `Learn about Dr. MuhammadAli Davronov: clinical residency in Oral & Maxillofacial Surgery at ASMI, ${years} years of dental practice and implantology in Andijan.`,
      keywords: "about dr muhammadali davronov, oral and maxillofacial surgery asmi, residency dentist andijan, certified implantologist andijan",
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
