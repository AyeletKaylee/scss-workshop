import { Home, Header } from './components';
import './stylesheets/index';

function App() {
	return (
		<div className="App">
			<div className='background-overlay'></div>

				<Header />
				<Home />
			
		</div>
	);
}

export default App;
