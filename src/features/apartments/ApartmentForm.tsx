import React, { useState } from 'react';

import useTextInput from '../../shared/hooks/useTextInput';
import { useAppDispatch } from '../../store/hooks';
import { createApartmentActionCreator } from './apartmentsSlice';
import { Apartment, ApartmentFeatures } from '../../shared/types/types';
import FormTextField from './FormTextField';
import ApartmentFeatureSelect from './ApartmentFeatureSelect';
import FormFieldsGrid from './FormFieldsGrid';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface FormProps {
	isOpen: boolean;
	handleShowFormClick(): void;
}

const ApartmentForm = ({
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

	return (
		<div className="apartment-form">
			<Dialog open={isOpen} onClose={handleShowFormClick}>
				<DialogTitle>Add Listing</DialogTitle>
				<DialogContent>
					<FormFieldsGrid>
						<FormTextField fieldType={city} label={'city'} />
						<FormTextField fieldType={address} label={'address'} />
						<FormTextField fieldType={rooms} label={'rooms'} />
						<FormTextField fieldType={price} label={'price'} />
					</FormFieldsGrid>
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

export default ApartmentForm;
