import TextInput from '../../shared/components/TextInput';
import { updateAddressFilterActionCreator } from './filtersSlice';

const AddressFilterTextInput = () => {
	return (
		<TextInput
			inputFieldName="address"
			reducer={updateAddressFilterActionCreator}
		/>
	);
};

export default AddressFilterTextInput;
