import React from 'react';

import { Container } from '../../../styles/shared';
import { HeaderContainer, HeaderBrand } from './styled';

const Header = () => (
	<HeaderContainer>
		<Container className="spcx-header-container">
			<HeaderBrand>Logo</HeaderBrand>
		</Container>
	</HeaderContainer>
);
export default Header;
