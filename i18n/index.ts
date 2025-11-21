// per https://github.com/launchtodayhq/expo-translations/commit/f98a6abd788b80f135b40d1c03df316f277c447c
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en-US/translations.json";
import translationUk from "./locales/uk-UA/translations.json";

const resources = {
  "en-US": { translation: translationEn },
  en: { translation: translationEn },

  "uk-UA": { translation: translationUk },
  uk: { translation: translationUk },
};

const LANGUAGE_KEY = "@app_language";

const initI18n = async () => {
    try {
        // Try to get saved language preference
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

        // Determine which language to use
        let selectedLanguage = savedLanguage;

        if(!selectedLanguage){
            // use device locale or fallback to English
            const deviceLocales = Localization.getLocales();
            const deviceLocale = deviceLocales[0]?.languageTag || "en-US";
            const languageCode = deviceLocale.split('-')[0];

            // Try exact locale match, then language code match
            if(deviceLocale in resources){
                selectedLanguage = deviceLocale;
            }
            else if(languageCode in resources){
                selectedLanguage = languageCode;
            }
            else{
                selectedLanguage = 'en-US';
            }

            await i18n.use(initReactI18next).init({
                resources,
                lng:selectedLanguage,
                fallbackLng:{
                    "en-*": ["en-US", "en"],
                    default: ["en-US"],
                },
                interpolation: {
                    escapeValue: false,
                },
                react: {
                    useSuspense: false,
                },
            });

            // Save the selected language
            if (!savedLanguage) {
                await AsyncStorage.setItem(LANGUAGE_KEY, selectedLanguage);
            }
        }
    } 
    catch (error) {
        console.error("Error initializing i18n:", error);
    }
}

initI18n();

export default i18n;