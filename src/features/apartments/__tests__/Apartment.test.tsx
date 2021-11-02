import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import Apartments from '../Apartments';
import { Apartment, ApartmentFilters } from '../../../shared/types/types';
import { Provider } from 'react-redux';
import mockData from '../../../shared/utils/initialData.json';
import reducer from '../../filters/filtersSlice';
import configureStore from 'redux-mock-store';
import { initialState } from '../../filters/filtersSlice';
const mockStore = configureStore();
let store;
let component;

describe('Apartment component tests', () => {
	test('render with empty dataset, no apartments render', () => {
		store = mockStore({ apartments: [], filters: initialState });
		component = render(
			<Provider store={store}>
				<Apartments />
			</Provider>,
		);
		expect(component.container).toBeDefined();
		expect(
			component.container.querySelector('.apartment-list').children
				.length,
		).toBe(0);
	});

	test('renders multiple apartments', () => {
		store = mockStore({
			apartments: mockData as Apartment[],
			filters: initialState,
		});

		component = render(
			<Provider store={store}>
				<Apartments />
			</Provider>,
		);

		expect(
			component.container.querySelector('.apartment-list').children
				.length,
		).toBe(mockData.length);
	});
});
