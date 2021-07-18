import React, { useContext } from 'react';
import SpaceContext from '../../../context';

const Rockets = () => {
	const { t } = useContext(SpaceContext);

	return (
		<div>
			<span>{t('rockets.title')}</span>
		</div>
	);
};

export default Rockets;
