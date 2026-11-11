import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, useLocalizedPath } from "../context/LanguageContext";
import Seo from "../components/Seo";

const REVIEW_CONTENT_MAP = {
  uz: {
    badge: "Bemorlar fikri va baholash",
    title: "Qabulimizdan mamnunmisiz?",
    subtitle: "Dr. MuhammadAli Davronov qabuli bo'yicha o'z fikringiz va 5★ bahongizni qoldiring. Bu boshqa bemorlarga to'g'ri tanlov qilishda yordam beradi!",
    doctorRole: "Yuz-jag' jarrohi • Implantolog • Ortoped (5 yillik tajriba)",
    selectRating: "Bahoingizni tanlang:",
    ratingExcellent: "A'lo darajada! Rahmat!",
    googleBtn: "Google Xaritalarda baholash (5★)",
    googleSub: "Google Maps orqali to'g'ridan-to'g'ri sharh oynasi ochiladi",
    yandexBtn: "Yandex Xaritalarda baholash (5★)",
    yandexSub: "Яндекс Карты orqali sharhlar bo'limi ochiladi",
    deskStandTitle: "Klinika stoli uchun tayyor QR stendlar (Chop etishga tayyor)",
    deskStandDesc: "Qabulxona (resepshn) yoki stomatologiya xonasi stollariga qo'yish uchun A4 va A5 formatdagi tayyor PDF/PNG fayllar:",
    downloadA5Pdf: "A5 Stol Stendi (PDF)",
    downloadA4Pdf: "A4 Devor Posteri (PDF)",
    downloadHorizontalPdf: "Gorizontal Stend (PDF)",
    downloadA5Png: "A5 Rasm (PNG)",
    downloadA4Png: "A4 Rasm (PNG)",
    downloadHorizontalPng: "Gorizontal Rasm (PNG)",
    printNow: "Hozir chop etish (Print)",
    address: "Andijon shahri, Prospekt, Navoiy shoh ko'chasi, 91-uy (Sariq Bola pizza yonida)",
    phone: "+998 97 676 01 01",
  },
  ru: {
    badge: "Отзывы и оценка пациентов",
    title: "Как прошёл ваш приём?",
    subtitle: "Оцените приём у доктора МухаммадАли Давронова и поставьте 5★. Ваш отзыв помогает другим пациентам найти квалифицированную помощь в Андижане!",
    doctorRole: "Челюстно-лицевой хирург • Имплантолог • Ортопед (5 лет опыта)",
    selectRating: "Выберите вашу оценку:",
    ratingExcellent: "Отлично! Спасибо за доверие!",
    googleBtn: "Оценить в Google Maps (5★)",
    googleSub: "Откроется окно оценки Google Карт для отправки отзыва",
    yandexBtn: "Оценить в Яндекс Картах (5★)",
    yandexSub: "Откроется раздел отзывов организации на Яндекс Картах",
    deskStandTitle: "Готовые QR-стенды для клиники (Готовы к печати)",
    deskStandDesc: "Для стола ресепшн или кабинета врача в форматах A4 и A5 (PDF/PNG высокого разрешения):",
    downloadA5Pdf: "A5 Настольный стенд (PDF)",
    downloadA4Pdf: "A4 Настенный постер (PDF)",
    downloadHorizontalPdf: "Горизонтальный стенд (PDF)",
    downloadA5Png: "A5 Изображение (PNG)",
    downloadA4Png: "A4 Изображение (PNG)",
    downloadHorizontalPng: "Горизонтальное фото (PNG)",
    printNow: "Распечатать сейчас",
    address: "г. Андижан, проспект, Навои, 91 (рядом с пиццерией SARIQ BOLA)",
    phone: "+998 97 676 01 01",
  },
  en: {
    badge: "Patient Reviews & Feedback",
    title: "How was your appointment?",
    subtitle: "Share your experience and leave a 5★ review for Dr. MuhammadAli Davronov. Your honest feedback helps other patients make informed decisions!",
    doctorRole: "Oral & Maxillofacial Surgeon • Implantologist • Prosthodontist",
    selectRating: "Select your rating:",
    ratingExcellent: "Excellent! Thank you!",
    googleBtn: "Rate on Google Maps (5★)",
    googleSub: "Direct review prompt in Google Maps",
    yandexBtn: "Rate on Yandex Maps (5★)",
    yandexSub: "Direct review section in Yandex Maps",
    deskStandTitle: "Printable Clinic Table Stands & Posters",
    deskStandDesc: "High-resolution print-ready PDF & PNG files for reception desk and doctor tables:",
    downloadA5Pdf: "A5 Table Tent (PDF)",
    downloadA4Pdf: "A4 Wall Poster (PDF)",
    downloadHorizontalPdf: "Landscape Stand (PDF)",
    downloadA5Png: "A5 Image (PNG)",
    downloadA4Png: "A4 Image (PNG)",
    downloadHorizontalPng: "Landscape Image (PNG)",
    printNow: "Print Now",
    address: "Andijan, Prospekt, Navoi Avenue, 91 (Next to Sariq Bola pizza)",
    phone: "+998 97 676 01 01",
  },
};

const Review = () => {
  const { lang } = useLanguage();
  const to = useLocalizedPath();
  const { pathname } = useLocation();
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const googleReviewUrl = "https://g.page/r/CbETKPLsTTxtEBM/review";
  const yandexReviewUrl = "https://stomatolog-muhammadali.uz/yandex-review";

  const content = REVIEW_CONTENT_MAP[lang] || REVIEW_CONTENT_MAP.uz;
  const isLegacyBahoRoute = pathname.includes("/baho");

  const currentStars = hoverRating || selectedRating;

  return (
    <div className="py-8 sm:py-12 space-y-10 text-slate-900 max-w-4xl mx-auto">
      <Seo
        page="review"
        path="/review"
        noindex={isLegacyBahoRoute}
      />

      {/* Header Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-2">
        <Link to={to("/")} className="hover:text-primary transition-colors">
          {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-primary font-bold" aria-current="page">
          {content.badge}
        </span>
      </nav>

      {/* Doctor Card Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img
            src="/dr_muhammadali.png"
            alt="Dr. MuhammadAli Davronov"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-sky-400/40 shadow-xl bg-slate-800"
          />
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
              {content.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Dr. MuhammadAli Davronov
            </h1>
            <p className="text-sky-200/90 text-sm sm:text-base font-medium">
              {content.doctorRole}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm">
              📍 {content.address}
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Review Box */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {content.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 5-Star Rating Selector */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {content.selectRating}
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setSelectedRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-125 focus:outline-none focus:scale-125 p-1"
                aria-label={`${star} yulduz`}
              >
                <svg
                  className={`w-10 h-10 sm:w-14 sm:h-14 transition-colors ${
                    star <= currentStars ? "text-amber-400 fill-amber-400 filter drop-shadow-md" : "text-slate-200 fill-slate-200"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold text-emerald-600">
            {content.ratingExcellent}
          </p>
        </div>

        {/* Dual Direct Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
          {/* Google Button */}
          <div className="flex flex-col p-6 rounded-2xl border-2 border-blue-200 bg-blue-50/40 hover:bg-blue-50 hover:border-blue-400 transition-all shadow-sm space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md">
                G
              </span>
              <span className="text-lg font-bold text-slate-900">Google Xaritalar</span>
            </div>
            <div className="flex justify-center">
              <img
                src="/qr/google_review_qr.png"
                alt="Google Review QR"
                className="w-36 h-36 rounded-xl border border-slate-200 shadow-inner bg-white p-2"
              />
            </div>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" />
              </svg>
              {content.googleBtn}
            </a>
            <p className="text-xs text-slate-500">
              {content.googleSub}
            </p>
          </div>

          {/* Yandex Button */}
          <div className="flex flex-col p-6 rounded-2xl border-2 border-red-200 bg-red-50/40 hover:bg-red-50 hover:border-red-400 transition-all shadow-sm space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-lg shadow-md">
                Я
              </span>
              <span className="text-lg font-bold text-slate-900">Yandex Xaritalar</span>
            </div>
            <div className="flex justify-center">
              <img
                src="/qr/yandex_review_qr.png"
                alt="Yandex Review QR"
                className="w-36 h-36 rounded-xl border border-slate-200 shadow-inner bg-white p-2"
              />
            </div>
            <a
              href={yandexReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" />
              </svg>
              {content.yandexBtn}
            </a>
            <p className="text-xs text-slate-500">
              {content.yandexSub}
            </p>
          </div>
        </div>
      </div>

      {/* Printable Clinic Assets Section (For Doctor / Reception desk) */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            🖨️ {content.deskStandTitle}
          </h3>
          <p className="text-sm text-slate-600">
            {content.deskStandDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card A5 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                A5 Stol Stendi (148 x 210 mm)
              </span>
              <h4 className="font-bold text-slate-900 mt-2">A5 Vertikal Stand</h4>
              <p className="text-xs text-slate-500 mt-1">
                Klinika stollari va resepshnga akril stendda qo'yish uchun eng yaxshi o'lcham.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="/qr/review_stand_a5.pdf"
                download="review_stand_a5_dr_muhammadali.pdf"
                className="w-full text-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors"
              >
                📄 {content.downloadA5Pdf}
              </a>
              <a
                href="/qr/review_stand_a5.png"
                download="review_stand_a5_dr_muhammadali.png"
                className="w-full text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
              >
                🖼️ {content.downloadA5Png}
              </a>
            </div>
          </div>

          {/* Card A4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                A4 Devor Posteri (210 x 297 mm)
              </span>
              <h4 className="font-bold text-slate-900 mt-2">A4 Katta Stand</h4>
              <p className="text-xs text-slate-500 mt-1">
                Klinika eshigi, qabulxona devori yoki kutish zali uchun katta format.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="/qr/review_stand_a4_print.pdf"
                download="review_stand_a4_dr_muhammadali.pdf"
                className="w-full text-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors"
              >
                📄 {content.downloadA4Pdf}
              </a>
              <a
                href="/qr/review_stand_a4.png"
                download="review_stand_a4_dr_muhammadali.png"
                className="w-full text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
              >
                🖼️ {content.downloadA4Png}
              </a>
            </div>
          </div>

          {/* Horizontal Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                Gorizontal Tenta (210 x 148 mm)
              </span>
              <h4 className="font-bold text-slate-900 mt-2">Gorizontal Stend</h4>
              <p className="text-xs text-slate-500 mt-1">
                Stol ustida yotiq yoki buklanadigan qog'oz stendlari uchun.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="/qr/review_stand_horizontal.pdf"
                download="review_stand_horizontal_dr_muhammadali.pdf"
                className="w-full text-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors"
              >
                📄 {content.downloadHorizontalPdf}
              </a>
              <a
                href="/qr/review_stand_horizontal.png"
                download="review_stand_horizontal_dr_muhammadali.png"
                className="w-full text-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
              >
                🖼️ {content.downloadHorizontalPng}
              </a>
            </div>
          </div>
        </div>

        {/* Browser Print Button */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow transition-colors text-sm"
          >
            🖨️ {content.printNow}
          </button>
        </div>
      </div>

      {/* Business Card (Tashrif Qog'ozi) Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
              Vizitka (90 × 50 mm • 600 DPI)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              💳 Shifokor Tashrif Qog'ozi (Business Card)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Veb-saytga o'tuvchi QR kod, ijtimoiy tarmoqlar (Telegram, Instagram, Tel) va 3 asosiy xizmatlar ustuni bilan chop etishga tayyor 2 tomonlama vizitka.
            </p>
          </div>
          <a
            href="/qr/business_card_modern_double_sided.pdf"
            download="vizitka_modern_white_dr_muhammadali.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-xs sm:text-sm whitespace-nowrap"
          >
            📄 2 Tomonlama Oq Vizitka (PDF)
          </a>
        </div>

        {/* Visual Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          {/* Front Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">Old Tomoni (Oq Minimalist & DM Logo)</span>
              <a href="/qr/business_card_modern_front.pdf" download className="text-xs text-sky-400 hover:text-white underline">
                PDF
              </a>
            </div>
            <img
              src="/qr/business_card_modern_front.png"
              alt="Vizitka Old Tomoni"
              className="w-full rounded-xl border border-slate-700 shadow-md hover:scale-[1.01] transition-transform bg-white"
            />
          </div>

          {/* Back Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">Orqa Tomoni (Oddiy Veb-sayt QR & Aloqalar)</span>
              <a href="/qr/business_card_modern_back.pdf" download className="text-xs text-sky-400 hover:text-white underline">
                PDF
              </a>
            </div>
            <img
              src="/qr/business_card_modern_back.png"
              alt="Vizitka Orqa Tomoni"
              className="w-full rounded-xl border border-slate-700 shadow-md hover:scale-[1.01] transition-transform bg-white"
            />
          </div>
        </div>

        {/* Direct Download Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
          <span className="text-slate-400">Yuklab olish:</span>
          <a
            href="/qr/business_card_modern_double_sided.pdf"
            download="vizitka_oq_minimal_chop_uchun.pdf"
            className="px-3.5 py-2 bg-primary hover:bg-red-700 rounded-lg text-white font-bold transition-colors"
          >
            📄 Oq Minimal Vizitka PDF (Chop etishga)
          </a>
          <a
            href="/qr/business_card_modern_front.png"
            download="vizitka_oq_old.png"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 border border-slate-600 transition-colors"
          >
            🖼️ Oq Old (PNG)
          </a>
          <a
            href="/qr/business_card_modern_back.png"
            download="vizitka_oq_orqa.png"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 border border-slate-600 transition-colors"
          >
            🖼️ Oq Orqa (PNG)
          </a>
          <a
            href="/qr/business_card_classic_black_double_sided.pdf"
            download="vizitka_qora_klassik.pdf"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 border border-slate-600 transition-colors"
          >
            📄 Qora Klassik PDF
          </a>
          <a
            href="/qr/website_qr.png"
            download="website_qr_stomatolog_muhammadali.png"
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 border border-slate-600 transition-colors"
          >
            🌐 Veb-sayt QR (PNG)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
