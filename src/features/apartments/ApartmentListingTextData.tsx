import React from 'react';

import ApartmentDataField from './ApartmentDataField';
import { Apartment } from '../../shared/types/types';

interface ApartmentListingTextDataProps {
	apartment: Apartment;
}
const ApartmentListingTextData = ({
	apartment,
}: ApartmentListingTextDataProps) => (
	<>
		<ApartmentDataField fieldType="city" fieldValue={apartment.city} />
		<ApartmentDataField fieldType="rooms" fieldValue={apartment.rooms} />
		<ApartmentDataField
			fieldType="address"
			fieldValue={apartment.address}
		/>
		<ApartmentDataField fieldType="price" fieldValue={apartment.price} />
	</>
);

export default ApartmentListingTextData;
