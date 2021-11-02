import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { ApartmentFilter } from '../types/types';
import { useAppDispatch } from '../../store/hooks';
import { capitalizeFirstLetter } from '../utils/utils';
import { useEffect } from 'react';

interface RangeSliderProps {
	filterType: Extract<ApartmentFilter, 'rooms' | 'price'>;
	sliderConfigValues: {
		minValue: number;
		maxValue: number;
		increment: number;
	};
	reducer: any;
}

const RangeSliderInput = ({
	filterType,
	sliderConfigValues,
	reducer,
}: RangeSliderProps) => {
	const [value, setValue] = React.useState<number[]>([
		sliderConfigValues.minValue,
		sliderConfigValues.maxValue,
	]);

	const dispatch = useAppDispatch();

	const handleChange = (_event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	useEffect(() => {
		dispatch(
			reducer({
				filterValue: value,
			}),
		);
	}, [value, filterType, dispatch, reducer]);

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
