import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SpacesContext from '../../../context';

import {
	CardWrapper,
	Text,
	ShipList,
	LeftSide,
	RightSide,
	TransitionKeyframe,
	ButtonContainer,
	TextContainer,
} from './styled';

const Card = ({ name, rocket, place, date, description, shipList }) => {
	const [readMore, setReadMore] = useState(false);
	const { t } = useContext(SpacesContext);

	const handleReadMoreBehavior = () => {
		const renderAditionalFields = () => (
			<TransitionKeyframe open>
				<Text>{description}</Text>
				<ShipList>{shipList}</ShipList>
			</TransitionKeyframe>
		);

		if (readMore) return renderAditionalFields();
		return <TransitionKeyframe open={false} />;
	};

	return (
		<CardWrapper>
			<TextContainer>
				<LeftSide>
					<Text>{name}</Text>
					<Text>{rocket}</Text>
					{handleReadMoreBehavior()}
				</LeftSide>
				<RightSide>
					<Text>{date}</Text>
					<Text>{place}</Text>
				</RightSide>
			</TextContainer>
			<ButtonContainer>
				<button type="button" onClick={() => setReadMore((e) => !e)}>
					{readMore ? t('button.readmore.hide') : t('button.readmore.show')}
				</button>
			</ButtonContainer>
		</CardWrapper>
	);
};

Card.propTypes = {
	name: PropTypes.string.isRequired,
	rocket: PropTypes.string.isRequired,
	place: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	shipList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
