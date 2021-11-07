import React from 'react';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

import { ApartmentFeatures } from '../../shared/types/types';

interface ApartmentFeatureChipsProps {
	features: ApartmentFeatures[] | undefined;
}

const ApartmentFeatureChips = ({ features }: ApartmentFeatureChipsProps) => {
	const renderFeatureChips = ((): JSX.Element[] => {
		if (features != null) {
			return features.map((feature) => (
				<Chip
					key={feature}
					label={feature}
					variant="outlined"
					sx={{ margin: '0.2em' }}
				/>
			));
		}
		return [];
	})();

	return (
		<Grid item data-testid="apartment-feature-chips">
			{renderFeatureChips}
		</Grid>
	);
};

export default ApartmentFeatureChips;
