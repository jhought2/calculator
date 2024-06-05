// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Waits for the DOM to be fully loaded before running the script

    const display = document.getElementById('display');
    // Selects the display input field

    const buttons = Array.from(document.getElementsByClassName('btn'));
    // Selects all buttons with the class 'btn' and converts them into an array

    buttons.forEach(button => {
        // Iterates through each button

        button.addEventListener('click', () => {
            // Adds a click event listener to each button

            const value = button.getAttribute('data-value');
            // Retrieves the data-value attribute of the clicked button

            switch (value) {
                case 'C':
                    display.value = '';
                    // Clears the display if the 'C' button is clicked
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                        // Evaluates the expression in the display and shows the result
                    } catch {
                        display.value = 'Error';
                        // Shows 'Error' if the expression is invalid
                    }
                    break;
                default:
                    display.value += value;
                    // Appends the value of the clicked button to the display
            }
        });
    });
});
