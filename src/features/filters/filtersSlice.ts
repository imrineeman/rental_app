import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApartmentFilters, ApartmentFilter } from '../../shared/types/types';

const initialState: ApartmentFilters = {
	city: '',
	address: '',
	rooms: [],
	price: [],
	features: [],
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		update: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterType: ApartmentFilter; // Need to solve mapping between ApartmentFilters and FilterInputTypes
				filterValue: any;
			}>,
		) => {
			switch (payload.filterType) {
				case 'address':
					state.address = payload.filterValue;
					break;
				case 'city':
					state.city = payload.filterValue;
					break;
				case 'price':
					state.price = payload.filterValue;
					break;
				case 'rooms':
					state.rooms = payload.filterValue;
					break;
				case 'features':
					state.features = payload.filterValue;
			}
		},
	},
});

export const { update: updateFilterActionCreator } = filtersSlice.actions;

export default filtersSlice.reducer;
