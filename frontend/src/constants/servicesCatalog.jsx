import React from "react";
import {
  DentalImplantFixture,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalDenturesIcon,
  DentalWhiteningZoom,
  DentalDigitalScannerIcon,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  {
    id: "dental-implant",
    icon: <DentalImplantFixture className="w-7 h-7 text-primary" />,
    image: assets.treatment_implant,
    specialtyKey: "implantology",
    badge: {
      uz: "IMPLANTOLOGIYA · BIOTITAN",
      ru: "ИМПЛАНТОЛОГИЯ · БИОТИТАН",
      en: "IMPLANTOLOGY · BIOTITANIUM",
    },
    techTag: {
      uz: "3D Navigatsion Jarrohlik",
      ru: "Навигационная Хирургия",
      en: "Guided Precision",
    },
    featurePill: {
      uz: "Tabiiy Tishdek Mustahkam",
      ru: "Ощущается как родной зуб",
      en: "Feels Like Natural Tooth",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Dental Implantologiya",
      ru: "Дентальная Имплантология",
      en: "Dental Implantology",
    },
    title: {
      uz: "Dental Implantatsiya — Yo'qotilgan Tishni Ildizidan Tiklash",
      ru: "Дентальная Имплантация Зубов",
      en: "Dental Implants — Permanent Tooth Replacement",
    },
    shortDesc: {
      uz: "Qo'shni sog'lom tishlarni charxlamasdan, yo'qotilgan tish o'rnini rasmiy sertifikatlangan (Dentium, DIO Implant) biotitan implantlar bilan 100% og'riqsiz to'ldirish.",
      ru: "Восстановление утраченных зубов без обточки соседних: сертифицированные корейские титановые импланты Dentium и DIO Implant, ощущаемые и функционирующие как родные зубы.",
      en: "Restore lost teeth without grinding adjacent healthy teeth using biocompatible titanium implants that look and feel completely natural.",
    },
    duration: { uz: "20-25 daqiqa (1 qabul)", ru: "20-25 минут (1 визит)", en: "20-25 mins (1 visit)" },
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    highlights: {
      uz: [
        "Qo'shni sog'lom tishlarga zarracha teginilmaydi — ular butun qoladi",
        "2 bosqichli og'riqsizlantirish: inyeksiya og'rig'i ham sezilmaydi",
        "Dentium va DIO Implant tizimlari bo'yicha rasmiy sertifikatlangan jarrohlik",
        "Bir bosqichli (One-Stage) implantatsiya: tish olingan kuni yangi tish o'rnatish",
        "3D navigatsion shablon: xavfsiz chuqurlik va ideal burchakda o'rnatish",
        "O'z tishingizdek kuchli chaynash va bemalol tabassum qilish erkinligi",
      ],
      ru: [
        "Соседние здоровые зубы остаются нетронутыми — никакой обточки",
        "Двухэтапная анестезия: процедура проходит легче обычного лечения",
        "Официальная сертификация по южнокорейским системам Dentium и DIO Implant",
        "Одномоментная имплантация One-Stage: установка сразу после удаления зуба",
        "Установка по 3D навигационному шаблону с ювелирной точностью",
        "Полное возвращение уверенности, силы жевания и эстетики улыбки",
      ],
      en: [
        "Adjacent natural teeth remain 100% untouched and preserved",
        "Two-stage gentle anesthesia ensures a completely relaxed, painless visit",
        "Certified surgeon for official Dentium and DIO Implant systems",
        "Immediate One-Stage implantation: new tooth placed right on extraction day",
        "3D computer-guided placement protects anatomical structures at ideal angle",
        "Full restoration of natural biting strength and smiling confidence",
      ],
    },
    keywords: {
      uz: "dental implantatsiya andijon, tish implant narxi, sun'iy tish ildizi, biotitan implant, bir kunda tish qo'yish, implantolog andijon, dr muhammadali implantatsiya",
      ru: "имплантация зубов андижан, зубные импланты цена, титановые импланты, имплантация за один день, хирург имплантолог андижан, восстановить зуб без обточки",
      en: "dental implants andijan, tooth implant specialist, biocompatible titanium implant, immediate load implant, oral surgery andijan, permanent tooth replacement",
    },
  },
  {
    id: "tsirkon-keramika-koronka",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_crowns,
    specialtyKey: "orthopedia",
    badge: {
      uz: "ORTOPEDIYA · SIRKON",
      ru: "ОРТОПЕДИЯ · ЦИРКОНИЙ",
      en: "ORTHOPEDICS · ZIRCONIA",
    },
    techTag: {
      uz: "Metallsiz & Tabiiy",
      ru: "Без металла и естественно",
      en: "All-Ceramic & Biocompatible",
    },
    featurePill: {
      uz: "Tabiiy Tishdan Ajralmaydi",
      ru: "Неотличимо от родного зуба",
      en: "Indistinguishable from Enamel",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Ortopediya & Protezlash",
      ru: "Ортопедия и Протезирование",
      en: "Orthopedics & Prosthodontics",
    },
    title: {
      uz: "Sirkon va Keramika Koronkalar — Mustahkam Tabiiy Qoplamalar",
      ru: "Циркониевые и Керамические Коронки",
      en: "Zirconia & Ceramic Dental Crowns",
    },
    shortDesc: {
      uz: "Yemirilgan yoki singan tishlarni tabiiy tish emalidan aslo ajratib bo'lmaydigan, metallsiz va o'ta mustahkam monolit sirkoniy qoplamalar bilan tiklash.",
      ru: "Восстановление разрушенных зубов коронками из монолитного диоксида циркония: идеальное прилегание, натуральный блеск и никакой тёмной каймы.",
      en: "Restore broken or heavily filled teeth with metal-free monolithic zirconia and ceramic crowns that match natural translucency flawlessly.",
    },
    duration: { uz: "2-3 qabul", ru: "2-3 визита", en: "2-3 visits" },
    warranty: { uz: "15+ yillik chidamlilik", ru: "Более 15 лет службы", en: "15+ years durability" },
    highlights: {
      uz: [
        "Metallsiz asos: milk chetida hech qachon qora yoki ko'kish chiziq paydo bo'lmaydi",
        "Monolit sirkoniy kuchi — qattiq taomlarni bemalol chaynash imkoniyati",
        "Yorug'likni tabiiy tishdek o'tkazadi va tabassumingizga jonli jilo beradi",
        "Mikron darajasidagi jipslashish — tish ostiga ovqat qoldiqlari kirmaydi",
      ],
      ru: [
        "100% без металла: десна сохраняет здоровый розовый оттенок навсегда",
        "Сверхпрочный монолитный цирконий выдерживает любые нагрузки",
        "Естественное преломление света — никто не отличит коронку от своего зуба",
        "Герметичная микропосадка предотвращает развитие вторичного кариеса",
      ],
      en: [
        "100% metal-free: prevents unsightly gray or dark lines at the gumline",
        "Exceptional fracture resistance of solid zirconia for confident chewing",
        "Natural light-transmission and shade grading tailored to adjacent teeth",
        "Airtight marginal fit guarding against plaque accumulation and decay",
      ],
    },
    keywords: {
      uz: "sirkon qoplama andijon, sirkon tish narxi, tish qoplatish andijon, keramika koronka, monolit sirkoniy, tabiiy tish emali, ortopediya andijon, dr muhammadali sirkon",
      ru: "циркониевые коронки андижан, диоксид циркония цена, коронки на зубы андижан, безметалловая керамика, коронка из циркония, протезирование зубов андижан, доктор мухаммадали",
      en: "zirconia crowns andijan, ceramic tooth crown, monolithic zirconia prosthodontics, metal free dental crown, broken tooth restoration andijan, dental clinic andijan",
    },
  },
  {
    id: "ogriqsiz-terapiya",
    icon: <DentalToothMolar className="w-7 h-7 text-primary" />,
    image: assets.treatment_therapy,
    specialtyKey: "therapy",
    badge: {
      uz: "TERAPIYA · 100% OG'RIQSIZ",
      ru: "ТЕРАПИЯ · 100% БЕЗ БОЛИ",
      en: "THERAPY · 100% GENTLE CARE",
    },
    techTag: {
      uz: "2 Bosqichli Anesteziya",
      ru: "Двухэтапная Анестезия",
      en: "Two-Stage Numbing",
    },
    featurePill: {
      uz: "Qo'rquvsiz va Xotirjam",
      ru: "Без страха и укола",
      en: "Calm & Sting-Free",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Terapevtik Stomatologiya",
      ru: "Терапевтическая Стоматология",
      en: "Restorative Dentistry",
    },
    title: {
      uz: "Og'riqsiz Terapiya — Karies va Tish Og'rig'ini Davolash",
      ru: "Лечение Кариеса Без Боли и Страха",
      en: "Painless Therapy & Natural Restorations",
    },
    shortDesc: {
      uz: "Bormashina va inyeksiya qo'rquvisiz: avval milk mevali gel bilan uvishtiriladi, karies chuqur tozalanib, tish tabiiy relyefi va kanallari zich tiklanadi.",
      ru: "Забудьте о боли: десна сначала обезболивается гелем с приятным вкусом, а современные фотополимеры полностью воссоздают анатомию зуба.",
      en: "Fear-free dental care: gums are first gently numbed with a flavored topical gel, cavities are thoroughly cleaned, and teeth are restored anatomically.",
    },
    duration: { uz: "30-40 daqiqa", ru: "30-40 минут", en: "30-40 mins" },
    warranty: { uz: "5 yillik sifat kafolati", ru: "5 лет гарантии на пломбу", en: "5-year restoration warranty" },
    highlights: {
      uz: [
        "Inyeksiya o'rni oldindan mevali gel bilan muzlatiladi — ukol umuman sezilmaydi",
        "Kariesni asabga yetkazmasdan erta bosqichda to'xtatish va asrab qolish",
        "Yapon nano-kompozitlari: plomba qo'yilgani ko'rinmaydi va tishdek tuyuladi",
        "Tish ildiz kanallarini zamonaviy davolash (endodontiya)",
      ],
      ru: [
        "Место укола предварительно 'замораживается' гелем — укол не чувствуется",
        "Максимальное сохранение живых тканей зуба и ранняя остановка кариеса",
        "Премиальные японские нанокомпозиты: пломба абсолютно невидима",
        "Плотное пломбирование корневых каналов под контролем оптики",
      ],
      en: [
        "Pre-numbing topical gel ensures local injection is completely unfelt",
        "Preserves vital tooth structure with minimally invasive micro-dentistry",
        "Premium nano-composites replicating natural grooves and shades seamlessly",
        "Precision root canal cleaning and 3D airtight obturation",
      ],
    },
    keywords: {
      uz: "og'riqsiz tish davolash andijon, karies davolash, tish plombalash, tish asabi olish og'riqsiz, kompozit restavratsiya, tish kanallarini davolash, endodontiya andijon",
      ru: "лечение зубов без боли андижан, лечение кариеса андижан, безболезненное пломбирование, лечение корневых каналов, эстетическая реставрация зубов, световая пломба",
      en: "pain free dentistry andijan, gentle tooth filling, cavity treatment, root canal therapy endodontics, aesthetic dental restoration, dentist without pain",
    },
  },
  {
    id: "vinirlar",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_veneers,
    specialtyKey: "orthopedia",
    badge: {
      uz: "ORTOPEDIYA · E-MAX",
      ru: "ОРТОПЕДИЯ · E-MAX",
      en: "ORTHOPEDICS · IPS E-MAX",
    },
    techTag: {
      uz: "Marvarid Tabassum",
      ru: "Безупречная Эстетика",
      en: "Flawless Veneers",
    },
    featurePill: {
      uz: "Ultra-Yupqa 0.3 mm Zargarlik",
      ru: "Ювелирная толщина 0.3 мм",
      en: "Ultra-Thin 0.3 mm Precision",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-teal-50 text-teal-800 border-teal-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Ortopediya & Estetika",
      ru: "Ортопедия и Эстетика",
      en: "Aesthetic Orthopedics",
    },
    title: {
      uz: "Estetik Keramik Vinirlar — Mukammal Tabassum Yaratish",
      ru: "Керамические Виниры E-max — Преображение Улыбки",
      en: "Aesthetic Ceramic Veneers — Smile Transformation",
    },
    shortDesc: {
      uz: "Tishlarning rangi, shakli, tirqishlari yoki mayda nuqsonlarini minimal charxlash bilan o'zgartiruvchi, zargarlik darajasidagi nozik keramik qoplamalar.",
      ru: "Создание ровной, сияющей улыбки: ультратонкие керамические пластинки E-max скрывают сколы, пятна и щели при бережной обработке эмали.",
      en: "Create a radiant, harmonious smile with ultra-thin E-max ceramic laminates that correct discoloration, gaps, and chips with minimal preparation.",
    },
    duration: { uz: "5-7 kun (2 qabul)", ru: "5-7 дней (2 визита)", en: "5-7 days (2 visits)" },
    warranty: { uz: "10-15 yillik doimiy jilo", ru: "10-15 лет стойкого сияния", en: "10-15 years lasting shine" },
    highlights: {
      uz: [
        "O'ta ehtiyotkorona mikro-tayyorlash: tishning tirikligini maksimal asrab qolish",
        "Qahva, choy yoki meva sharbatlaridan rangini aslo o'zgartirmaydi",
        "Yuzingizning individual tuzilishi va lab chizig'iga moslashtirilgan dizayn",
        "Shveytsariya IPS E-max keramikasining tabiiy shaffofligi va nafisligi",
      ],
      ru: [
        "Бережное микропрепарирование эмали с сохранением жизнеспособности зуба",
        "Устойчивость к красителям: чай, кофе и соки не оставляют следов",
        "Индивидуальный подбор формы под контуры губ и черты лица",
        "Премиальная стеклокерамика IPS e.max с непревзойдённой естественностью",
      ],
      en: [
        "Conservative micro-preparation that protects the underlying tooth structure",
        "Stain-resistant glass ceramic unaffected by coffee, tea, or berries",
        "Bespoke aesthetic shaping harmonized with your lips and facial lines",
        "Renowned lifelike depth, luster, and vitality of authentic IPS e.max",
      ],
    },
    keywords: {
      uz: "keramik vinirlar andijon, e-max vinir narxi, estetik tish qoplamasi, gollivud tabassumi andijon, tish tirqishlarini yopish, tabassum estetikasi, dr muhammadali vinir",
      ru: "виниры андижан, керамические виниры e-max цена, голливудская улыбка андижан, виниры без обточки, эстетическая стоматология андижан, реставрация зоны улыбки",
      en: "porcelain veneers andijan, ips e-max veneers, cosmetic dentistry andijan, smile makeover, diastema closure, aesthetic tooth laminates",
    },
  },
  {
    id: "protezlar",
    icon: <DentalDenturesIcon className="w-7 h-7 text-primary" />,
    image: assets.treatment_dentures,
    specialtyKey: "orthopedia",
    badge: {
      uz: "ORTOPEDIYA · PROTEZLASH",
      ru: "ОРТОПЕДИЯ · ПРОТЕЗИРОВАНИЕ",
      en: "ORTHOPEDICS · PROSTHETICS",
    },
    techTag: {
      uz: "Elastik Neylon & Byugel",
      ru: "Нейлон и Бюгель",
      en: "Flexible Nylon & Clasp",
    },
    featurePill: {
      uz: "Yumshoq va Xotirjam Chaynash",
      ru: "Мягкая и надёжная фиксация",
      en: "Soft & Secure Chewing",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-amber-50 text-amber-800 border-amber-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Ortopediya & Tish Protezlash",
      ru: "Ортопедическое Протезирование",
      en: "Removable & Fixed Prosthetics",
    },
    title: {
      uz: "Ortopediya: Tish Protezlari va Ko'priklar",
      ru: "Ортопедия: Зубные Протезы и Мостовидные Конструкции",
      en: "Orthopedics: Dental Dentures & Bridges",
    },
    shortDesc: {
      uz: "Ko'p sonli tishlar yo'qotilganda chaynash va suhbatlashish qulayligini tez hamda ishonchli qaytaruvchi elastik, nozik va yengil protezlar.",
      ru: "Комфортное и доступное восстановление жевательной функции при отсутствии нескольких или всех зубов: мягкие, лёгкие и надёжно фиксируемые протезы.",
      en: "Restore comfortable chewing and natural speech affordably when multiple teeth are missing, using lightweight flexible nylon and precision clasp dentures.",
    },
    duration: { uz: "3-5 kun", ru: "3-5 дней", en: "3-5 days" },
    warranty: { uz: "Ishonchli xizmat kafolati", ru: "Гарантия на конструкцию", en: "Structural warranty" },
    highlights: {
      uz: [
        "Egiluvchan va yengil material: og'izga tez o'rganiladi va tilga xalaqit bermaydi",
        "Mustahkam qulflar — kulganda yoki so'zlashganda tushib ketish xavfi yo'q",
        "Tish milki rangiga mos keluvchi tabiiy pushti tus va chiroyli tishlar",
        "Taomlarni bemalol chaynash va hayot quvonchini to'liq his qilish",
      ],
      ru: [
        "Гипоаллергенный эластичный нейлон для быстрого и лёгкого привыкания",
        "Надёжная анатомическая посадка — протез не смещается во время разговора",
        "Натуральный оттенок искусственной десны гармонирует со слизистой",
        "Возвращение удовольствия от любимой еды и уверенного общения",
      ],
      en: [
        "Hypoallergenic, flexible materials facilitating rapid adaptation",
        "Firm anatomical retention preventing movement during speaking or laughing",
        "Lifelike gingival shading blending naturally with your oral tissues",
        "Rediscover the joy of eating favorite foods without discomfort",
      ],
    },
    keywords: {
      uz: "tish protezlari andijon, yengil protez tishlar, elastik neylon protez, byugel protez narxi, olinadigan tish protezi, tish protezlash andijon",
      ru: "зубные протезы андижан, съемные протезы цена, нейлоновые мягкие протезы, бюгельные протезы, протезирование зубов андижан, восстановление зубов",
      en: "dental dentures andijan, removable dentures, flexible nylon dentures, partial dentures, clasp prosthetics, modern prosthodontics andijan",
    },
  },
  {
    id: "tish-oqartirish",
    icon: <DentalWhiteningZoom className="w-7 h-7 text-primary" />,
    image: assets.treatment_whitening,
    specialtyKey: "therapy",
    badge: {
      uz: "TERAPIYA · XAVFSIZ OQARTIRISH",
      ru: "ТЕРАПИЯ · БЕЗОПАСНОЕ ОСВЕТЛЕНИЕ",
      en: "THERAPY · SAFE ENAMEL CARE",
    },
    techTag: {
      uz: "AirFlow & Rem-Gel",
      ru: "AirFlow и Реминерализация",
      en: "AirFlow & Mineral Care",
    },
    featurePill: {
      uz: "6-8 Ton Yorqinlik",
      ru: "На 6-8 тонов светлее",
      en: "6-8 Shades Brighter",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Terapiya & Gigiyena",
      ru: "Терапия и Гигиена",
      en: "Therapy & Hygiene",
    },
    title: {
      uz: "Xavfsiz Professional Tish Oqartirish & AirFlow",
      ru: "Профессиональное Отбеливание и Чистка AirFlow",
      en: "Professional Enamel-Safe Teeth Whitening & AirFlow",
    },
    shortDesc: {
      uz: "Tish emaliga zarar yetkazmasdan qora choy, qahva va tamaki dog'larini tozalash hamda tabassumni bir soatda 6-8 tongacha oppoq va yorqin qilish.",
      ru: "Бережное осветление зубов на 6-8 тонов с удалением зубного камня и налёта: специальный реминерализирующий гель защищает эмаль от чувствительности.",
      en: "Safe professional brightening lifting stubborn tea, coffee, and tobacco stains by 6-8 shades, followed by enamel-strengthening mineral therapy.",
    },
    duration: { uz: "45-60 daqiqa", ru: "45-60 минут", en: "45-60 mins" },
    warranty: { uz: "1.5-2 yil saqlanuvchi oqlik", ru: "Стойкий эффект до 2 лет", en: "Lasting brightness up to 2 years" },
    highlights: {
      uz: [
        "Shveytsariya AirFlow texnologiyasi: hatto yetib borish qiyin joylar ham tozalanadi",
        "Emalni mustahkamlovchi kalsiy va ftorli rem-gel bilan himoya",
        "Sezuvchanlik va og'riqsiz: milklar maxsus himoya to'sig'i bilan berkitiladi",
        "Faqat birgina tashrifda ko'zga ko'rinarli oppoq va toza tabassum",
      ],
      ru: [
        "Швейцарская технология AirFlow бережно снимает даже плотный налёт",
        "Реминерализация кальцием и фтором предотвращает чувствительность",
        "Мягкое воздействие без повреждения структуры здоровой эмали",
        "Видимый ослепительный результат сразу после завершения процедуры",
      ],
      en: [
        "Swiss AirFlow gentle polishing lifts stubborn discoloration from every crevice",
        "Post-treatment remineralization with calcium and fluoride shields sensitivity",
        "Protective gum isolation ensures maximum safety throughout the session",
        "Noticeably brighter, sparkling smile immediately visible in the mirror",
      ],
    },
    keywords: {
      uz: "tish oqartirish andijon, airflow tozalash narxi, tish toshlarini tozalash, xavfsiz tish oqartirish, tish emalini mustahkamlash, oppoq tishlar",
      ru: "отбеливание зубов андижан, чистка зубов airflow, ультразвуковая чистка зубного камня, безопасное отбеливание эмали, профессиональная гигиена полости рта",
      en: "teeth whitening andijan, dental scaling airflow, safe enamel whitening, tartar removal, professional dental hygiene andijan",
    },
  },
  {
    id: "digital-dentistry",
    icon: <DentalDigitalScannerIcon className="w-7 h-7 text-primary" />,
    image: assets.clinic_room,
    specialtyKey: "digital",
    badge: {
      uz: "RAQAMLI STOMATOLOGIYA",
      ru: "ЦИФРОВАЯ СТОМАТОЛОГИЯ",
      en: "DIGITAL DENTISTRY",
    },
    techTag: {
      uz: "Qoliplarsiz & 60 Soniyada",
      ru: "Без слепков за 60 секунд",
      en: "Gag-Free & Instant",
    },
    featurePill: {
      uz: "Noqulay Gips Qoliplarisiz",
      ru: "Без слепочной массы",
      en: "No Putty Impressions",
    },
    badgeTheme: {
      badgeBg: "bg-red-50 text-primary border-red-200",
      warrantyBg: "bg-slate-100 text-slate-700 border-slate-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Raqamli Stomatologiya",
      ru: "Цифровая Стоматология",
      en: "Digital Dentistry",
    },
    title: {
      uz: "3D Skanerlash & Virtual Tabassum Loyihasi",
      ru: "3D Сканирование и Моделирование Улыбки",
      en: "3D Intraoral Scanning & Smile Preview",
    },
    shortDesc: {
      uz: "Ko'ngilni aynituvchi noqulay gips qoliplarisiz: 60 soniyada tishlaringizning raqamli 3D modeli olinadi va yangi tabassumingiz oldindan ekranda ko'rsatiladi.",
      ru: "Без рвотного рефлекса и слепочной массы: комфортное сканирование всей челюсти за 60 секунд и возможность оценить будущую улыбку на экране до начала лечения.",
      en: "No messy putty molds or gag reflex: an ultra-gentle 60-second optical scan captures your teeth with micron precision and lets you preview your new smile.",
    },
    duration: { uz: "15-20 daqiqa", ru: "15-20 минут", en: "15-20 mins" },
    warranty: { uz: "Zargarlik aniqligi", ru: "Ювелирная точность", en: "Jeweler's precision" },
    highlights: {
      uz: [
        "Noqulay gips massasisiz va ko'ngil aynishlarsiz 60 soniyada raqamli o'lchov",
        "Davolash boshlanishidan oldin natijani kompyuterda ko'rish va muhokama qilish",
        "Mikron darajasidagi aniqlik — qoplamalar va implantlar tishga ideal o'tiradi",
        "Og'iz bo'shlig'i holati haqida Dr. MuhammadAli Davronov bilan shaxsiy ochiq muloqot",
      ],
      ru: [
        "Комфортное сканирование за 60 секунд без тошноты и слепочной массы",
        "Визуализация вашей новой улыбки на 3D экране до первого касания",
        "Идеальная микронная точность для долговечности коронок и имплантов",
        "Наглядная и честная консультация по каждому зубу лично с доктором",
      ],
      en: [
        "Gag-free, seamless scanning completed comfortably in just 60 seconds",
        "Realistic 3D smile preview before any procedure begins",
        "Micron-grade precision ensuring airtight, natural-feeling restorations",
        "Clear, visual consultation directly with Dr. MuhammadAli Davronov",
      ],
    },
    keywords: {
      uz: "3d tish skanerlash andijon, raqamli stomatologiya, qoliplarsiz tish o'lchash, intraoral 3d skaner, virtual tabassum loyihasi, zamonaviy stomatologiya",
      ru: "3d сканирование зубов андижан, цифровая стоматология, слепки без слепочной массы, интраоральный сканер, 3d моделирование улыбки",
      en: "3d intraoral scanning andijan, digital dentistry, gag free optical impressions, digital smile design, modern dental care",
    },
  },
];
