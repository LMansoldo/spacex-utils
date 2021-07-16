import styled from "@emotion/styled/macro";
import { theme } from "~/styles/variables";
import { BorderBox } from "~/styles/shared";

export const Card = styled(BorderBox)`
	height: ${({ height }) => height || "375px"};
`;

export const Header = styled.div`
	display: flex;
	height: 85px;
	justify-content: flex-start;
	align-items: center;
	padding: 0 30px;
	border-bottom: 1px solid ${theme.backgroundAccent};
`;

export const Title = styled.div`
	font-size: ${({ fontSize }) => fontSize || "16"}px;
	font-weight: 300;
	color: ${theme.instantCardText};
	text-transform: uppercase;

	@media (min-width: 1200px) {
		font-size: ${({ fontSize }) => fontSize || "20"}px;
	}
`;

export const Body = styled.div`
	padding: 15px 30px;
	height: 290px;
	width: 100%;
`;
