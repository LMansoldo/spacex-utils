import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SpaceContext from '../context';

const ContextTest = ({ children }) => {
	const { t } = useTranslation();

	return (
		<SpaceContext.Provider value={{ t }}>{children}</SpaceContext.Provider>
	);
};

ContextTest.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextTest;
