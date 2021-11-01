import React from 'react';
import { Apartment } from '../../shared/types/types';
import Chip from '@mui/material/Chip';

interface ApartmentFeatureChipsProps {
	apartment: Apartment;
}

const ApartmentFeatureChips = ({ apartment }: ApartmentFeatureChipsProps) => {
	const renderFeatureChips = ((): JSX.Element[] => {
		let chipArr: JSX.Element[] = [];
		if (apartment.features != null) {
			chipArr = apartment.features.map((feature) => (
				<Chip
					key={feature}
					label={feature}
					variant="outlined"
					sx={{ margin: '0.2em' }}
				/>
			));
		}
		return chipArr;
	})();

	return <>{renderFeatureChips}</>;
};

export default ApartmentFeatureChips;
