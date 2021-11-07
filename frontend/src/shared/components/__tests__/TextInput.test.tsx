import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '../TextInput';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import { updateCityFilterActionCreator } from '../../../features/filters/filtersSlice';

let component;

beforeEach(() => {
	component = render(
		<Provider store={store}>
			<TextInput
				inputFieldName={'city'}
				reducer={updateCityFilterActionCreator}
			/>
		</Provider>,
	);
});

describe('Text filter tests', () => {
	test('check if component renders', () => {
		expect(component.container).toBeDefined();
	});

	test('check if onChange reducer works correctly', () => {
		const input = component.container.querySelector('input');
		fireEvent.change(input, {
			target: {
				value: 'test',
			},
		});
		expect(input).toHaveValue('test');
	});
});
