import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import { IconPhone, IconTelegram } from "./MedicalIcons";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  fetchDentistAvailability,
  submitDentistBooking,
  buildWorkingHoursSchedule,
  filterAvailabilitySchedule,
  useClinicHours,
} from "../lib/medinsonBooking";
import { formatUzPhone, isUzPhoneComplete } from "../utils/phone";
import { sanitizePatientName, sanitizeNote, checkRateLimit, isBotSubmission } from "../utils/security";
import { BOOKING_SERVICES, normalizeBookingServiceId } from "../constants/bookingServices";

const pad2 = (n) => String(n).padStart(2, "0");

const WEEKDAY_SHORT = {
  uz: ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const parseYmd = (s) => {
  const [y, m, d] = String(s || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

const formatDayPill = (ymd, lang) => {
  const date = parseYmd(ymd);
  if (!date) return ymd;
  const wds = WEEKDAY_SHORT[lang] || WEEKDAY_SHORT.uz;
  return `${wds[date.getDay()]} ${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}`;
};

const formatDmy = (ymd) => {
  const [y, m, d] = String(ymd || "").split("-");
  if (!y || !m || !d) return ymd;
  return `${d}.${m}.${y}`;
};

const TEXT = {
  uz: {
    kicker: "Dr. MuhammadAli Davronov · DM Stomatologiya",
    heading: "O'zingizga Qulay Vaqtni Tanlang",
    sub: "Kutish va navbatlarsiz: qulay vaqtni tanlang, qabulda shaxsan Dr. MuhammadAli Davronov sizni kutib oladi.",
    defaultDaysLabel: "Dushanba - Shanba (08:30 – 18:30)",
    serviceLabel: "Xizmat yo'nalishi",
    dayGroupLabel: "1-qadam: Qabul kunini tanlang",
    timeGroupLabel: "2-qadam: Bo'sh vaqtni tanlang",
    selectedSlotLabel: "Tanlangan vaqt:",
    nameLabel: "Ism va familiya *",
    phoneLabel: "Telefon raqami *",
    dobLabel: "Tug'ilgan sana (ixtiyoriy)",
    dobHint: "Bir xil telefon raqamidan oila a'zolari yozilganda bemorlarni farqlash uchun yordam beradi.",
    noteLabel: "Shikoyat yoki izoh (ixtiyoriy)",
    namePlaceholder: "Masalan: Jasur Aliyev",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "kun-oy-yil",
    dobPlaceholder: "kun-oy-yil",
    notePlaceholder: "Ortopediya, tsirkon koronka, vinir, terapiya yoki implantologiya bo'yicha...",
    submit: "Qabulga Yozilishni Tasdiqlash",
    submitting: "Yuborilmoqda...",
    needName: "Iltimos, ism va familiyangizni kiriting",
    needPhone: "Iltimos, to'liq telefon raqamini kiriting",
    needTime: "Iltimos, sana va vaqtni tanlang",
    conflictError: "Bu vaqt band qilingan. Iltimos, boshqa vaqtni tanlang.",
    failed: "So'rovni yuborib bo'lmadi. Iltimos, telefon orqali bog'laning.",
    pausedNotice: "Onlayn qabul vaqtlari yangilanmoqda. To'g'ridan-to'g'ri telefon orqali ham yozilishingiz mumkin:",
    successBadge: "Qabul so'rovi qabul qilindi",
    successTitle: "Qabulingiz muvaffaqiyatli ro'yxatga olindi!",
    successBody: "So‘rovingiz qabul qilindi. Dr. MuhammadAli Davronov qabulxonasidan tez orada siz bilan bog‘lanamiz.",
    summaryPatient: "Bemor",
    summaryPhone: "Telefon",
    summaryDob: "Tug'ilgan sana",
    summaryService: "Xizmat",
    summaryWhen: "Qabul vaqti",
    telegramCardTitle: "Telegram eslatmani yoqing",
    telegramCardDesc: "Qabul vaqti yaqinlashganda avtomatik eslatma olish uchun quyidagi tugmani bosing va botda START tugmasini bosing.",
    telegramCardBtn: "Telegram orqali tasdiqlash ↗",
    callBtn: "Shifokorga qo'ng'iroq qilish",
    bookAnother: "← Yangi qabulga yozilish",
    leadNoticeTitle: "Qabul Tartibi va E'tibor",
    leadNoticeBody: "Har bir bemorga to'liq vaqt va e'tibor ajratishimiz uchun qabul oldindan rejalashtiriladi.",
  },
  ru: {
    kicker: "Д-р МухаммадАли Давронов · DM Stomatology",
    heading: "Выберите удобный день и время приёма",
    sub: "Без очередей и ожидания: выберите свободное время для спокойной личной консультации с доктором.",
    defaultDaysLabel: "Понедельник - Суббота (08:30 – 18:30)",
    serviceLabel: "Направление лечения",
    dayGroupLabel: "Шаг 1: Выберите день приёма",
    timeGroupLabel: "Шаг 2: Выберите свободное время",
    selectedSlotLabel: "Выбранное время:",
    nameLabel: "Имя и фамилия *",
    phoneLabel: "Номер телефона *",
    dobLabel: "Дата рождения (необязательно)",
    dobHint: "Помогает отличить пациентов при записи членов семьи с одного номера телефона.",
    noteLabel: "Жалоба или пожелание (необязательно)",
    namePlaceholder: "Например: Алишер Усманов",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "дд-мм-гггг",
    dobPlaceholder: "дд-мм-гггг",
    notePlaceholder: "По поводу ортопедии, коронок, виниров, терапии или имплантации...",
    submit: "Подтвердить Запись на Приём",
    submitting: "Отправка...",
    needName: "Пожалуйста, введите ваше имя и фамилию",
    needPhone: "Пожалуйста, введите корректный номер телефона",
    needTime: "Пожалуйста, выберите дату и время",
    conflictError: "Это время уже занято. Пожалуйста, выберите другое время.",
    failed: "Не удалось отправить запрос. Пожалуйста, свяжитесь по телефону.",
    pausedNotice: "График онлайн-записи обновляется. Вы также можете записаться по телефону:",
    successBadge: "Запрос успешно принят",
    successTitle: "Вы успешно записаны на приём!",
    successBody: "Ваш запрос зарегистрирован. Приёмная Д-ра МухаммадАли Давронова свяжется с вами для подтверждения визита.",
    summaryPatient: "Пациент",
    summaryPhone: "Телефон",
    summaryDob: "Дата рождения",
    summaryService: "Услуга",
    summaryWhen: "Дата и время",
    telegramCardTitle: "Включите напоминание в Telegram",
    telegramCardDesc: "Чтобы получить напоминание о визите, нажмите кнопку ниже и запустите бота в Telegram.",
    telegramCardBtn: "Подтвердить в Telegram ↗",
    callBtn: "Позвонить доктору",
    bookAnother: "← Записаться на другой приём",
    leadNoticeTitle: "Индивидуальный приём",
    leadNoticeBody: "Чтобы уделить каждому пациенту максимум внимания и времени, визиты планируются заранее.",
  },
  en: {
    kicker: "Dr. MuhammadAli Davronov · DM Stomatology",
    heading: "Choose Your Preferred Appointment Time",
    sub: "Zero waiting time: select your convenient slot for personalized, attentive consultation directly with the doctor.",
    defaultDaysLabel: "Monday - Saturday (08:30 – 18:30)",
    serviceLabel: "Specialty / Treatment",
    dayGroupLabel: "Step 1: Choose appointment date",
    timeGroupLabel: "Step 2: Choose available time",
    selectedSlotLabel: "Selected slot:",
    nameLabel: "Full Name *",
    phoneLabel: "Phone Number *",
    dobLabel: "Date of Birth (optional)",
    dobHint: "Helps distinguish medical records when multiple family members share one phone number.",
    noteLabel: "Complaints or note (optional)",
    namePlaceholder: "e.g. Jasur Aliyev",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "DD-MM-YYYY",
    dobPlaceholder: "DD-MM-YYYY",
    notePlaceholder: "Regarding orthopedics, zirconia crowns, veneers, pain-free therapy, or implants...",
    submit: "Confirm Appointment Booking",
    submitting: "Submitting...",
    needName: "Please enter your full name",
    needPhone: "Please enter a valid phone number",
    needTime: "Please select a date and time",
    conflictError: "This slot is already booked. Please choose another time.",
    failed: "Could not submit your booking. Please reach out via phone.",
    pausedNotice: "Live availability is updating. You can also book directly via phone call:",
    successBadge: "Booking Request Received",
    successTitle: "Your visit is successfully registered!",
    successBody: "We have received your appointment request. Dr. MuhammadAli Davronov's practice will confirm shortly.",
    summaryPatient: "Patient",
    summaryPhone: "Phone",
    summaryDob: "Date of Birth",
    summaryService: "Service",
    summaryWhen: "Date & Time",
    telegramCardTitle: "Connect via Telegram",
    telegramCardDesc: "Receive automated appointment reminders and direct updates from Dr. MuhammadAli Davronov.",
    telegramCardBtn: "Confirm on Telegram ↗",
    callBtn: "Call Doctor",
    bookAnother: "← Book Another Visit",
    leadNoticeTitle: "Fair Scheduling Notice",
    leadNoticeBody: "To ensure thorough sterilization and zero waiting times, same-day bookings require at least 2 hours advance notice.",
  },
};

export const InlineBookingSection = ({ initialServiceId = null }) => {
  const { lang } = useLanguage();
  const { bookingRequest, clearBookingRequest } = useBooking();
  const [searchParams] = useSearchParams();
  const t = TEXT[lang] || TEXT.uz;
  const clinicHours = useClinicHours(lang);

  const [days, setDays] = useState(() => buildWorkingHoursSchedule(14, 2));
  const [selectedDate, setSelectedDate] = useState(() => {
    const initialFallback = buildWorkingHoursSchedule(14, 2);
    const firstActive = initialFallback.find((d) => !d.isClosed && d.times.length > 0);
    return firstActive ? firstActive.date : "";
  });
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState(() => {
    const raw = searchParams.get("service") || bookingRequest?.service || initialServiceId;
    return normalizeBookingServiceId(raw);
  });

  const [fullName, setFullName] = useState(() => bookingRequest?.name || "");
  const [phone, setPhone] = useState(() => bookingRequest?.phone || "+998 ");
  const [note, setNote] = useState(() => bookingRequest?.note || "");
  const [honeypot, setHoneypot] = useState("");
  const [formMountTime] = useState(() => Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedResult, setBookedResult] = useState(null);

  // Load availability
  const loadSchedule = useCallback(async () => {
    try {
      const data = await fetchDentistAvailability();
      if (data?.days && Array.isArray(data.days) && data.days.length > 0) {
        const clean = filterAvailabilitySchedule(data.days, 2);
        setDays(clean);
        const firstActive = clean.find((d) => !d.isClosed && d.times.length > 0);
        if (firstActive) {
          setSelectedDate((prev) => prev || firstActive.date);
        }
      }
    } catch {
      // Graceful fallback to working hours schedule
    }
  }, []);

  useEffect(() => {
    loadSchedule();
  }, [loadSchedule]);

  useEffect(() => {
    if (bookingRequest) {
      if (bookingRequest.service) {
        setSelectedService(normalizeBookingServiceId(bookingRequest.service));
      }
      if (bookingRequest.name) setFullName(bookingRequest.name);
      if (bookingRequest.phone) setPhone(bookingRequest.phone);
      if (bookingRequest.note) setNote(bookingRequest.note);
    }
  }, [bookingRequest]);

  const activeDay = useMemo(() => {
    return days.find((d) => d.date === selectedDate);
  }, [days, selectedDate]);

  const availableSlots = useMemo(() => {
    return activeDay?.times || activeDay?.slots || [];
  }, [activeDay]);

  const handlePhoneChange = (e) => {
    const formatted = formatUzPhone(e.target.value, phone);
    setPhone(formatted);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isBotSubmission(honeypot, formMountTime)) return;

    const rateCheck = checkRateLimit("booking_submit", 10);
    if (!rateCheck.allowed) {
      toast.warn(rateCheck.message);
      return;
    }

    const cleanName = sanitizePatientName(fullName);
    if (!cleanName || cleanName.length < 2) {
      toast.error(t.needName);
      return;
    }

    if (!isUzPhoneComplete(phone)) {
      toast.error(t.needPhone);
      return;
    }

    if (!selectedDate || !selectedTime) {
      toast.error(t.needTime);
      return;
    }

    setIsSubmitting(true);
    try {
      const serviceObj = BOOKING_SERVICES.find((s) => s.id === selectedService);
      const serviceName = serviceObj ? serviceObj.name[lang] || serviceObj.name.uz : selectedService;
      const cleanNoteText = `${serviceName ? `[${serviceName}] ` : ""}${sanitizeNote(note, 300)}`.trim();

      const result = await submitDentistBooking({
        date: selectedDate,
        time: selectedTime,
        name: cleanName,
        phone,
        note: cleanNoteText,
        reason: serviceName,
      });

      setBookedResult(result);
      toast.success(t.successTitle);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#830000", "#BC0202", "#FF0000", "#FFFFFF", "#10B981"],
        });
      } catch {
        /* ignore */
      }
    } catch (err) {
      if (err.status === 409) {
        toast.error(t.conflictError);
        loadSchedule();
      } else {
        toast.error(err.message || t.failed);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setBookedResult(null);
    setSelectedTime("");
    clearBookingRequest();
    loadSchedule();
  };

  const selectedServiceObj = BOOKING_SERVICES.find((s) => s.id === selectedService);

  return (
    <section
      id="booking"
      className="w-full py-12 sm:py-16 scroll-mt-24 text-slate-900 bg-white"
      aria-label={t.heading}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide text-primary bg-primary/10 border border-primary/20 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.sub}
          </p>
        </div>

        {/* Success Card */}
        {bookedResult ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 shadow-md border border-slate-200 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center text-3xl mb-4 shadow-xs">
              ✓
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 border border-slate-300 mb-2">
              {t.successBadge} · #{bookedResult.bookingId || bookedResult.id}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.successTitle}
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2">
              {t.successBody}
            </p>

            {/* Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto my-6 text-left p-4 rounded-2xl bg-white border border-slate-200 text-xs shadow-2xs">
              <div>
                <span className="text-slate-500 block">{t.summaryPatient}:</span>
                <span className="font-bold text-slate-900">{fullName}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{t.summaryPhone}:</span>
                <span className="font-mono font-bold text-slate-900">{phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">{t.summaryWhen}:</span>
                <span className="font-bold text-primary">
                  {formatDmy(selectedDate)} — {selectedTime}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">{t.summaryService}:</span>
                <span className="font-bold text-slate-900">
                  {selectedServiceObj ? selectedServiceObj.name[lang] || selectedServiceObj.name.uz : "-"}
                </span>
              </div>
            </div>

            {/* Telegram Action Card */}
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 max-w-md mx-auto mb-6">
              <h4 className="font-bold text-slate-900 text-sm mb-1">{t.telegramCardTitle}</h4>
              <p className="text-xs text-slate-600 mb-3">{t.telegramCardDesc}</p>
              <a
                href={bookedResult.telegramUrl || DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <IconTelegram className="w-4 h-4 text-white" />
                <span>{t.telegramCardBtn}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs transition-colors shadow-sm"
              >
                <IconPhone className="w-4 h-4" />
                <span>{t.callBtn}: {DOCTOR_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                {t.bookAnother}
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form
            onSubmit={handleFormSubmit}
            className="p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 shadow-md border border-slate-200"
          >
            {/* Honeypot field for anti-bot protection */}
            <input
              type="text"
              name="dentist_user_ref"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0, width: 0 }}
              aria-hidden="true"
            />

            {/* Service Selection */}
            <div className="mb-5 sm:mb-8">
              <label htmlFor="booking-service-select" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                {t.serviceLabel}
              </label>
              <select
                id="booking-service-select"
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-base sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
              >
                {BOOKING_SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-white text-slate-900">
                    {s.name[lang] || s.name.uz}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 1: Date Chips */}
            <fieldset className="mb-5 sm:mb-8 border-none p-0 m-0">
              <div className="flex items-center justify-between mb-3 gap-2">
                <legend className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t.dayGroupLabel}
                </legend>
                <span className="text-[10.5px] sm:text-[11px] text-slate-500 text-right">
                  {clinicHours.days}: {clinicHours.hours}
                </span>
              </div>

              <div role="radiogroup" aria-label={t.dayGroupLabel} className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar scroll-touch">
                {days.map((day) => {
                  const isSelected = day.date === selectedDate;
                  const isClosed = day.isClosed;

                  return (
                    <button
                      key={day.date}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      disabled={isClosed}
                      onClick={() => {
                        setSelectedDate(day.date);
                        setSelectedTime("");
                      }}
                      className={`shrink-0 min-h-[44px] flex items-center justify-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold border transition-all ${
                        isSelected
                          ? "bg-primary text-white border-transparent shadow-md scale-102"
                          : isClosed
                          ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                          : "bg-white text-slate-700 border-slate-200 hover:border-primary hover:text-primary hover:bg-slate-50 shadow-2xs"
                      }`}
                    >
                      {formatDayPill(day.date, lang)}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Step 2: Time Slots */}
            <fieldset className="mb-6 sm:mb-8 border-none p-0 m-0">
              <legend className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                {t.timeGroupLabel} {selectedDate && `(${formatDmy(selectedDate)})`}
              </legend>

              {availableSlots.length > 0 ? (
                <div role="radiogroup" aria-label={t.timeGroupLabel} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2">
                  {availableSlots.map((timeStr) => {
                    const isSelected = selectedTime === timeStr;
                    return (
                      <button
                        key={timeStr}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedTime(timeStr)}
                        className={`min-h-[40px] flex items-center justify-center py-2 px-1 sm:px-3 rounded-full text-xs font-mono font-bold border transition-all text-center ${
                          isSelected
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:border-primary hover:text-primary shadow-2xs"
                        }`}
                      >
                        {timeStr}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
                  {t.leadNoticeBody}
                </div>
              )}
            </fieldset>

            {/* Step 3: Patient Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-5 sm:mb-6">
              <div>
                <label htmlFor="booking-full-name" className="block text-xs font-bold text-slate-800 mb-1.5">
                  {t.nameLabel}
                </label>
                <input
                  id="booking-full-name"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                />
              </div>

              <div>
                <label htmlFor="booking-phone-input" className="block text-xs font-bold text-slate-800 mb-1.5">
                  {t.phoneLabel}
                </label>
                <input
                  id="booking-phone-input"
                  name="tel"
                  type="tel"
                  required
                  aria-required="true"
                  autoComplete="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder={t.phonePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-base sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                />
              </div>
            </div>

            {/* Note & Reason */}
            <div className="mb-6">
              <label htmlFor="booking-note-textarea" className="block text-xs font-bold text-slate-800 mb-1.5">
                {t.noteLabel}
              </label>
              <textarea
                id="booking-note-textarea"
                name="note"
                rows="2"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={t.notePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !selectedDate || !selectedTime}
              className={`w-full py-3.5 px-6 rounded-full font-bold text-sm text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                isSubmitting || !selectedDate || !selectedTime
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                  : "bg-primary hover:bg-primary-hover hover:shadow-colgate hover:scale-[1.01] active:scale-98"
              }`}
            >
              {isSubmitting ? (
                <span>{t.submitting}</span>
              ) : (
                <>
                  <span>{t.submit}</span>
                  {selectedTime && (
                    <span className="opacity-90 font-mono text-xs">
                      ({formatDmy(selectedDate)} {selectedTime})
                    </span>
                  )}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InlineBookingSection;
