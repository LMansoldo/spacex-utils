import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
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

	const formatDateString = (dateString) => {
		const formattedDate = new Date(dateString).toLocaleDateString(
			navigator.language
		);
		const hours = new Date(dateString).getHours();
		const minutes = new Date(dateString).getMinutes();

		return `${formattedDate} ${hours}:${minutes}`;
	};

	const charsLimiter = (str) => {
		if (!str) return '';
		return `${str.substr(0, 139)}...`;
	};

	const handleReadMoreBehavior = () => {
		const renderShipList = () => {
			if (shipList)
				return shipList.map((ship) => (
					<div key={ship.id}>
						<span>{ship.name}</span>
						<span>{ship.type}</span>
					</div>
				));
		};

		const renderAditionalFields = () => (
			<TransitionKeyframe open>
				<Text>{description}</Text>
				<ShipList>{renderShipList()}</ShipList>
			</TransitionKeyframe>
		);

		if (readMore) return renderAditionalFields();
		return (
			<TransitionKeyframe open={false}>
				{charsLimiter(description)}
			</TransitionKeyframe>
		);
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
					<Text>{formatDateString(date)}</Text>
					<Text>{place}</Text>
				</RightSide>
			</TextContainer>
			<ButtonContainer>
				<Button
					size="medium"
					color="info"
					onClick={() => setReadMore((e) => !e)}
				>
					{readMore ? t('button.readmore.hide') : t('button.readmore.show')}
				</Button>
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
