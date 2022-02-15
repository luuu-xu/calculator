function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {return 'Error'}
    else {return a / b};
};

function operate(inputObj) {
    return inputObj.operator(inputObj.firstNumber, inputObj.secondNumber);
}

const screen = document.querySelector('.screen');

const btnsNumber = document.querySelectorAll('.number');
//let inputString = '';
let inputObj = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
};

let displayNumber = '';
btnsNumber.forEach((btn) => {
    btn.addEventListener('click', () => {
        //inputString += `${btn.textContent} `;
        //screen.textContent = inputString;
        displayNumber += `${btn.textContent}`;
        //console.log(displayNumber);
        screen.textContent = displayNumber;
        //inputString += `${btn.textContent}`;
        //console.log(inputString);
        /*if (inputObj.firstNumber === '' 
            && inputObj.secondNumber === '' 
            && inputObj.operator === '') {
            inputObj.firstNumber = (Number(displayNumber));
        } else if (inputObj.firstNumber !== '' 
                    && inputObj.secondNumber === ''
                    && inputObj.operator !== '') {
            inputObj.secondNumber = (Number(displayNumber));
        };*/
        console.log(displayNumber);
        console.log(inputObj);
    });
});

const btnsOperator = document.querySelectorAll('.operator');
btnsOperator.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (inputObj.firstNumber === '' && inputObj.operator === '') {
            inputObj.firstNumber = (Number(displayNumber));
            inputObj.operator = window[btn.classList[0]];
            displayNumber = '';
        } else if (inputObj.firstNumber !== '' && inputObj.operator === '') {
            inputObj.operator = window[btn.classList[0]];
        } else if (inputObj.firstNumber !== '' && inputObj.operator !== '') {
            inputObj.secondNumber = (Number(displayNumber));
            //const result = operate(inputObj);
            let result = operate(inputObj);
            //const result = Math.round((operate(inputObj)) * 10000000000) / 10000000000;
            //console.log(result.toString().length);
            if (result.toString().length > 11) {
                if (result.toString().includes('.')) {
                    result = parseFloat(result.toPrecision(11));
                } else {
                    result = Number(result.toString().slice(0, 11));
                };
            };
            screen.textContent = result;
            displayNumber = '';
            inputObj.firstNumber = result;
            inputObj.secondNumber = '';
            inputObj.operator = window[btn.classList[0]];
        };
        //displayNumber = '';
        //screen.textContent = displayNumber;
        console.log(inputObj);
    });
});

const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', () => {
    if (inputObj.firstNumber !== '' && inputObj.operator !== '') {
        inputObj.secondNumber = (Number(displayNumber));
        let result = operate(inputObj);
        //const result = Math.round((operate(inputObj)) * 10000000000) / 10000000000;
        //console.log(result.toString().length);
        if (result.toString().length > 11) {
            if (result.toString().includes('.')) {
                result = parseFloat(result.toPrecision(11));
            } else {
                result = Number(result.toString().slice(0, 11));
            };
        };
        screen.textContent = result;
        displayNumber = '';
        inputObj.firstNumber = result;
        inputObj.secondNumber = '';
        inputObj.operator = '';
    }
    //console.log(result)
    console.log(inputObj);
});

const btnAC = document.querySelector('.allclear');
btnAC.addEventListener('click', () => {
    inputObj.firstNumber = '';
    inputObj.secondNumber = '';
    inputObj.operator = '';
    displayNumber = '';
    screen.textContent = '';
    console.log(inputObj);
});

const btnC = document.querySelector('.clear');
btnC.addEventListener('click', () => {
    displayNumber = '';
    //console.log(displayNumber);
    screen.textContent = displayNumber;
})