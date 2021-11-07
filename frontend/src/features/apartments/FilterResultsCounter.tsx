import React from 'react';
import Box from '@mui/material/Box';

const ApartmentsFooter = ({
	apartmentMatches,
}: {
	apartmentMatches: number;
}) => {
	return <Box margin="1em">Matches {apartmentMatches} results</Box>;
};

export default ApartmentsFooter;
