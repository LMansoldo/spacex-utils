import styled from 'styled-components';

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 320px;
	width: 100%;
	height: 100%;
	border-right: 2px solid #e3e3e3;
	position: fixed;
	background: #fff;
	-webkit-box-shadow: 3px 0px 10px -8px #828282;
	box-shadow: 3px 0px 10px -8px #828282;
	left: 0;
`;

export const MenuNavigation = styled.nav`
	width: 100%;
	height: auto;
`;

export const MenuList = styled.ul`
	padding: 10px 0;
	text-align: left;
	width: 100%;
	list-style: none;
`;

export const MenuItem = styled.li`
	display: flex;
	height: 55px;
	border-bottom: 1px solid #e3e3e3;
	align-items: center;
	padding: 0 10px;

	& a {
		text-decoration: none;
		font-weight: 600;
		color: #000;
		transition: all 0.2s;

		&:hover {
			color: #e3e3e3;
		}

		&:active {
			color: #e3e3e3;
			opacity: 0.6;
		}
	}
`;

export const MenuFooter = styled.footer`
	height: 80px;
	width: 100%;
	background: rgb(112, 65, 252);
	background: linear-gradient(
		60deg,
		rgba(112, 65, 252, 1) 17%,
		rgba(255, 62, 166, 1) 85%
	);
`;
