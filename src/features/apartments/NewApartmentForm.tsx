import React, { useState } from 'react';
import useTextInput from '../../shared/hooks/useTextInput';
import { useAppDispatch } from '../../store/hooks';
import { createApartmentActionCreator } from './apartmentsSlice';
import { Apartment, ApartmentFeatures } from '../../shared/types/types';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ApartmentFeatureSelect from './ApartmentFeatureSelect';

interface FormProps {
	toggleFormVisibility(): void;
}
const NewApartmentForm = (props: FormProps): JSX.Element => {
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
		props.toggleFormVisibility();
	};
	return (
		<div>
			<h4>Add New Apartment Listing</h4>
			<form onSubmit={handleSubmit}>
				<Stack
					spacing={2}
					margin={1}
					justifyContent="center"
					direction="row">
					<Stack spacing={2} margin={1} justifyContent="center">
						<TextField
							id="city-input"
							label="City"
							value={city.value}
							onChange={city.onChange}
							size={'small'}
						/>
						<TextField
							id="address-input"
							label="Address"
							value={address.value}
							onChange={address.onChange}
							size={'small'}
						/>
					</Stack>
					<Stack spacing={2} margin={1} justifyContent="center">
						<TextField
							id="rooms-input"
							label="Rooms"
							value={rooms.value}
							onChange={rooms.onChange}
							size={'small'}
						/>
						<TextField
							id="address-input"
							label="Price"
							value={price.value}
							onChange={price.onChange}
							size={'small'}
						/>
					</Stack>
					<Stack
						spacing={2}
						margin={1}
						justifyContent="center"
						direction="row">
						<ApartmentFeatureSelect
							setNewApartmentFeatures={setFeatures}
						/>
					</Stack>
					<input type="submit" value="Submit Form" />
				</Stack>
			</form>
		</div>
	);
};

export default NewApartmentForm;
