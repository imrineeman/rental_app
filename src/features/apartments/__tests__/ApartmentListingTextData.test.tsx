import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ApartmentListingTextData from '../ApartmentListingTextData';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import { mockApartment } from '../../../shared/utils/testsUtils';

let store;
let listing;

beforeEach(() => {
	store = createTestStore();
	listing = render(
		<Provider store={store}>
			<ApartmentListingTextData apartment={mockApartment} />
		</Provider>,
	);
});

describe('ApartmentListing tests', () => {
	test('renders content correctly from props', () => {
		expect(listing.container).toHaveTextContent('Givatayim');
		expect(listing.container).toHaveTextContent('Gordon');
	});
});
