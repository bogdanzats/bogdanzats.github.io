//Buttons
const field = document.querySelector('.value_field');
const clean = document.querySelector('.clean');
const unary_minus = document.querySelector('.unary_minus');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equel = document.querySelector('.equel');

//Operands
const dot= document.querySelector('.dot');
const num0 = document.querySelector('.num-0');
const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

let numClicked = true;
let currentRes = null;
let operatorClicked = null;
let currentOperator = null;
let percentClicked = true;

numbers.forEach(elem => elem.addEventListener('click', function () {
    if(numClicked){
        let currentNum = +elem.innerHTML;
        operatorClicked = true;
        if(field.innerHTML === '0' || field.innerHTML == currentRes) field.innerHTML = currentNum;
        else if(field.innerHTML.length < 9) field.innerHTML += currentNum;
    }
}))

numbers.forEach(elem => elem.addEventListener('keydown', function (e) {
    if(e.key === '1') field.innerHTML = num1;
    if(e.key === '2') field.innerHTML = num2;
}))

dot.addEventListener('click', ()=>{
    let currentNum = field.innerHTML;
    if(field.innerHTML.length < 8){
        if(!currentNum.includes('.'))
        field.innerHTML = currentNum + '.';
    }
})

clean.addEventListener('click', ()=>{
    field.innerHTML = '0';
    currentRes = null;
    numClicked = true;
})

divide.addEventListener('click', ()=>{
    if(operatorClicked){
        operatorClick('divide');
    } 
    operatorClicked = false;
    numClicked = true;
})

multiply.addEventListener('click', ()=>{
    if(operatorClicked){
        operatorClick('multiply');
    } 
    operatorClicked = false;
    numClicked = true;
})

minus.addEventListener('click', ()=>{
    if(operatorClicked){
        operatorClick('minus');
    } 
    operatorClicked = false;
    numClicked = true;
})

plus.addEventListener('click', ()=>{
    if(operatorClicked){
        operatorClick('plus');
    } 
    operatorClicked = false;
    numClicked = true;
})

percent.addEventListener('click', ()=>{
    if(percentClicked && operatorClicked){
        operatorClick('percent');
    }
    operatorClicked = false;
    percentClicked = false;
    numClicked = true;
})

unary_minus.addEventListener('click', ()=>{
    if(operatorClicked){
        operatorClick('unary_minus');
    } 
    operatorClicked = true;
    numClicked = false;
    if(currentRes){
        field.innerHTML = getResult();
        currentRes = null;
        currentOperator = null;
}})

equel.addEventListener('click', ()=>{
    operatorClicked = true;
    numClicked = false;
    if(currentRes){
        field.innerHTML = getResult();
        currentRes = null;
        currentOperator = null;
    }
})

function operatorClick(operator){
    if(operatorClicked){
        let currentNum = parseFloat(field.innerHTML);
        if(!currentRes){
            currentRes = currentNum;
            currentOperator = operator;
            return;
        }
        console.log(currentRes, currentOperator);
        currentRes = getResult();
        currentOperator = operator;
        field.innerHTML = currentRes;
    }
}

function getResult(){
    let currentNum = parseFloat(field.innerHTML);
    let newCurrNum;
    let currResNum = parseFloat(currentRes);

    switch(currentOperator){
        case 'divide':
            newCurrNum = currResNum / currentNum;
            break;
        case 'multiply':
            newCurrNum = currResNum * currentNum;
            break;
        case 'minus':
            newCurrNum = currResNum - currentNum;
            break; 
        case 'plus':
            newCurrNum = currResNum + currentNum;
            break;
        case 'percent':
            newCurrNum = (currResNum * currentNum) / 100;
            break;
        case 'unary_minus':
            newCurrNum = -currResNum;
            break;              
    }
    return newCurrNum;
}

