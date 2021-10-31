import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ApartmentListing from '../ApartmentListing';
import { Apartment } from '../../../shared/types/types';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import { mockApartment } from '../../../shared/utils/testsUtils';

let store;
let listing;

beforeEach(() => {
	store = createTestStore();
	listing = render(
		<Provider store={store}>
			<ApartmentListing apartment={mockApartment} />
		</Provider>,
	);
});

describe('ApartmentListing tests', () => {
	test('renders content correctly from props', () => {
		mockApartment.features.map((feature) => {
			expect(listing.container).toHaveTextContent(feature);
		});
		expect(listing.container).toHaveTextContent('City: Givatayim');
	});
});
