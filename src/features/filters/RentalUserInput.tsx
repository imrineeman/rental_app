import React, { useState, useEffect } from 'react';

import FeatureButtonsRow from './FeatureButtonsRow';
import ApartmentFormToggler from '../apartments/ApartmentFormToggler';
import TextAndRangeFiltersBar from './TextAndRangeFiltersBar';
import HorizontalGridEvenlySpaced from '../../shared/components/HorizontalGridEvenlySpaced';

import { ApartmentFeatures } from '../../shared/types/types';
import { useAppDispatch } from '../../store/hooks';
import { updateFeaturesFilterActionCreator } from '../../features/filters/filtersSlice';

import Button from '@mui/material/Button';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

const RentalUserInput = () => {
	const [selectedFeatures, setSelectedFeatures] = useState<
		ApartmentFeatures[]
	>([]);

	const handleFeatureButtonClick = (feature: ApartmentFeatures) => {
		if (selectedFeatures.includes(feature)) {
			setSelectedFeatures(
				selectedFeatures.filter(
					(clickedFeatures) => clickedFeatures !== feature,
				),
			);
		} else {
			setSelectedFeatures(selectedFeatures.concat(feature));
		}
	};

	const handleResetClick = () => {
		setSelectedFeatures([]);
	};

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			updateFeaturesFilterActionCreator({
				filterValue: [...selectedFeatures],
			}),
		);
	}, [selectedFeatures, dispatch]);

	return (
		<>
			<TextAndRangeFiltersBar />
			<HorizontalGridEvenlySpaced>
				<FeatureButtonsRow
					handleFeatureButtonClick={handleFeatureButtonClick}
					selected={selectedFeatures}
				/>
				<Button
					variant="outlined"
					color="error"
					onClick={handleResetClick}>
					<ReplayRoundedIcon />
				</Button>
				<ApartmentFormToggler />
			</HorizontalGridEvenlySpaced>
		</>
	);
};

export default RentalUserInput;
