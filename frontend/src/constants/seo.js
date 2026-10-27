export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "Dr. MuhammadAli Davronov — Implantolog, Ortoped | Andijon",
      description: "Dr. MuhammadAli Davronov — ADTI yuz-jag' jarrohligi ordinaturasi, 5 yillik tajriba. Dental implantatsiya, sirkon va og'riqsiz davolash. Tel: +998 97 676 01 01.",
      keywords: "implantologiya andijon, dental implant, dr muhammadali davronov, yuz jag jarrohligi ordinatura, stomatolog muhammadali, stomatolog andijon, yaxshi stomatolog andijon, dm stomatologiya, ortopediya andijon, tish davolash andijon, ogriqsiz tish davolash, sirkon koronkalar andijon, vinirlar andijon, prospekt, navoiy 91",
    },
    ru: {
      title: "Д-р МухаммадАли Давронов — Имплантолог, Ортопед | Андижан",
      description: "Д-р МухаммадАли Давронов — ординатура по ЧЛХ в АГМИ, 5 лет опыта. Дентальная имплантация, цирконий и лечение без боли. Андижан. Тел: +998 97 676 01 01.",
      keywords: "имплантация зубов андижан, доктор мухаммадали давронов, стоматолог мухаммадали, стоматолог андижан, стоматология андижан, dm stomatology, ортопедия андижан, лечение зубов без боли, циркониевые коронки андижан, виниры e-max, зубной врач андижан, проспект, навои 91",
    },
    en: {
      title: "Dr. MuhammadAli Davronov — Dental Implantologist | Andijan",
      description: "Dr. MuhammadAli Davronov — Maxillofacial Surgery residency at ASMI, 5 yrs practice. Dental implants, zirconia crowns & painless care. Tel: +998 97 676 01 01.",
      keywords: "dental implants andijan, dr muhammadali davronov, dentist andijan, dental clinic andijan, dm stomatology, orthopedics andijan, painless dentistry, zirconia crowns andijan, dental veneers, english speaking dentist uzbekistan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | Andijon",
      description: "Dental implantologiya (biotitan), ortopediya (sirkon koronkalar, vinirlar) va terapiya (100% og'riqsiz davolash). Shaxsiy qabul. Tel: +998 97 676 01 01.",
      keywords: "tish implant narxi andijon, dental implantatsiya andijon, stomatologiya xizmatlari andijon, sirkon qoplama narxi, tish qoplatish andijon, tish oqartirish airflow, tish ildiz kanali davolash, tish protezi andijon",
    },
    ru: {
      title: "Услуги Стоматологии — Д-р МухаммадАли Давронов | Андижан",
      description: "Дентальная имплантация, ортопедия (коронки из циркония, виниры) и терапия без боли. Персональный приём в клинике DM Stomatology: +998 97 676 01 01.",
      keywords: "установка импланта андижан, имплантация зубов андижан, услуги стоматологии андижан, циркониевые коронки цена, виниры андижан, лечение каналов зуба, чистка airflow андижан, зубные протезы",
    },
    en: {
      title: "Dental Services — Dr. MuhammadAli Davronov | Andijan",
      description: "Dental implants, orthopedics (zirconia crowns, aesthetic veneers), and 100% pain-free therapy by Dr. MuhammadAli Davronov. Tel: +998 97 676 01 01.",
      keywords: "dental implants procedure, dental services andijan, zirconia crown cost, e-max veneers andijan, painless cavity filling, teeth whitening airflow, prosthodontics",
    },
  },
  about: {
    uz: {
      title: "Dr. MuhammadAli Davronov Haqida — Yuz-Jag' Jarrohi | Andijon",
      description: "Dr. MuhammadAli Davronov: ADTI yuz-jag' jarrohligi klinik ordinaturasi, 5 yillik amaliyot. Implantologiya, ortopediya va terapiya. Prospekt, Navoiy 91, Andijon.",
      keywords: "dr muhammadali davronov, yuz jag jarrohligi ordinatura, stomatolog andijon, dental implantologiya, dm stomatologiya shifokori",
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Хирург ЧЛХ, Имплантолог",
      description: "Д-р МухаммадАли Давронов: ординатура по челюстно-лицевой хирургии в АГМИ, 5 лет опыта. Имплантация, ортопедия и бережное лечение зубов. Андижан, пр-т Навои, 91.",
      keywords: "доктор мухаммадали давронов, челюстно лицевой хирург андижан, ординатура члх агми, врач имплантолог андижан, dm stomatology",
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Oral Surgeon & Dentist",
      description: "Dr. MuhammadAli Davronov: Clinical Residency in Oral & Maxillofacial Surgery at ASMI, 5 years practice. Dental implants & orthopedics in Andijan, Navoi 91.",
      keywords: "about dr muhammadali davronov, oral and maxillofacial surgery asmi, residency dentist andijan, certified implantologist andijan",
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Qabul Manzili — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuliga yozilish: Andijon shahri, Prospekt, Navoiy 91 (SARIQ BOLA pizza yonida, DM Stomatologiya). Tel: +998 97 676 01 01, 1-xona.",
      keywords: "dr muhammadali davronov telefon, dm stomatologiya manzili, navoiy shoh 91 mo'ljal sariq bola pizza, stomatolog qabuliga yozilish andijon, telegram stomatolog",
    },
    ru: {
      title: "Контакты и Адрес — Д-р МухаммадАли Давронов | Андижан",
      description: "Запись на приём к Д-ру МухаммадАли Давронову: г. Андижан, проспект, Навои, 91 (ориентир: SARIQ BOLA, DM Stomatology, каб. №1). Тел: +998 97 676 01 01.",
      keywords: "доктор мухаммадали давронов телефон, адрес dm stomatology андижан, проспект, навои 91 ориентир sariq bola, запись к стоматологу андижан",
    },
    en: {
      title: "Contact & Location — Dr. MuhammadAli Davronov | Andijan",
      description: "Appointments with Dr. MuhammadAli Davronov: 91 Navoi Avenue, Andijan (next to SARIQ BOLA pizza, DM Stomatology, Room #1). Phone: +998 97 676 01 01.",
      keywords: "dr muhammadali davronov phone number, dm stomatology location andijan, 91 navoi avenue dental clinic, book dentist andijan",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuliga navbatsiz onlayn yoziling. Dental implantologiya, sirkon koronkalar va og'riqsiz terapiya. Tel: +998 97 676 01 01.",
      keywords: "onlayn qabulga yozilish stomatolog, tish shifokoriga navbatsiz yozilish, dr muhammadali qabuli, bepul stomatolog konsultatsiyasi",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р МухаммадАли Давронов | DM",
      description: "Онлайн запись к Д-ру МухаммадАли Давронову без очередей. Дентальная имплантация, циркониевые коронки и лечение без боли. Тел: +998 97 676 01 01.",
      keywords: "онлайн запись к стоматологу андижан, записаться на прием к врачу мухаммадали, консультация стоматолога без очередей",
    },
    en: {
      title: "Online Booking — Dr. MuhammadAli Davronov | Andijan",
      description: "Book your appointment with Dr. MuhammadAli Davronov without waiting in line. Dental implants, zirconia crowns, and pain-free care. Tel: +998 97 676 01 01.",
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
