import React from 'react';
import { useTranslation } from 'react-i18next';
import { screen, render } from '../../../tests';
import i18n from '../../../tests/translations';
import ContextTest from '../../../tests/contextTest';
import Card from './index';

const name = 'Mission test';
const rocket = 'King Crimson';
const place = 'Los Angeles';
const date = new Date().toISOString();
const description =
	'Cat s foot iron claw, Neuro-surgeons scream for more, At paranoia s poison door, Twenty first century schizoid man, Blood rack barbed wire, Politicians funeral pyre, Innocents raped with napalm fire, Twenty first century schizoid man';
const shipList = [
	{ name: 'Tree', type: 'cargo' },
	{ name: 'Perfect', type: 'cargo' },
	{ name: 'Pair', type: 'cargo' },
];

/*
		1 - Deve renderizar fechado
		2 - Deve exibir descrição limitada a 140 caracteres
		3 - Deve exibir Descrição completa e naves
	*/

describe('Card', () => {
	it('Should start closed', () => {
		render(
			<ContextTest>
				<Card
					name={name}
					rocket={rocket}
					place={place}
					date={date}
					description={description}
					shipList={shipList}
				/>
			</ContextTest>
		);

		expect(screen.queryByTestId('description')).not.toBeInTheDocument();
	});

	it('Should show limited description', () => {
		render(
			<ContextTest>
				<Card
					name={name}
					rocket={rocket}
					place={place}
					date={date}
					description={description}
					shipList={shipList}
				/>
			</ContextTest>
		);

		expect(screen.queryByTestId('limited-description')).not.toBeInTheDocument();
	});
});
