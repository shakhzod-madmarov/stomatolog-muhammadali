import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";
import {
  IconPhone,
  IconTelegram,
  IconClock,
  DentalToothMolar,
} from "./MedicalIcons";
import { DOCTOR_INFO } from "../constants/doctor";
import {
  fetchDentistAvailability,
  submitDentistBooking,
  buildWorkingHoursSchedule,
  filterAvailabilitySchedule,
  useClinicHours,
  getClinicTodayStr,
} from "../lib/medinsonBooking";
import { formatUzPhone, isUzPhoneComplete } from "../utils/phone";
import { sanitizePatientName, sanitizeNote, checkRateLimit, isBotSubmission } from "../utils/security";
import { BOOKING_SERVICES, normalizeBookingServiceId } from "../constants/bookingServices";
import {
  parseDateParts,
  formatKunOyYil,
  formatKunOyShort,
  formatLocalizedDob,
  MONTHS_SHORT,
} from "../utils/date";

const WEEKDAYS_CARD = {
  uz: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Juma", "Shan"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const formatDayParts = (ymd, lang) => {
  const parts = parseDateParts(ymd);
  if (!parts) return { weekday: "", dayNumber: "", monthName: "", dayMonth: ymd, isToday: false, isTomorrow: false };
  const safeLang = ["uz", "ru", "en"].includes(lang) ? lang : "uz";
  const wds = WEEKDAYS_CARD[safeLang] || WEEKDAYS_CARD.uz;
  const mShorts = MONTHS_SHORT[safeLang] || MONTHS_SHORT.uz;
  const clinicToday = getClinicTodayStr();

  const todayParts = parseDateParts(clinicToday);
  let isTomorrow = false;
  if (todayParts && parts) {
    const d1 = new Date(todayParts.year, todayParts.month - 1, todayParts.day);
    const d2 = new Date(parts.year, parts.month - 1, parts.day);
    const diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    isTomorrow = diffDays === 1;
  }

  return {
    weekday: wds[parts.date.getDay()],
    dayNumber: parts.day,
    monthName: mShorts[parts.month - 1] || "",
    dayMonth: `${String(parts.day).padStart(2, "0")}.${String(parts.month).padStart(2, "0")}`,
    isToday: ymd === clinicToday,
    isTomorrow,
  };
};

const formatDobInput = (value) => {
  if (!value) return "";
  const trimmed = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    const [y, m, d] = trimmed.split("-");
    return `${d}.${m}.${y}`;
  }
  const digits = trimmed.replace(/\D/g, "").slice(0, 8);
  if (!digits) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4, 8)}`;
};

const TEXT = {
  uz: {
    kicker: "Dr. MuhammadAli Davronov · DM Stomatologiya",
    heading: "O'zingizga Qulay Vaqtni Tanlang",
    sub: "Kutish va navbatlarsiz: qulay vaqtni tanlang, qabulda shaxsan Dr. MuhammadAli Davronov sizni kutib oladi.",
    step1Service: "Xizmat yo'nalishi",
    step2Date: "Qabul kunini tanlang",
    step3Time: "Bo'sh vaqtni tanlang",
    step4Patient: "Bemor ma'lumotlari",
    selectedSlotLabel: "Tanlangan vaqt:",
    selectedAppointmentTitle: "Belgilangan qabul:",
    doctorRoomBadge: "Dr. MuhammadAli · DM Stomatologiya, 1-xona",
    nameLabel: "Ism va familiya *",
    phoneLabel: "Telefon raqami *",
    dobLabel: "Tug'ilgan sana *",
    dobHint: "Tibbiy kartangizni aniq ochish va to'g'ri tashxis uchun talab qilinadi",
    noteLabel: "Shikoyat yoki izoh (ixtiyoriy)",
    noteHint: "Shifokor ko'rigi uchun qo'shimcha izoh yoki shikoyat",
    clearDob: "Tozalash",
    scrollDaysLeft: "Oldingi kunlar",
    scrollDaysRight: "Keyingi kunlar",
    todayLabel: "Bugun",
    tomorrowLabel: "Ertaga",
    openCalendarBtn: "Taqvim",
    openCalendarTitle: "Taqvimdan sana tanlash",
    slotsAvailableSuffix: "ta bo'sh vaqt",
    dayClosed: "Dam olish",
    namePlaceholder: "Masalan: Jasur Aliyev",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "KK.OO.YYYY",
    notePlaceholder: "Masalan: implant konsultatsiyasi, sirkon koronka yoki tish og'rig'i...",
    submit: "Qabulga Yozilishni Tasdiqlash",
    submitting: "Yuborilmoqda...",
    needName: "Iltimos, ism va familiyangizni kiriting",
    needPhone: "Iltimos, to'liq telefon raqamini kiriting",
    needDob: "Iltimos, tug'ilgan sanangizni to'liq kiriting (kun.oy.yil)",
    needTime: "Iltimos, qabul sanasi va vaqtini tanlang",
    conflictError: "Bu vaqt band qilingan. Iltimos, boshqa vaqtni tanlang.",
    failed: "So'rovni yuborib bo'lmadi. Iltimos, telefon orqali bog'laning.",
    pausedNotice: "Onlayn qabul vaqtlari yangilanmoqda. To'g'ridan-to'g'ri telefon orqali ham yozilishingiz mumkin:",
    successBadge: "Qabul so'rovi qabul qilindi",
    successTitle: "Qabulingiz muvaffaqiyatli ro'yxatga olindi!",
    successBody: "So'rovingiz qabul qilindi. Dr. MuhammadAli Davronov qabulxonasidan tez orada siz bilan bog'lanamiz.",
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
    leadNoticeBody: "Har bir bemorga to'liq vaqt va e'tibor ajratishimiz uchun qabul oldindan rejalashtiriladi.",
    trustMicro: "🔒 Shaxsiy ma'lumotlar to'liq himoyalangan · 100% Shaxsiy qabul · Kutishlarsiz",
    minLabel: "daqiqa",
  },
  ru: {
    kicker: "Д-р МухаммадАли Давронов · DM Stomatology",
    heading: "Выберите удобный день и время приёма",
    sub: "Без очередей и ожидания: выберите свободное время для спокойной личной консультации с доктором.",
    step1Service: "Направление лечения",
    step2Date: "Выберите день приёма",
    step3Time: "Выберите удобное время",
    step4Patient: "Данные пациента",
    selectedSlotLabel: "Выбранное время:",
    selectedAppointmentTitle: "Выбранный приём:",
    doctorRoomBadge: "Д-р МухаммадАли · DM Stomatology, каб. №1",
    nameLabel: "Имя и фамилия *",
    phoneLabel: "Номер телефона *",
    dobLabel: "Дата рождения *",
    dobHint: "Необходимо для точного поиска и оформления медицинской карты",
    noteLabel: "Жалоба или пожелание (необязательно)",
    noteHint: "Дополнительное примечание для доктора к приёму",
    clearDob: "Очистить",
    scrollDaysLeft: "Предыдущие дни",
    scrollDaysRight: "Следующие дни",
    todayLabel: "Сегодня",
    tomorrowLabel: "Завтра",
    openCalendarBtn: "Календарь",
    openCalendarTitle: "Выбрать дату из календаря",
    slotsAvailableSuffix: "мест",
    dayClosed: "Выходной",
    namePlaceholder: "Например: Алишер Усманов",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "ДД.ММ.ГГГГ",
    notePlaceholder: "Например: консультация по имплантации, циркониевая коронка или лечение...",
    submit: "Подтвердить Запись на Приём",
    submitting: "Отправка...",
    needName: "Пожалуйста, введите ваше имя и фамилию",
    needPhone: "Пожалуйста, введите корректный номер телефона",
    needDob: "Пожалуйста, введите дату рождения полностью (день.месяц.год)",
    needTime: "Пожалуйста, выберите дату и время приёма",
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
    leadNoticeBody: "Чтобы уделить каждому пациенту максимум внимания и времени, визиты планируются заранее.",
    trustMicro: "🔒 Конфиденциальность гарантирована · Личный приём д-ра МухаммадАли · Без очередей",
    minLabel: "минут",
  },
  en: {
    kicker: "Dr. MuhammadAli Davronov · DM Stomatology",
    heading: "Choose Your Preferred Appointment Time",
    sub: "Zero waiting time: select your convenient slot for personalized, attentive consultation directly with the doctor.",
    step1Service: "Treatment & Specialty",
    step2Date: "Choose appointment date",
    step3Time: "Choose available time",
    step4Patient: "Patient details",
    selectedSlotLabel: "Selected slot:",
    selectedAppointmentTitle: "Selected appointment:",
    doctorRoomBadge: "Dr. MuhammadAli · DM Stomatology, Room #1",
    nameLabel: "Full Name *",
    phoneLabel: "Phone Number *",
    dobLabel: "Date of Birth *",
    dobHint: "Required for medical record verification and diagnostic care",
    noteLabel: "Complaint or note (optional)",
    noteHint: "Optional advance note for the doctor prior to your visit",
    clearDob: "Clear",
    scrollDaysLeft: "Previous days",
    scrollDaysRight: "Next days",
    todayLabel: "Today",
    tomorrowLabel: "Tomorrow",
    openCalendarBtn: "Calendar",
    openCalendarTitle: "Select appointment date from calendar",
    slotsAvailableSuffix: "slots",
    dayClosed: "Closed",
    namePlaceholder: "e.g. Jasur Aliyev",
    phonePlaceholder: "+998 97 676 01 01",
    dobFormat: "DD.MM.YYYY",
    notePlaceholder: "e.g. implant consultation, zirconia crowns, or tooth pain...",
    submit: "Confirm Appointment Booking",
    submitting: "Submitting...",
    needName: "Please enter your full name",
    needPhone: "Please enter a valid phone number",
    needDob: "Please enter your full date of birth (DD.MM.YYYY)",
    needTime: "Please select a date and time slot",
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
    leadNoticeBody: "To ensure thorough sterilization and zero waiting times, same-day bookings require advance notice.",
    trustMicro: "🔒 Secure & confidential · Personal consultation by Dr. MuhammadAli · Zero wait",
    minLabel: "mins",
  },
};

export const InlineBookingSection = ({ initialServiceId = null }) => {
  const { lang } = useLanguage();
  const { bookingRequest, clearBookingRequest } = useBooking();
  const [searchParams] = useSearchParams();
  const t = TEXT[lang] || TEXT.uz;
  const clinicHours = useClinicHours(lang);

  const dateScrollRef = useRef(null);
  const hiddenCalendarJumpRef = useRef(null);
  const hiddenDatePickerRef = useRef(null);

  // Mouse drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

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
  const [dob, setDob] = useState(() => formatDobInput(bookingRequest?.dob || ""));
  const [note, setNote] = useState(() => bookingRequest?.note || "");
  const [honeypot, setHoneypot] = useState("");
  const [formMountTime] = useState(() => Date.now());

  const handleDobChange = (e) => {
    const formatted = formatDobInput(e.target.value);
    setDob(formatted);
  };

  const handleNativeDatePick = (e) => {
    const val = e.target.value;
    if (val) {
      setDob(formatDobInput(val));
    }
  };

  const openDatePicker = () => {
    if (hiddenDatePickerRef.current) {
      try {
        hiddenDatePickerRef.current.showPicker?.();
      } catch {
        hiddenDatePickerRef.current.focus?.();
      }
    }
  };

  const handleCalendarJump = (e) => {
    const pickedDate = e.target.value;
    if (!pickedDate) return;

    setDays((prev) => {
      if (prev.some((d) => d.date === pickedDate)) return prev;
      const newDay = {
        date: pickedDate,
        times: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        slots: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        isClosed: false,
      };
      return [...prev, newDay].sort((a, b) => a.date.localeCompare(b.date));
    });

    setSelectedDate(pickedDate);
    setSelectedTime("");

    setTimeout(() => {
      const el = document.getElementById(`date-chip-${pickedDate}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, 120);
  };

  const openCalendarJump = () => {
    if (hiddenCalendarJumpRef.current) {
      try {
        hiddenCalendarJumpRef.current.showPicker?.();
      } catch {
        hiddenCalendarJumpRef.current.focus?.();
      }
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedResult, setBookedResult] = useState(null);

  // Load availability from backend
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
      if (bookingRequest.dob) setDob(formatDobInput(bookingRequest.dob));
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

  // Drag and Wheel scrolling handlers
  const handleMouseDown = (e) => {
    if (!dateScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - dateScrollRef.current.offsetLeft);
    setScrollLeftState(dateScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !dateScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - dateScrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    dateScrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleDateWheel = (e) => {
    if (!dateScrollRef.current) return;
    if (Math.abs(e.deltaY) > 0) {
      dateScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const scrollDays = (direction) => {
    if (dateScrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      dateScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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

    const cleanDob = String(dob || "").trim();
    if (!cleanDob || cleanDob.length < 10) {
      toast.error(t.needDob);
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
        dob: cleanDob,
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
    setDob("");
    clearBookingRequest();
    loadSchedule();
  };

  const selectedServiceObj = BOOKING_SERVICES.find((s) => s.id === selectedService);

  return (
    <section
      id="booking"
      className="w-full py-12 sm:py-16 md:py-20 scroll-mt-24 text-slate-900 bg-white"
      aria-label={t.heading}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide text-primary bg-primary/10 border border-primary/20 shadow-xs mb-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            {t.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Success Card */}
        {bookedResult ? (
          <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white shadow-xl shadow-slate-900/5 border border-slate-200 text-center animate-in fade-in duration-300 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center text-3xl sm:text-4xl mb-5 shadow-xs">
              ✓
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-3 font-mono">
              {t.successBadge} · #{bookedResult.bookingId || bookedResult.id}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
              {t.successTitle}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto mt-2.5 leading-relaxed">
              {t.successBody}
            </p>

            {/* Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto my-7 text-left p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-sm sm:text-base shadow-2xs">
              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider font-semibold mb-0.5">{t.summaryPatient}:</span>
                <span className="font-bold text-slate-900 text-base">{fullName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider font-semibold mb-0.5">{t.summaryPhone}:</span>
                <span className="font-mono font-bold text-slate-900 text-base">{phone}</span>
              </div>
              {dob ? (
                <div>
                  <span className="text-slate-500 block text-xs uppercase tracking-wider font-semibold mb-0.5">{t.summaryDob}:</span>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{formatLocalizedDob(dob, lang)}</span>
                </div>
              ) : null}
              <div>
                <span className="text-slate-500 block text-xs uppercase tracking-wider font-semibold mb-0.5">{t.summaryWhen}:</span>
                <span className="font-bold text-primary text-sm sm:text-base">
                  {formatKunOyYil(selectedDate, lang, { includeWeekday: true, includeYear: true })} — <span className="font-mono">{selectedTime}</span>
                </span>
              </div>
              <div className={dob ? "sm:col-span-2" : ""}>
                <span className="text-slate-500 block text-xs uppercase tracking-wider font-semibold mb-0.5">{t.summaryService}:</span>
                <span className="font-bold text-slate-900 text-base">
                  {selectedServiceObj ? selectedServiceObj.name[lang] || selectedServiceObj.name.uz : "-"}
                </span>
              </div>
            </div>

            {/* Telegram Action Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-sky-50 border border-sky-100 max-w-md mx-auto mb-7 text-center">
              <h4 className="font-bold text-slate-900 text-base mb-1.5">{t.telegramCardTitle}</h4>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{t.telegramCardDesc}</p>
              <a
                href={bookedResult.telegramUrl || DOCTOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-xs transition-colors"
              >
                <IconTelegram className="w-5 h-5 text-white" />
                <span>{t.telegramCardBtn}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={DOCTOR_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <IconPhone className="w-5 h-5" />
                <span>{t.callBtn}: {DOCTOR_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-sm sm:text-base transition-colors cursor-pointer"
              >
                {t.bookAnother}
              </button>
            </div>
          </div>
        ) : (
          /* Modern Executive Booking Card */
          <form
            onSubmit={handleFormSubmit}
            className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden p-5 sm:p-8 lg:p-10 space-y-7 sm:space-y-9"
          >
            {/* Top decorative medical gradient line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

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

            {/* STEP 1: Service Selection */}
            <div>
              <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 ring-1 ring-primary/20">
                    1
                  </span>
                  <label htmlFor="booking-service-select" className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900">
                    {t.step1Service}
                  </label>
                </div>
                {selectedServiceObj && (
                  <span className="text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{selectedServiceObj.price[lang] || selectedServiceObj.price.uz}</span>
                    <span className="text-emerald-300">·</span>
                    <span>{selectedServiceObj.duration} {t.minLabel}</span>
                  </span>
                )}
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-4 text-primary pointer-events-none flex items-center">
                  <DentalToothMolar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <select
                  id="booking-service-select"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full pl-12 sm:pl-14 pr-11 py-3.5 sm:py-4 rounded-2xl bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 hover:border-slate-300 text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all appearance-none cursor-pointer"
                >
                  {BOOKING_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-white text-slate-900 py-1.5 text-base">
                      {s.name[lang] || s.name.uz}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* STEP 2: Date Picker (Fluid Movable + Wheel + Drag + Calendar Jump) */}
            <fieldset className="border-none p-0 m-0">
              <div className="flex flex-wrap items-center justify-between mb-3.5 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 ring-1 ring-primary/20">
                    2
                  </span>
                  <legend className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900">
                    {t.step2Date}
                  </legend>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200">
                    <IconClock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{clinicHours.days}: {clinicHours.hours}</span>
                  </span>

                  {/* Calendar Quick-Jump Button */}
                  <button
                    type="button"
                    onClick={openCalendarJump}
                    title={t.openCalendarTitle}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary hover:border-primary/30 transition-all text-xs font-bold shadow-2xs cursor-pointer active:scale-95"
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{t.openCalendarBtn}</span>
                  </button>

                  {/* Hidden date picker input for quick calendar jump */}
                  <input
                    ref={hiddenCalendarJumpRef}
                    type="date"
                    min={getClinicTodayStr()}
                    onChange={handleCalendarJump}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="sr-only"
                  />

                  {/* Left / Right Scroll Arrows */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label={t.scrollDaysLeft}
                      title={t.scrollDaysLeft}
                      onClick={() => scrollDays("left")}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary flex items-center justify-center transition-all text-sm sm:text-base font-bold cursor-pointer active:scale-95 shadow-2xs"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label={t.scrollDaysRight}
                      title={t.scrollDaysRight}
                      onClick={() => scrollDays("right")}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary flex items-center justify-center transition-all text-sm sm:text-base font-bold cursor-pointer active:scale-95 shadow-2xs"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable / Draggable Dates Track */}
              <div
                ref={dateScrollRef}
                role="radiogroup"
                aria-label={t.step2Date}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onWheel={handleDateWheel}
                className={`flex items-stretch gap-2.5 sm:gap-3 overflow-x-auto py-2 px-1 scroll-smooth snap-x snap-mandatory scroll-touch select-none cursor-grab active:cursor-grabbing ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(200, 16, 46, 0.25) rgba(241, 245, 249, 0.8)",
                }}
              >
                {days.map((day) => {
                  const isSelected = day.date === selectedDate;
                  const isClosed = day.isClosed;
                  const { weekday, dayNumber, monthName, isToday, isTomorrow } = formatDayParts(day.date, lang);

                  return (
                    <button
                      key={day.date}
                      id={`date-chip-${day.date}`}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      disabled={isClosed}
                      onClick={() => {
                        setSelectedDate(day.date);
                        setSelectedTime("");
                      }}
                      className={`shrink-0 snap-start flex flex-col items-center justify-between min-w-[86px] sm:min-w-[96px] min-h-[92px] sm:min-h-[98px] p-2.5 sm:p-3 rounded-2xl text-center border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-b from-[#C8102E] to-[#A00202] text-white border-primary shadow-colgate ring-2 ring-primary/25 scale-[1.03]"
                          : isClosed
                          ? "bg-slate-50 text-slate-400 border-slate-200/60 cursor-not-allowed opacity-60"
                          : "bg-white text-slate-700 border-slate-200/90 hover:border-primary/50 hover:text-slate-900 hover:bg-red-50/20 shadow-2xs"
                      }`}
                    >
                      {/* Top: Weekday or Badge */}
                      <span
                        className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                          isSelected
                            ? "text-white"
                            : isToday
                            ? "text-primary font-black"
                            : "text-slate-500"
                        }`}
                      >
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                        {isToday ? t.todayLabel : isTomorrow ? t.tomorrowLabel : weekday}
                      </span>

                      {/* Middle: Day Number & Month */}
                      <div className="my-0.5">
                        <span
                          className={`block text-2xl sm:text-3xl font-black font-sans leading-none ${
                            isSelected ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {dayNumber}
                        </span>
                        <span
                          className={`block text-xs font-semibold mt-0.5 ${
                            isSelected ? "text-white/90" : "text-slate-400"
                          }`}
                        >
                          {monthName}
                        </span>
                      </div>

                      {/* Bottom: Slots indicator pill */}
                      <div className="w-full pt-1">
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-tight py-0.5 px-1.5 rounded-md text-center font-mono ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : isClosed
                              ? "bg-slate-200/70 text-slate-400"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                          }`}
                        >
                          {isClosed ? t.dayClosed : `${day.times?.length || 0} ${t.slotsAvailableSuffix}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* STEP 3: Time Slot Picker */}
            <fieldset className="border-none p-0 m-0">
              <div className="flex items-center justify-between mb-3.5 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 ring-1 ring-primary/20">
                    3
                  </span>
                  <legend className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900">
                    {t.step3Time}
                  </legend>
                </div>
                {selectedTime && (
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-primary/10 text-primary border border-primary/20 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{selectedTime}</span>
                  </span>
                )}
              </div>

              {availableSlots.length > 0 ? (
                <div
                  role="radiogroup"
                  aria-label={t.step3Time}
                  className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2.5 sm:gap-3"
                >
                  {availableSlots.map((timeStr) => {
                    const isSelected = selectedTime === timeStr;
                    return (
                      <button
                        key={timeStr}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedTime(timeStr)}
                        className={`min-h-[50px] sm:min-h-[54px] flex items-center justify-center py-3 px-3 rounded-xl sm:rounded-2xl text-base sm:text-lg font-mono font-bold border transition-all duration-150 text-center cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-primary to-primary-hover text-white border-primary shadow-sm ring-2 ring-primary/20 scale-[1.02]"
                            : "bg-white text-slate-800 border-slate-200/90 hover:border-primary/40 hover:text-primary hover:bg-red-50/30 shadow-2xs"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isSelected && (
                            <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          <span>{timeStr}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-sm text-slate-600 leading-relaxed">
                  {t.leadNoticeBody}
                </div>
              )}
            </fieldset>

            {/* STEP 4: Patient Details (2x2 Balanced Grid - DOB is REQUIRED) */}
            <fieldset className="border-none p-0 m-0">
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 ring-1 ring-primary/20">
                  4
                </span>
                <legend className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900">
                  {t.step4Patient}
                </legend>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="booking-full-name" className="block text-sm sm:text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
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
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="booking-phone-input" className="block text-sm sm:text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
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
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 text-base font-mono font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                  />
                </div>

                {/* Date of Birth (REQUIRED) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="booking-dob-input" className="block text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wide">
                      {t.dobLabel}
                    </label>
                    {dob && (
                      <button
                        type="button"
                        onClick={() => setDob("")}
                        className="text-xs text-slate-500 hover:text-rose-600 underline transition-colors cursor-pointer"
                      >
                        {t.clearDob}
                      </button>
                    )}
                  </div>
                  <div className="relative flex items-center">
                    <input
                      id="booking-dob-input"
                      name="dob"
                      type="text"
                      required
                      aria-required="true"
                      inputMode="numeric"
                      autoComplete="bday"
                      maxLength={10}
                      value={dob}
                      onChange={handleDobChange}
                      placeholder={t.dobFormat}
                      aria-label={t.dobLabel}
                      className="w-full pl-4 sm:pl-5 pr-12 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 text-base font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                    />

                    {/* Hidden native date input for optional calendar picker */}
                    <input
                      ref={hiddenDatePickerRef}
                      type="date"
                      max={getClinicTodayStr()}
                      min="1920-01-01"
                      onChange={handleNativeDatePick}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="sr-only"
                    />

                    {/* Clean calendar trigger button */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                      <button
                        type="button"
                        onClick={openDatePicker}
                        title={t.openCalendarTitle}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        aria-label={t.openCalendarTitle}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-1.5 leading-normal">
                    {t.dobHint}
                  </p>
                </div>

                {/* Note & Reason (ONLY OPTIONAL FIELD) */}
                <div>
                  <label htmlFor="booking-note-textarea" className="block text-sm sm:text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                    {t.noteLabel}
                  </label>
                  <input
                    id="booking-note-textarea"
                    name="note"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t.notePlaceholder}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-2xs transition-all"
                  />
                  <p className="text-sm text-slate-500 mt-1.5 leading-normal">
                    {t.noteHint}
                  </p>
                </div>
              </div>
            </fieldset>

            {/* Selected Slot Confirmation Summary Callout */}
            {selectedDate && selectedTime && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50/70 via-slate-50 to-red-50/40 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <IconClock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block">
                      {t.selectedAppointmentTitle}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {formatKunOyYil(selectedDate, lang, { includeWeekday: true, includeYear: true })} — <span className="text-primary font-mono font-black text-lg sm:text-xl">{selectedTime}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
                    <DentalToothMolar className="w-4 h-4 text-primary" />
                    <span>{selectedServiceObj ? selectedServiceObj.name[lang] || selectedServiceObj.name.uz : "-"}</span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                    {t.doctorRoomBadge}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button & Trust Guarantee */}
            <div className="space-y-3.5 pt-1.5">
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime}
                className={`w-full min-h-[56px] sm:min-h-[62px] py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-md ${
                  isSubmitting || !selectedDate || !selectedTime
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                    : "bg-gradient-to-r from-primary via-primary-hover to-primary hover:shadow-colgate hover:brightness-105 active:scale-98"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2.5">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t.submitting}</span>
                  </div>
                ) : (
                  <>
                    <span>{t.submit}</span>
                    {selectedTime && (
                      <span className="opacity-95 font-medium text-sm sm:text-base">
                        ({formatKunOyShort(selectedDate, lang)}, {selectedTime}) →
                      </span>
                    )}
                  </>
                )}
              </button>

              <p className="text-center text-xs sm:text-sm text-slate-500 font-medium">
                {t.trustMicro}
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default InlineBookingSection;
