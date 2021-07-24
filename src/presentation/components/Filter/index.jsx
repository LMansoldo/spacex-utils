import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '../Button';
import SpacesContext from '../../../context';

import { FilterAndSearch } from './styled';

const Filter = ({ limit, setLimit, setSearch }) => {
	const { t } = useContext(SpacesContext);

	const handleQueryLimit = () => {
		setLimit(limit + 1);

		if (limit > 1) {
			setLimit(0);
		}

		switch (limit) {
			case 1:
				return setLimit('25');
			case 2:
				return setLimit('50');
			default:
				return setLimit('10');
		}
	};

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
	limit: PropTypes.func.isRequired,
	setLimit: PropTypes.func.isRequired,
	setSearch: PropTypes.func.isRequired,
};

export default Filter;
