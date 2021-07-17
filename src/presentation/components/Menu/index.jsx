import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Header from '../Header';

import {
	MenuContainer,
	MenuNavigation,
	MenuList,
	MenuItem,
	MenuFooter,
} from './styled';

const Menu = ({ routes }) => {
	const { t } = useTranslation();
	return (
		<>
			<Header />
			<MenuContainer>
				<MenuNavigation>
					<MenuList>
						{routes.map(({ path, prefixUrlMatch }, index) => (
							<MenuItem key={`${prefixUrlMatch}-${index}`} className="mn-item">
								<Link to={`${path}`}>{t(`${prefixUrlMatch}.title`)}</Link>
							</MenuItem>
						))}
					</MenuList>
				</MenuNavigation>
				<MenuFooter />
			</MenuContainer>
		</>
	);
};

Menu.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
