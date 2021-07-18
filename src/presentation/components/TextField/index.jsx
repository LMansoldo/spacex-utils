import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Label } from './styles';
import { ErrorMessage } from '~/styles/shared';

const TextField = (props) => {
	const [isFocused, setIsFocused] = useState(false);
	const { id, label, value, error } = props;

	const handleFocusChange = (focused) => {
		if (!value) {
			setIsFocused(focused);
		}
	};

	return (
		<Container>
			<Label for={id} isFocused={isFocused} error={error}>
				{label}
			</Label>
			<Input
				{...props}
				isFocused={isFocused}
				onFocus={() => handleFocusChange(true)}
				onBlur={() => handleFocusChange(false)}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	);
};

TextField.propTypes = {
	width: PropTypes.string,
	value: PropTypes.string,
	height: PropTypes.string,
	mask: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
};

TextField.defaultProps = {
	width: '100%',
	value: '',
	height: '',
	mask: '',
	label: '',
	id: '',
	type: 'text',
	name: '',
	error: '',
	onChange: () => {},
};

export default TextField;
