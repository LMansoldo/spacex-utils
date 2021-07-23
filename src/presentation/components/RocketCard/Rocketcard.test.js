/* eslint-disable camelcase */
import React from 'react';
import { screen, render, userEvent } from '../../../tests';
import ContextTest from '../../../tests/contextTest';
import RocketCard from './index';

const {
	name,
	payload_weights,
	description,
	active,
	diameter,
	engines,
	height,
	stages,
} = {
	name: 'Falcon 9',
	payload_weights: [
		{
			kg: 22800,
		},
		{
			kg: 8300,
		},
		{
			kg: 4020,
		},
	],
	description:
		'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
	active: true,
	diameter: {
		meters: 3.7,
	},
	engines: {
		type: 'merlin',
		number: 9,
	},
	height: {
		meters: 70,
	},
	stages: 2,
};
/*
		1 - Deve renderizar fechado
		2 - Deve exibir descrição limitada a 140 caracteres
		3 - Deve exibir Descrição completa e naves
	*/

describe('Card', () => {
	it('Should start closed', () => {
		render(
			<ContextTest>
				<RocketCard
					name={name}
					charge={payload_weights}
					status={active}
					diameter={diameter}
					description={description}
					engines={engines}
					height={height}
					stages={stages}
				/>
			</ContextTest>
		);

		expect(screen.queryByTestId('description')).not.toBeInTheDocument();
	});

	it('Should show limited description', () => {
		render(
			<ContextTest>
				<RocketCard
					name={name}
					charge={payload_weights}
					status={active}
					diameter={diameter}
					description={description}
					engines={engines}
					height={height}
					stages={stages}
				/>
			</ContextTest>
		);

		expect(screen.queryByTestId('limited-description')).toBeInTheDocument();
	});

	it('Should render full description & ships', () => {
		render(
			<ContextTest>
				<RocketCard
					name={name}
					charge={payload_weights}
					status={active}
					diameter={diameter}
					description={description}
					engines={engines}
					height={height}
					stages={stages}
				/>
			</ContextTest>
		);

		const showMoreButton = screen.getByRole('button');
		userEvent.click(showMoreButton);

		expect(screen.queryByTestId('description')).toBeInTheDocument();
	});
});
