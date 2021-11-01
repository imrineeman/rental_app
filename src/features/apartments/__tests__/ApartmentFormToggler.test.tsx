import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import ApartmentFormToggler from '../ApartmentFormToggler';

let store;
let component;

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<ApartmentFormToggler />
		</Provider>,
	);
});

describe('Apartment form toggler test', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	test('check if form hidden', () => {
		expect(
			component.container.querySelector('.apartment-form').children,
		).toHaveLength(0);
	});

	test('check if form toggles on click', () => {
		const button = component.container.querySelector('.form-toggler-btn');
		fireEvent.click(button);
		expect(
			component.container.querySelector('.apartment-form').children,
		).toHaveLength(0);
	});
});
