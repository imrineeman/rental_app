import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ApartmentFeatureChips from '../ApartmentFeatureChips';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import { mockApartment } from '../../../shared/utils/testsUtils';

let store;
let component;

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<ApartmentFeatureChips features={mockApartment.features} />
		</Provider>,
	);
});

describe('Apartment listing feature chips tests', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	test('check if chips render', () => {
		expect(
			screen.getByTestId('apartment-feature-chips').children,
		).toHaveLength(mockApartment.features.length);
	});
});
