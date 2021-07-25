import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from '../i18n/locales/en-US/translation.json';

i18n.use(initReactI18next).init({
	lng: 'en-US',
	fallbackLng: 'en-US',

	// have a common namespace used around the full app

	debug: false,
	react: {
		useSuspense: false,
	},
	initImmediate: false,
	interpolation: {
		escapeValue: false, // not needed for react!!
	},

	resources: { 'en-US': ENUS },
});

export default i18n;
