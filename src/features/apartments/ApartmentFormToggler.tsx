import React, { useState } from 'react';
import NewApartmentForm from './NewApartmentForm';
import Button from '@mui/material/Button';

const ApartmentFormToggler = (): JSX.Element => {
	const [showForm, setShowForm] = useState(false);
	const handleShowFormClick = () => {
		setShowForm(showForm ? false : true);
	};

	return (
		<div>
			<Button color="secondary" onClick={handleShowFormClick}>
				Add apartment
			</Button>
			<NewApartmentForm
				open={showForm}
				toggleFormVisibility={handleShowFormClick}
				handleShowFormClick={handleShowFormClick}
			/>
		</div>
	);
};

export default ApartmentFormToggler;
