import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ru from "./ru.json";
import uz from "./uz.json";
import en from "./en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translations: ru },
      uz: { translations: uz },
      en: { translations: en },
    },
    lng: localStorage.getItem("i18nextLng") || "uz",
    fallbackLng: "uz",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
