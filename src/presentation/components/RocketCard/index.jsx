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

const RocketCard = ({
	name,
	stages,
	status,
	height,
	diameter,
	charge,
	engines,
	description,
}) => {
	const [readMore, setReadMore] = useState(false);
	const { t } = useContext(SpacesContext);

	const charsLimiter = (str) => {
		if (!str) return '';
		return `${str.substr(0, 139)}...`;
	};

	const handleReadMoreBehavior = () => {
		const renderShipList = () => {
			if (engines)
				return (
					<Ships>
						<Text>
							<Label>{t('rocket-card.type')}: </Label>
							{engines.type}
						</Text>
						<Text>
							<Label>{t('rocket-card.number')}: </Label>
							{engines.number}
						</Text>
					</Ships>
				);
		};

		const renderAditionalFields = () => (
			<TransitionKeyframe open>
				<Label>{t("rocket-card.description")}</Label>
				<Text data-testid="description">{description}</Text>
				<ShipList>
					<Label>{t("rocket-card.engines")}</Label>
					{renderShipList()}
				</ShipList>
			</TransitionKeyframe>
		);

		if (readMore) return renderAditionalFields();
		return (
			<TransitionKeyframe open={false}>
				<Text data-testid="limited-description">
					<Label>{t("rocket-card.description")}</Label>
					{charsLimiter(description)}
				</Text>
			</TransitionKeyframe>
		);
	};

	const handlePayload = () => {
		const renderWeightList = () => {
			if (charge) return charge.map((i, x) => <Ships key={x}>{i.kg} kg</Ships>);
		};

		return (
			<Text>
				<Label>{t('rocket-card.charge.value')}</Label>
				<ShipList>{renderWeightList()}</ShipList>
			</Text>
		);
	};
	return (
		<CardWrapper>
			<TextContainer>
				<LeftSide>
					<Text>
						<Label>{t('rocket-card.name')}</Label>
						{name}
					</Text>
					<Text>
						<Label>{t('rocket-card.stages')}</Label>
						{stages}
					</Text>
					<Text>
						<Label>{t('rocket-card.status.label')}</Label>
						{status
							? t('rocket-card.status.active')
							: t('rocket-card.status.inactive')}
					</Text>
					{handleReadMoreBehavior()}
				</LeftSide>
				<RightSide>
					<Text>
						<Label>{t('rocket-card.height.value')}</Label>
						{`${height} ${t('rocket-card.height.label')}`}
					</Text>
					<Text>
						<Label>{t('rocket-card.diameter.value')}</Label>
						{`${diameter} ${t('rocket-card.diameter.label')}`}
					</Text>
					{handlePayload()}
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

RocketCard.propTypes = {
	name: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	diameter: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	stages: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	charge: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	engines: PropTypes.object.isRequired,
};

export default RocketCard;
