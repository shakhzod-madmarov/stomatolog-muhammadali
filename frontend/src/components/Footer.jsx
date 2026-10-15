import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { DOCTOR_INFO, OPENING_HOURS } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { SERVICES_CATALOG } from "../constants/servicesCatalog";
import { IconPhone, IconTelegram, IconInstagram, IconLocationPin, IconClock } from "./MedicalIcons";

const Footer = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();

  const labels = {
    quickLinks: { uz: "Bo'limlar", ru: "Разделы", en: "Navigation" },
    services: { uz: "Asosiy Xizmatlar", ru: "Услуги", en: "Services" },
    contact: { uz: "Aloqa & Manzil", ru: "Контакты", en: "Contacts" },
    workingHours: { uz: "Ish Vaqti", ru: "Режим Работы", en: "Working Hours" },
    allRightsReserved: {
      uz: "Barcha huquqlar himoyalangan.",
      ru: "Все права защищены.",
      en: "All rights reserved.",
    },
    licenseNote: {
      uz: `Litsenziya: ${DOCTOR_INFO.medinsonLicense}. O'zbekiston Respublikasi SSV tibbiy litsenziyasi asosida.`,
      ru: `Лицензия: ${DOCTOR_INFO.medinsonLicense}. Деятельность на основании медицинской лицензии Минздрава РУз.`,
      en: `License: ${DOCTOR_INFO.medinsonLicense}. Operating in full compliance with MOH Uzbekistan healthcare standards.`,
    },
  };

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Barcha Xizmatlar", ru: "Все Услуги", en: "All Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/booking", label: { uz: "Onlayn Qabul", ru: "Онлайн Запись", en: "Online Booking" } },
    { path: "/contact", label: { uz: "Manzil va Xarita", ru: "Контакты и Карта", en: "Contact & Map" } },
  ];

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 sm:pt-16 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Doctor Profile */}
          <div className="flex flex-col gap-4">
            <Logo className="h-10 w-auto" isWhite={true} />
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              {lang === "ru"
                ? "Д-р МухаммадАли Давронов — 5 лет успешной практики. Ортопедия (цирконий, виниры), лечение зубов без боли, имплантология. Андижан, клиника DM Stomatology, проспект Навои, 91."
                : lang === "en"
                ? "Dr. MuhammadAli Davronov — 5 years of dental excellence. Orthopedics, pain-free therapy, dental implants, and aesthetic smiles. DM Stomatology, 91 Navoi Avenue, Andijan."
                : "Dr. MuhammadAli Davronov — 5 yillik tajribali shifokor-stomatolog. Ortopediya (tsirkon, vinirlar), terapiya (og'riqsiz davolash) va dental implantologiya. DM Stomatologiya, Andijon, Navoiy shox 91-uy."}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-sky-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Telegram"
              >
                <IconTelegram className="w-4 h-4" />
              </a>
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-pink-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
              <a
                href={DOCTOR_INFO.phoneHref}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-emerald-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Phone"
              >
                <IconPhone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#C8102E]"></span>
              {labels.quickLinks[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={to(item.path)}
                    className="hover:text-primary transition-colors flex items-center gap-2 text-slate-300"
                  >
                    <span className="text-primary font-bold">›</span>
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div>
            <h3 className="text-white text-base font-bold tracking-tight mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#C8102E]"></span>
              {labels.services[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_CATALOG.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={to(`/services/${service.id}`)}
                    className="hover:text-primary transition-colors flex items-center gap-2 text-slate-300"
                  >
                    <span className="text-primary font-bold">›</span>
                    <span className="line-clamp-1">{service.title[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-base font-bold tracking-tight mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#C8102E]"></span>
              {labels.contact[lang]}
            </h3>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <IconLocationPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{PRIMARY_CLINIC.address[lang]} ({PRIMARY_CLINIC.landmark[lang]})</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-300">
              <IconClock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p>{OPENING_HOURS.labels[lang].days}</p>
                <p className="text-primary font-mono text-xs font-bold">{OPENING_HOURS.labels[lang].hours}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-1.5">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="text-white font-mono text-sm font-bold hover:text-primary transition-colors"
              >
                {DOCTOR_INFO.phoneDisplay}
              </a>
              <span className="text-xs text-slate-400">{DOCTOR_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {DOCTOR_INFO.name} — DM Stomatologiya. {labels.allRightsReserved[lang]}
          </p>
          <p className="text-center sm:text-right text-[11px] text-slate-400">
            {labels.licenseNote[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
