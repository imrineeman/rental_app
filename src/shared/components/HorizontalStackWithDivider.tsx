import React from 'react';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';

const HorizontalStackWithDivider = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			spacing={2}
			direction="row"
			justifyContent="center"
			divider={<Divider orientation="vertical" flexItem />}>
			{children}
		</Stack>
	);
};

export default HorizontalStackWithDivider;
