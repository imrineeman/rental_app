import React, { useEffect } from 'react';
import useTextInput from '../hooks/useTextInput';
import { useAppDispatch } from '../../store/hooks';
import { ApartmentFilter } from '../types/types';
import TextField from '@mui/material/TextField';
import { capitalizeFirstLetter } from '../utils/utils';

interface TextInputProps {
	inputFieldName: Exclude<ApartmentFilter, 'rooms' | 'price'>;
	reducer: any;
}

const TextInput = ({ inputFieldName, reducer }: TextInputProps) => {
	const input = useTextInput('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			reducer({
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
