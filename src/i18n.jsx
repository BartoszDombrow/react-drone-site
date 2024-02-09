import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import polish from "./i18n/languages/pl.json";
import english from "./i18n/languages/en.json";
import deutsch from "./i18n/languages/de.json";

const resources = {
    en: english,
    pl: polish,
    de: deutsch,
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pl",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
