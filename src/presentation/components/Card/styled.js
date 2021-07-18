import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
  from {
		height: 0px;
		opacity: 0;

		> div {
			margin: -5px 0;
		}
  }

  to {
		height: 40px;
		opacity: 1;

		> div {
			margin: 15px 0;
		}
  }
`;

const hideIn = keyframes`
  from {
		height: 40px;
		opacity: 1;

		> div {
			margin: 15px 0;
		}
  }

  to {
		height: 0px;
		opacity: 0;

		> div {
			margin: -5px 0;
		}
  }
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid #e3e3e3;
	border-radius: 7px;
	padding: 20px;
	-webkit-box-shadow: 3px 0px 10px -8px #828282;
	box-shadow: 3px 0px 10px -8px #828282;
`;

export const Text = styled.div`
	margin: 15px 0;
`;

export const ShipList = styled.div``;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;

export const TransitionKeyframe = styled.div`
	animation: ${(props) => (props.open ? showUp : hideIn)} 0.1s linear 1;
`;

export const TextContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
