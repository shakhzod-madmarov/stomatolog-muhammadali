/**
 * Localized Date & Time formatting utility
 * Formats dates according to Uzbek (kun-oy-yil), Russian (день месяц год), and English (Month Day, Year).
 */

export const MONTHS_FULL = {
  uz: [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
  ],
  ru: [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ],
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
};

export const MONTHS_SHORT = {
  uz: ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"],
  ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export const WEEKDAYS_FULL = {
  uz: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
  ru: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

export const WEEKDAYS_SHORT = {
  uz: ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const pad2 = (n) => String(n).padStart(2, "0");

/**
 * Parses YYYY-MM-DD or DD.MM.YYYY string into Date parts.
 */
export const parseDateParts = (str) => {
  if (!str) return null;
  const s = String(str).trim();

  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
    const [y, m, d] = s.split("-").map(Number);
    if (!y || !m || !d) return null;
    const date = new Date(y, m - 1, d);
    return { year: y, month: m, day: d, date };
  }

  // DD.MM.YYYY
  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(s)) {
    const [d, m, y] = s.split(".").map(Number);
    if (!y || !m || !d) return null;
    const date = new Date(y, m - 1, d);
    return { year: y, month: m, day: d, date };
  }

  return null;
};

/**
 * Converts date to DD.MM.YYYY
 */
export const formatDmy = (dateStr) => {
  const parts = parseDateParts(dateStr);
  if (!parts) return String(dateStr || "");
  return `${pad2(parts.day)}.${pad2(parts.month)}.${parts.year}`;
};

/**
 * Formats date into localized "kun oy yil" style depending on language:
 * - uz: 28-oktabr, 2026-yil
 * - ru: 28 октября 2026 г.
 * - en: October 28, 2026
 */
export const formatKunOyYil = (dateStr, lang = "uz", options = {}) => {
  const parts = parseDateParts(dateStr);
  if (!parts) return String(dateStr || "");

  const { includeWeekday = false, includeYear = true } = options;
  const { year, month, day, date } = parts;
  const mIdx = month - 1;
  const wIdx = date.getDay();

  const safeLang = ["uz", "ru", "en"].includes(lang) ? lang : "uz";
  const mFull = MONTHS_FULL[safeLang]?.[mIdx] || MONTHS_FULL.uz[mIdx];
  const wFull = WEEKDAYS_FULL[safeLang]?.[wIdx] || WEEKDAYS_FULL.uz[wIdx];

  if (safeLang === "uz") {
    const monthLower = mFull.toLowerCase();
    const base = includeYear ? `${day}-${monthLower}, ${year}-yil` : `${day}-${monthLower}`;
    return includeWeekday ? `${base} (${wFull})` : base;
  }

  if (safeLang === "ru") {
    const base = includeYear ? `${day} ${mFull} ${year} г.` : `${day} ${mFull}`;
    return includeWeekday ? `${base} (${wFull})` : base;
  }

  // English
  const base = includeYear ? `${mFull} ${day}, ${year}` : `${mFull} ${day}`;
  return includeWeekday ? `${wFull}, ${base}` : base;
};

/**
 * Short badge format (e.g. for chips and buttons):
 * - uz: 28-okt
 * - ru: 28 окт
 * - en: Oct 28
 */
export const formatKunOyShort = (dateStr, lang = "uz") => {
  const parts = parseDateParts(dateStr);
  if (!parts) return String(dateStr || "");
  const { month, day } = parts;
  const mIdx = month - 1;
  const safeLang = ["uz", "ru", "en"].includes(lang) ? lang : "uz";
  const mShort = MONTHS_SHORT[safeLang]?.[mIdx] || MONTHS_SHORT.uz[mIdx];

  if (safeLang === "en") return `${mShort} ${day}`;
  if (safeLang === "ru") return `${day} ${mShort}`;
  return `${day}-${mShort}`;
};

/**
 * Localized Date of Birth formatting with human-readable suffix:
 * e.g. "15.08.1995 (15-avgust, 1995-yil)"
 */
export const formatLocalizedDob = (dobStr, lang = "uz") => {
  if (!dobStr) return "";
  const parts = parseDateParts(dobStr);
  if (!parts) return String(dobStr);
  const formattedDmy = `${pad2(parts.day)}.${pad2(parts.month)}.${parts.year}`;
  const human = formatKunOyYil(dobStr, lang, { includeYear: true, includeWeekday: false });
  return `${formattedDmy} (${human})`;
};
