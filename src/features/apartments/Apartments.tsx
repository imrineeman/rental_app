import React from 'react';
import { useAppSelector } from '../../store/hooks';
import ApartmentList from './ApartmentsList';
import ApartmentsFooter from './ApartmentsFooter';

const Apartments = (): JSX.Element => {
	const { apartments } = useAppSelector((state) => state);
	apartments.concat();
	return (
		<>
			<ApartmentList />
			<ApartmentsFooter />
		</>
	);
};

export default Apartments;
