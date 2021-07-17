import React from "react";
import { useTranslation } from "react-i18next";

const Rockets = () => {
	const { t } = useTranslation();

	return (
		<div>
			<span>{t('rockets.title')}</span>
		</div>
	);
};

export default Rockets;
