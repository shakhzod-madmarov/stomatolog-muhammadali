export const SITE_ORIGIN = "https://stomatolog-muhammadali.uz";

export const getPageSeo = (pageKey, lang = "uz") =>
  PAGE_SEO[pageKey]?.[lang] || PAGE_SEO[pageKey]?.uz || null;

export const PAGE_SEO = {
  home: {
    uz: {
      title: "DM Stomatologiya — Dr. MuhammadAli Davronov | Andijonda Zamonaviy Stomatologiya Klinikasi",
      description: "DM Stomatologiya — Andijonda Dr. MuhammadAli Davronov (ADTI Yuz-jag' jarrohligi klinik ordinatori, 5 yillik tajriba) shaxsiy klinikasi: dental implantologiya, sirkon koronkalar, vinirlar va 100% og'riqsiz davolash. Manzil: Navoiy 91, 1-xona (Sariq Bola pizza yonida). Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya, andijon stomatologiya klinikalari, andijondagi stomatologiya, stomatolog andijon, dm stomatologiya, dr muhammadali davronov, stomatolog muhammadali, stomatolog muhammad ali, muhammadali stomatolog, yaxshi stomatolog andijon, eng yaxshi tish shifokori andijon, tish implantatsiyasi, tish implantatsiyasi andijon, tish implantatsiyasi narxlari 2026, tish qoyish, tish qo'ydirish, oq tish qo'yish narxi, tish olish andijon, tish oldirish narxi, ogriqsiz tish olish, tish karonkalari, tish koronkasi, sirkon karonka narxi, tish implanti, tish breketlari, tish briketlari, breket turlari va narxlari 2026, breket narxi andijon, tish tekislash andijon, 3d kt diagnostika implantatsiya, dentium dio osstem implant, all on 4 andijon, all on 6 andijon, kechki payt tishim ogriyapti, kechasi tish ogrishi, tish og'rig'i, tishim ogriyapti nima qilsam boladi, tish zirqirashi, tish og'rig'ini qoldirish, tishim sindi nima qilish kerak, singan tishni tiklash, plomba tushib ketdi, milk qonashi, milk shishishi flyus, tish tagida yiring, tish sovuqqa qaqshashi, issiq sovuqqa tish ogrishi, aql tishi ogrigi, aql tishini oldirish andijon, vosmoy tish sugurish, tilla tishni oqqa almashtirish, shoshilinch stomatolog andijon, tez yordam tish shifokori andijon, dental implantatsiya andijon, tish implant narxi andijon, dentium implant andijon, dio implant andijon, biotitan implant, bir kunda tish qoyish, sirkon koronkalar andijon, sirkon qoplama narxi andijon, e-max vinirlar andijon, keramik vinir, gollivud tabassumi, ogriqsiz tish davolash, tish asabi olish ogriqsiz, tish plomba narxi, tish oqartirish andijon, airflow tozalash, yuz jag jarrohi andijon, adti klinik ordinatori, tish protezlari andijon, prospekt navoiy 91, sariq bola pizza yonida stomatologiya",
    },
    ru: {
      title: "DM Stomatology — Д-р МухаммадАли Давронов | Современная Стоматология в Андижане",
      description: "DM Stomatology — современная стоматологическая клиника в Андижане под руководством Д-ра МухаммадАли Давронова (ординатор ЧЛХ АГМИ, 5 лет опыта). Дентальная имплантация, циркониевые коронки, виниры и лечение без боли. Проспект Навои, 91 (каб. 1). Тел: +998 97 676 01 01.",
      keywords: "стоматология в андижане, стоматологические клиники андижана, стоматология андижан, dm stomatology, стоматолог мухаммадали давронов, доктор мухаммадали, стоматолог мухаммадали, мухаммадали давронов стоматолог, стоматолог андижан, лучший стоматолог в андижане, имплантация зубов андижан, дентальная имплантация цены 2026, поставить зубы андижан, вставить зубы цены, коронки на зубы цена, циркониевые коронки андижан, коронки из диоксида циркония, зубные импланты андижан, импланты dentium, импланты dio implant, 3d кт диагностика, all on 4 андижан, all on 6, брекеты андижан, виды брекетов и цены 2026, брекеты выравнивание зубов, элайнеры капы, удаление зуба без боли андижан, удалить зуб мудрости, болит зуб ночью что делать, ночная зубная боль снять, болит зуб что делать, острая зубная боль ночью, как снять зубную боль, ноет зуб, откололся зуб, сломался передний зуб наращивание, выпала пломба, кровоточат десны, опухла десна, флюс на десне гной, зубы реагируют на холодное и горячее, чувствительность зубов, болит зуб мудрости, дырка в зубе кариес, срочно стоматолог андижан, неотложная помощь стоматолог, установка импланта цена андижан, титановые импланты, виниры e-max андижан, керамические виниры, голливудская улыбка андижан, лечение зубов без боли андижан, лечение кариеса и пульпита, пломбирование зубов андижан, отбеливание зубов airflow, челюстно лицевой хирург андижан, ординатор члх агми, зубные протезы андижан, проспект навои 91",
    },
    en: {
      title: "DM Stomatology — Dr. MuhammadAli Davronov | Modern Dental Clinic in Andijan",
      description: "DM Stomatology — premier dental clinic in Andijan led by Dr. MuhammadAli Davronov (ASMI Oral & Maxillofacial Surgery resident, 5 yrs practice). Dental implants, zirconia crowns, veneers, and 100% pain-free dentistry. 91 Navoi Ave (Room #1). Phone: +998 97 676 01 01.",
      keywords: "dentistry in andijan, dental clinics in andijan, dental clinic andijan, dm stomatology, dr muhammadali davronov, dentist muhammadali, best dentist in andijan, dental implants andijan, tooth implant cost 2026, get teeth implants andijan, tooth crown price andijan, zirconia crowns andijan, monolithic zirconia crowns, ceramic veneers e-max, dental braces andijan, braces types and prices 2026, clear aligners teeth straightening, 3d cbct guided implants, all on 4 andijan, all on 6, painless tooth extraction andijan, wisdom tooth removal, nighttime toothache relief, emergency tooth pain treatment, toothache relief, tooth pain what to do, throbbing toothache at night, broken tooth repair, chipped tooth restoration, lost filling replacement, bleeding gums treatment, dental abscess flux swelling, tooth infection cure, teeth sensitive to cold hot, emergency dentist andijan, urgent dental care andijan, dentium implants uzbekistan, dio implant 3d guided, hollywood smile andijan, painless dentistry andijan, gentle cavity filling, root canal therapy, teeth whitening airflow, oral maxillofacial surgeon andijan, dental prosthetics andijan, 91 navoi avenue andijan",
    },
  },
  services: {
    uz: {
      title: "Stomatologik Xizmatlar — Dr. MuhammadAli Davronov | Andijon",
      description: "Andijonda dental implantologiya (biotitan), ortopediya (sirkon koronkalar, vinirlar) va terapiya (100% og'riqsiz davolash). Shaxsiy qabul. Tel: +998 97 676 01 01.",
      keywords: "andijonda stomatologiya xizmatlari, tish implantatsiyasi andijon, tish implantatsiyasi narxlari 2026, tish qoyish, tish olish andijon, ogriqsiz tish olish, aql tishini oldirish, tish karonkalari, tish koronkasi, sirkon karonka narxi, tish implanti, tish breketlari, tish briketlari, breket turlari va narxlari 2026, tish tekislash andijon, 3d kt diagnostika implantatsiya, tish og'rig'ini davolash, singan tishni qoplash, tish asabi og'rig'i, kechki payt tishim ogriyapti, shoshilinch tish davolash, milk kasalliklari davolash, tish ildizidagi yiringni davolash, aql tishini og'riqsiz oldirish, karies teshigini yopish, dental implantatsiya andijon, dentium biotitan implant, dio implant navigatsiya, tish implant narxi, sirkon qoplama narxi andijon, sirkon koronkalar, e-max vinirlar andijon, keramik vinir narxi, estetik tish qoplama, tish protezlari andijon, elastik neylon protez, byugel protez, tish davolash andijon, ogriqsiz karies davolash, tish nervini olish, ildiz kanallarini plombalash, endodontiya andijon, tish oqartirish narxi, airflow tozalash andijon, ultratovushli tish tozalash, 3d tish skanerlash, virtual tabassum dizayni, yuz jag jarrohligi konsultatsiyasi, suyak plastikasi andijon, sinus lift andijon",
    },
    ru: {
      title: "Услуги Стоматологии — Д-р МухаммадАли Давронов | Андижан",
      description: "Услуги стоматологии в Андижане: дентальная имплантация, циркониевые коронки, виниры и бережное лечение без боли. Персональный приём в DM Stomatology: +998 97 676 01 01.",
      keywords: "услуги стоматологии в андижане, имплантация зубов андижан, дентальная имплантация цены 2026, поставить зубы андижан, вставить зубы цены, коронки на зубы цена, циркониевые коронки андижан, удаление зуба без боли андижан, удалить зуб мудрости, брекеты андижан, виды брекетов и цены 2026, исправление прикуса, элайнеры капы, 3d кт диагностика, all on 4 андижан, all on 6, лечение острой зубной боли, ночная зубная боль снять, реставрация скола зуба, лечение воспаления десен, удаление гноя при флюсе, удаление сложного зуба мудрости без боли, лечение глубокого кариеса и пульпита, импланты dentium и dio implant, установка импланта цена, циркониевые коронки андижан, коронки из оксида циркония, виниры e-max цена андижан, керамические виниры, зубные протезы андижан, бюгельные и нейлоновые протезы, лечение зубов без боли, лечение кариеса и пульпита андижан, пломбирование корневых каналов, отбеливание зубов airflow андижан, чистка зубного камня ультразвуком, 3d сканирование зубов, челюстно лицевая хирургия андижан, синус лифтинг костная пластика",
    },
    en: {
      title: "Dental Services — Dr. MuhammadAli Davronov | Andijan",
      description: "Dental implants, orthopedics (zirconia crowns, aesthetic veneers), and 100% pain-free therapy by Dr. MuhammadAli Davronov. Tel: +998 97 676 01 01.",
      keywords: "dental services in andijan, dental implants andijan, tooth implant cost 2026, get teeth implants andijan, tooth crown price andijan, painless tooth extraction andijan, wisdom tooth removal, dental braces andijan, braces types and prices 2026, teeth straightening, 3d cbct planning, all on 4 andijan, all on 6, nighttime toothache relief, toothache emergency treatment, broken tooth crown restoration, bleeding gum therapy, dental abscess drainage, wisdom tooth extraction pain free, deep cavity root canal therapy, dental implants procedure andijan, dentium and dio implant systems, zirconia dental crowns andijan, monolithic zirconia price, ips e-max porcelain veneers, cosmetic dentistry andijan, removable dentures prosthodontics, flexible nylon dentures, painless cavity treatment andijan, gentle root canal therapy, teeth whitening airflow, 3d intraoral scanner andijan, oral and maxillofacial surgery consultation, bone grafting sinus lift andijan",
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
      keywords: "dr muhammadali davronov telefon, dm stomatologiya manzili, stomatolog qabuliga yozilish andijon, shoshilinch stomatolog andijon telefon, tish og'rig'i tez yordam andijon, kechki stomatolog andijon qabuli, prospekt navoiy 91 mo'ljal sariq bola pizza, 1-xona stomatologiya, stomatolog telegram andijon, stomatolog instagram dm muxammadali, andijon stomatolog telefon raqami, stomatologiya xaritasi andijon, qanday borish mumkin navoiy 91",
    },
    ru: {
      title: "Контакты и Адрес — Д-р МухаммадАли Давронов | Андижан",
      description: "Запись на приём к Д-ру МухаммадАли Давронову: г. Андижан, проспект, Навои, 91 (ориентир: SARIQ BOLA, DM Stomatology, каб. №1). Тел: +998 97 676 01 01.",
      keywords: "доктор мухаммадали давронов телефон, адрес клиники dm stomatology андижан, запись к стоматологу андижан, срочный стоматолог андижан телефон, острая зубная боль куда ехать андижан, дежурный стоматолог андижан, проспект навои 91 ориентир sariq bola, кабинет 1 стоматология, телеграм стоматолога андижан, инстаграм dm muxammadali, телефон стоматологии в андижане, маршрут яндекс карты навои 91",
    },
    en: {
      title: "Contact & Location — Dr. MuhammadAli Davronov | Andijan",
      description: "Appointments with Dr. MuhammadAli Davronov: 91 Navoi Avenue, Andijan (next to SARIQ BOLA pizza, DM Stomatology, Room #1). Phone: +998 97 676 01 01.",
      keywords: "dr muhammadali davronov phone number, dm stomatology address andijan, book dental appointment andijan, emergency dental care phone andijan, urgent toothache clinic andijan, urgent dentist contact, 91 navoi avenue next to sariq bola pizza, room 1 dental clinic, telegram dentist andijan, instagram dm muxammadali, directions to dental clinic andijan",
    },
  },
  booking: {
    uz: {
      title: "Onlayn Qabulga Yozilish — Dr. MuhammadAli Davronov | DM",
      description: "Dr. MuhammadAli Davronov qabuliga navbatsiz onlayn yoziling. Dental implantologiya, sirkon koronkalar va og'riqsiz terapiya. Tel: +998 97 676 01 01.",
      keywords: "onlayn qabulga yozilish stomatolog, tish shifokoriga navbatsiz yozilish, tish og'rig'iga tezkor yozilish, shoshilinch tish shifokori qabuli, singan tishni tiklashga yozilish, dr muhammadali qabuli, bepul stomatolog konsultatsiyasi andijon, implantatsiyaga yozilish, sirkon tish qo'yishga yozilish, tish davolashga online yozilish, dm stomatologiya qabul vaqti",
    },
    ru: {
      title: "Онлайн Запись на Приём — Д-р МухаммадАли Давронов | DM",
      description: "Онлайн запись к Д-ру МухаммадАли Давронову без очередей. Дентальная имплантация, циркониевые коронки и лечение без боли. Тел: +998 97 676 01 01.",
      keywords: "онлайн запись к стоматологу андижан, записаться на прием к врачу мухаммадали, срочная запись к стоматологу с острой болью, записаться на лечение зуба без очередей, запись на реставрацию зуба, консультация стоматолога без очередей, запись на имплантацию зубов, запись на циркониевые коронки, онлайн график приёма dm stomatology",
    },
    en: {
      title: "Online Booking — Dr. MuhammadAli Davronov | Andijan",
      description: "Book your appointment with Dr. MuhammadAli Davronov without waiting in line. Dental implants, zirconia crowns, and pain-free care. Tel: +998 97 676 01 01.",
      keywords: "book dental appointment andijan, online reservation dr muhammadali davronov, emergency dental appointment booking, urgent tooth pain consultation, same day dentist booking andijan, free dental checkup andijan, schedule dental implants andijan, appointment for zirconia crowns andijan, dm stomatology schedule",
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
