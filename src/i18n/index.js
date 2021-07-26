import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import PTBR from './locales/pt-BR/translation.json';
import ENUS from './locales/en-US/translation.json';

const resources = {
	'pt-BR': PTBR,
	'en-US': ENUS,
};

i18n
	.use(initReactI18next)
	.use(Backend)
	.init({
		debug: true,
		resources,
		react: {
			useSuspense: false,
		},
		initImmediate: false,
		lng: navigator.language,
		interpolation: {
			escapeValue: false,
		},
	});
export default i18n;
