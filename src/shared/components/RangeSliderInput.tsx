import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ApartmentFilter } from '../types/types';
import { useAppDispatch } from '../../store/hooks';
import { updateFilterActionCreator } from '../../features/filters/filtersSlice';
import { capitalizeFirstLetter } from '../utils/utils';
import { useCallback, useEffect } from 'react';

interface RangeSliderProps {
	filterType: ApartmentFilter;
	sliderConfigValues: {
		minValue: number;
		maxValue: number;
		increment: number;
	};
}
const RangeSliderInput = ({
	filterType,
	sliderConfigValues,
}: RangeSliderProps) => {
	const [value, setValue] = React.useState<number[]>([
		sliderConfigValues.minValue,
		sliderConfigValues.maxValue,
	]);

	const dispatch = useAppDispatch();
	const stableDispatch = useCallback(dispatch, []);

	const handleChange = (_event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	useEffect(() => {
		stableDispatch(
			updateFilterActionCreator({
				filterType: filterType,
				filterValue: value,
			}),
		);
	}, [value, filterType, stableDispatch]);

	return (
		<Box width="10em" padding="0em">
			{capitalizeFirstLetter(filterType)}
			<Slider
				getAriaLabel={() => 'Numeric range input'}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				step={sliderConfigValues.increment}
				min={sliderConfigValues.minValue}
				max={sliderConfigValues.maxValue}
				size={'medium'}
				color="primary"
			/>
		</Box>
	);
};

export default RangeSliderInput;
