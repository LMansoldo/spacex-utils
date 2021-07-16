import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { colors, theme } from "~/styles/variables";

export const TitleHome = styled.h2`
	color: ${colors.white};
	font-size: 45px;
	font-weight: 400;
	text-transform: uppercase;

	& b,
	& strong {
		color: ${theme.homeColor};
		font-weight: 600;
	}
`;

// Box Card
export const BorderBox = styled.div`
	background-color: ${theme.backgroundDark};
	border: 1px solid ${colors.borderLight};
	border-radius: 10px;
`;

// Site Grid
export const Section = styled.section`
	background-color: ${({ color }) => color || theme.background};
	width: 100%;

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ padding }) =>
		padding &&
		css`
			padding: ${padding};
		`}
`;

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	max-width: 1200px;

	@media (min-width: 1368px) {
		max-width: 1600px;
	}
`;

export const ContainerDiv = styled.div`
	width: 90%;
	margin: 0 auto;
	max-width: 1200px;

	@media (min-width: 1368px) {
		max-width: 1600px;
	}
`;

// Flex Styles

export const Row = styled.div`
	display: flex;
	margin: ${({ margin }) => margin || "0"};
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

// Site HR
export const Sep = styled.hr`
	border-style: solid;
	border-bottom-color: ${colors.borderDark};
	border-bottom-width: 1px;
	box-shadow: 1px 1px 1px ${colors.borderLight};
	margin: ${({ margin }) => margin || "50px 0"};
`;
