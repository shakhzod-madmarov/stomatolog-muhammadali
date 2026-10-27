import React from "react";
import { Link } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, getYearsOfExperience } from "../constants/doctor";
import { PAGE_SEO } from "../constants/seo";
import Seo from "../components/Seo";
import { buildDoctorProfileSchema } from "../utils/structuredData";
import ClinicLocationMap from "../components/ClinicLocationMap";
import Doctor3DCard from "../components/Doctor3DCard";
import WorkingRoomShowcase from "../components/WorkingRoomShowcase";
import CertificatesShowcase from "../components/CertificatesShowcase";
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
        uz: "Klinik Ordinatura",
        ru: "Клиническая Ординатура",
        en: "Clinical Residency",
      },
      title: {
        uz: "Andijon Davlat Tibbiyot Instituti — Yuz-Jag' Jarrohligi",
        ru: "Андижанский Государственный Медицинский Институт — Челюстно-лицевая хирургия (ЧЛХ)",
        en: "Andijan State Medical Institute — Oral & Maxillofacial Surgery",
      },
      desc: {
        uz: "Andijon davlat tibbiyot institutida Yuz-jag' jarrohligi bo'yicha klinik ordinatura: jag' suyaklari anatomiyasi, murakkab jarrohlik va suyak tiklash protokollari bo'yicha chuqur klinik tayyorgarlik.",
        ru: "Клиническая ординатура по специальности «Челюстно-лицевая хирургия» в АГМИ: стационарная хирургическая школа, углублённая анатомия челюстей и хирургическая точность.",
        en: "Postgraduate Clinical Residency in Oral & Maxillofacial Surgery at ASMI: advanced jaw anatomy, complex oral surgery, and bone reconstructive protocols.",
      },
    },
    {
      year: {
        uz: "2023 · Dentium",
        ru: "2023 · Dentium",
        en: "2023 · Dentium",
      },
      title: {
        uz: "Dentium Implant System — Jarrohlik Kursi (KOL Dr. Yusupov U.)",
        ru: "Dentium Implant System — Хирургический курс (KOL Dr. Yusupov U.)",
        en: "Dentium Implant System — Surgical Certification (KOL Dr. Yusupov U.)",
      },
      desc: {
        uz: "Janubiy Koreyaning yetakchi Dentium biotitan implantatlarini suyakka to'g'ri o'rnatish, yuqori osteointegratsiya va xavfsiz jarrohlik bo'yicha rasmiy sertifikat.",
        ru: "Официальный сертификат по протоколам остеоинтеграции и хирургической установке премиальных южнокорейских имплантов Dentium.",
        en: "Official surgical certification in osseointegration, primary stability, and safe surgical placement of South Korea's Dentium Implant System.",
      },
    },
    {
      year: {
        uz: "2024 · One-Stage",
        ru: "2024 · One-Stage",
        en: "2024 · One-Stage",
      },
      title: {
        uz: "One-Stage Implant — Bir Bosqichli Tezkor Implantatsiya (Dr. E. Mustafaev)",
        ru: "One-Stage Implant — Одномоментная имплантация (Dr. E. Mustafaev)",
        en: "One-Stage Implant — Immediate Placement Masterclass (Dr. E. Mustafaev)",
      },
      desc: {
        uz: "Moissanite Dental 8 soatlik intensiv amaliy kursi: tish olingan zahoti o'sha joyga yangi implantat o'rnatish va darhol estetik tish qo'yish mahorati.",
        ru: "Интенсивный 8-часовой практический курс Moissanite Dental: установка импланта в лунку удалённого зуба с немедленной нагрузкой за 1 визит.",
        en: "Moissanite Dental 8-hour hands-on masterclass: immediate post-extraction socket implant placement and same-day provisionalization.",
      },
    },
    {
      year: {
        uz: "DIO Implant",
        ru: "DIO Implant",
        en: "DIO Implant",
      },
      title: {
        uz: "DIO Implant — 3D Raqamli Navigatsion Implantologiya (Andijon)",
        ru: "DIO Implant — Цифровая навигационная имплантология (Андижан)",
        en: "DIO Implant — 3D Digital Guided Implantology (Andijan)",
      },
      desc: {
        uz: "Dr. O'tkirbek Vohidov va Dr. Faridun Axtamov seminarida 3D navigatsion shablonlar yordamida to'liq tishsizlik bo'yicha murakkab klinik keyslarni muvaffaqiyatli tiklash.",
        ru: "Клинический семинар др. Уткирбека Вахидова и др. Фаридуна Ахтамова: 3D шаблоны и комплексные решения при полной адентии на системе DIO Implant.",
        en: "Clinical mastery seminar with Dr. Utkirbek Vakhidov and Dr. Faridun Akhtamov: computer-guided 3D surgical templates and full-arch solutions on DIO Implant.",
      },
    },
    {
      year: {
        uz: "Ortopediya & Terapiya",
        ru: "Ортопедия и Терапия",
        en: "Orthopedics & Therapy",
      },
      title: {
        uz: "Sirkon Koronkalar, Vinirlar va Og'riqsiz Terapiya",
        ru: "Циркониевые коронки, виниры и бережная терапия",
        en: "Zirconia Crowns, Veneers & Pain-Free Therapy",
      },
      desc: {
        uz: "CAD/CAM frezerlash texnologiyalari, E-max press-keramika, nano-kompozit restavratsiya va ildiz kanallarini (endodontiya) zamonaviy davolash bo'yicha maxsus malaka.",
        ru: "Цифровое моделирование CAD/CAM, виниры E-max, микро-пломбирование нано-композитами и протоколы эндодонтического лечения каналов.",
        en: "Mastery in CAD/CAM zirconia milling, E-max press ceramic veneers, and modern endodontic root canal treatments.",
      },
    },
    {
      year: {
        uz: "2021 – Hozirgacha",
        ru: "2021 – Настоящее время",
        en: "2021 – Present",
      },
      title: {
        uz: `Shifokor-Stomatolog — Implantologiya, Ortopediya, Terapiya (${years} Yillik Tajriba)`,
        ru: `Врач-Стоматолог — Имплантология, Ортопедия, Терапия (${years} Лет Опыта)`,
        en: `Dental Specialist — Implantology, Orthopedics, Therapy (${years} Years Practice)`,
      },
      desc: {
        uz: "Andijon shahri, Prospekt, Navoiy shoh ko'chasi 91-uyda joylashgan DM Stomatologiya klinikasida 3,500+ dan ortiq bemorlarga individual, professional va og'riqsiz xizmat ko'rsatish.",
        ru: "Приём более 3 500 пациентов в клинике DM Stomatology (Андижан, пр-т Навои, 91): ортопедия, терапия и имплантация.",
        en: "Personal clinical care for over 3,500 patients at DM Stomatology clinic (91 Navoi Avenue, Andijan).",
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
        uz: "Sirkon va CAD/CAM Aniqligi",
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
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {lang === "uz"
            ? "Andijon davlat tibbiyot institutining Yuz-jag' jarrohligi klinik ordinaturasini tamomlagan. DM Stomatologiya klinikasida mustahkam biotitan implantlar, nafis sirkon qoplamalar va 100% og'riqsiz muolajalar bilan sog'lom jilmayishingizni tiklaymiz."
            : lang === "ru"
            ? "Клиническая ординатура по челюстно-лицевой хирургии (ЧЛХ) в Андижанском государственном медицинском институте. В клинике DM Stomatology проводит приём по имплантации, ортопедии и терапии без боли."
            : "Clinical Residency in Oral & Maxillofacial Surgery at Andijan State Medical Institute. Dedicated practice at DM Stomatology restoring smiles with biocompatible implants, zirconia crowns, and pain-free care."}
        </p>
      </header>

      {/* Doctor 3D Card Component */}
      <Doctor3DCard />

      {/* Dr. MuhammadAli's Working Room & Door #1 Showcase */}
      <WorkingRoomShowcase />

      {/* Dr. MuhammadAli's Official Certificates Showcase */}
      <CertificatesShowcase />

      {/* Professional Philosophy & Bio */}
      <section aria-labelledby="philosophy-heading" className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
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
              ? "Stomatologiya — bu shunchaki tish davolash emas, balki insonning hayot sifatini, ishonchini va salomatligini tiklash san'atidir. Andijon davlat tibbiyot institutida Yuz-jag' jarrohligi bo'yicha olgan klinik ordinatura tayyorgarligim har bir implantatsiya va jarrohlik muolajasini yuqori anatomik aniqlikda, asoratsiz va 100% xavfsiz bajarishimga poydevor bo'ldi. DM Stomatologiya klinikasida 5 yillik amaliyotim davomida har bir bemorga o'z oila a'zomdek munosabatda bo'lishni asosiy tamoyil qilib olganman: tabiiy tish to'qimasini maksimal asraymiz, yo'qotilgan tishlarni esa mustahkam sirkon qoplamalar va xalqaro biotitan implantlar bilan ishonchli tiklaymiz."
              : lang === "ru"
              ? "Стоматология — это искусство возвращения уверенности и здоровья улыбки. Базовая хирургическая школа ординатуры по челюстно-лицевой хирургии в АГМИ дала мне фундаментальные знания анатомии и позволяет проводить любую имплантацию с максимальной безопасностью и без риска осложнений. В клинике DM Stomatology за 5 лет практики я руководствуюсь главным правилом: бережное отношение к пациенту, сохранение каждого родного зуба и проверенные международные протоколы."
              : "Dentistry is the art of restoring health, natural beauty, and daily confidence. At DM Stomatology, my commitment is to preserve your natural teeth wherever possible and deliver long-lasting, aesthetic restorations through precision zirconia crowns and biocompatible implants."}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-colgate active:scale-98 transition-all text-center"
            >
              {lang === "ru" ? "Записаться на консультацию" : lang === "en" ? "Book a Consultation" : "Konsultatsiyaga yozilish"}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-colors text-center"
            >
              {DOCTOR_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Clinical Values & Standards */}
      <section aria-labelledby="standards-heading" className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
        <h2 id="standards-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Стандарты лечения Д-ра МухаммадАли Давронова" : lang === "en" ? "Dr. MuhammadAli Davronov's Clinical Standards" : "Dr. MuhammadAli Davronovning Davolash Standartlari"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((val, idx) => (
            <Interactive3DTilt
              key={idx}
              maxTilt={8}
              perspective={900}
              scale={1.03}
              glare={true}
              className="h-full"
            >
              <article className="h-full p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all duration-300 group">
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
      <section aria-labelledby="timeline-heading" className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
        <h2 id="timeline-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
          {lang === "ru" ? "Профессиональный путь" : lang === "en" ? "Career & Experience Timeline" : "Shifokorning Professional Yo'li"}
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-2.5 sm:gap-6 items-start">
              <span className="inline-block sm:w-32 shrink-0 text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full text-center border border-primary/20 self-start">
                {item.year[lang]}
              </span>
              <div className="pb-5 sm:pb-6 border-b border-slate-200 flex-1 w-full">
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
