import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import Apartments from '../Apartments';
import { Apartment, ApartmentFilters } from '../../../shared/types/types';
import { Provider } from 'react-redux';
import mockData from '../../../shared/utils/initialData.json';
import { initialState } from '../../filters/filtersSlice';
import { createTestStore } from '../../../shared/utils/testsUtils';

let store;
let component;

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<Apartments />
		</Provider>,
	);
});

describe('Apartment component tests', () => {
	test('render with empty dataset, no apartments render', () => {
		expect(component.container).toBeDefined();
		expect(
			component.container.querySelector('.apartment-list').children
				.length,
		).toBe(0);
	});

	// test('renders multiple apartments', () => {

	// 	component.debug();
	// 	console.log(
	// 		component.container.querySelector('.apartment-list').children,
	// 	);
	// 	expect(
	// 		component.container.querySelector('.apartment-list').children
	// 			.length,
	// 	).toBe(mockData.length);
	// });
});
