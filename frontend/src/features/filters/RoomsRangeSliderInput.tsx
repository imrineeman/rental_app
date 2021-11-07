import React from 'react';
import RangeSliderInput from '../../shared/components/RangeSliderInput';
import { updateRoomsFilterActionCreator } from './filtersSlice';

const RoomsRangeSliderInput = () => {
	return (
		<RangeSliderInput
			filterType={'rooms'}
			sliderConfigValues={{
				minValue: 1,
				maxValue: 10,
				increment: 1,
			}}
			reducer={updateRoomsFilterActionCreator}
		/>
	);
};

export default RoomsRangeSliderInput;
