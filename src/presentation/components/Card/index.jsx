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
	Label,
	Ships,
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
					<Ships key={ship.id} data-testid="spcx-shiplist">
						<Text>
							<Label>{t('card.ship-name')}: </Label>
							{ship.name}
						</Text>
						<Text>
							<Label>{t('card.ship-type')}: </Label>
							{ship.type}
						</Text>
					</Ships>
				));
		};

		const renderAditionalFields = () => (
			<TransitionKeyframe open>
				<Label>{t('card.description')}</Label>
				<Text>{description}</Text>
				<ShipList>
					<Label>{t('card.ships')}</Label>
					{renderShipList()}
				</ShipList>
			</TransitionKeyframe>
		);

		if (readMore) return renderAditionalFields();
		return (
			<TransitionKeyframe open={false}>
				<Text>
					<Label>{t('card.description')}</Label>
					{charsLimiter(description)}
				</Text>
			</TransitionKeyframe>
		);
	};

	return (
		<CardWrapper>
			<TextContainer>
				<LeftSide>
					<Text>
						<Label>{t('card.name')}</Label>
						{name}
					</Text>
					<Text>
						<Label>{t('card.rocket')}</Label>
						{rocket}
					</Text>
					{handleReadMoreBehavior()}
				</LeftSide>
				<RightSide>
					<Text>
						<Label>{t('card.date')}</Label>
						{formatDateString(date)}
					</Text>
					<Text>
						<Label>{t('card.place')}</Label>
						{place}
					</Text>
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
