import React from 'react';

import RentalAppHeader from './components/RentalAppHeader';
import Apartments from './features/apartments/Apartments';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<RentalAppHeader />
			<div>Rental App!!</div>
			<Apartments />
		</div>
	);
};

export default App;
