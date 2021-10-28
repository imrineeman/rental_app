import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Apartment } from '../../shared/types/types';
import initialData from '../../initialData.json';

const initialState = initialData as Apartment[];

export const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState,
	reducers: {},
});

export default apartmentsSlice.reducer;
