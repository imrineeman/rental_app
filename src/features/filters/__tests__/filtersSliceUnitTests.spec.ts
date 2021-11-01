import reducer, {
	updateAddressFilterActionCreator,
	updateCityFilterActionCreator,
	updatePriceFilterActionCreator,
	updateRoomsFilterActionCreator,
	updateFeaturesFilterActionCreator,
	initialState,
} from '../filtersSlice';

test('check if initial state is being returned by default', () => {
	expect(reducer(undefined, {})).toEqual(initialState);
});

describe('filter update action creator tests', () => {
	test('address filter update', () => {
		const newState = reducer(
			initialState,
			updateAddressFilterActionCreator({
				filterValue: 'Test',
			}),
		);
		expect(newState.address).toBe('Test');
	});

	test('city filter update', () => {
		const newState = reducer(
			initialState,
			updateCityFilterActionCreator({
				filterValue: 'Test',
			}),
		);
		expect(newState.city).toBe('Test');
	});

	test('price filter update', () => {
		const newState = reducer(
			initialState,
			updatePriceFilterActionCreator({
				filterValue: [1000, 1500],
			}),
		);
		expect(newState.price).toStrictEqual([1000, 1500]);
	});

	test('rooms filter update', () => {
		const newState = reducer(
			initialState,
			updateRoomsFilterActionCreator({
				filterValue: [1, 5],
			}),
		);
		expect(newState.rooms).toStrictEqual([1, 5]);
	});

	test('feature filter update', () => {
		const newState = reducer(
			initialState,
			updateFeaturesFilterActionCreator({
				filterValue: ['parking'],
			}),
		);
		expect(newState.features).toStrictEqual(['parking']);
	});
});
