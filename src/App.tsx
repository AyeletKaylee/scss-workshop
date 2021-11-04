import React from 'react';
import { Home, Header } from './components';
import './stylesheets/index';

const App: React.FC = () => {
	return (
		<div className="App">
			<div className='background-overlay'></div>

			<Header />
			<Home />

		</div>
	);
}

export default App;
