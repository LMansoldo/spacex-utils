import React, { useContext } from 'react';
import SpaceContext from '../../../context';

const NewLaunches = () => {
	const { t } = useContext(SpaceContext);

	return (
		<div>
			<span>{t('new-launches.title')}</span>
		</div>
	);
};

export default NewLaunches;
