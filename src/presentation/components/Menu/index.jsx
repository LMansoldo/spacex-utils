import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';

import {
	MenuContainer,
	MenuNavigation,
	MenuList,
	MenuItem,
	MenuFooter,
} from './styled';

const Menu = ({ routes }) => (
	<>
		<Header />
		<MenuContainer>
			<MenuNavigation>
				<MenuList>
					{routes.map(({ path, prefixUrlMatch }, index) => (
						<MenuItem key={`${prefixUrlMatch}-${index}`} className="mn-item">
							<Link to={`${path}`}>{prefixUrlMatch}</Link>
						</MenuItem>
					))}
				</MenuList>
			</MenuNavigation>
			<MenuFooter />
		</MenuContainer>
	</>
);

Menu.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
