import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Head from '../Head';
import { LayoutWrapper } from './styles';

const Layout = ({ routes, children }) => (
	<>
		<Head title="SpaceX - Utils" description="Graphql Front of SpaceX" />
		<Menu routes={routes} />
		<LayoutWrapper>{children}</LayoutWrapper>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	routes: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default Layout;
