import React from 'react';
import { deleteApartmentActionCreator } from './apartmentsSlice';
import { useAppDispatch } from '../../store/hooks';
import { Apartment } from '../../shared/types/types';

import ApartmentDataField from './ApartmentDataField';
import ApartmentFeatureChips from './ApartmentFeatureChips';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
		<Box sx={{ margin: 1, marginBottom: 3 }}>
			<Paper variant="outlined">
				<Grid
					sx={{
						display: 'grid',
						columnGap: 1,
						rowGap: 1,
						gridTemplateColumns: 'repeat(3, 1fr)',
						borderRadius: '10',
					}}>
					<ApartmentDataField
						fieldType="city"
						fieldValue={apartment.city}
					/>
					<ApartmentDataField
						fieldType="rooms"
						fieldValue={apartment.rooms}
					/>
					<Grid>
						<div className="feature-chips">
							<ApartmentFeatureChips apartment={apartment} />
						</div>
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
							Remove Listing
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default ApartmentListing;
