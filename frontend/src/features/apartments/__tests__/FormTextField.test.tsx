import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import FormTextField from '../FormTextField';
import { ApartmentFilter } from '../../../shared/types/types';
import { createTestStore } from '../../../shared/utils/testsUtils';

let store;
let component;

const mockFieldType = {
	value: 'Test',
	onChange: jest.fn(),
};

beforeEach(() => {
	store = createTestStore();
	component = render(
		<Provider store={store}>
			<FormTextField
				fieldType={mockFieldType}
				label={'Test' as ApartmentFilter}
			/>
		</Provider>,
	);
});

describe('Apartment list tests', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});
	test('check if label is correctly displayed', () => {
		expect(screen.getByLabelText('Test')).toBeDefined();
	});
});
