import React from 'react';
import { screen, render, userEvent } from '../../../tests';
import Button from './index';

describe('Button', () => {
	it('Should receive click and return response', () => {
		const onClick = jest.fn();

		render(<Button onClick={onClick}>Label</Button>);

		const customButton = screen.getByRole('button');

		userEvent.click(customButton);

		expect(onClick.mock.calls.length).toEqual(1);
	});
});
