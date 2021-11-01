import React from 'react';
import { deleteApartmentActionCreator } from './apartmentsSlice';
import { useAppDispatch } from '../../store/hooks';
import { Apartment } from '../../shared/types/types';

import ApartmentDataField from './ApartmentDataField';
import ApartmentFeatureChips from './ApartmentFeatureChips';

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
			<Grid display="grid" gridTemplateColumns="repeat(3, 1fr)">
				<ApartmentDataField
					fieldType="city"
					fieldValue={apartment.city}
				/>
				<ApartmentDataField
					fieldType="rooms"
					fieldValue={apartment.rooms}
				/>
				<Grid>
					<ApartmentFeatureChips features={apartment.features} />
				</Grid>
				<ApartmentDataField
					fieldType="address"
					fieldValue={apartment.address}
				/>
				<ApartmentDataField
					fieldType="price"
					fieldValue={apartment.price}
				/>
				<Grid>
					<Button color="error" onClick={handleRemoveClick}>
						<DeleteOutlineIcon />
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ApartmentListing;
