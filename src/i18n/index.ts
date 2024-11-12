import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json" 
    },
    detection: {
      order: ["navigator", "querystring", "cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    react: {
      useSuspense: true
    }
  })

export default i18n
