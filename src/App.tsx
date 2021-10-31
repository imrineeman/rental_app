import React from 'react';

import RentalAppHeader from './components/RentalAppHeader';
import RentalUserInput from './features/filters/RentalUserInput';
import Apartments from './features/apartments/Apartments';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<RentalAppHeader />
			<RentalUserInput />
			<Apartments />
		</div>
	);
};

export default App;
