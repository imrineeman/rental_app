import React, { useEffect } from 'react';
import useTextInput from '../hooks/useTextInput';
import { useAppDispatch } from '../../store/hooks';
import { updateFilterActionCreator } from '../../features/filters/filtersSlice';
import { ApartmentFilter } from '../types/types';
import TextField from '@mui/material/TextField';
import { capitalizeFirstLetter } from '../utils/utils';

const TextInput = ({ inputFieldName }: { inputFieldName: ApartmentFilter }) => {
	const input = useTextInput('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			updateFilterActionCreator({
				filterType: inputFieldName,
				filterValue: input.value,
			}),
		);
	});

	return (
		<TextField
			id={`${inputFieldName}-search-input`}
			label={capitalizeFirstLetter(inputFieldName)}
			value={input.value}
			onChange={input.onChange}
			size={'small'}
		/>
	);
};

export default TextInput;
