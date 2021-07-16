import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import ENUS from "./locales/en/en-us.json";

const resources = {
	"pt-br": PTBR,
	"en-us": ENUS,
};

i18n.use(initReactI18next);
i18n.init({
	resources,
	lng: navigator.language,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
