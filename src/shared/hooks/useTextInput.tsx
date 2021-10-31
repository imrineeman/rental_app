import { useState } from 'react';

const useTextInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};

export default useTextInput;
