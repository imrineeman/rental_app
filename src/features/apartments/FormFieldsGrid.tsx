import React from 'react';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

const FormFieldsGrid = ({ children }: { children: ReactNode }) => {
	return (
		<Grid
			display="grid"
			columnGap={1}
			rowGap={1}
			gridTemplateColumns="repeat(2, 1fr)"
			borderRadius="10">
			{children}
		</Grid>
	);
};

export default FormFieldsGrid;
