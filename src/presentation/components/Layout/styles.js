import styled from 'styled-components';
import { Inter } from '../../../styles/variables';
import mediaQuery from '../../../styles/mediaQuery';

export const LayoutWrapper = styled.main`
	padding-top: 90px;
	padding-left: 220px;
`;

export const Dashboard = styled.div`
	width: 100%;
	margin: 0 auto;
	display: block;
	position: relative;

	${mediaQuery.mm`
    padding-left: 80px;
    padding-right: 70px;
	`}
`;

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: auto;
	padding: 32px;
`;

export const ResponsiveAlert = styled.div`
	position: initial;
	z-index: 5;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: ${Inter};
	width: 100%;
	height: 30px;
	background: #030340;
	color: #fff;
	padding: 20px 0px 20px 68px;
	font-size: 14px;

	${mediaQuery.xs`
		display: none;
	`}
`;

export const Strong = styled.span`
	font-weight: bold;
`;

export const Button = styled.button`
	padding: 4px 6px;
	border-radius: 4px;
	background: #ac1616;
	color: #fff;
	cursor: pointer;
`;
