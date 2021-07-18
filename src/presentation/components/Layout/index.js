import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import { LayoutWrapper } from './styles';

const Layout = ({ routes, children }) => (
	<>
		<Menu routes={routes} />
		<LayoutWrapper>{children}</LayoutWrapper>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	routes: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default Layout;
