import React from 'react';
import { deleteApartmentActionCreator } from './apartmentsSlice';
import { useAppDispatch } from '../../store/hooks';
import { Apartment } from '../../shared/types/types';
import ApartmentDataField from './ApartmentDataField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const ApartmentListing = ({
	apartment,
}: {
	apartment: Apartment;
}): JSX.Element => {
	const dispatch = useAppDispatch();
	const handleRemoveClick = () => {
		dispatch(deleteApartmentActionCreator({ id: apartment.id }));
	};

	const renderFeatureChips = ((): JSX.Element[] => {
		let chipArr: JSX.Element[] = [];
		if (apartment.features != null) {
			chipArr = apartment.features.map((feature) => (
				<Chip label={feature} />
			));
		}
		return chipArr;
	})();

	return (
		<Box sx={{ margin: 1, marginBottom: 3 }}>
			<Paper elevation={3}>
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
						<div>{renderFeatureChips}</div>
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
