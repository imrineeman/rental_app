import React from 'react';

import Grid from '@mui/material/Grid';
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

	return <Grid item>{renderFeatureChips}</Grid>;
};

export default ApartmentFeatureChips;
