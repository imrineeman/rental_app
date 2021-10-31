import React from 'react';
import ApartmentListing from './ApartmentListing';
import { Apartment } from '../../shared/types/types';

const ApartmentList = ({
	apartments,
}: {
	apartments: Apartment[];
}): JSX.Element => {
	return (
		<div>
			{apartments.map((apartment) => (
				<ApartmentListing key={apartment.id} apartment={apartment} />
			))}
		</div>
	);
};

export default ApartmentList;
