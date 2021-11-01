import React from 'react';

import { ApartmentFeatures } from '../../shared/types/types';
import Chip from '@mui/material/Chip';

interface ApartmentFeatureChipsProps {
	features: ApartmentFeatures[] | undefined;
}

const ApartmentFeatureChips = ({ features }: ApartmentFeatureChipsProps) => {
	const renderFeatureChips = ((): JSX.Element[] => {
		let chipArr: JSX.Element[] = [];
		if (features != null) {
			chipArr = features.map((feature) => (
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

	return <div className="feature-chips">{renderFeatureChips}</div>;
};

export default ApartmentFeatureChips;
