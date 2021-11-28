import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1'); //se encontrar uma capital letter no meio
											  //de uma palavra e mesmo que ela se repita
											  //varias vezes ele irá fazer o replace
}

function App() {
  let [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  let newButtonColor = buttonColor === 'red' && !disabled ? 'blue' : 'red';

  return (
   <div >
	  <button
	  	  style={{backgroundColor: disabled ? 'gray' : buttonColor}}
			onClick={() => setButtonColor(newButtonColor)}
			disabled={disabled}>

		  Change to {newButtonColor}</button>
		  <input
        	type="checkbox"
       		id="disable-button-checkbox"
        	defaultChecked={disabled}
       		aria-checked={disabled}
        	onChange={(e) => setDisabled(e.target.checked)} />
    		<label htmlFor="disable-button-checkbox">Disable button</label>
	</div>
  );
}

export default App;
