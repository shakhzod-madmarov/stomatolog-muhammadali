import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import { LANGS } from "../utils/language";
import { IconPhone } from "./MedicalIcons";
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
            ? "bg-black/92 backdrop-blur-md shadow-2xl border-b border-[#830000]/40 py-2.5"
            : "bg-black/75 backdrop-blur-md border-b border-[#830000]/25 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <Logo className="h-9 sm:h-10 shrink-0" />

          {/* Desktop Navigation Links — Airy, typographic luxury design */}
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
                  `relative px-3 py-1.5 text-[13.5px] xl:text-[14px] transition-colors duration-150 ${
                    isActive
                      ? "text-red-500 font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-red-500 after:rounded-full after:shadow-[0_0_8px_#FF0000]"
                      : "text-zinc-300 font-medium hover:text-white"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>

          {/* Action Hub (Compact Phone + Language + Booking Button) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct Phone Call */}
            <a
              href={DOCTOR_INFO.phoneHref}
              className="hidden min-[400px]:inline-flex items-center justify-center gap-2 h-9 px-2.5 2xl:px-3 rounded-xl text-xs font-semibold text-red-400 bg-red-950/40 border border-red-900/50 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-200 group shadow-xs"
              aria-label={a11y.callClinic}
              title={`${DOCTOR_INFO.phoneDisplay} (Dr. MuhammadAli Davronov)`}
            >
              <IconPhone className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform text-red-400 group-hover:text-white" />
              <span className="hidden 2xl:inline font-mono tracking-tight font-medium">
                {DOCTOR_INFO.phoneDisplay}
              </span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-xl bg-zinc-900/90 border border-red-950/60 shadow-xs">
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => changeLanguage(code)}
                  className={`px-1.5 min-[380px]:px-2 py-1 text-[10.5px] min-[380px]:text-[11px] font-bold rounded-lg transition-all ${
                    lang === code
                      ? "bg-gradient-to-r from-[#BC0202] to-[#FF0000] text-white shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  aria-label={`${a11y.languageSwitcher}: ${code.toUpperCase()}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Booking CTA Button */}
            <button
              type="button"
              onClick={handleBookingClick}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 h-9 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] hover:from-[#BC0202] hover:to-[#FF2E2E] shadow-[0_4px_20px_rgba(255,0,0,0.35)] transition-all duration-200 active:scale-95 shrink-0 border border-red-500/40"
            >
              {bookingBtnLabel}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[#0A0505] border-l border-red-950/60 shadow-2xl p-6 pt-[calc(1.5rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col justify-between overflow-y-auto overscroll-contain transform transition-transform duration-300 lg:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-red-950/40">
            <Logo className="h-8" />
            <button
              type="button"
              onClick={closeDrawer}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
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
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-white bg-red-950/80 border border-red-800/50"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900/60"
                  }`
                }
              >
                {link.label[lang]}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-red-950/40 flex flex-col gap-3">
          <a
            href={DOCTOR_INFO.phoneHref}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-red-300 bg-red-950/50 border border-red-900/50"
          >
            <IconPhone className="w-3.5 h-3.5 text-red-400" />
            <span>{DOCTOR_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#830000] via-[#BC0202] to-[#FF0000] shadow-[0_4px_20px_rgba(255,0,0,0.35)] text-center border border-red-500/40"
          >
            {bookingBtnLabel}
          </button>

          <p className="text-[11px] text-center text-zinc-400">
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
