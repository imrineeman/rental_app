import React from 'react';
import Grid from '@mui/material/Grid';
import { ApartmentFilter } from '../../shared/types/types';
import { capitalizeFirstLetter } from '../../shared/utils/utils';

interface ApartmentDataFieldProps {
	fieldType: ApartmentFilter;
	fieldValue: string | number;
}

const ApartmentDataField = ({
	fieldType,
	fieldValue,
}: ApartmentDataFieldProps) => {
	const capitalizedField = capitalizeFirstLetter(fieldType as string);

	return (
		<Grid padding="0.5em" textAlign="left">
			<b>{capitalizedField}:</b> {fieldValue}
		</Grid>
	);
};

export default ApartmentDataField;
