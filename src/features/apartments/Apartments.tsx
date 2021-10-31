import React from 'react';
import { useAppSelector } from '../../store/hooks';
import ApartmentList from './ApartmentsList';
import ApartmentsFooter from './ApartmentsFooter';
import ApartmentFormToggler from './ApartmentFormToggler';

const Apartments = (): JSX.Element => {
	const { apartments } = useAppSelector((state) => state);
	const { filters } = useAppSelector((state) => state);

	const isFilterWithinRange = (num: number, range: number[]) =>
		num >= range[0] && num <= range[1];

	const filteredApartments = (() =>
		apartments.filter(
			(apartment) =>
				apartment.city
					.toLowerCase()
					.includes(filters.city.toLowerCase()) &&
				apartment.address
					.toLowerCase()
					.includes(filters.address.toLowerCase()) &&
				filters.features?.every((feature) =>
					apartment.features?.includes(feature),
				) &&
				isFilterWithinRange(apartment.rooms, filters.rooms) &&
				isFilterWithinRange(apartment.price, filters.price),
		))();

	return (
		<div>
			<ApartmentFormToggler />
			<ApartmentList apartments={filteredApartments} />
			<ApartmentsFooter apartmentMatches={filteredApartments.length} />
		</div>
	);
};

export default Apartments;
