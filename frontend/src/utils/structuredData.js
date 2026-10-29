import { SITE_ORIGIN } from "../constants/seo.js";
import { localizePath } from "./language.js";
import { DOCTOR_INFO } from "../constants/doctor.js";
import { PRIMARY_CLINIC } from "../constants/clinics.js";
import { FAQ_ITEMS } from "../constants/faq.js";

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
    "keywords": service.keywords?.[lang] || service.keywords?.uz,
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
    "name": lang === "ru" ? "Услуги стоматологии — Имплантология, Ортопедия, Терапия" : lang === "en" ? "Dental Services — Implantology, Orthopedics, Therapy" : "Stomatologik xizmatlar — Implantologiya, Ortopediya, Terapiya",
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
      "email": DOCTOR_INFO.email,
      "url": aboutUrl,
      "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
        "url": "https://adti.uz"
      },
      "medicalSpecialty": ["Dentistry", "OralAndMaxillofacialSurgery", "Implantology", "Prosthodontics", "RestorativeDentistry"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DIO Implant — Digital Implantology & Complete Clinical Cases",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "DIO Implant"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Dentium Implant System — Basic Course for Implantation",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Dentium Uzbekistan"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Moissanite Dental — One-Stage Implant Masterclass",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Moissanite Dental"
          }
        }
      ],
      "knowsAbout": [
        "Dental Implants",
        "Digital Guided Implantology",
        "Oral and Maxillofacial Surgery",
        "Orthopedics",
        "Zirconia Crowns",
        "Ceramic Veneers",
        "Therapy",
        "Painless Dentistry",
        "Endodontics",
      ],
      "sameAs": [
        DOCTOR_INFO.telegramUrl,
        DOCTOR_INFO.instagramUrl,
        PRIMARY_CLINIC.maps.google,
        PRIMARY_CLINIC.maps.yandex,
      ],
      "worksFor": {
        "@type": "Dentist",
        "@id": `${SITE_ORIGIN}/#dentist`,
        "name": PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz,
        "hasMap": [PRIMARY_CLINIC.maps.google, PRIMARY_CLINIC.maps.yandex],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": PRIMARY_CLINIC.coordinates.lat,
          "longitude": PRIMARY_CLINIC.coordinates.lng,
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
          "addressLocality": PRIMARY_CLINIC.city[lang] || PRIMARY_CLINIC.city.uz,
          "addressRegion": "Andijon viloyati",
          "postalCode": "170100",
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
      "hasMap": [PRIMARY_CLINIC.maps.google, PRIMARY_CLINIC.maps.yandex],
      "sameAs": [
        DOCTOR_INFO.telegramUrl,
        DOCTOR_INFO.instagramUrl,
        PRIMARY_CLINIC.maps.google,
        PRIMARY_CLINIC.maps.yandex,
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": PRIMARY_CLINIC.address[lang] || PRIMARY_CLINIC.address.uz,
        "addressLocality": PRIMARY_CLINIC.city[lang] || PRIMARY_CLINIC.city.uz,
        "addressRegion": "Andijon viloyati",
        "postalCode": "170100",
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
        "email": DOCTOR_INFO.email,
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
        "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
        "@id": `${SITE_ORIGIN}/#dentist`,
        "name": `${DOCTOR_INFO.name} — ${PRIMARY_CLINIC.name[lang] || PRIMARY_CLINIC.name.uz}`,
        "alternateName": [
          "DM Stomatologiya",
          "DM Stomatology",
          "Dr. MuhammadAli Davronov Shaxsiy Qabuli",
          "Стоматология Д-ра МухаммадАли Давронова",
          "Stomatolog MuhammadAli Andijon",
        ],
        "description": DOCTOR_INFO.specialtiesTextLang[lang] || DOCTOR_INFO.specialtiesTextLang.uz,
        "url": `${SITE_ORIGIN}/`,
        "telephone": DOCTOR_INFO.phoneRaw,
        "email": DOCTOR_INFO.email,
        "priceRange": "$$",
        "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
        "logo": `${SITE_ORIGIN}/logo_icon.png`,
        "hasMap": [
          PRIMARY_CLINIC.maps.google,
          `https://www.google.com/maps/place/?q=place_id:${PRIMARY_CLINIC.maps.googlePlaceId}`,
          PRIMARY_CLINIC.maps.yandex,
          PRIMARY_CLINIC.maps.yandexFull,
          "https://yandex.ru/maps/org/stomatologiya/214793392317/",
          PRIMARY_CLINIC.maps.yandexRoute,
        ],
        "identifier": [
          {
            "@type": "PropertyValue",
            "propertyID": "yandex_org_id",
            "name": "Yandex Business Organization ID",
            "value": PRIMARY_CLINIC.maps.yandexOrgId,
          },
          {
            "@type": "PropertyValue",
            "propertyID": "google_kgmid",
            "name": "Google Knowledge Graph Entity ID",
            "value": DOCTOR_INFO.googleKgmid,
          },
          {
            "@type": "PropertyValue",
            "propertyID": "google_place_id",
            "name": "Google Maps Place ID",
            "value": PRIMARY_CLINIC.maps.googlePlaceId,
          },
        ],
        "isAcceptingNewPatients": true,
        "currenciesAccepted": "UZS",
        "paymentAccepted": "Cash, Credit Card, Humo, Uzcard",
        "employee": [
          {
            "@id": `${SITE_ORIGIN}/#doctor`,
          },
        ],
        "medicalSpecialty": [
          "https://schema.org/Dentistry",
          "https://schema.org/OralAndMaxillofacialSurgery",
          "https://schema.org/Prosthodontics",
          "https://schema.org/OralSurgery",
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
          "addressRegion": "Andijon viloyati",
          "postalCode": "170100",
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
          "email": DOCTOR_INFO.email,
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
          PRIMARY_CLINIC.maps.google,
          "https://www.google.com/search?kgmid=/g/11nr3dmbmh",
          `https://www.google.com/maps/place/?q=place_id:${PRIMARY_CLINIC.maps.googlePlaceId}`,
          PRIMARY_CLINIC.maps.yandex,
          PRIMARY_CLINIC.maps.yandexFull,
          PRIMARY_CLINIC.maps.yandexRu,
          PRIMARY_CLINIC.maps.yandexReviews,
        ],
      },
      {
        "@type": ["Physician", "Person"],
        "@id": `${SITE_ORIGIN}/#doctor`,
        "name": DOCTOR_INFO.name,
        "givenName": "MuhammadAli",
        "familyName": "Davronov",
        "gender": "https://schema.org/Male",
        "jobTitle": DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz,
        "description": DOCTOR_INFO.specialtiesTextLang[lang] || DOCTOR_INFO.specialtiesTextLang.uz,
        "medicalSpecialty": [
          "https://schema.org/Dentistry",
          "https://schema.org/OralAndMaxillofacialSurgery",
          "https://schema.org/Prosthodontics",
          "https://schema.org/OralSurgery",
        ],
        "telephone": DOCTOR_INFO.phoneRaw,
        "email": DOCTOR_INFO.email,
        "image": `${SITE_ORIGIN}/dr_muhammadali_og.png`,
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": DOCTOR_INFO.education[lang] || DOCTOR_INFO.education.uz,
          "url": "https://adti.uz"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": DOCTOR_INFO.titles[lang] || DOCTOR_INFO.titles.uz,
            "recognizedBy": {
              "@type": "MedicalOrganization",
              "name": DOCTOR_INFO.clinicName,
              "url": DOCTOR_INFO.siteUrl
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "DIO Implant — Digital Implantology & Complete Clinical Cases",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "DIO Implant"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Dentium Implant System — Basic Course for Implantation",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Dentium Uzbekistan"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Moissanite Dental — One-Stage Implant Masterclass",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Moissanite Dental"
            }
          }
        ],
        "knowsAbout": [
          "Dental Implants",
          "Dental implantologiya",
          "Дентальная имплантация",
          "One-Stage Implantation",
          "Bir bosqichli implantatsiya",
          "Одномоментная имплантация",
          "3D Guided Implant Surgery",
          "Raqamli 3D implantatsiya",
          "Цифровая 3D имплантология",
          "Oral and Maxillofacial Surgery",
          "Yuz-jag' jarrohligi",
          "Челюстно-лицевая хирургия",
          "Sinus Lift",
          "Suyak plastikasi",
          "Синус-лифтинг",
          "Orthopedics",
          "Ortopediya",
          "Ортопедия",
          "Zirconia Crowns",
          "Sirkon koronkalar",
          "Циркониевые коронки",
          "Ceramic Veneers",
          "E-max vinirlar",
          "Керамические виниры E-max",
          "Therapy",
          "Terapiya",
          "Терапия зубов",
          "Painless Dentistry",
          "Og'riqsiz tish davolash",
          "Лечение кариеса без боли",
          "Endodontics",
          "Ildiz kanallarini davolash",
          "Эндодонтия",
          "CAD/CAM Dentistry",
        ],
        "isAcceptingNewPatients": true,
        "availableLanguage": ["uz", "ru", "en"],
        "worksFor": {
          "@id": `${SITE_ORIGIN}/#dentist`,
        },
        "sameAs": [
          DOCTOR_INFO.telegramUrl,
          DOCTOR_INFO.instagramUrl,
          PRIMARY_CLINIC.maps.google,
          "https://www.google.com/search?kgmid=/g/11nr3dmbmh",
          `https://www.google.com/maps/place/?q=place_id:${PRIMARY_CLINIC.maps.googlePlaceId}`,
          PRIMARY_CLINIC.maps.yandex,
          PRIMARY_CLINIC.maps.yandexFull,
          PRIMARY_CLINIC.maps.yandexRu,
          PRIMARY_CLINIC.maps.yandexReviews,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        "url": `${SITE_ORIGIN}/`,
        "name": "Dr. MuhammadAli Davronov — DM Stomatologiya",
        "publisher": {
          "@id": `${SITE_ORIGIN}/#dentist`,
        },
        "inLanguage": ["uz", "ru", "en"],
      },
      {
        "@type": "FAQPage",
        "@id": `${urlFor("/", lang)}#faq`,
        "mainEntity": faqList,
      },
    ],
  };
};
