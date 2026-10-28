import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FAQ_ITEMS } from "../constants/faq";

export const FaqAccordion = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const labels = {
    uz: {
      badge: "KO'P SO'RALADIGAN SAVOLLAR",
      title: "Bemorlar Uchun Muhim Savol-Javoblar",
      subtitle: "Dental implantatsiya, ortopediya, 100% og'riqsiz terapiya va qabul tartibi bo'yicha eng muhim ma'lumotlar.",
    },
    ru: {
      badge: "ЧАСТЫЕ ВОПРОСЫ",
      title: "Ответы на главные вопросы пациентов",
      subtitle: "Всё о дентальной имплантации, ортопедии, терапии без боли и порядке записи на приём.",
    },
    en: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything You Need to Know",
      subtitle: "Key answers regarding dental implants, orthopedics, pain-free therapy, and appointment booking.",
    },
  }[lang] || labels.uz;

  return (
    <section aria-labelledby="faq-section-heading" className="w-full py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 shadow-xs mb-3 uppercase">
            {labels.badge}
          </span>
          <h2 id="faq-section-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:border-primary/40"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-bold text-base sm:text-lg lg:text-xl text-slate-900 group-hover:text-primary transition-colors pr-2 leading-snug">
                    {item.q[lang] || item.q.uz}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 font-bold text-sm sm:text-base ${
                      isOpen
                        ? "bg-primary text-white shadow-xs rotate-180"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-3 text-base sm:text-lg text-slate-700 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    {item.a[lang] || item.a.uz}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
