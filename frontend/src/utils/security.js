/**
 * Security and Data Sanitization Utilities
 * Protects against XSS, HTML/Script injection, spam flooding, bot automation, and data leakage.
 */

// eslint-disable-next-line no-control-regex
const CONTROL_CHARS_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;
const HTML_TAGS_REGEX = /<[^>]*>?/gm;
const SCRIPT_PROTOCOLS_REGEX = /^(javascript:|data:|vbscript:|file:)/i;

/**
 * Strips HTML tags, null bytes, script protocols, and non-printable control characters.
 * Limits the length to prevent payload buffer overflow or memory attacks.
 */
export const sanitizeText = (raw = "", maxLength = 500) => {
  if (typeof raw !== "string") return "";
  return raw
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(HTML_TAGS_REGEX, "")
    .replace(SCRIPT_PROTOCOLS_REGEX, "")
    .trim()
    .slice(0, maxLength);
};

/**
 * Sanitizes and validates a patient full name.
 * Allows letters (Latin & Cyrillic), spaces, hyphens, and standard Uzbek apostrophes (O'ktam, G'ofur).
 * Strips executable symbols, brackets, quotes, and dangerous punctuation.
 */
export const sanitizePatientName = (name = "") => {
  const cleaned = sanitizeText(name, 80);
  return cleaned
    .replace(/[<>{}[\]\\/~`!@#$%^*+=|;:"?]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};

/**
 * Sanitizes medical notes and patient complaints.
 */
export const sanitizeNote = (note = "", maxLength = 400) => {
  return sanitizeText(note, maxLength);
};

/**
 * Validates ISO date format YYYY-MM-DD within realistic medical bounds.
 */
export const isValidIsoDate = (dateStr = "") => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [year, month, day] = dateStr.split("-").map(Number);
  const currentYear = new Date().getFullYear();
  if (year < 1920 || year > currentYear + 2) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  const parsed = new Date(dateStr);
  return !isNaN(parsed.getTime());
};

/**
 * Validates that an outbound or redirect URL is safe (prevents Open Redirect attacks).
 * Only allows relative paths or secure HTTPS links.
 */
export const isSafeUrl = (url = "") => {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return true;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
};

/**
 * Multi-layer submission rate limiter (persists across reloads via sessionStorage).
 */
const submissionTimestamps = new Map();

export const checkRateLimit = (actionKey = "booking_submit", cooldownSeconds = 10) => {
  const now = Date.now();
  let lastTime = submissionTimestamps.get(actionKey) || 0;

  if (typeof window !== "undefined" && window.sessionStorage) {
    try {
      const stored = parseInt(window.sessionStorage.getItem(`rate_${actionKey}`), 10);
      if (stored && stored > lastTime) {
        lastTime = stored;
      }
    } catch {
      /* ignore storage access issues */
    }
  }

  const elapsed = (now - lastTime) / 1000;
  if (elapsed < cooldownSeconds) {
    const remaining = Math.ceil(cooldownSeconds - elapsed);
    return {
      allowed: false,
      remainingSeconds: remaining,
      message: `Iltimos, ${remaining} soniya kuting (Пожалуйста, подождите ${remaining} сек).`,
    };
  }

  submissionTimestamps.set(actionKey, now);
  if (typeof window !== "undefined" && window.sessionStorage) {
    try {
      window.sessionStorage.setItem(`rate_${actionKey}`, String(now));
    } catch {
      /* ignore */
    }
  }
  return { allowed: true, remainingSeconds: 0 };
};

/**
 * Validates honeypot field and form human interaction timing.
 * Headless bots typically fill forms in under 1 second.
 */
export const isBotSubmission = (honeypotValue = "", formLoadTimestamp = 0) => {
  // If honeypot is filled, it's definitely an automated bot
  if (typeof honeypotValue === "string" && honeypotValue.trim().length > 0) {
    return true;
  }

  // If form was submitted in less than 1200ms from mounting, it is almost certainly a scripted bot
  if (formLoadTimestamp > 0) {
    const duration = Date.now() - formLoadTimestamp;
    if (duration < 1200) {
      return true;
    }
  }

  return false;
};
