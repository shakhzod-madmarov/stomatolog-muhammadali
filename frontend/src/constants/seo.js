export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "DM Stomatologiya — Dr. MuhammadAli Davronov | Andijonda Zamonaviy Stomatologiya Klinikasi",
      description: "DM Stomatologiya — Andijonda Dr. MuhammadAli Davronov (ADTI Yuz-jag' jarrohligi klinik ordinatori, 5 yillik tajriba) shaxsiy klinikasi: dental implantologiya, sirkon koronkalar, vinirlar va 100% og'riqsiz davolash. Manzil: Navoiy 91, 1-xona (Sariq Bola pizza yonida). Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya, andijon stomatologiya klinikalari, andijondagi stomatologiya, stomatolog andijon, dm stomatologiya, dr muhammadali davronov, stomatolog muhammadali, yaxshi stomatolog andijon, tish davolash andijon, implantologiya andijon, dental implant andijon, yuz jag jarrohi andijon, sirkon koronkalar andijon, vinirlar andijon, navoiy 91 sariq bola pizza",
    },
    ru: {
      title: "DM Stomatology — Д-р МухаммадАли Давронов | Современная Стоматология в Андижане",
      description: "DM Stomatology — современная стоматологическая клиника в Андижане под руководством Д-ра МухаммадАли Давронова (ординатор ЧЛХ АГМИ, 5 лет опыта). Дентальная имплантация, циркониевые коронки, виниры и лечение без боли. Проспект Навои, 91 (каб. 1). Тел: +998 97 676 01 01.",
      keywords: "стоматология в андижане, стоматологические клиники андижана, стоматология андижан, dm stomatology, стоматолог мухаммадали давронов, доктор мухаммадали, стоматолог андижан, имплантация зубов андижан, челюстно лицевой хирург андижан, циркониевые коронки андижан, лечение зубов андижан, проспект навои 91",
    },
    en: {
      title: "DM Stomatology — Dr. MuhammadAli Davronov | Modern Dental Clinic in Andijan",
      description: "DM Stomatology — premier dental clinic in Andijan led by Dr. MuhammadAli Davronov (ASMI Oral & Maxillofacial Surgery resident, 5 yrs practice). Dental implants, zirconia crowns, veneers, and 100% pain-free dentistry. 91 Navoi Ave (Room #1). Phone: +998 97 676 01 01.",
      keywords: "dentistry in andijan, dental clinics andijan, dm stomatology, dr muhammadali davronov, dentist muhammadali, dental implants andijan, oral surgeon andijan, zirconia crowns andijan, painless dental care andijan, navoi 91 andijan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | Andijon",
      description: "Andijonda dental implantologiya (biotitan), ortopediya (sirkon koronkalar, vinirlar) va terapiya (100% og'riqsiz davolash). Shaxsiy qabul. Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya xizmatlari, tish implant narxi andijon, dental implantatsiya andijon, sirkon qoplama narxi, tish qoplatish andijon, tish oqartirish airflow, tish ildiz kanali davolash, tish protezi andijon",
    },
    ru: {
      title: "Услуги Стоматологии — Д-р МухаммадАли Давронов | Андижан",
      description: "Услуги стоматологии в Андижане: дентальная имплантация, циркониевые коронки, виниры и бережное лечение без боли. Персональный приём в DM Stomatology: +998 97 676 01 01.",
      keywords: "услуги стоматологии в андижане, установка импланта андижан, имплантация зубов андижан, циркониевые коронки цена, виниры андижан, лечение каналов зуба, чистка airflow андижан, зубные протезы",
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
      description: "Dr. MuhammadAli Davronov: ADTI yuz-jag' jarrohligi klinik ordinatori, 5 yillik amaliyot. Implantologiya, ortopediya va terapiya. Prospekt, Navoiy 91, Andijon.",
      keywords: "dr muhammadali davronov, yuz jag jarrohligi ordinatori, stomatolog andijon, dental implantologiya, dm stomatologiya shifokori",
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Хирург ЧЛХ, Имплантолог",
      description: "Д-р МухаммадАли Давронов: клинический ординатор по челюстно-лицевой хирургии в АГМИ, 5 лет опыта. Имплантация, ортопедия и бережное лечение зубов. Андижан, проспект, Навои, 91.",
      keywords: "доктор мухаммадали давронов, челюстно лицевой хирург андижан, ординатура члх агми, врач имплантолог андижан, dm stomatology",
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Oral Surgeon & Dentist",
      description: "Dr. MuhammadAli Davronov: Clinical Resident in Oral & Maxillofacial Surgery at ASMI, 5 years practice. Dental implants & orthopedics in Andijan, Navoi 91.",
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
  review: {
    uz: {
      title: "Baho va Sharh Qoldirish — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuli bo'yicha o'z fikringiz va 5★ bahongizni Google va Yandex xaritalarda qoldiring. DM Stomatologiya, Andijon.",
      keywords: "stomatolog muhammadali sharhlar, dr muhammadali baholash, stomatolog andijon otzyv, yandex sharh stomatolog, google review stomatolog andijon",
    },
    ru: {
      title: "Оставить Отзыв и Оценку — Д-р МухаммадАли Давронов | DM",
      description: "Поделитесь впечатлением о приёме у Д-ра МухаммадАли Давронова и поставьте 5★ в Google и Яндекс Картах. Клиника DM Stomatology, Андижан.",
      keywords: "отзывы стоматолог мухаммадали давронов, доктор мухаммадали андижан отзывы, оставить отзыв стоматология андижан, яндекс карты стоматолог давронов",
    },
    en: {
      title: "Leave a Review & Rating — Dr. MuhammadAli Davronov | DM",
      description: "Share your feedback and rate Dr. MuhammadAli Davronov on Google and Yandex Maps. DM Stomatology clinic in Andijan, Uzbekistan.",
      keywords: "dr muhammadali davronov reviews, dentist andijan review, google maps dentist review andijan, yandex maps dentist rating",
    },
  },
};
