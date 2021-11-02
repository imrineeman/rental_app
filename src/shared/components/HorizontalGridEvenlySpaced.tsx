import React from 'react';

//import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

const HorizontalGridEvenlySpaced = ({ children }: { children: ReactNode }) => (
	<Grid
		container
		direction="row"
		justifyContent="space-between"
		alignItems="center">
		{children}
	</Grid>
);

export default HorizontalGridEvenlySpaced;
