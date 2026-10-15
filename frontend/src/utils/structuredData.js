import { SITE_ORIGIN } from "../constants/seo";
import { localizePath } from "./language";
import { DOCTOR_INFO } from "../constants/doctor";
import { PRIMARY_CLINIC } from "../constants/clinics";
import { FAQ_ITEMS } from "../constants/faq";

export const withTrailingSlash = (path) => (path.endsWith("/") ? path : `${path}/`);

export const urlFor = (path = "/", lang = "uz") =>
  `${SITE_ORIGIN}${withTrailingSlash(localizePath(path, lang))}`;

export const buildBreadcrumbSchema = (crumbs, lang = "uz") => ({
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": crumb.name,
    "item": urlFor(crumb.path, lang),
  })),
});

export const buildFaqSchema = (faqItems, lang = "uz") => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${urlFor("/", lang)}#faq`,
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.q[lang] || item.q.uz,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a[lang] || item.a.uz,
    },
  })),
});

export const buildMedicalProcedureSchema = (service, lang = "uz", breadcrumbs = []) => {
  const serviceUrl = urlFor(`/services/${service.id}`, lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const procedure = {
    "@type": "MedicalProcedure",
    "@id": `${serviceUrl}#procedure`,
    "name": service.title[lang] || service.title.uz,
    "description": service.shortDesc[lang] || service.shortDesc.uz,
    "procedureType": service.id.includes("implant") || service.id.includes("olish")
      ? "https://schema.org/SurgicalProcedure"
      : "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "https://en.wikipedia.org/wiki/Human_mouth",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry",
    },
    "provider": {
      "@id": `${SITE_ORIGIN}/#dentist`,
    },
    "performer": {
      "@id": `${SITE_ORIGIN}/#doctor`,
    },
    "offers": {
      "@type": "Offer",
      "url": serviceUrl,
      "priceCurrency": "UZS",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": `${SITE_ORIGIN}/#dentist`,
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, procedure],
    };
  }

  return {
    "@context": "https://schema.org",
    ...procedure,
  };
};

export const buildServicesCatalogSchema = (services, lang = "uz", breadcrumbs = []) => {
  const catalogUrl = urlFor("/services", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const catalog = {
    "@type": "MedicalWebPage",
    "@id": `${catalogUrl}#catalog`,
    "url": catalogUrl,
    "name": lang === "ru" ? "Услуги стоматологии — Ортопедия, Терапия, Имплантология" : lang === "en" ? "Dental Services — Orthopedics, Therapy, Implantology" : "Stomatologik xizmatlar — Ortopediya, Terapiya, Implantologiya",
    "about": {
      "@type": "Dentist",
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": DOCTOR_INFO.name,
      "telephone": DOCTOR_INFO.phoneRaw,
    },
    "mainEntity": {
      "@type": "OfferCatalog",
      "name": "DM Stomatologiya Xizmatlari",
      "itemListElement": services.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": s.title[lang] || s.title.uz,
          "description": s.shortDesc[lang] || s.shortDesc.uz,
          "url": urlFor(`/services/${s.id}`, lang),
        },
        "position": idx + 1,
      })),
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, catalog],
    };
  }

  return {
    "@context": "https://schema.org",
    ...catalog,
  };
};

export const buildDoctorProfileSchema = (lang = "uz", breadcrumbs = []) => {
  const aboutUrl = urlFor("/about", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const profile = {
    "@type": "ProfilePage",
    "@id": `${aboutUrl}#profile`,
    "url": aboutUrl,
    "mainEntity": {
      "@type": "Physician",
      "@id": `${SITE_ORIGIN}/#doctor`,
      "name": DOCTOR_INFO.name,
      "jobTitle": DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz,
      "description": DOCTOR_INFO.specialtiesText,
      "telephone": DOCTOR_INFO.phoneRaw,
      "url": aboutUrl,
      "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
      },
      "medicalSpecialty": ["Dentistry", "Prosthodontics", "Implantology", "RestorativeDentistry"],
      "knowsAbout": [
        "Orthopedics",
        "Therapy",
        "Dental Implants",
        "Zirconia Crowns",
        "Ceramic Veneers",
        "Painless Dentistry",
        "Endodontics",
      ],
      "sameAs": [
        DOCTOR_INFO.telegramUrl,
        DOCTOR_INFO.instagramUrl,
      ],
      "worksFor": {
        "@type": "Dentist",
        "@id": `${SITE_ORIGIN}/#dentist`,
        "name": PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz,
        "hasMap": PRIMARY_CLINIC.maps.yandex,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
          "addressLocality": PRIMARY_CLINIC.city[lang] || PRIMARY_CLINIC.city.uz,
          "addressCountry": "UZ",
        },
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, profile],
    };
  }

  return {
    "@context": "https://schema.org",
    ...profile,
  };
};

export const buildContactPageSchema = (lang = "uz", breadcrumbs = []) => {
  const contactUrl = urlFor("/contact", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const contactPage = {
    "@type": "ContactPage",
    "@id": `${contactUrl}#contact`,
    "url": contactUrl,
    "mainEntity": {
      "@type": "Dentist",
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": `${DOCTOR_INFO.name} — ${PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz}`,
      "telephone": DOCTOR_INFO.phoneRaw,
      "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
      "hasMap": PRIMARY_CLINIC.maps.yandex,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
        "addressLocality": PRIMARY_CLINIC.city[lang] || PRIMARY_CLINIC.city.uz,
        "addressCountry": "UZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": PRIMARY_CLINIC.coordinates.lat,
        "longitude": PRIMARY_CLINIC.coordinates.lng,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": DOCTOR_INFO.phoneRaw,
        "contactType": "reservations",
        "availableLanguage": ["uz", "ru", "en"],
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, contactPage],
    };
  }

  return {
    "@context": "https://schema.org",
    ...contactPage,
  };
};

export const buildBookingPageSchema = (lang = "uz", breadcrumbs = []) => {
  const pageUrl = urlFor("/booking", lang);
  const breadcrumbObj = breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs, lang) : null;

  const bookingPage = {
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#booking`,
    "url": pageUrl,
    "name": lang === "ru" ? "Онлайн запись к Д-ру МухаммадАли Давронову" : lang === "en" ? "Online Appointment Booking" : "Onlayn qabulga yozilish",
    "about": {
      "@type": "Dentist",
      "@id": `${SITE_ORIGIN}/#dentist`,
      "name": DOCTOR_INFO.name,
      "telephone": DOCTOR_INFO.phoneRaw,
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": pageUrl,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      "result": {
        "@type": "Reservation",
        "name": "Stomatologik qabulga yozilish",
      },
    },
  };

  if (breadcrumbObj) {
    return {
      "@context": "https://schema.org",
      "@graph": [breadcrumbObj, bookingPage],
    };
  }

  return {
    "@context": "https://schema.org",
    ...bookingPage,
  };
};

export const buildHomePageSchema = (lang = "uz") => {
  const faqList = FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.q[lang] || item.q.uz,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a[lang] || item.a.uz,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${SITE_ORIGIN}/#dentist`,
        "name": `${DOCTOR_INFO.name} — ${PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz}`,
        "alternateName": `${DOCTOR_INFO.name} — ${DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz}`,
        "url": `${SITE_ORIGIN}/`,
        "telephone": DOCTOR_INFO.phoneRaw,
        "priceRange": "$$",
        "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
        "logo": `${SITE_ORIGIN}/logo_icon.png`,
        "hasMap": PRIMARY_CLINIC.maps.yandex,
        "currenciesAccepted": "UZS",
        "paymentAccepted": "Cash, Credit Card, Humo, Uzcard",
        "medicalSpecialty": [
          "Dentistry",
          "Prosthodontics",
          "OralSurgery",
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "96",
          "reviewCount": "96",
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Andijon viloyati",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
          "addressLocality": PRIMARY_CLINIC.city[lang] || PRIMARY_CLINIC.city.uz,
          "addressCountry": "UZ",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": PRIMARY_CLINIC.coordinates.lat,
          "longitude": PRIMARY_CLINIC.coordinates.lng,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": DOCTOR_INFO.phoneRaw,
          "contactType": "reservations",
          "availableLanguage": ["uz", "ru", "en"],
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:30",
            "closes": "18:30",
          },
        ],
        "sameAs": [
          DOCTOR_INFO.telegramUrl,
          DOCTOR_INFO.instagramUrl,
        ],
      },
      {
        "@type": "Physician",
        "@id": `${SITE_ORIGIN}/#doctor`,
        "name": DOCTOR_INFO.name,
        "jobTitle": DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz,
        "medicalSpecialty": "Dentistry",
        "telephone": DOCTOR_INFO.phoneRaw,
        "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
        },
        "knowsAbout": [
          "Orthopedics",
          "Therapy",
          "Dental Implants",
          "Zirconia Crowns",
          "Ceramic Veneers",
          "Painless Dentistry",
          "Endodontics",
        ],
        "worksFor": {
          "@id": `${SITE_ORIGIN}/#dentist`,
        },
        "sameAs": [
          DOCTOR_INFO.telegramUrl,
          DOCTOR_INFO.instagramUrl,
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${urlFor("/", lang)}#faq`,
        "mainEntity": faqList,
      },
    ],
  };
};
