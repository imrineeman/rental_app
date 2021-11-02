import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import ApartmentFormModal from '../ApartmentFormModal';

let store;
let component;

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<ApartmentFormModal />
		</Provider>,
	);
});

describe('Apartment form toggler test', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	test('check if form hidden', () => {
		expect(screen.queryByTestId('apartment-form')).toBeNull();
	});

	test('check if form toggles on click', () => {
		const button = component.container.querySelector('.form-toggler-btn');
		fireEvent.click(button);
		expect(screen.queryByTestId('apartment-form')).toBeDefined();
	});
});
