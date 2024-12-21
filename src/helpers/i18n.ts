/**
 * @file /e:/Development/absensi_app/src/helpers/i18n.ts
 * @description This file initializes the i18next library for internationalization in the application,
 *              setting up the resources for English and Indonesian translations.
 *
 * @author dadan hidayat <dadanhidyt@gmail.com>
 */

import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import translationID from "@/langs/id/translation.json";
import translationEN from "@/langs/en/translation.json";
import translationJP from "@/langs/jp/translation.json";
const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
  jp: { translation: translationJP },
};

i18.use(initReactI18next).init({
  resources,
  lng: "id",
  interpolation: { escapeValue: false },
});

export default i18;
