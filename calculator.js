let runningTotal = 0;
let buffer = "0"; // Initializing buffer as string "0"
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleSymbol(symbol) {
    // Placeholder for symbol handling
}

function handleNumber(numberString) {
    if (buffer === "0") { // Checking if buffer is "0"
        buffer = numberString; // If it is, set buffer to the new number
    } else {
        buffer += numberString; // Otherwise, append the new number to buffer
    }
    screen.innerText = buffer; // Update the screen
}

function init() {
    const action = document.querySelectorAll(".clac-button, .clac-button-double, .clac-button-thrice");
    action.forEach(function(button) {
        button.addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        });
    });
}

init();
