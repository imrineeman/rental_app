import React, { useState } from 'react';
import TextInput from '../../shared/components/TextInput';
import RangeSliderInput from '../../shared/components/RangeSliderInput';
import FeatureButtonsRow from './FeatureButtonsRow';
import { ApartmentFeatures } from '../../shared/types/types';
import { useAppDispatch } from '../../store/hooks';
import { updateFilterActionCreator } from '../../features/filters/filtersSlice';
import { useCallback, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const RentalUserInput = () => {
	const [selectedFeatures, setSelectedFeatures] = useState<
		ApartmentFeatures[]
	>([]);

	const dispatch = useAppDispatch();
	const stableDispatch = useCallback(dispatch, []);

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

	useEffect(() => {
		stableDispatch(
			updateFilterActionCreator({
				filterType: 'features',
				filterValue: [...selectedFeatures],
			}),
		);
	}, [selectedFeatures, stableDispatch]);

	return (
		<div className="RentalUserInput">
			<Stack
				spacing={2}
				margin={1}
				direction="row"
				justifyContent="center"
				divider={<Divider orientation="vertical" flexItem />}>
				<TextInput inputFieldName={'city'} />
				<TextInput inputFieldName={'address'} />
				<RangeSliderInput
					filterType={'rooms'}
					sliderConfigValues={{
						minValue: 1,
						maxValue: 10,
						increment: 1,
					}}
				/>
				<RangeSliderInput
					filterType={'price'}
					sliderConfigValues={{
						minValue: 1000,
						maxValue: 10000,
						increment: 1000,
					}}
				/>
			</Stack>
			<Stack
				spacing={2}
				margin={1}
				direction="row"
				justifyContent="center"
				divider={<Divider orientation="vertical" flexItem />}>
				<FeatureButtonsRow
					handleFeatureButtonClick={handleFeatureButtonClick}
				/>
				<Button
					variant="outlined"
					color="error"
					onClick={handleResetClick}>
					Reset Feature Filters
				</Button>
			</Stack>
		</div>
	);
};

export default RentalUserInput;
