import React from 'react';
import { useTranslation } from 'react-i18next';

const NewLaunches = () => {
	const { t } = useTranslation();

	return (
		<div>
			<span>{t('new-launches.title')}</span>
		</div>
	);
};

export default NewLaunches;
