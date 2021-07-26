import React, { useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '../Button';
import SpacesContext from '../../../context';

import { FilterAndSearch } from './styled';

const Filter = ({
	limit,
	setLimit,
	setSearch,
	setLimitCounter,
	limitCounter,
}) => {
	const { t } = useContext(SpacesContext);

	const handleQueryLimit = () => {
		setLimitCounter(limitCounter + 1);

		if (limitCounter > 1) {
			setLimitCounter(0);
		}

		switch (limitCounter) {
			case 0:
				return setLimit('10');
			case 1:
				return setLimit('25');
			case 2:
				return setLimit('50');
			default:
				return setLimit('10');
		}
	};

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(limitCounter);
		// eslint-disable-next-line no-console
		console.log(limit);
	}, []);

	return (
		<FilterAndSearch>
			<TextField
				style={{ width: 250, background: '#fff' }}
				label={t('search.label')}
				margin="normal"
				onChange={(e) => setTimeout(() => setSearch(e.target.value), [2000])}
				size="small"
				variant="outlined"
			/>
			<Button onClick={() => handleQueryLimit()}>{`${t(
				'showing-label'
			)}: ${limit}`}</Button>
		</FilterAndSearch>
	);
};

Filter.propTypes = {
	limit: PropTypes.string.isRequired,
	setLimit: PropTypes.func.isRequired,
	setSearch: PropTypes.func.isRequired,
	setLimitCounter: PropTypes.func.isRequired,
	limitCounter: PropTypes.number.isRequired,
};

export default Filter;
