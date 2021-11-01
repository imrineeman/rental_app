import React from 'react';
import { featureFilters } from '../../shared/types/types';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';

interface FeatureButtonsRowProps {
	handleFeatureButtonClick: any;
	selected: any;
}
const FeatureButtonsRow = ({
	handleFeatureButtonClick,
	selected,
}: FeatureButtonsRowProps) => {
	const isSelected = (feature: any) =>
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
