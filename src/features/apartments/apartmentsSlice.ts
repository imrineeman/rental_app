import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';
import { Apartment } from '../../shared/types/types';
import initialData from '../../initialData.json';

const initialState = initialData as Apartment[];

export const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState,
	reducers: {
		create: {
			reducer: (state, { payload }: PayloadAction<Apartment>) => {
				state.push(payload);
			},
			prepare: (userInputs) => {
				const id = uuid();
				return {
					payload: {
						...userInputs,
						id,
					},
				};
			},
		},
		remove: (state, { payload }: PayloadAction<{ 'id': string }>) => {
			const removedApartment = state.find(
				(apartment) => apartment.id === payload.id,
			);
			if (removedApartment) {
				state.splice(state.indexOf(removedApartment), 1);
			}
		},
	},
});

export const {
	create: createApartmentActionCreator,
	remove: deleteApartmentActionCreator,
} = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
