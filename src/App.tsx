import React from 'react';

import RentalUserInput from './features/filters/RentalUserInput';
import Apartments from './features/apartments/Apartments';
import './App.css';

const App = () => (
	<div className="App">
		<h1>Rentals Application</h1>
		<RentalUserInput />
		<Apartments />
	</div>
);

export default App;
