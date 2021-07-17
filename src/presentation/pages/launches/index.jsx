import React from 'react';
import { useTranslation } from 'react-i18next';

const Launches = () => {
	const { t } = useTranslation();
	return (
		<div>
			<span>{t('launches.title')}</span>
		</div>
	);
};

export default Launches;
