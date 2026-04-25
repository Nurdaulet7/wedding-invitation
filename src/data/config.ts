// ─── Event configuration ──────────────────────────────────────────────────────
// All event data in one place. Edit this file to customise the invitation.

export const config = {
  couple: {
    person1: {
      name: "Аяулым",
      nameEn: "Ayaulym",
    },
    person2: {
      name: "Арман",
      nameEn: "Arman",
    },
  },

  event: {
    title: "Біздің үйлену тойымызға шақырамыз",
    titleEn: "We invite you to our wedding",

    date: "2026-08-15" as const, // ISO date — used for countdown
    dateDisplay: "15 тамыз 2026", // Displayed on the site
    time: "17:00",
    timeDisplay: "17:00",

    venue: {
      name: "Grand Hall",
      address: "Алматы қ., Абай д., 1",
      addressEn: "Almaty, Abay ave., 1",
      mapLink: "", // Google Maps / 2GIS link
    },
  },

  rsvp: {
    deadline: "2026-08-01" as const, // ISO date
    phone: "", // WhatsApp / phone number
    formLink: "", // Google Form or custom form link
  },

  dress_code: {
    colors: ["#c8a97e", "#7a9e87", "#ffffff"],
    description: "Нежные пастельные тона",
    descriptionEn: "Soft pastel tones",
  },

  invite: {
    greeting: "Құрметті қонақтар!",
    brideName: "Аяулымның",
    body: "Сіздерді аяулы қызымыз\nАминаның\nАта-ананың аялы алақанынан Ақ босағасына шығарып салуға арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!",
  },

  meta: {
    title: "Айдана & Арман — Үйлену тойы",
    description: "Біздің үйлену тойымызға шақырамыз — 15 тамыз 2026",
    ogImage: "/og-image.jpg",
  },
} as const;

export type Config = typeof config;
