import React from 'react';

import { featureFilters, ApartmentFeatures } from '../../shared/types/types';
import Button from '@mui/material/Button';

interface FeatureButtonsRowProps {
	handleFeatureButtonClick: (feature: ApartmentFeatures) => void;
	selected: typeof featureFilters;
}
const FeatureButtonsRow = ({
	handleFeatureButtonClick,
	selected,
}: FeatureButtonsRowProps) => {
	const isSelected = (feature: ApartmentFeatures) =>
		selected.includes(feature) ? 'contained' : 'outlined';

	const renderButtonsRow = ((): JSX.Element[] =>
		featureFilters.map((feature) => {
			return (
				<Button
					variant={isSelected(feature)}
					color="primary"
					key={feature}
					onClick={() => handleFeatureButtonClick(feature)}>
					{feature}
				</Button>
			);
		}))();
	return <>{renderButtonsRow}</>;
};

export default FeatureButtonsRow;
