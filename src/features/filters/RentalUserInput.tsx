import React, { useState, useEffect } from 'react';

import FeatureButtonsRow from './FeatureButtonsRow';
import ApartmentFormToggler from '../apartments/ApartmentFormToggler';
import RoomsRangeSliderInput from './RoomsRangeSliderInput';
import PriceRangeSliderInput from './PriceRangeSliderInput';
import CityFilterTextInput from './CityFilterTextInput';
import AddressFilterTextInput from './AddressFilterTextInput';
import HorizontalStackWithDivider from '../../shared/components/HorizontalStackWithDivider';

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
		<div className="rental-user-input">
			<HorizontalStackWithDivider>
				<CityFilterTextInput />
				<AddressFilterTextInput />
				<RoomsRangeSliderInput />
				<PriceRangeSliderInput />
			</HorizontalStackWithDivider>
			<HorizontalStackWithDivider>
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
			</HorizontalStackWithDivider>
		</div>
	);
};

export default RentalUserInput;
