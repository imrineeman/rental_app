import React from 'react';

import ApartmentListing from './ApartmentListing';
import { Apartment } from '../../shared/types/types';

interface ApartmentListProps {
	apartments: Apartment[];
}

const ApartmentList = ({ apartments }: ApartmentListProps): JSX.Element => {
	return (
		<div className="apartment-list">
			{apartments.map((apartment) => (
				<ApartmentListing key={apartment.id} apartment={apartment} />
			))}
		</div>
	);
};

export default ApartmentList;
