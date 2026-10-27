import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { CERTIFICATES, DOCTOR_INFO } from "../constants/doctor";
import {
  IconShieldCheck,
  DentalImplantFixture,
} from "./MedicalIcons";

export const CertificatesShowcase = ({ className = "" }) => {
  const { lang } = useLanguage();
  const { onOpenBooking } = useBooking();
  const [selectedCert, setSelectedCert] = useState(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCert) return;
      if (e.key === "Escape") {
        setSelectedCert(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
        const nextIndex = (currentIndex + 1) % CERTIFICATES.length;
        setSelectedCert(CERTIFICATES[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
        const prevIndex = (currentIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
        setSelectedCert(CERTIFICATES[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  const labels = {
    uz: {
      badge: "XALQARO SERTIFIKATLAR VA MALAKA",
      heading: "Dr. MuhammadAli Davronovning Rasmiy Sertifikatlari",
      subheading:
        "Jahon andozalaridagi yetakchi implant tizimlari (Dentium, DIO Implant, One-Stage) bo'yicha muntazam malaka oshirish va rasmiy sertifikatlangan amaliyot.",
      zoomBtn: "Sertifikatni to'liq ko'rish",
      verified: "Haqiqiyligi tasdiqlangan",
      close: "Yopish",
      next: "Keyingi",
      prev: "Oldingi",
      speakerLabel: "Spiker / Trener:",
      dateLabel: "Sana:",
      issuerLabel: "Tashkilot:",
      ctaBook: "Implantatsiya Konsultatsiyasiga Yozilish",
      ctaCall: "Shifokorga Qo'ng'iroq Qilish",
      trustPill: "100% Rasmiy Sertifikatlar · Xalqaro Protokollar",
    },
    ru: {
      badge: "МЕЖДУНАРОДНЫЕ СЕРТИФИКАТЫ И КВАЛИФИКАЦИЯ",
      heading: "Официальные Сертификаты Д-ра МухаммадАли Давронова",
      subheading:
        "Регулярное повышение квалификации и практическая аккредитация на ведущих мировых системах имплантации (Dentium, DIO Implant, One-Stage).",
      zoomBtn: "Посмотреть сертификат",
      verified: "Подлинность подтверждена",
      close: "Закрыть",
      next: "Вперёд",
      prev: "Назад",
      speakerLabel: "Спикер / Тренер:",
      dateLabel: "Дата:",
      issuerLabel: "Организация:",
      ctaBook: "Записаться на консультацию по имплантации",
      ctaCall: "Позвонить доктору",
      trustPill: "100% Подлинные Сертификаты · Международные Протоколы",
    },
    en: {
      badge: "INTERNATIONAL CERTIFICATIONS & CREDENTIALS",
      heading: "Dr. MuhammadAli Davronov's Official Certifications",
      subheading:
        "Continuous clinical mastery and verified surgical credentials on world-renowned implant systems (Dentium, DIO Implant, One-Stage).",
      zoomBtn: "View Certificate Fullscreen",
      verified: "Verified & Authenticated",
      close: "Close",
      next: "Next",
      prev: "Previous",
      speakerLabel: "Speaker / Trainer:",
      dateLabel: "Date:",
      issuerLabel: "Organization:",
      ctaBook: "Book Implant Consultation",
      ctaCall: "Call Dr. MuhammadAli",
      trustPill: "100% Genuine Credentials · Global Protocols",
    },
  }[lang] || labels.uz;

  return (
    <section
      aria-labelledby="certificates-heading"
      className={`w-full ${className}`}
    >
      <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs uppercase">
            <IconShieldCheck className="w-4 h-4 text-primary" />
            <span>{labels.badge}</span>
          </span>
          <h2
            id="certificates-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
          >
            {labels.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {labels.subheading}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 items-stretch">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Image Preview Container with Click-to-Zoom */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedCert(cert)}
                className="relative bg-slate-100 overflow-hidden cursor-zoom-in group/img aspect-[4/3] flex items-center justify-center p-3"
                aria-label={`${cert.title[lang] || cert.title.uz} — ${labels.zoomBtn}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title[lang] || cert.title.uz}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xs group-hover/img:scale-103 transition-transform duration-500"
                />

                {/* Top Badge: System Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-slate-900/85 text-white backdrop-blur-xs shadow-xs">
                    <DentalImplantFixture className="w-3.5 h-3.5 text-red-400" />
                    <span>{cert.badge[lang] || cert.badge.uz}</span>
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>{labels.zoomBtn}</span>
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2.5">
                  <span className="inline-block text-[11px] font-mono font-bold text-primary uppercase tracking-wider">
                    {cert.system}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {cert.title[lang] || cert.title.uz}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description[lang] || cert.description.uz}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {(cert.highlights[lang] || cert.highlights.uz).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <IconShieldCheck className="w-3 h-3" />
                        </span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metadata Footer */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-600">{labels.speakerLabel}</span>
                    <span className="text-slate-800 font-medium">{cert.speakers[lang] || cert.speakers.uz}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-600">{labels.dateLabel}</span>
                    <span className="font-mono text-slate-800">{cert.date[lang] || cert.date.uz}</span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{labels.zoomBtn}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Action Bar */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <IconShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {labels.trustPill}
              </h4>
              <p className="text-xs text-slate-500">
                {labels.subheading}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-primary hover:bg-primary-hover shadow-sm active:scale-98 transition-all text-center cursor-pointer"
            >
              {labels.ctaBook}
            </button>
            <a
              href={DOCTOR_INFO.phoneHref}
              className="px-4 py-2.5 rounded-xl font-mono font-bold text-xs text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
            >
              {DOCTOR_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title[lang] || selectedCert.title.uz}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col border border-slate-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-xs z-10">
              <div className="flex items-center gap-2 pr-4">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <IconShieldCheck className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug line-clamp-1">
                    {selectedCert.title[lang] || selectedCert.title.uz}
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    {labels.verified} · {selectedCert.system}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label={labels.close}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body: High Resolution Certificate Image */}
            <div className="p-4 sm:p-6 bg-slate-900/5 flex items-center justify-center min-h-[300px]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title[lang] || selectedCert.title.uz}
                className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg border border-slate-200/80 bg-white"
              />
            </div>

            {/* Modal Footer: Full Details & Controls */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-white space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 block">{labels.issuerLabel}</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{selectedCert.issuer[lang] || selectedCert.issuer.uz}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 block">{labels.speakerLabel}</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{selectedCert.speakers[lang] || selectedCert.speakers.uz}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 block">{labels.dateLabel}</span>
                  <span className="font-mono font-semibold text-slate-900 mt-0.5 block">
                    {selectedCert.date[lang] || selectedCert.date.uz} ({selectedCert.location[lang] || selectedCert.location.uz})
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
                      const prevIndex = (currentIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
                      setSelectedCert(CERTIFICATES[prevIndex]);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>←</span>
                    <span>{labels.prev}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
                      const nextIndex = (currentIndex + 1) % CERTIFICATES.length;
                      setSelectedCert(CERTIFICATES[nextIndex]);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{labels.next}</span>
                    <span>→</span>
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCert(null);
                      onOpenBooking();
                    }}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-primary hover:bg-primary-hover shadow-sm active:scale-98 transition-all cursor-pointer"
                  >
                    {labels.ctaBook}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesShowcase;
