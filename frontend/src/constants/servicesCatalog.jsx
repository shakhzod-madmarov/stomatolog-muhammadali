import React from "react";
import {
  DentalImplantFixture,
  DentalBracesIcon,
  DentalVeneerCrown,
  DentalToothMolar,
  DentalDenturesIcon,
  DentalAlignersIcon,
  DentalWhiteningZoom,
  DentalDigitalScannerIcon,
} from "../components/MedicalIcons";
import { assets } from "../assets/assets";

export const SERVICES_CATALOG = [
  {
    id: "digital-dentistry",
    icon: <DentalDigitalScannerIcon className="w-7 h-7 text-primary" />,
    image: assets.clinic_room,
    badge: {
      uz: "3D OPTIK SKANERLASH",
      ru: "3D ОПТИЧЕСКОЕ СКАНИРОВАНИЕ",
      en: "3D OPTICAL SCANNING",
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
      badgeBg: "bg-red-50 text-red-700 border-red-200",
      warrantyBg: "bg-slate-100 text-slate-700 border-slate-200",
      accentGlow: "hover:shadow-red-500/10",
    },
    category: {
      uz: "Raqamli Diagnostika",
      ru: "Цифровая Диагностика",
      en: "Digital Diagnostics",
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
        "Идеальная микроная точность для долговечности коронок и имплантов",
        "Наглядная и честная консультация по каждому зубу лично с доктором",
      ],
      en: [
        "Gag-free, seamless scanning completed comfortably in just 60 seconds",
        "Realistic 3D smile preview before any procedure begins",
        "Micron-grade precision ensuring airtight, natural-feeling restorations",
        "Clear, visual consultation directly with Dr. MuhammadAli Davronov",
      ],
    },
  },
  {
    id: "dental-implant",
    icon: <DentalImplantFixture className="w-7 h-7 text-primary" />,
    image: assets.treatment_implant,
    badge: {
      uz: "PREMIUM BIOTITAN",
      ru: "ПРЕМИУМ БИОТИТАН",
      en: "PREMIUM BIOTITANIUM",
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
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-red-500/20",
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
      uz: "Qo'shni sog'lom tishlarni charxlamasdan, yo'qotilgan tish o'rnini umrbod xizmat qiluvchi tabiiy biotitan implant bilan 100% og'riqsiz to'ldirish.",
      ru: "Восстановление утраченных зубов без обточки соседних: швейцарские и корейские титановые импланты, ощущаемые и функционирующие как родные зубы.",
      en: "Restore lost teeth without grinding adjacent healthy teeth using biocompatible titanium implants that look and feel completely natural.",
    },
    duration: { uz: "20-25 daqiqa (1 qabul)", ru: "20-25 минут (1 визит)", en: "20-25 mins (1 visit)" },
    warranty: { uz: "Umrbod rasmiy kafolat", ru: "Пожизненная гарантия", en: "Lifetime warranty" },
    highlights: {
      uz: [
        "Qo'shni sog'lom tishlarga zarracha teginilmaydi — ular butun qoladi",
        "2 bosqichli og'riqsizlantirish: inyeksiya og'rig'i ham sezilmaydi",
        "3D navigatsion shablon: xavfsiz chuqurlik va ideal burchakda o'rnatish",
        "O'z tishingizdek kuchli chaynash va bemalol tabassum qilish erkinligi",
      ],
      ru: [
        "Соседние здоровые зубы остаются нетронутыми — никакой обточки",
        "Двухэтапная анестезия: процедура проходит легче обычного лечения",
        "Установка по 3D навигационному шаблону с ювелирной точностью",
        "Полное возвращение уверенности, силы жевания и эстетики улыбки",
      ],
      en: [
        "Adjacent natural teeth remain 100% untouched and preserved",
        "Two-stage gentle anesthesia ensures a completely relaxed, painless visit",
        "3D computer-guided placement protects anatomical structures at ideal angle",
        "Full restoration of natural biting strength and smiling confidence",
      ],
    },
  },
  {
    id: "elaynerlar",
    icon: <DentalAlignersIcon className="w-7 h-7 text-red-500" />,
    image: assets.treatment_aligners,
    badge: {
      uz: "SHAFFOF KAPALAR",
      ru: "ПРОЗРАЧНЫЕ КАПЫ",
      en: "CLEAR ALIGNERS",
    },
    techTag: {
      uz: "Ko'rinmas Ortodontiya",
      ru: "Невидимая Ортодонтия",
      en: "Invisible Orthodontics",
    },
    featurePill: {
      uz: "Simlarsiz va Qulay",
      ru: "Комфортно без замков",
      en: "Discreet & Wire-Free",
    },
    badgeTheme: {
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-indigo-950/85 text-indigo-300 border-indigo-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Raqamli Ortodontiya",
      ru: "Цифровая Ортодонтия",
      en: "Digital Orthodontics",
    },
    title: {
      uz: "Shaffof Elaynerlar — Ko'zga Ko'rinmas Tish To'g'irlash",
      ru: "Прозрачные Элайнеры — Невидимое Выравнивание",
      en: "Clear Aligners — Invisible Smile Alignment",
    },
    shortDesc: {
      uz: "Metall simlarsiz va atrofdagilarga bildirmasdan tishlarni to'g'irlash. Shaffof kapalar yupqa, nozik va ovqatlanishda osongina yechiladi.",
      ru: "Идеально ровные зубы без металлических брекетов: прозрачные каппы незаметны при разговоре и легко снимаются во время еды.",
      en: "Straighten your smile discreetly without metal wires. Ultra-clear custom aligner trays that are virtually invisible and easily removable.",
    },
    duration: { uz: "Har 10-14 kunda yangilash", ru: "Смена кап каждые 10-14 дней", en: "Tray renewal every 10-14 days" },
    warranty: { uz: "Aniqlangan 3D natija", ru: "Прогнозируемый 3D результат", en: "Predictable 3D outcome" },
    highlights: {
      uz: [
        "Suhbatlashganda va fotosuratlarda mutlaqo ko'rinmaydi",
        "Cheklovlarsiz ovqatlanish — kapani bir harakatda yechib qo'yish mumkin",
        "Milklarni tirnamaydi, og'izda noqulaylik va og'riq keltirib chiqarmaydi",
        "Davolash boshlanishidayoq yakuniy natijani 3D modelda aniq ko'rasiz",
      ],
      ru: [
        "Абсолютно незаметны для окружающих во время общения и на фото",
        "Никаких ограничений в любимой еде — капы снимаются перед приёмом пищи",
        "Гладкие контуры не натирают щёки и десны, сохраняя эмаль здоровой",
        "Вы точно знаете результат и срок лечения ещё до начала ношения",
      ],
      en: [
        "Practically undetectable during conversations, meetings, and photos",
        "Zero dietary restrictions — simply unclip trays before meals and hygiene",
        "Smooth contoured edges protect gums and delicate cheek lining",
        "Clear timeline and visualized end result before wearing your first tray",
      ],
    },
  },
  {
    id: "breketlar",
    icon: <DentalBracesIcon className="w-7 h-7 text-red-500" />,
    image: assets.treatment_braces,
    badge: {
      uz: "BREKET TIZIMLARI",
      ru: "БРЕКЕТ-СИСТЕМЫ",
      en: "BRACES SYSTEMS",
    },
    techTag: {
      uz: "Metall, Keramika & Sapfir",
      ru: "Металл, Керамика, Сапфир",
      en: "Metal, Ceramic & Sapphire",
    },
    featurePill: {
      uz: "To'g'ri Prikus va Yuz Simmetriyasi",
      ru: "Правильный прикус и овал лица",
      en: "Harmonious Bite & Profile",
    },
    badgeTheme: {
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-blue-950/85 text-blue-300 border-blue-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Klassik Ortodontiya",
      ru: "Классическая Ортодонтия",
      en: "Orthodontics",
    },
    title: {
      uz: "Zamonaviy Breket Tizimlari — Murakkab Prikusni To'g'irlash",
      ru: "Брекет-Системы — Исправление Сложного Прикуса",
      en: "Advanced Braces — Comprehensive Bite Correction",
    },
    shortDesc: {
      uz: "Tishlarning har qanday murakkab egriliklari va noto'g'ri tishlash holatlarini ishonchli to'g'irlash, chiroyli tabassum va sog'lom chaynash funksiyasi.",
      ru: "Надёжное решение для исправления скученности, кривизны зубов и нарушений прикуса любой сложности с заботой о гармонии лица.",
      en: "A proven, reliable solution for severe crowding, misaligned teeth, and complex bite issues that enhances facial balance and chewing comfort.",
    },
    duration: { uz: "Ko'rik: 20-30 daqiqa", ru: "Визит: 20-30 минут", en: "Visit: 20-30 mins" },
    warranty: { uz: "Barqaror natija kafolati", ru: "Гарантия стабильного результата", en: "Stable occlusion warranty" },
    highlights: {
      uz: [
        "Nozik metall, tish rangidagi keramika yoki shaffof sapfir qulflar",
        "Yumshoq kuch bilan ishlovchi past ishqalanishli zamonaviy tizimlar",
        "Chaynash yuklamasini me'yorga soladi va tishlarning yemirilishini to'xtatadi",
        "Har bir bosqich shaxsan Dr. MuhammadAli Davronov nazoratida o'tadi",
      ],
      ru: [
        "Выбор конструкции: классический металл, эстетическая керамика или сапфир",
        "Мягкое перемещение зубов с минимальным дискомфортом",
        "Правильное распределение нагрузки защищает зубы от стираемости",
        "Каждая активация проводится лично доктором Тожибаевым",
      ],
      en: [
        "Options in sleek metal, natural-tooth ceramic, or clear crystal sapphire",
        "Low-friction mechanics that move teeth gently with minimal soreness",
        "Balances bite pressure, preventing premature wear and jaw joint fatigue",
        "Every adjustment performed personally by Dr. MuhammadAli Davronov",
      ],
    },
  },
  {
    id: "tsirkon-keramika-koronka",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_crowns,
    badge: {
      uz: "TSIRKON VA KERAMIKA",
      ru: "ЦИРКОНИЙ И КЕРАМИКА",
      en: "ZIRCONIA & CERAMIC",
    },
    techTag: {
      uz: "Metallsiz & Tabiiy",
      ru: "Без металла и естественно",
      en: "All-Ceramic & Biocompatible",
    },
    featurePill: {
      uz: "Tabiiy Tishdan Ajratib Bo'lmaydi",
      ru: "Неотличимо от родного зуба",
      en: "Indistinguishable from Enamel",
    },
    badgeTheme: {
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Ortopediya & Protezlash",
      ru: "Ортопедия и Протезирование",
      en: "Prosthodontics",
    },
    title: {
      uz: "Tsirkon va Keramika Koronkalar — Mustahkam Tabiiy Qoplamalar",
      ru: "Циркониевые и Керамические Коронки",
      en: "Zirconia & Ceramic Dental Crowns",
    },
    shortDesc: {
      uz: "Yemirilgan yoki singan tishlarni tabiiy tish emalidan aslo ajratib bo'lmaydigan, metallsiz va o'ta mustahkam tsirkoniy qoplamalar bilan tiklash.",
      ru: "Восстановление разрушенных зубов коронками из монолитного диоксида циркония: идеальное прилегание, натуральный блеск и никакой тёмной каймы.",
      en: "Restore broken or heavily filled teeth with metal-free monolithic zirconia and ceramic crowns that match natural translucency flawlessly.",
    },
    duration: { uz: "2-3 qabul", ru: "2-3 визита", en: "2-3 visits" },
    warranty: { uz: "15+ yillik chidamlilik", ru: "Более 15 лет службы", en: "15+ years durability" },
    highlights: {
      uz: [
        "Metallsiz asos: milk chetida hech qachon qora yoki ko'kish chiziq bo'lmaydi",
        "Monolit tsirkoniy kuchi — qattiq taomlarni bemalol chaynash imkoniyati",
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
  },
  {
    id: "vinirlar",
    icon: <DentalVeneerCrown className="w-7 h-7 text-primary" />,
    image: assets.treatment_veneers,
    badge: {
      uz: "E-MAX KERAMIKA",
      ru: "E-MAX КЕРАМИКА",
      en: "IPS E-MAX CERAMIC",
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
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-teal-950/85 text-teal-300 border-teal-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Estetik Stomatologiya",
      ru: "Эстетическая Стоматология",
      en: "Aesthetic Dentistry",
    },
    title: {
      uz: "Estetik Keramik Vinirlar — Mukammal Tabassum Yaratish",
      ru: "Керамические Виниры — Преображение Улыбки",
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
  },
  {
    id: "protezlar",
    icon: <DentalDenturesIcon className="w-7 h-7 text-red-500" />,
    image: assets.treatment_dentures,
    badge: {
      uz: "YENGIL KONSTRUKSIYA",
      ru: "УДОБНЫЕ ПРОТЕЗЫ",
      en: "ERGONOMIC PROSTHETICS",
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
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-amber-950/85 text-amber-300 border-amber-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Tish Protezlash",
      ru: "Протезирование Зубов",
      en: "Dentures & Prosthetics",
    },
    title: {
      uz: "Zamonaviy Yengil Tish Protezlari",
      ru: "Современные Зубные Протезы",
      en: "Modern Removable & Fixed Dentures",
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
  },
  {
    id: "ogriqsiz-terapiya",
    icon: <DentalToothMolar className="w-7 h-7 text-primary" />,
    image: assets.treatment_therapy,
    badge: {
      uz: "100% OG'RIQSIZ",
      ru: "100% БЕЗ БОЛИ",
      en: "100% GENTLE CARE",
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
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-emerald-950/85 text-emerald-300 border-emerald-400/50",
      accentGlow: "hover:shadow-red-500/20",
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
      uz: "Bormashina va inyeksiya qo'rquvisiz: avval milk mevali gel bilan uvishtiriladi, karies chuqur tozalanib, tish tabiiy relyefi bilan tiklanadi.",
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
        "Tish emalini mustahkamlovchi remineralizatsiya va himoya",
      ],
      ru: [
        "Место укола предварительно 'замораживается' гелем — укол не чувствуется",
        "Максимальное сохранение живых тканей зуба и ранняя остановка кариеса",
        "Премиальные японские нанокомпозиты: пломба абсолютно невидима",
        "Глубокая реминерализация укрепляет здоровую эмаль вокруг пломбы",
      ],
      en: [
        "Pre-numbing topical gel ensures local injection is completely unfelt",
        "Preserves vital tooth structure with minimally invasive micro-dentistry",
        "Premium nano-composites replicating natural grooves and shades seamlessly",
        "Remineralizing fluoride therapy fortifying enamel against recurring cavities",
      ],
    },
  },
  {
    id: "tish-oqartirish",
    icon: <DentalWhiteningZoom className="w-7 h-7 text-primary" />,
    image: assets.treatment_whitening,
    badge: {
      uz: "XAVFSIZ OQARTIRISH",
      ru: "БЕЗОПАСНОЕ ОСВЕТЛЕНИЕ",
      en: "SAFE ENAMEL WHITENING",
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
      badgeBg: "bg-red-950/85 text-red-300 border-red-600/50",
      warrantyBg: "bg-cyan-950/85 text-cyan-300 border-cyan-400/50",
      accentGlow: "hover:shadow-red-500/20",
    },
    category: {
      uz: "Gigiyena va Estetika",
      ru: "Гигиена и Эстетика",
      en: "Hygiene & Cosmetics",
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
  },
];

