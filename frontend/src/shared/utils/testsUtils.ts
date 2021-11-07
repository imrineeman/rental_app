import { configureStore } from '@reduxjs/toolkit';
import apartmentsReducer from '../../features/apartments/apartmentsSlice';
import filtersReducer from '../../features/filters/filtersSlice';
import { Apartment } from '../types/types';

export const createTestStore = () => {
	const store = configureStore({
		reducer: {
			apartments: apartmentsReducer,
			filters: filtersReducer,
		},
	});
	return store;
};

export const mockApartment: Apartment = {
	city: 'Givatayim',
	address: 'Gordon',
	rooms: 4,
	price: 7000,
	features: ['parking', 'elevator'],
	id: '000aaa',
};
