import React from 'react';

import { deleteApartmentActionCreator } from './apartmentsSlice';
import { useAppDispatch } from '../../store/hooks';
import { Apartment } from '../../shared/types/types';

import ApartmentFeatureChips from './ApartmentFeatureChips';
import ApartmentListingTextData from './ApartmentListingTextData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface ApartmentListingProps {
	apartment: Apartment;
}

const ApartmentListing = ({
	apartment,
}: ApartmentListingProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const handleRemoveClick = () => {
		dispatch(deleteApartmentActionCreator({ id: apartment.id }));
	};

	return (
		<Box
			paddingBottom="1em"
			marginTop="1em"
			borderBottom="1px solid rgba(0,0,0,0.2)">
			<Grid
				container
				justifyContent="space-evenly"
				alignItems="flex-start">
				<Grid
					item
					xs={12}
					md={6}
					display="grid"
					justifyContent="space-between">
					<ApartmentListingTextData apartment={apartment} />
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					display="grid"
					justifyContent="space-between">
					<ApartmentFeatureChips features={apartment.features} />
				</Grid>
				<Grid item xs={2}>
					<Button color="error" onClick={handleRemoveClick}>
						<DeleteOutlineIcon />
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ApartmentListing;
