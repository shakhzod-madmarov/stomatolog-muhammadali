export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "DM Stomatologiya — Dr. MuhammadAli Davronov | Andijonda Zamonaviy Stomatologiya Klinikasi",
      description: "DM Stomatologiya — Andijonda Dr. MuhammadAli Davronov (ADTI Yuz-jag' jarrohligi klinik ordinatori, 5 yillik tajriba) shaxsiy klinikasi: dental implantologiya, sirkon koronkalar, vinirlar va 100% og'riqsiz davolash. Manzil: Navoiy 91, 1-xona (Sariq Bola pizza yonida). Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya, andijon stomatologiya klinikalari, andijondagi stomatologiya, stomatolog andijon, dm stomatologiya, dr muhammadali davronov, stomatolog muhammadali, stomatolog muhammad ali, muhammadali stomatolog, yaxshi stomatolog andijon, eng yaxshi tish shifokori andijon, dental implantatsiya andijon, tish implant narxi andijon, dentium implant andijon, dio implant andijon, biotitan implant, bir kunda tish qoyish, sirkon koronkalar andijon, sirkon qoplama narxi andijon, e-max vinirlar andijon, keramik vinir, gollivud tabassumi, ogriqsiz tish davolash, tish asabi olish ogriqsiz, tish plomba narxi, tish oqartirish andijon, airflow tozalash, yuz jag jarrohi andijon, adti klinik ordinatori, tish protezlari andijon, prospekt navoiy 91, sariq bola pizza yonida stomatologiya",
    },
    ru: {
      title: "DM Stomatology — Д-р МухаммадАли Давронов | Современная Стоматология в Андижане",
      description: "DM Stomatology — современная стоматологическая клиника в Андижане под руководством Д-ра МухаммадАли Давронова (ординатор ЧЛХ АГМИ, 5 лет опыта). Дентальная имплантация, циркониевые коронки, виниры и лечение без боли. Проспект Навои, 91 (каб. 1). Тел: +998 97 676 01 01.",
      keywords: "стоматология в андижане, стоматологические клиники андижана, стоматология андижан, dm stomatology, стоматолог мухаммадали давронов, доктор мухаммадали, стоматолог мухаммадали, мухаммадали давронов стоматолог, стоматолог андижан, лучший стоматолог в андижане, имплантация зубов андижан, дентальная имплантация андижан, установка импланта цена андижан, импланты dentium, импланты dio implant, титановые импланты, циркониевые коронки андижан, коронки из диоксида циркония цена, виниры e-max андижан, керамические виниры, голливудская улыбка андижан, лечение зубов без боли андижан, лечение кариеса и пульпита, пломбирование зубов андижан, отбеливание зубов airflow, челюстно лицевой хирург андижан, ординатор члх агми, зубные протезы андижан, проспект навои 91",
    },
    en: {
      title: "DM Stomatology — Dr. MuhammadAli Davronov | Modern Dental Clinic in Andijan",
      description: "DM Stomatology — premier dental clinic in Andijan led by Dr. MuhammadAli Davronov (ASMI Oral & Maxillofacial Surgery resident, 5 yrs practice). Dental implants, zirconia crowns, veneers, and 100% pain-free dentistry. 91 Navoi Ave (Room #1). Phone: +998 97 676 01 01.",
      keywords: "dentistry in andijan, dental clinics in andijan, dental clinic andijan, dm stomatology, dr muhammadali davronov, dentist muhammadali, best dentist in andijan, dental implants andijan, tooth implant cost andijan, dentium implants uzbekistan, dio implant 3d guided, zirconia crowns andijan, monolithic zirconia crowns, ceramic veneers e-max, hollywood smile andijan, painless dentistry andijan, gentle cavity filling, root canal therapy, teeth whitening airflow, oral maxillofacial surgeon andijan, dental prosthetics andijan, 91 navoi avenue andijan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | Andijon",
      description: "Andijonda dental implantologiya (biotitan), ortopediya (sirkon koronkalar, vinirlar) va terapiya (100% og'riqsiz davolash). Shaxsiy qabul. Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya xizmatlari, dental implantatsiya andijon, dentium biotitan implant, dio implant navigatsiya, tish implant narxi, sirkon qoplama narxi andijon, sirkon koronkalar, e-max vinirlar andijon, keramik vinir narxi, estetik tish qoplama, tish protezlari andijon, elastik neylon protez, byugel protez, tish davolash andijon, ogriqsiz karies davolash, tish nervini olish, ildiz kanallarini plombalash, endodontiya andijon, tish oqartirish narxi, airflow tozalash andijon, ultratovushli tish tozalash, 3d tish skanerlash, virtual tabassum dizayni, yuz jag jarrohligi konsultatsiyasi, suyak plastikasi andijon, sinus lift andijon",
    },
    ru: {
      title: "Услуги Стоматологии — Д-р МухаммадАли Давронов | Андижан",
      description: "Услуги стоматологии в Андижане: дентальная имплантация, циркониевые коронки, виниры и бережное лечение без боли. Персональный приём в DM Stomatology: +998 97 676 01 01.",
      keywords: "услуги стоматологии в андижане, дентальная имплантация зубов андижан, импланты dentium и dio implant, установка импланта цена, циркониевые коронки андижан, коронки из оксида циркония, виниры e-max цена андижан, керамические виниры, зубные протезы андижан, бюгельные и нейлоновые протезы, лечение зубов без боли, лечение кариеса и пульпита андижан, пломбирование корневых каналов, отбеливание зубов airflow андижан, чистка зубного камня ультразвуком, 3d сканирование зубов, челюстно лицевая хирургия андижан, синус лифтинг костная пластика",
    },
    en: {
      title: "Dental Services — Dr. MuhammadAli Davronov | Andijan",
      description: "Dental implants, orthopedics (zirconia crowns, aesthetic veneers), and 100% pain-free therapy by Dr. MuhammadAli Davronov. Tel: +998 97 676 01 01.",
      keywords: "dental services in andijan, dental implants procedure andijan, dentium and dio implant systems, zirconia dental crowns andijan, monolithic zirconia price, ips e-max porcelain veneers, cosmetic dentistry andijan, removable dentures prosthodontics, flexible nylon dentures, painless cavity treatment andijan, gentle root canal therapy, teeth whitening airflow, 3d intraoral scanner andijan, oral and maxillofacial surgery consultation, bone grafting sinus lift andijan",
    },
  },
  about: {
    uz: {
      title: "Dr. MuhammadAli Davronov Haqida — Yuz-Jag' Jarrohi | Andijon",
      description: "Dr. MuhammadAli Davronov: ADTI yuz-jag' jarrohligi klinik ordinatori, 5 yillik amaliyot. Implantologiya, ortopediya va terapiya. Prospekt, Navoiy 91, Andijon.",
      keywords: "dr muhammadali davronov biografiya, stomatolog muhammadali davronov tajriba, adti yuz jag jarrohligi ordinatori, andijon davlat tibbiyot instituti stomatolog, sertifikatlangan implantolog andijon, dentium implant sertifikati, dio implant 3d navigatsiya kursi, moissanite one stage implantologiya, yuz jag jarrohi stomatolog andijon, dm stomatologiya rahbari, shifokor stomatolog andijon",
    },
    ru: {
      title: "О Докторе МухаммадАли Давронове — Хирург ЧЛХ, Имплантолог",
      description: "Д-р МухаммадАли Давронов: клинический ординатор по челюстно-лицевой хирургии в АГМИ, 5 лет опыта. Имплантация, ортопедия и бережное лечение зубов. Андижан, проспект, Навои, 91.",
      keywords: "доктор мухаммадали давронов биография, стоматолог мухаммадали давронов опыт работы, ординатор челюстно лицевой хирургии агми, андижанский государственный медицинский институт, сертифицированный врач имплантолог андижан, сертификат dentium implant, курс dio implant 3d навигация, moissanite dental одномоментная имплантация, челюстно лицевой хирург андижан, основатель dm stomatology",
    },
    en: {
      title: "About Dr. MuhammadAli Davronov — Oral Surgeon & Dentist",
      description: "Dr. MuhammadAli Davronov: Clinical Resident in Oral & Maxillofacial Surgery at ASMI, 5 years practice. Dental implants & orthopedics in Andijan, Navoi 91.",
      keywords: "dr muhammadali davronov credentials, dentist muhammadali education, oral and maxillofacial surgery residency asmi, andijan state medical institute dentist, certified dental implantologist uzbekistan, dentium implant certificate, dio implant digital surgery masterclass, moissanite one stage implantation, oral surgeon andijan, founder of dm stomatology",
    },
  },
  contact: {
    uz: {
      title: "Aloqa va Qabul Manzili — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuliga yozilish: Andijon shahri, Prospekt, Navoiy 91 (SARIQ BOLA pizza yonida, DM Stomatologiya). Tel: +998 97 676 01 01, 1-xona.",
      keywords: "dr muhammadali davronov telefon, dm stomatologiya manzili, stomatolog qabuliga yozilish andijon, prospekt navoiy 91 mo'ljal sariq bola pizza, 1-xona stomatologiya, stomatolog telegram andijon, stomatolog instagram dm muxammadali, andijon stomatolog telefon raqami, stomatologiya xaritasi andijon, qanday borish mumkin navoiy 91",
    },
    ru: {
      title: "Контакты и Адрес — Д-р МухаммадАли Давронов | Андижан",
      description: "Запись на приём к Д-ру МухаммадАли Давронову: г. Андижан, проспект, Навои, 91 (ориентир: SARIQ BOLA, DM Stomatology, каб. №1). Тел: +998 97 676 01 01.",
      keywords: "доктор мухаммадали давронов телефон, адрес клиники dm stomatology андижан, запись к стоматологу андижан, проспект навои 91 ориентир sariq bola, кабинет 1 стоматология, телеграм стоматолога андижан, инстаграм dm muxammadali, телефон стоматологии в андижане, маршрут яндекс карты навои 91",
    },
    en: {
      title: "Contact & Location — Dr. MuhammadAli Davronov | Andijan",
      description: "Appointments with Dr. MuhammadAli Davronov: 91 Navoi Avenue, Andijan (next to SARIQ BOLA pizza, DM Stomatology, Room #1). Phone: +998 97 676 01 01.",
      keywords: "dr muhammadali davronov phone number, dm stomatology address andijan, book dental appointment andijan, 91 navoi avenue next to sariq bola pizza, room 1 dental clinic, telegram dentist andijan, instagram dm muxammadali, directions to dental clinic andijan",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuliga navbatsiz onlayn yoziling. Dental implantologiya, sirkon koronkalar va og'riqsiz terapiya. Tel: +998 97 676 01 01.",
      keywords: "onlayn qabulga yozilish stomatolog, tish shifokoriga navbatsiz yozilish, dr muhammadali qabuli, bepul stomatolog konsultatsiyasi andijon, implantatsiyaga yozilish, sirkon tish qo'yishga yozilish, tish davolashga online yozilish, dm stomatologiya qabul vaqti",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р МухаммадАли Давронов | DM",
      description: "Онлайн запись к Д-ру МухаммадАли Давронову без очередей. Дентальная имплантация, циркониевые коронки и лечение без боли. Тел: +998 97 676 01 01.",
      keywords: "онлайн запись к стоматологу андижан, записаться на прием к врачу мухаммадали, консультация стоматолога без очередей, запись на имплантацию зубов, запись на циркониевые коронки, онлайн график приёма dm stomatology",
    },
    en: {
      title: "Online Booking — Dr. MuhammadAli Davronov | Andijan",
      description: "Book your appointment with Dr. MuhammadAli Davronov without waiting in line. Dental implants, zirconia crowns, and pain-free care. Tel: +998 97 676 01 01.",
      keywords: "book dental appointment andijan, online reservation dr muhammadali davronov, free dental checkup andijan, schedule dental implants andijan, appointment for zirconia crowns andijan, dm stomatology schedule",
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
      keywords: "stomatolog muhammadali sharhlar, dr muhammadali baholash, stomatolog andijon otzyv, yandex sharh stomatolog, google review stomatolog andijon, dm stomatologiya baho berish, eng yaxshi tish shifokori sharhlari",
    },
    ru: {
      title: "Оставить Отзыв и Оценку — Д-р МухаммадАли Давронов | DM",
      description: "Поделитесь впечатлением о приёме у Д-ра МухаммадАли Давронова и поставьте 5★ в Google и Яндекс Картах. Клиника DM Stomatology, Андижан.",
      keywords: "отзывы стоматолог мухаммадали давронов, доктор мухаммадали андижан отзывы, оставить отзыв стоматология андижан, яндекс карты стоматолог давронов, google отзывы dm stomatology",
    },
    en: {
      title: "Leave a Review & Rating — Dr. MuhammadAli Davronov | DM",
      description: "Share your feedback and rate Dr. MuhammadAli Davronov on Google and Yandex Maps. DM Stomatology clinic in Andijan, Uzbekistan.",
      keywords: "dr muhammadali davronov reviews, dentist andijan review, google maps dentist review andijan, yandex maps dentist rating, dm stomatology patient reviews",
    },
  },
};
