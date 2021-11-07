import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ApartmentsList from '../ApartmentsList';
import { Apartment } from '../../../shared/types/types';
import { createTestStore } from '../../../shared/utils/testsUtils';
import { Provider } from 'react-redux';
import initialData from '../../../shared/utils/initialData.json';

let store;
let component;
const mockData: Apartment[] = initialData as Apartment[];

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<ApartmentsList apartments={mockData} />
		</Provider>,
	);
});

describe('Apartment list tests', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});
	test('check if apartments are being rendered', () => {
		expect(
			component.container.querySelector('.apartment-list'),
		).toBeDefined();
	});
	test('check if amount of apartments render correctly', () => {
		expect(
			component.container.querySelector('.apartment-list').children,
		).toHaveLength(mockData.length);
	});
});
