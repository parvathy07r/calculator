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
    screen.innerText = buffer; // Update the screen
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal.toString(); // Convert runningTotal to string
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0';
            }else {
                buffer = buffer.substring(0, buffer.length-1); 
            }
            break;
    }
    
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        if (intBuffer !== 0) { // Prevent division by zero
            runningTotal /= intBuffer;
        } else {
            alert("Error: Division by zero");
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
        }
    }
}

function handleNumber(numberString) {
    if (buffer === "0") { // Checking if buffer is "0"
        buffer = numberString; // If it is, set buffer to the new number
    } else {
        buffer += numberString; // Otherwise, append the new number to buffer
    }
}

function init() {
    const action = document.querySelectorAll(".clac-button, .clac-button-double, .clac-button-thrice");
    action.forEach(function(button) {
        button.addEventListener('click', function(event) {
            console.log("Button clicked:", event.target.innerText); 
            buttonClick(event.target.innerText);
        });
    });
}

init();
