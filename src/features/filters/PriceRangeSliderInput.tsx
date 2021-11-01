import React from 'react';
import RangeSliderInput from '../../shared/components/RangeSliderInput';
import { updatePriceFilterActionCreator } from './filtersSlice';

const RoomsRangeSliderInput = () => {
	return (
		<RangeSliderInput
			filterType={'price'}
			sliderConfigValues={{
				minValue: 1000,
				maxValue: 10000,
				increment: 1000,
			}}
			reducer={updatePriceFilterActionCreator}
		/>
	);
};

export default RoomsRangeSliderInput;
