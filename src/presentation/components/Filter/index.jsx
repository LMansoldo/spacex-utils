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
	searchName,
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

	const handleSearchName = (e) => {
		if (e.code === 'Enter') {
			setSearch(e.target.value);
		}
	};

	useEffect(() => {
		if (!searchName) return setSearch(' ');
	}, [searchName]);

	return (
		<FilterAndSearch>
			<TextField
				style={{ width: 250, background: '#fff' }}
				label={t('search.label')}
				margin="normal"
				onKeyPress={(e) => handleSearchName(e)}
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
	searchName: PropTypes.string.isRequired,
};

export default Filter;
