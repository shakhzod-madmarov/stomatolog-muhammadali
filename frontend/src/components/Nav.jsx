import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { LANGS } from "../utils/language";
import { IconPhone, IconTelegram } from "./MedicalIcons";
import { useModalA11y } from "../hooks/useModalA11y";
import { getA11yLabels } from "../constants/a11yLabels";
import { DOCTOR_INFO } from "../constants/doctor";

const Nav = ({ onOpenBooking, topOffset = 0 }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage } = useLanguage();
  const to = useLocalizedPath();
  const a11y = getA11yLabels(lang);
  const closeDrawer = () => setShowMenu(false);
  useModalA11y(showMenu, closeDrawer);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const navLinks = [
    { path: "/", label: { uz: "Bosh Sahifa", ru: "Главная", en: "Home" } },
    { path: "/services", label: { uz: "Xizmatlar", ru: "Услуги", en: "Services" } },
    { path: "/about", label: { uz: "Shifokor Haqida", ru: "О Враче", en: "About Doctor" } },
    { path: "/contact", label: { uz: "Aloqa & Manzil", ru: "Контакты", en: "Contact" } },
  ];

  const handleBookingClick = () => {
    if (showMenu) closeDrawer();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      navigate(to("/booking"));
    }
  };

  const bookingBtnLabel = {
    uz: "Qabulga Yozilish",
    ru: "Записаться",
    en: "Book Visit",
  }[lang] || "Qabulga Yozilish";

  return (
    <>
      <header
        style={{ top: `${topOffset}px` }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand Logo */}
          <Logo className="h-9 sm:h-10 shrink-0" isWhite={false} />

          {/* Desktop Navigation Links */}
          <nav
            aria-label={a11y.mainNavigation}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={to(link.path)}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[15px] xl:text-base font-bold transition-colors duration-150 rounded-lg ${
                    isActive
                      ? "text-primary bg-red-50/80 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>

          {/* Action Hub (Phone + Telegram + Language + Colgate Red Booking Button) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Compact Direct Contacts: Phone with Telegram under it */}
            <div className="hidden min-[460px]:flex flex-col items-end justify-center leading-tight py-0.5">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-primary transition-colors font-mono tracking-tight group"
                aria-label={a11y.callClinic}
                title={`${DOCTOR_INFO.phoneDisplay} (Dr. MuhammadAli Davronov)`}
              >
                <IconPhone className="w-3 h-3 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span>{DOCTOR_INFO.phoneDisplay}</span>
              </a>

              <a
                href={DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline transition-colors mt-0.5 group"
                aria-label="Telegram"
                title={`Telegram: ${DOCTOR_INFO.phoneDisplay}`}
              >
                <IconTelegram className="w-3 h-3 text-sky-500 group-hover:scale-110 transition-transform shrink-0" />
                <span>Telegram</span>
              </a>
            </div>

            {/* Mobile Call Icon for small screens (<460px) */}
            <a
              href={DOCTOR_INFO.phoneHref}
              className="min-[460px]:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-primary border border-slate-200"
              aria-label={a11y.callClinic}
            >
              <IconPhone className="w-4 h-4 text-primary" />
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200">
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => changeLanguage(code)}
                  className={`px-2 py-1 text-xs font-bold rounded-full transition-all ${
                    lang === code
                      ? "bg-primary text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label={`${a11y.languageSwitcher}: ${code.toUpperCase()}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Booking CTA Button (Colgate Red Pill) */}
            <button
              type="button"
              onClick={handleBookingClick}
              className="hidden sm:inline-flex items-center justify-center px-5 h-10 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-colgate hover:shadow-colgate-lg transition-all duration-200 active:scale-95 shrink-0"
            >
              {bookingBtnLabel}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={showMenu ? a11y.closeMenu : a11y.openMenu}
              aria-expanded={showMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-white border-l border-slate-200 shadow-2xl p-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col justify-between overflow-y-auto overscroll-contain transform transition-transform duration-300 lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Logo className="h-8" isWhite={false} />
            <button
              type="button"
              onClick={closeDrawer}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              aria-label={a11y.closeMenu}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={to(link.path)}
                end={link.path === "/"}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? "text-primary bg-red-50 border-l-4 border-primary"
                      : "text-slate-700 hover:text-primary hover:bg-slate-50"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
          <a
            href={DOCTOR_INFO.phoneHref}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-red-50 hover:text-primary border border-slate-200 transition-colors"
          >
            <IconPhone className="w-3.5 h-3.5 text-primary" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>

          <a
            href={DOCTOR_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            <IconTelegram className="w-4 h-4 text-sky-500" />
            <span>Telegram: {DOCTOR_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full py-3 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-colgate text-center transition-all"
          >
            {bookingBtnLabel}
          </button>

          <p className="text-[11px] text-center text-slate-400">
            {lang === "ru"
              ? "Д-р МухаммадАли Давронов · DM Stomatology"
              : lang === "en"
              ? "Dr. MuhammadAli Davronov · DM Stomatology"
              : "Dr. MuhammadAli Davronov · DM Stomatologiya"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
