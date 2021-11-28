import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';
//finds an element with a role of button and text of 'Change to blue'
test('button has correct initial color', () => {
	render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' } );
	//expect the background color to be red
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

	//click button
	fireEvent.click(colorButton);

	//expect the background col to be blue
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

	//expect the button text to be 'change to red'
	expect(colorButton.textContent).toBe('Change to red');

});
test("initial conditions", () => {
	render(<App />);

	//check that the button starts out enabled
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorButton).toBeEnabled();

	//check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});
test('button is disabled after checking', () => {
	render(<App />);

	//click on checkbox to change the state of the button
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	fireEvent.click(checkbox);

	//verify if button is disabled
	const colorButton = screen.getByRole('button');
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();

});
test('button is gray when disabled', () => {
	render(<App />);

	const checkbox = screen.getByRole('checkbox');
	const button = screen.getByRole('button');

	//disable button and make it gray
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();
	expect(button).toHaveStyle({ backgroundColor: 'gray' });

	//enable button and make it red
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'red' });

	//click button to change color
	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'blue' });

	//disable button
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();

	//enable button (button is blue)
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'blue'});
});
//describe: function in test (as if you were using an if)
describe('spaces before camel-case capital letters', () => {
	test('works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});
	test('works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	test('works for multiple inner capital letter', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});


