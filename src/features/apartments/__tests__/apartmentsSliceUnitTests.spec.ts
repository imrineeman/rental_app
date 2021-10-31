import reducer, {
	createApartmentActionCreator,
	deleteApartmentActionCreator,
} from '../apartmentsSlice';
import mockData from '../../../shared/utils/initialData.json';

const newApartment = {
	rooms: 0,
	price: 0,
	city: 'Test',
	address: 'Testy',
};

test('check if initial state is being returned by default', () => {
	const dispatch = reducer(undefined, {});
	expect(dispatch).toEqual(mockData);
});

describe('CRUD operation unit tests', () => {
	const previousState = [];
	const currentState = reducer(
		previousState,
		createApartmentActionCreator(newApartment),
	);
	const savedApartment = currentState[0];

	test('add new apartment and check all attributes', () => {
		expect(currentState.length).toEqual(1);
		expect(savedApartment.city).toEqual(newApartment.city);
		expect(savedApartment.rooms).toEqual(newApartment.rooms);
		expect(savedApartment.address).toEqual(newApartment.address);
		expect(savedApartment.price).toEqual(newApartment.price);
		expect(savedApartment.id).toBeDefined();
	});

	test('remove added apartment by id', () => {
		const newState = reducer(
			currentState,
			deleteApartmentActionCreator({ id: savedApartment.id }),
		);
		expect(newState.length).toBe(0);
	});
});
