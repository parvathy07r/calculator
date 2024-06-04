let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    console.log(value);
}

function init() {
    const action = document.querySelector('.clac-button'); 
    action.addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    });
}
