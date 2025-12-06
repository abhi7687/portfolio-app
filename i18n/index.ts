import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";

const deviceLanguage =
  Localization.getLocales()[0]?.languageCode || "en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: deviceLanguage,  // auto detect for mobile
    fallbackLng: "en",
    resources: {
      en: { translation: en },
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;