import React, { useState } from 'react';
import useTextInput from '../../shared/hooks/useTextInput';
import { useAppDispatch } from '../../store/hooks';
import { createApartmentActionCreator } from './apartmentsSlice';
import { Apartment, ApartmentFeatures } from '../../shared/types/types';
import TextField from '@mui/material/TextField';
import ApartmentFeatureSelect from './ApartmentFeatureSelect';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface FormProps {
	isOpen: boolean;
	handleShowFormClick(): void;
}

const NewApartmentForm = ({
	isOpen,
	handleShowFormClick,
}: FormProps): JSX.Element => {
	const [features, setFeatures] = useState<ApartmentFeatures[]>([]);
	const city = useTextInput('');
	const address = useTextInput('');
	const rooms = useTextInput('');
	const price = useTextInput('');

	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newApartment: Omit<Apartment, 'id'> = {
			city: city.value,
			address: address.value,
			rooms: parseInt(rooms.value),
			price: parseInt(price.value),
			features: features,
		};

		dispatch(createApartmentActionCreator(newApartment));
		handleShowFormClick();
	};

	const textInputStyle = { margin: 0.8, display: 'flex' };
	return (
		<div>
			<Dialog open={isOpen} onClose={handleShowFormClick}>
				<DialogTitle>Add Listing</DialogTitle>
				<DialogContent>
					<Grid
						sx={{
							display: 'grid',
							columnGap: 1,
							rowGap: 1,
							gridTemplateColumns: 'repeat(2, 1fr)',
							borderRadius: '10',
						}}>
						<TextField
							id="city-input"
							label="City"
							value={city.value}
							onChange={city.onChange}
							size={'small'}
							sx={textInputStyle}
						/>
						<TextField
							id="address-input"
							label="Address"
							value={address.value}
							onChange={address.onChange}
							size={'small'}
							sx={textInputStyle}
						/>
						<TextField
							id="address-input"
							label="Price"
							value={price.value}
							onChange={price.onChange}
							size={'small'}
							sx={textInputStyle}
						/>
						<TextField
							id="address-input"
							label="Rooms"
							value={rooms.value}
							onChange={rooms.onChange}
							size={'small'}
							sx={textInputStyle}
						/>
					</Grid>
					<ApartmentFeatureSelect
						setNewApartmentFeatures={setFeatures}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleShowFormClick}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default NewApartmentForm;
