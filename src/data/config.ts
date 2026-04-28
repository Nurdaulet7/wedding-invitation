// ─── Event configuration ──────────────────────────────────────────────────────
// All event data in one place. Edit this file to customise the invitation.

export const config = {
  couple: {
    person1: {
      name: "Айдана",
      nameEn: "Aidana",
    },
    person2: {
      name: "Арман",
      nameEn: "Arman",
    },
  },

  event: {
    title: "Біздің үйлену тойымызға шақырамыз",
    titleEn: "We invite you to our wedding",

    date: "2026-06-05" as const, // ISO date — used for countdown
    dateDisplay: "5 маусым 2026", // Displayed on the site
    time: "17:00",
    timeDisplay: "17:00",

    venue: {
      name: "Hayat Palace ресторан",
      address: "Қызылорда, Демесинова көшесі 57",
      addressEn: "Kyzylorda, Demesinova street 57",
      mapLink: "https://2gis.kz/kyzylorda/search/%D0%94%D0%B5%D0%BC%D0%B5%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%2057/firm/70000001062710966/65.500147%2C44.825293",
    },
  },

  rsvp: {
    deadline: "2026-05-25" as const, // ISO date
    phone: "", // WhatsApp / phone number
    formLink: "", // Google Form or custom form link
    telegram: {
      botToken: (import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string) ?? "",
      chatId: (import.meta.env.VITE_TELEGRAM_CHAT_ID as string) ?? "",
    },
  },

  dress_code: {
    colors: ["#c8a97e", "#7a9e87", "#ffffff"],
    description: "Нежные пастельные тона",
    descriptionEn: "Soft pastel tones",
  },

  hosts: {
    father: "Мейрамбек",
    mother: "Ляззат",
  },

  /** Фото: `public/gallery/photo1.PNG` … `photo7.PNG` — можно менять файлы без сборки */
  gallery: [
    "/gallery/photo1.PNG",
    "/gallery/photo2.PNG",
    "/gallery/photo3.PNG",
    "/gallery/photo4.PNG",
    "/gallery/photo5.PNG",
    "/gallery/photo6.PNG",
    "/gallery/photo7.PNG",
  ],

  invite: {
    greeting: "Құрметті қонақтар!",
    brideName: "Айдананың",
    body: "Сіздерді аяулы қызымыз\nАминаның\nАта-ананың аялы алақанынан Ақ босағасына шығарып салуға арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!",
  },

  meta: {
    title: "Айдана — ұзату тойы",
    description: "Біздің үйлену тойымызға шақырамыз — 5 маусым 2026",
    ogImage: "/og-image.jpg",
  },
} as const;

export type Config = typeof config;
