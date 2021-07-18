import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
	height: auto;
	position: relative;
`;

export const Input = styled.input`
	border: 1px solid #e3e3e3;
	border-radius: 5px;
	height: ${({ height }) => height || '40px'};
	width: ${({ width }) => width || '100%'};
	position: relative;
	padding: 0 30px;
	font-size: 22px;
	margin: 0;

	&:focus {
		border: 1px solid #f50080;
		transition: border 0.2s;
	}
`;

export const Label = styled.label`
	width: fit-content;
	background: transparent;
	box-shadow: 0px -12px 0px -4px rgb(255, 255, 255) inset;
	-webkit-box-shadow: 0px -12px 0px -4px rgb(255, 255, 255) inset;
	-moz-box-shadow: 0px -12px 0px -4px rgb(255, 255, 255) inset;
	padding: ${({ isFocused }) => (isFocused ? '0 5px' : '0')};
	position: absolute;
	top: ${({ isFocused }) => (isFocused ? '15px' : '35px')};
	transition: all 0.2s;
	z-index: 1;
	left: 30px;
	margin-top: -25px;
	font-size: ${({ isFocused }) => (isFocused ? '16px' : '20px')};
	font-weight: 300;
	color: ${({ error }) => (error ? 'red' : '#000')};
`;

export const ValidationIcon = styled.span`
	position: absolute;
	right: 30px;
	top: calc((65px / 2) - (18px / 2));

	svg {
		width: 18px;
		height: 18px;
	}
`;
