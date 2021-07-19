import styled from 'styled-components';

const handleSize = (size) => {
	switch (size) {
		case 'small':
			return `height: 30px;
    min-width: 80px;`;
		case 'medium':
			return `height: 40px;
    min-width: 100px;`;
		case 'large':
			return `height: 56px;
    min-width: 120px;`;
		case 'extra-large':
			return `height: 60px;
    min-width: 140px;`;
		default:
			return `height: 40px;
    min-width: 100px;`;
	}
};

const handleColor = (color) => {
	switch (color) {
		case 'success':
			return `
			    background: rgb(61 232 74);
    			background: linear-gradient( 
						60deg
						, rgb(61 232 74) 17%, rgb(127 255 62) 85% );
					color: #fff;
					
						&:hover {
							background: rgba(61, 232, 74, 0.8);
						}`;
		case 'warning':
			return `background: rgb(252 120 65);
					background: linear-gradient( 
						60deg
						, rgb(252 120 65) 17%, rgb(255 205 62) 85% );
					color: #fff;

						&:hover {
							background: rgba(252, 120, 65, 0.8);
						}`;
		case 'error':
			return `background: rgb(252 137 65);
    			background: linear-gradient( 
						60deg
					, rgb(252 137 65) 17%, rgb(243 31 31) 85% );
					color: #fff;
					
						&:hover {
							background: rgba(252, 137, 65, 0.8);
						}`;
		case 'info':
			return `background: rgb(0 114 255);
					background: linear-gradient( 
						60deg
					, rgb(0 114 255) 17%,rgb(93 166 255) 85% );
					color: #fff;
					
						&:hover {
							background: rgba(0, 114, 255, 0.6);
						}`;
		default:
			return `background: rgb(239 239 239);
					color: rgb(47 47 47);
										
						&:hover {
							background: rgba(239, 239, 239, 0.3);
						}`;
	}
};

export const ButtonWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0px solid transparent;
	border-radius: 5px;
	${(props) => handleColor(props.color)}
	-webkit-box-shadow: -1px 1px 7px 0px #c7c7c7;
	box-shadow: -1px 1px 7px 0px #c7c7c7;
	cursor: pointer;
	text-transform: lowercase;
	font-size: 14px;
	font-weight: 600;
	padding: 0 15px;
	margin: 0;
	${(props) => handleSize(props.size)}
`;
