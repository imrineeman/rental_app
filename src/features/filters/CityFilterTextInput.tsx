import TextInput from '../../shared/components/TextInput';
import { updateCityFilterActionCreator } from './filtersSlice';

const CityFilterTextInput = () => {
	return (
		<TextInput
			inputFieldName="city"
			reducer={updateCityFilterActionCreator}
		/>
	);
};

export default CityFilterTextInput;
