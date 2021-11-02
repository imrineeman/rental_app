import React from 'react';

import HorizontalGridEvenlySpaced from '../../shared/components/HorizontalGridEvenlySpaced';
import RoomsRangeSliderInput from './RoomsRangeSliderInput';
import PriceRangeSliderInput from './PriceRangeSliderInput';
import CityFilterTextInput from './CityFilterTextInput';
import AddressFilterTextInput from './AddressFilterTextInput';

const TextAndRangeFiltersBar = (): JSX.Element => (
	<>
		<HorizontalGridEvenlySpaced>
			<CityFilterTextInput />
			<AddressFilterTextInput />
			<RoomsRangeSliderInput />
			<PriceRangeSliderInput />
		</HorizontalGridEvenlySpaced>
	</>
);

export default TextAndRangeFiltersBar;
