import React from 'react';
import { featureFilters } from '../../shared/types/types';
import Button from '@mui/material/Button';

interface FeatureButtonsRowProps {
	handleFeatureButtonClick: any;
}
const FeatureButtonsRow = ({
	handleFeatureButtonClick,
}: FeatureButtonsRowProps) => {
	const renderButtonsRow = ((): JSX.Element[] =>
		featureFilters.map((feature) => {
			return (
				<Button
					variant="outlined"
					color="secondary"
					key={feature}
					onClick={() => handleFeatureButtonClick(feature)}>
					{feature}
				</Button>
			);
		}))();
	return <>{renderButtonsRow}</>;
};

export default FeatureButtonsRow;
