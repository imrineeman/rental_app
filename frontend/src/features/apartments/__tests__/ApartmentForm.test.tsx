import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import ApartmentForm from '../ApartmentForm';

let store;
let component;
const closeForm = jest.fn();

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<ApartmentForm isOpen={true} handleShowFormClick={closeForm} />
		</Provider>,
	);
});

describe('Apartment form toggler test', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	/* 	test('write to input and check store - integration', () => {
		const initialState = store.getState();
		const form = component.container.querySelector('form');
		const input = component.container.querySelector('input');

		console.log(input)

		fireEvent.change(input, {
			target: { value: 'testing' },
		});

		fireEvent.submit(form);

		const currentState = store.getState();

		expect(closeForm.mock.calls).toHaveLength(1);
		expect(currentState.length).toBeGreaterThan(initialState.length);
	}); */
});
