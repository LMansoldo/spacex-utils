import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styled';

const Button = ({ children, type, color, size, onClick }) => (
	<ButtonWrapper color={color} size={size} type={type} onClick={onClick}>
		{children}
	</ButtonWrapper>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.string,
};

Button.defaultProps = {
	type: 'button',
	color: 'default',
	size: 'medium',
};

export default Button;
