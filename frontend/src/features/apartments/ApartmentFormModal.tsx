import React, { useState } from 'react';

import ApartmentForm from './ApartmentForm';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ApartmentFormModal = (): JSX.Element => {
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
				data-testid="apartment-form"
				isOpen={isFormOpen}
				handleShowFormClick={handleShowFormClick}
			/>
		</>
	);
};

export default ApartmentFormModal;
