import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpaceContext from '../../../context';
import Header from '../Header';

import {
	MenuContainer,
	MenuNavigation,
	MenuList,
	MenuItem,
	MenuFooter,
} from './styled';

const Menu = () => {
	const { t, routes } = useContext(SpaceContext);
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

export default Menu;
