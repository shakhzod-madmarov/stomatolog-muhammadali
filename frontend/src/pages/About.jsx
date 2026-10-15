import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { buildDoctorProfileSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import Doctor3DCard from "../components/Doctor3DCard";
import {
  IconShieldCheck,
  IconGentleComfort,
  DentalDigitalScannerIcon,
  IconTrophyWarranty,
} from "../components/MedicalIcons";
import Interactive3DTilt from "../components/Interactive3DTilt";

const About = ({ onOpenBooking }) => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const seo = PAGE_SEO.about[lang] || PAGE_SEO.about.uz;
  const years = getYearsOfExperience();

  const timeline = [
    {
      year: {
        uz: "Fundamental Ta'lim",
        ru: "Высшее Образование",
        en: "Medical Education",
      },
      title: {
        uz: "Andijon Davlat Tibbiyot Instituti (ADTI)",
        ru: "Андижанский Государственный Медицинский Институт (АГМИ)",
        en: "Andijan State Medical Institute (ASMI)",
      },
      desc: {
        uz: "Stomatologiya fakultetida chuqurlashtirilgan nazariy va amaliy tayyorgarlik. Zamonaviy stomatologiya asoslari, anesteziologiya va klinik diagnostika.",
        ru: "Стоматологический факультет, фундаментальная клиническая подготовка, современные протоколы обезболивания и диагностики.",
        en: "Dental faculty graduate with comprehensive training in contemporary dentistry, pain management, and diagnostics.",
      },
    },
    {
      year: {
        uz: "Ortopediya & Terapiya",
        ru: "Ортопедия и Терапия",
        en: "Orthopedics & Therapy",
      },
      title: {
        uz: "Tsirkon Koronkalar, Vinirlar va Og'riqsiz Terapiya",
        ru: "Циркониевые коронки, виниры и бережная терапия",
        en: "Zirconia Crowns, Veneers & Pain-Free Therapy",
      },
      desc: {
        uz: "CAD/CAM raqamli frezerlash texnologiyalari, E-max press-keramika, nano-kompozit restavratsiya va ildiz kanallarini (endodontiya) 3D zich plombalash bo'yicha maxsus malaka.",
        ru: "Цифровое моделирование CAD/CAM, виниры E-max, микро-пломбирование нано-композитами и обтурация корневых каналов.",
        en: "Mastery in CAD/CAM zirconia milling, E-max press ceramic veneers, and microscopic endodontic canal obturation.",
      },
    },
    {
      year: {
        uz: "Implantologiya",
        ru: "Имплантология",
        en: "Implantology",
      },
      title: {
        uz: "Biotitan Dental Implantologiya va Jarrohlik",
        ru: "Дентальная имплантация и хирургия",
        en: "Dental Implants & Oral Surgery",
      },
      desc: {
        uz: "Biotitan implantlar, 3D navigatsion jarrohlik shablonlari asosida og'riqsiz va asoratsiz tish tiklash amaliyoti.",
        ru: "Биосовместимые титановые импланты, навигационные хирургические шаблоны, бережная имплантация без разрезов десны.",
        en: "Computer-guided titanium implants, atraumatic surgical protocols, and immediate restorations.",
      },
    },
    {
      year: {
        uz: "2021 – Hozirgacha",
        ru: "2021 – Настоящее время",
        en: "2021 – Present",
      },
      title: {
        uz: `DM Stomatologiya Asoschisi va Bosh Shifokori (${years} Yillik Tajriba)`,
        ru: `Основатель и ведущий врач клиники DM Stomatology (${years} Лет Опыта)`,
        en: `Founder & Lead Dentist at DM Stomatology (${years} Years Clinical Practice)`,
      },
      desc: {
        uz: "Andijon shahri, Navoiy shoh ko'chasi 91-uyda joylashgan shaxsiy DM Stomatologiya klinikasida 3,500+ dan ortiq bemorlarga individual, professional va og'riqsiz xizmat ko'rsatish.",
        ru: "Приём более 3 500 пациентов в собственной клинике DM Stomatology (Андижан, пр-т Навои 91): ортопедия, терапия и имплантация.",
        en: "Personal clinical care for over 3,500 patients at DM Stomatology (91 Navoi Avenue, Andijan).",
      },
    },
  ];

  const values = [
    {
      icon: <IconShieldCheck className="w-6 h-6 text-primary" />,
      title: {
        uz: "100% Sterillik va Xavfsizlik",
        ru: "100% Стерильность и Безопасность",
        en: "100% Sterility & Safety",
      },
      desc: {
        uz: "Har bir bemor uchun alohida avtoklavlangan steril kraft-paket bevosita ko'z oldingizda ochiladi.",
        ru: "Индивидуальный крафт-пакет со стерильными инструментами вскрывается прямо перед пациентом.",
        en: "Individually autoclaved sterile instrument pouches opened in front of the patient.",
      },
    },
    {
      icon: <IconGentleComfort className="w-6 h-6 text-primary" />,
      title: {
        uz: "100% Og'riqsiz Anesteziya",
        ru: "Бережная Анестезия Без Боли",
        en: "100% Pain-Free Anesthesia",
      },
      desc: {
        uz: "Milk yuzasi maxsus muzlatuvchi mevali gel bilan sezgisizlantiriladi — inyeksiya og'rig'i umuman sezilmaydi.",
        ru: "Десна предварительно обрабатывается анестезирующим гелем: укол не ощущается вообще.",
        en: "Gums are gently pre-numbed with topical gel, making the anesthetic injection undetectable.",
      },
    },
    {
      icon: <DentalDigitalScannerIcon className="w-6 h-6 text-primary" />,
      title: {
        uz: "Tsirkon va CAD/CAM Aniqligi",
        ru: "Цирконий и Точность CAD/CAM",
        en: "Zirconia & CAD/CAM Precision",
      },
      desc: {
        uz: "Qoplamalar va vinirlar mikron darajasidagi robotlashtirilgan aniqlikda tayyorlanadi va tishga ideal o'tiradi.",
        ru: "Коронки и виниры изготавливаются с микронной точностью на робот-станках CAD/CAM.",
        en: "Restorations and veneers crafted with sub-millimeter precision for an airtight fit.",
      },
    },
    {
      icon: <IconTrophyWarranty className="w-6 h-6 text-primary" />,
      title: {
        uz: "Shaxsiy Shifokorlik Mas'uliyati",
        ru: "Личная Врачебная Ответственность",
        en: "Personal Clinical Accountability",
      },
      desc: {
        uz: "Har bir muolaja bevosita Dr. MuhammadAli Davronov tomonidan shaxsan bajariladi va sifat kafolati beriladi.",
        ru: "Каждая процедура выполняется лично доктором МухаммадАли Давроновым с гарантией качества.",
        en: "Every procedure performed personally by Dr. MuhammadAli Davronov with high standards.",
      },
    },
  ];

  const breadcrumbs = [
    { name: lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa", path: "/" },
    { name: lang === "ru" ? "О враче" : lang === "en" ? "About" : "Shifokor haqida", path: "/about" },
  ];
  const schema = buildDoctorProfileSchema(lang, breadcrumbs);

  return (
    <div className="py-6 sm:py-10 space-y-12 text-slate-900">
      <Seo
        title={seo.title}
        description={seo.description}
        schemaJson={schema}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span>/</span>
        <span className="text-primary font-bold" aria-current="page">
          {lang === "ru" ? "О враче" : lang === "en" ? "About Doctor" : "Shifokor haqida"}
        </span>
      </nav>

      {/* Header with Primary H1 for SEO & Semantics */}
      <header className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs uppercase">
          {lang === "uz" ? "SHIFOKOR HAQIDA" : lang === "ru" ? "О СПЕЦИАЛИСТЕ" : "ABOUT THE SPECIALIST"}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {lang === "uz"
            ? `Dr. MuhammadAli Davronov — DM Stomatologiya`
            : lang === "ru"
            ? `Д-р МухаммадАли Давронов — DM Stomatology`
            : `Dr. MuhammadAli Davronov — DM Stomatology`}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {lang === "uz"
            ? "Andijon davlat tibbiyot instituti bitiruvchisi. 5 yillik faol klinik tajriba. Ortopediya, terapiya va implantologiya sohasida zamonaviy og'riqsiz yechimlar."
            : lang === "ru"
            ? "Выпускник Андижанского государственного медицинского института. 5 лет успешной практики: ортопедия, лечение без боли и дентальная имплантация."
            : "Graduate of Andijan State Medical Institute. 5 years of clinical practice in orthopedics, pain-free therapy, and dental implantology."}
        </p>
      </header>

      {/* Doctor 3D Card Component */}
      <Doctor3DCard />

      {/* Professional Philosophy & Bio */}
      <section aria-labelledby="philosophy-heading" className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider inline-block">
            {lang === "ru" ? "ФИЛОСОФИЯ ЛЕЧЕНИЯ" : lang === "en" ? "CLINICAL PHILOSOPHY" : "DAVOLASH FALSAFASI"}
          </span>
          <h2 id="philosophy-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === "uz"
              ? "Har Bir Bemorga Shaxsiy E'tibor va Sifatli Natija"
              : lang === "ru"
              ? "Индивидуальный подход и бескомпромиссное качество"
              : "Dedicated Personal Care and Clinical Excellence"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === "uz"
              ? "Stomatologiya — bu shunchaki tish davolash emas, balki insonning hayot sifatini, ishonchini va salomatligini tiklash san'atidir. Andijon davlat tibbiyot institutida olgan fundamental bilimlarim va 5 yillik klinik amaliyotim davomida men har bir bemorga o'z oila a'zomdek munosabatda bo'lishni asosiy tamoyil qilib oldim. DM Stomatologiya klinikasida biz keraksiz muolajalarni tavsiya qilmaymiz: sog'lom tish to'qimasini maksimal darajada asrab qolamiz, yo'qotilgan tishlarni esa mustahkam tsirkon qoplamalar va biotitan implantlar bilan ishonchli tiklaymiz."
              : lang === "ru"
              ? "Стоматология — это искусство возвращения уверенности и здоровья улыбки. Благодаря образованию в Андижанском государственном медицинском институте и 5 годам практики я руководствуюсь главным правилом: бережное отношение к пациенту и сохранение каждого родного зуба. В клинике DM Stomatology мы используем проверенные титановые импланты, монолитный цирконий и современную анестезию."
              : "Dentistry is the art of restoring health, natural beauty, and daily confidence. With rigorous training at the Andijan State Medical Institute and 5 years of active practice, my commitment is to preserve your natural teeth wherever possible and deliver long-lasting, aesthetic restorations through precision zirconia crowns and biocompatible implants."}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover hover:scale-102 active:scale-98 shadow-md hover:shadow-colgate transition-all"
            >
              {lang === "ru" ? "Записаться на консультацию" : lang === "en" ? "Book a Consultation" : "Konsultatsiyaga yozilish"}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-colors"
            >
              {DOCTOR_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Clinical Values & Standards */}
      <section aria-labelledby="standards-heading" className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
        <h2 id="standards-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Стандарты лечения Д-ра МухаммадАли Давронова" : lang === "en" ? "Dr. MuhammadAli Davronov's Clinical Standards" : "Dr. MuhammadAli Davronovning Davolash Standartlari"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <Interactive3DTilt
              key={idx}
              maxTilt={8}
              perspective={900}
              scale={1.03}
              glare={true}
              className="h-full"
            >
              <article className="h-full p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 shadow-2xs group-hover:bg-primary group-hover:text-white transition-all">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                    {val.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc[lang]}
                  </p>
                </div>
              </article>
            </Interactive3DTilt>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section aria-labelledby="timeline-heading" className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
        <h2 id="timeline-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Профессиональный путь" : lang === "en" ? "Career & Experience Timeline" : "Shifokorning Professional Yo'li"}
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
              <span className="w-28 sm:w-32 shrink-0 text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1.5 rounded-full text-center border border-primary/20">
                {item.year[lang]}
              </span>
              <div className="pb-6 border-b border-slate-200 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {item.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Location Map */}
      <ClinicLocationMap />
    </div>
  );
};

export default About;
