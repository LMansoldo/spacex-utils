import React, { useContext } from 'react';
import SpaceContext from '../../../context';

import TextField from '../TextField';
import { Container } from '../../../styles/shared';
import { HeaderContainer, HeaderBrand, HeaderInputWrapper } from './styled';

const Header = () => {
	const { t } = useContext(SpaceContext);
	return (
		<HeaderContainer>
			<Container className="spcx-header-container">
				<HeaderBrand>Logo</HeaderBrand>
				<HeaderInputWrapper>
					<TextField id="spcx-search" label={t('search.label')} name="search" />
				</HeaderInputWrapper>
			</Container>
		</HeaderContainer>
	);
};
export default Header;
