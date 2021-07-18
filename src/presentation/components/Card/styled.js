import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
  from {
    height: 0px;
		opacity: 0;
  }

  to {
    height: auto;
		opacity: 1;
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

export const TextName = styled.div``;

export const TextPlace = styled.div``;

export const TextDate = styled.div``;

export const TextRocket = styled.div``;

export const TextDescription = styled.div``;

export const ShipList = styled.div``;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;

export const TransitionKeyframe = styled.div`
	animation: ${showUp} 2s linear;
`;

export const TextContainer = styled.div`
	display: flex;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;
