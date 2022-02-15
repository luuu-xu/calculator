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

let inputObj = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
};

let displayNumber = '';
btnsNumber.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayNumber += `${btn.textContent}`;
        screen.textContent = displayNumber;
        //console.log(inputObj);
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
            let result = limitDigits(operate(inputObj));
            screen.textContent = result;
            displayNumber = '';
            inputObj.firstNumber = result;
            inputObj.secondNumber = '';
            inputObj.operator = window[btn.classList[0]];
        };
        //console.log(inputObj);
    });
});

const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', () => {
    if (inputObj.firstNumber !== '' && inputObj.operator !== '') {
        inputObj.secondNumber = (Number(displayNumber));
        let result = limitDigits(operate(inputObj));
        screen.textContent = result;
        displayNumber = '';
        inputObj.firstNumber = result;
        inputObj.secondNumber = '';
        inputObj.operator = '';
    };
    //console.log(inputObj);
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
    screen.textContent = displayNumber;
});

const btnDot = document.querySelector('.dot');
btnDot.addEventListener('click', () => {
    if (!displayNumber.includes('.')) {
        displayNumber += '.';
        screen.textContent = displayNumber;
    };
});

const btnPlusminus = document.querySelector('.plusminus');
btnPlusminus.addEventListener('click', () => {
    if (!displayNumber.startsWith('-')) {
        //console.log('no');
        displayNumber = '-' + displayNumber;
        screen.textContent = displayNumber;
    } else if (displayNumber.startsWith('-')) {
        displayNumber = displayNumber.slice(1);
        screen.textContent = displayNumber;
    };
});

function limitDigits(result) {
    if (result.toString().length > 11) {
        if (result.toString().includes('-')) {
            if (result.toString().includes('0.')) {
                result = parseFloat(result.toPrecision(9));
            } else if (result.toString().includes('.')) {
                result = parseFloat(result.toPrecision(10));
            } else {
                result = Number(result.toString().slice(0, 12));
            };
        } else {
            if (result.toString().includes('0.')) {
                result = parseFloat(result.toPrecision(10));
            } else if (result.toString().includes('.')) {
                result = parseFloat(result.toPrecision(11));
            } else {
                result = Number(result.toString().slice(0, 11));
            };
        };
    };
    return result;
};