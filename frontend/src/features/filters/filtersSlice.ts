import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApartmentFilters, ApartmentFeatures } from '../../shared/types/types';

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
		updateAddress: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterValue: string;
			}>,
		) => {
			state.address = payload.filterValue;
		},
		updateCity: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterValue: string;
			}>,
		) => {
			state.city = payload.filterValue;
		},
		updatePrice: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterValue: number[];
			}>,
		) => {
			state.price = payload.filterValue;
		},
		updateRooms: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterValue: number[];
			}>,
		) => {
			state.rooms = payload.filterValue;
		},
		updateFeatures: (
			state,
			{
				payload,
			}: PayloadAction<{
				filterValue: ApartmentFeatures[];
			}>,
		) => {
			state.features = payload.filterValue;
		},
	},
});

export const {
	updateAddress: updateAddressFilterActionCreator,
	updateCity: updateCityFilterActionCreator,
	updatePrice: updatePriceFilterActionCreator,
	updateRooms: updateRoomsFilterActionCreator,
	updateFeatures: updateFeaturesFilterActionCreator,
} = filtersSlice.actions;

export default filtersSlice.reducer;
