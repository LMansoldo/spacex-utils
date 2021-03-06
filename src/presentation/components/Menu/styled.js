import styled from 'styled-components';

export const MenuContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 220px;
	width: 100%;
	height: 91%;
	border-right: 2px solid #e3e3e3;
	position: fixed;
	background: #fff;
	box-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);
	-webkit-box-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);
	-moz-box-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);
	left: 0;
	top: 92px;
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
