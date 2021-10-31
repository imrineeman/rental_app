import React, { useState } from 'react';
import NewApartmentForm from './NewApartmentForm';

const ApartmentFormToggler = (): JSX.Element => {
	const [showForm, setShowForm] = useState(false);
	const handleShowFormClick = () => {
		setShowForm(showForm ? false : true);
	};
	return (
		<div>
			<button onClick={handleShowFormClick}>Add apartment</button>
			{showForm && (
				<NewApartmentForm toggleFormVisibility={handleShowFormClick} />
			)}
		</div>
	);
};

export default ApartmentFormToggler;
