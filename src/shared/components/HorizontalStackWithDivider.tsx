import React from 'react';

//import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

const HorizontalStackWithDivider = ({ children }: { children: ReactNode }) => {
	return (
		<Grid container direction="row" justifyContent="space-between">
			{children}
		</Grid>
	);
};

export default HorizontalStackWithDivider;
