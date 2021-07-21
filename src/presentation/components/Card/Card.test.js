import React from 'react';
import { screen, render } from '../../../tests';
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
			<Card
				name={name}
				rocket={rocket}
				place={place}
				date={date}
				description={description}
				shipList={shipList}
			/>
		);

		expect(screen.getByTestId(/spcx-shiplist/i)).toBeNull();
	});
});
