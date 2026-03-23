import dpsLogo from './assets/DPS.svg';
import './App.css';
import { AddressForm } from './components/AddressForm';

function App() {
	return (
		<div className="app-container">
			<header className="header">
				<a href="https://www.digitalproductschool.io/" target="_blank" rel="noreferrer">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
				<h1>German Address Validator</h1>
			</header>
			<main className="main-content">
				<AddressForm />
			</main>
		</div>
	);
}

export default App;
