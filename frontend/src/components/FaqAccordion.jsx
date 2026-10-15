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
      subtitle: "Raqamli stomatologiya, implantatsiya, elaynerlar va qabul tartibi bo'yicha eng muhim ma'lumotlar.",
    },
    ru: {
      badge: "ЧАСТЫЕ ВОПРОСЫ",
      title: "Ответы на главные вопросы пациентов",
      subtitle: "Всё о цифровой стоматологии, имплантации, прозрачных элайнерах и порядке записи.",
    },
    en: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything You Need to Know",
      subtitle: "Key answers regarding digital dentistry, implants, aligners, and appointment booking.",
    },
  }[lang] || labels.uz;

  return (
    <section aria-labelledby="faq-section-heading" className="w-full py-12 sm:py-16 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-primary-electric bg-primary-dark/30 border border-primary-crimson/40 shadow-xs mb-3 uppercase">
            {labels.badge}
          </span>
          <h2 id="faq-section-heading" className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
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
                className="rounded-2xl bg-surface-elevated/90 border border-white/10 shadow-md overflow-hidden transition-all duration-200 hover:border-primary-crimson/40"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-electric group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-bold text-sm sm:text-base text-white group-hover:text-primary-electric transition-colors pr-2">
                    {item.q[lang] || item.q.uz}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 font-bold text-sm ${
                      isOpen
                        ? "bg-gradient-to-r from-primary-dark via-primary-crimson to-primary-electric text-white shadow-glow-red rotate-180"
                        : "bg-primary-dark/30 text-primary-electric border border-primary-crimson/30"
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
                    className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 animate-in fade-in duration-200"
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
