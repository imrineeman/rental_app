import React from 'react';
import TextField from '@mui/material/TextField';
import { ApartmentFilter } from '../../shared/types/types';
import { capitalizeFirstLetter } from '../../shared/utils/utils';

interface FormTextFieldProps {
	fieldType: {
		value: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};
	label: ApartmentFilter;
}

const FormTextField = ({ fieldType, label }: FormTextFieldProps) => {
	const textInputStyle = { margin: 0.8, display: 'flex' };
	const capitalizedLabel = capitalizeFirstLetter(label);

	return (
		<TextField
			id={`${label}-input`}
			label={capitalizedLabel}
			value={fieldType.value}
			onChange={fieldType.onChange}
			size={'small'}
			sx={textInputStyle}
		/>
	);
};

export default FormTextField;
