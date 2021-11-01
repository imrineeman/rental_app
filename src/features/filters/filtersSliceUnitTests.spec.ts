import reducer, {
	updateFilterActionCreator,
	initialState,
} from './filtersSlice';

test('check if initial state is being returned by default', () => {
	expect(reducer(undefined, {})).toEqual(initialState);
});

describe('filter update action creator tests', () => {
	test('address filter update', () => {
		const newState = reducer(
			initialState,
			updateFilterActionCreator({
				filterType: 'address',
				filterValue: 'Test',
			}),
		);
		expect(newState.address).toBe('Test');
	});

	test('city filter update', () => {
		const newState = reducer(
			initialState,
			updateFilterActionCreator({
				filterType: 'city',
				filterValue: 'Test',
			}),
		);
		expect(newState.city).toBe('Test');
	});

	test('price filter update', () => {
		const newState = reducer(
			initialState,
			updateFilterActionCreator({
				filterType: 'price',
				filterValue: [1000, 1500],
			}),
		);
		expect(newState.price).toStrictEqual([1000, 1500]);
	});

	test('rooms filter update', () => {
		const newState = reducer(
			initialState,
			updateFilterActionCreator({
				filterType: 'rooms',
				filterValue: [1, 5],
			}),
		);
		expect(newState.rooms).toStrictEqual([1, 5]);
	});

	test('feature filter update', () => {
		const newState = reducer(
			initialState,
			updateFilterActionCreator({
				filterType: 'features',
				filterValue: ['parking'],
			}),
		);
		expect(newState.features).toStrictEqual(['parking']);
	});
});
