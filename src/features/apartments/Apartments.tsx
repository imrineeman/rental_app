import React from 'react';
import { useAppSelector } from '../../store/hooks';
import ApartmentList from './ApartmentsList';
import ApartmentsFooter from './ApartmentsFooter';
import ApartmentFormToggler from './ApartmentFormToggler';
import { Apartment } from '../../shared/types/types';

const Apartments = (): JSX.Element => {
	const { apartments } = useAppSelector((state) => state);
	const { filters } = useAppSelector((state) => state);

	const isIncludes = <T extends string>(attribute: T, filter: T) =>
		attribute.toLowerCase().includes(filter.toLowerCase());

	const isFilterWithinRange = (num: number, range: number[]) =>
		num >= range[0] && num <= range[1];

	const isHasFeatures = (apartment: Apartment) =>
		filters.features?.every((feature) =>
			apartment.features?.includes(feature),
		);

	const filteredApartments = (() =>
		apartments.filter(
			(apartment) =>
				isIncludes(apartment.city, filters.city) &&
				isIncludes(apartment.address, filters.address) &&
				isFilterWithinRange(apartment.rooms, filters.rooms) &&
				isFilterWithinRange(apartment.price, filters.price) &&
				isHasFeatures(apartment),
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
