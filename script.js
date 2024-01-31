const numButn = document.querySelectorAll('.button');
const display = document.querySelector('#display');
const prevOp = document.querySelector('.prev-op');
const op = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
// Additon function

const addition = function(a, b) {
    return (prevValue += currentValue)
}

// Subtraction function

const subtraction = function(a, b) {
    return (prevValue -= currentValue)
}

// multiplication function

const multiply = function(a, b) {
    return (prevValue *= currentValue) 
}

// division function
const divide = function(a, b) {
    return (prevValue /= currentValue)
}

// const equals = function(prevValue, operator, currentValue){
//     return `${prevValue} ${currentValue}`
// }



let prevValue = '';
let currentValue = '';
let operator = '';

numButn.forEach((button)=> {
    button.addEventListener('click', function(e) {
        test(e.target.value)
        display.innerHTML = currentValue;

    })
    
})

op.forEach((operator)=> {
    operator.addEventListener('click', function(e) {
        handleOp(e.target.value)
    })
})

clear.addEventListener('click', () => {
    currentValue = '';
    prevValue = '';
    operator = '';
    display.innerHTML = currentValue;
})

equals.addEventListener('click', ()=> {
    handleResult();
})



const test = function(num){
    currentValue += num
    console.log(currentValue)
}

const handleOp = function(op){
    operator = op
    console.log(operator)
    prevValue = currentValue
    currentValue = ''
}


const handleResult = function(){
    prevValue = parseInt(prevValue);
    currentValue = parseInt(currentValue);

    if (operator == '+'){
        console.log(addition());
    }
    else if (operator == '-'){
        console.log(subtraction());
    }
    else if (operator == '*') {
        console.log(multiply())
    }
    else if (operator == '/') {
        console.log(divide())
    }


}
