import React, { useContext } from 'react';
import SpaceContext from '../../../context';

const Launches = () => {
	const { t } = useContext(SpaceContext);
	return (
		<div>
			<span>{t('launches.title')}</span>
		</div>
	);
};

export default Launches;
