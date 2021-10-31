import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApartmentFilters, ApartmentFilter } from '../../shared/types/types';

export const initialState: ApartmentFilters = {
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
				filterType: ApartmentFilter;
				filterValue: any; // How to handle typing this?
			}>,
		) => {
			switch (
				payload.filterType // Seperate switch statement to distinct actions?
			) {
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
