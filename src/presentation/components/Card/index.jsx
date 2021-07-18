import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SpacesContext from '../../../context';

import {
	CardWrapper,
	TextName,
	TextPlace,
	TextDate,
	TextRocket,
	TextDescription,
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
			<>
				<TextDescription>{description}</TextDescription>
				<ShipList>{shipList}</ShipList>
			</>
		);

		if (readMore) return renderAditionalFields();
		return null;
	};

	return (
		<CardWrapper>
			<TextContainer>
				<LeftSide>
					<TextName>{name}</TextName>
					<TextRocket>{rocket}</TextRocket>
					<TransitionKeyframe>{handleReadMoreBehavior()}</TransitionKeyframe>
				</LeftSide>
				<RightSide>
					<TextDate>{date}</TextDate>
					<TextPlace>{place}</TextPlace>
				</RightSide>
			</TextContainer>
			<ButtonContainer>
				<button type="button" onClick={() => setReadMore((e) => !e)}>
					{t('button.readmore')}
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
