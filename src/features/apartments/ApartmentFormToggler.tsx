import React, { useState } from 'react';
import ApartmentForm from './ApartmentForm';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ApartmentFormToggler = (): JSX.Element => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const handleShowFormClick = () => {
		setIsFormOpen(isFormOpen ? false : true);
	};

	return (
		<>
			<Button
				className="form-toggler-btn"
				color="success"
				onClick={handleShowFormClick}
				variant="outlined">
				<AddRoundedIcon />
			</Button>
			<ApartmentForm
				isOpen={isFormOpen}
				handleShowFormClick={handleShowFormClick}
			/>
		</>
	);
};

export default ApartmentFormToggler;
