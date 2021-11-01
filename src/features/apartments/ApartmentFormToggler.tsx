import React, { useState } from 'react';
import NewApartmentForm from './NewApartmentForm';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ApartmentFormToggler = (): JSX.Element => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const handleShowFormClick = () => {
		setIsFormOpen(isFormOpen ? false : true);
	};

	return (
		<div>
			<Button
				color="success"
				onClick={handleShowFormClick}
				variant="outlined">
				<AddRoundedIcon />
			</Button>
			<NewApartmentForm
				isOpen={isFormOpen}
				handleShowFormClick={handleShowFormClick}
			/>
		</div>
	);
};

export default ApartmentFormToggler;
