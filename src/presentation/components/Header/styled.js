import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	padding: 0 15px;
	margin: 0;
	width: 100%;
	height: 90px;
	background: rgb(112, 65, 252);
	background: linear-gradient(
		60deg,
		rgba(112, 65, 252, 1) 17%,
		rgba(255, 62, 166, 1) 85%
	);
	-webkit-box-shadow: 1px 9px 10px -8px #828282;
	box-shadow: 1px 9px 10px -8px #828282;
	border-bottom: 0.6px solid #828282;
	position: fixed;
	top: 0;
	left: 0;
`;

export const HeaderBrand = styled.div`
	display: flex;
	max-width: 100px;
	justify-content: center;
	align-items: center;
`;

export const HeaderInputWrapper = styled.div`
	display: flex;
	max-width: 220px;
	justify-content: center;
	align-items: center;
`;
