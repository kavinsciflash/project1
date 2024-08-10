import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: "en", // use en if detected lng is not available
    ns: ['common'],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
        loadPath: `${window.pathUrl}/locales/{{lng}}/{{ns}}.json?v=${process.env.REACT_APP_BUILD_NUMBER}`
    }
  });

export default i18n;
