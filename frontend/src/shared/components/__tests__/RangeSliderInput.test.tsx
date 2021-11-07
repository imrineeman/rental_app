import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import RangeSliderInput from '../RangeSliderInput';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import { updatePriceFilterActionCreator } from '../../../features/filters/filtersSlice';

let component;
const configValues = {
	minValue: 5,
	maxValue: 10,
	increment: 1,
};

beforeEach(() => {
	component = render(
		<Provider store={store}>
			<RangeSliderInput
				filterType={'price'}
				reducer={updatePriceFilterActionCreator}
				sliderConfigValues={configValues}
			/>
		</Provider>,
	);
});

describe('range filter tests', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	test('check if value update works correctly', () => {
		const input = component.baseElement.querySelector('input');
		fireEvent.change(input, {
			target: {
				value: 123,
			},
		});
		expect(input.value).toBe(123);
	});
});
