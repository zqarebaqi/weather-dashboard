import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // بارگذاری ترجمه‌ها از public/locales
  .use(LanguageDetector) // تشخیص زبان مرورگر
  .use(initReactI18next) // وصل کردن به React
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/i18n/locales/{{lng}}/translation.json",
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

export default i18n;
