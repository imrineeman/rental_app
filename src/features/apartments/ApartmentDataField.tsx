import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'left',
		color: theme.palette.text.primary,
		background: '#FEF5ED',
	}));
	const capitalizedField = capitalizeFirstLetter(fieldType as string);
	return (
		<Grid>
			<Item>
				<b>{capitalizedField}:</b> {fieldValue}
			</Item>
		</Grid>
	);
};

export default ApartmentDataField;
