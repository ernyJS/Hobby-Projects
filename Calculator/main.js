// imports from HTML -------------------------------------

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const times = document.querySelector('.times');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const cancel = document.querySelector('.cancel');
const equals = document.querySelector('.equals');
const text = document.querySelector('.text');
const pre = document.querySelector('.preview');
const del = document.querySelector('.delete');
const dot = document.querySelector('.dot');

// VARIABLES MEANING:
// clicked - info how many times operator button was clicked.
// result - info when to reset the display container after calculation.
// operator - info when to reset the display containter after putting new number.
// i - looping the "number before operator" action.
// usedNumber - info how many times the number button was clicked before clicking operator button.
// Counters - checks which operator has been used.
// j - looping the equals multiple mode.

let clicked = 0; 
let x = 0;
let y = 0;
let z = 0;
let result = 0; 
let operator = 0; 
let i = 0;
let j = 0;
let usedNumber = 0;
let plusCount = 0;
let minusCount = 0;
let divideCount = 0;
let timesCount = 0;

// button functions -----------------------------------------------

one.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(one.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(one.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(one.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(one.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(one.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(one.textContent);
        j = 0;
    }
})

two.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(two.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(two.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(two.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(two.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(two.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(two.textContent);
        j = 0;
    }
})

three.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(three.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(three.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(one.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(three.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(three.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(three.textContent);
    }
})

four.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(four.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(four.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(four.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(four.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(four.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(four.textContent);
    }
})

five.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(five.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(five.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(five.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(five.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(five.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(five.textContent);
    }
})

six.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(six.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(six.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(six.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(six.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(six.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(six.textContent);
    }
})

seven.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(seven.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(seven.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(seven.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(seven.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(seven.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(seven.textContent);
    }
})

eight.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(eight.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(eight.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(eight.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(eight.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(eight.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(eight.textContent);
    }
})

nine.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(nine.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(nine.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(nine.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(nine.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(nine.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(nine.textContent);
    }
})

zero.addEventListener('click', function(){
    usedNumber += 1;
    if(text.textContent === "0"){
        result = 0;
        text.textContent = Number(zero.textContent);
    } else if(operator === 0 && result === 0 && j === 0){
        text.textContent += Number(zero.textContent);
    } else if(operator === 1 && result === 0){
        text.textContent = Number(zero.textContent);
        operator = 0;
    } else if(operator === 0 && result === 1){
        text.textContent = Number(zero.textContent);
        result = 0;
    } else if(operator === 1 && result === 1){
        text.textContent = Number(zero.textContent);
        result = 0;
        operator = 0;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = Number(zero.textContent);
    }
})

// operator functions ------------------------------------------------------------

plus.addEventListener('click', function(){
    plusCount += 1;
    minusCount = 0;
    divideCount = 0;
    timesCount = 0;
    if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 0){
        x = Number(text.textContent);
        pre.textContent = x;
        clicked = 1;
        operator = 1;
        usedNumber = 0;
    } else if(usedNumber === 0){
        return;
    } else if(clicked === 1 && operator === 0 && usedNumber > 0 && i === 0){
        i = 1;
        y = Number(text.textContent);
        z = (x+y);
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 1){
        x = Number(text.textContent);
        y = (x+z);
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 2){
        x = Number(text.textContent);
        z = (x+y);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
})

minus.addEventListener('click', function(){
    plusCount = 0;
    minusCount += 1;
    divideCount = 0;
    timesCount = 0;
    if(clicked === 0 && operator === 0 && usedNumber === 0 && i === 0){
        text.textContent = '-';
    } else if(clicked === 0 && operator === 0 && usedNumber === 0 && i >= 1){
        if (pre.textContent[pre.textContent.length - 1].includes('-')){
            return;
        } else {
            pre.textContent += '-';
        }
        if(text.textContent.includes('-')){
            return;
        }
    }
    if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 0){
        x = Number(text.textContent);
        pre.textContent = x;
        pre.textContent += '-';
        clicked = 1;
        operator = 1;
        usedNumber = 0;
    } else if(usedNumber === 0){
        return 0;
    } else if(clicked === 1 && operator === 0 && usedNumber > 0 && i === 0){
        i = 1;
        y = Number(text.textContent);
        z = x-y;
        if(z < 0){
            pre.textContent = z;
            text.textContent = z;
            result = 1;
            clicked = 0;
            usedNumber = 0;
        } else{
            pre.textContent = z;
            text.textContent = Number(z);
            result = 1;
            clicked = 0;
            usedNumber = 0;
        }
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 1){
        x = Number(text.textContent);
        y = z-x;
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 2){
        x = Number(text.textContent);
        z = y-x;
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
})

divide.addEventListener('click', function(){
    plusCount = 0;
    minusCount = 0;
    divideCount += 1;
    timesCount = 0;
    if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 0){
        x = Number(text.textContent);
        pre.textContent = x;
        clicked = 1;
        operator = 1;
        usedNumber = 0;
    } else if(usedNumber === 0){
        return;
    } else if(clicked === 1 && operator === 0 && usedNumber > 0 && i === 0){
        i = 1;
        y = Number(text.textContent);
        z = x/y;
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
        x = 0;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 1){
        x = Number(text.textContent);
        y = z/x;
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 2){
        x = Number(text.textContent);
        z = y/x;
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
})

times.addEventListener('click', function(){
    plusCount = 0;
    minusCount = 0;
    divideCount = 0;
    timesCount += 1;
    if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 0){
        x = Number(text.textContent);
        pre.textContent = x;
        clicked = 1;
        operator = 1;
        usedNumber = 0;
    } else if(usedNumber === 0){
        return;
    } else if(clicked === 1 && operator === 0 && usedNumber > 0 && i === 0){
        i = 1;
        y = Number(text.textContent);
        z = (x*y);
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 1){
        x = Number(text.textContent);
        y = (x*z);
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(clicked === 0 && operator === 0 && usedNumber > 0 && i === 2){
        x = Number(text.textContent);
        z = (x*y);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
})

cancel.addEventListener('click', function(){
    pre.textContent = "";
    text.textContent = 0;
    clicked = 0;
    x = 0;
    y = 0;
    z = 0;
    result = 0;
    operator = 0;
    usedNumber = 0;
    i = 0;
    plusCount = 0;
    minusCount = 0;
    divideCount = 0;
    timesCount = 0;
    j = 0;
})

dot.addEventListener('click', function(){
    if(text.textContent[0] === "-" && text.textContent.length === 1){
        console.log('1')
        return;
    } else if(text.textContent.length === 0){
        return;
    } else if(text.textContent.includes('.')){
        return;
    } else if(result === 1){
        return;
    } else if(operator === 0 && result === 0 && j === 1){
        text.textContent = '0';
        j = 0;
    } else {
        text.textContent += '.';
    }
})

del.addEventListener('click', function(){
            usedNumber += 1;
            text.textContent = text.textContent.slice(0, text.textContent.length - 1);
            if(text.textContent === ''){
                text.textContent = 0;
            }
            if(text.textContent.includes('.')){
                text.textContent = 0;
            }
})

equals.addEventListener('click', function(){
    if(plusCount > 0 && i === 0 && minusCount === 0 && divideCount === 0 && timesCount === 0){
        i = 1;
        y = Number(text.textContent);
        z = (x+y);
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
    } else if(plusCount >= 1 && i === 1 && minusCount === 0 && divideCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        y = (x+z);
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(plusCount >= 1 && i === 2 && minusCount === 0 && divideCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        z = (x+y);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    } else if (minusCount === 1 && plusCount === 0 && divideCount === 0 && timesCount === 0 && i ===0 && clicked === 0 && operator === 0 && usedNumber > 0 && j === 0){
        x = Number(text.textContent);
        z = y+x;
        pre.textContent = z;
        text.textContent = z;
        j += 1;
    } else if (minusCount === 1 && plusCount === 0 && divideCount === 0 && timesCount === 0 && i ===0 && clicked === 0 && operator === 0 && usedNumber > 0 && j === 1){
        x = Number(text.textContent);
        y = x+z;
        pre.textContent = y;
        text.textContent = y;
        j === 0;
    } else if(minusCount > 0 && i === 0 && plusCount === 0 && divideCount === 0 && timesCount === 0){
        y = Number(text.textContent);
        z = x-y;
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
        i = 1;
    } else if(minusCount >= 1 && i === 1 && plusCount === 0 && divideCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        y = z-x;
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(minusCount >= 1 && i === 2 && plusCount === 0 && divideCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        z = (y-x);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
    else if(divideCount > 0 && i === 0 && plusCount === 0 && minusCount === 0 && timesCount === 0){
        i = 1;
        y = Number(text.textContent);
        z = (x/y);
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
    } else if(divideCount >= 1 && i === 1 && plusCount === 0 && minusCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        y = (z/x);
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(divideCount >= 1 && i === 2 && plusCount === 0 && minusCount === 0 && timesCount === 0){
        x = Number(text.textContent);
        z = (y/x);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }   else if(timesCount > 0 && i === 0 && plusCount === 0 && minusCount === 0 && divideCount === 0){
        i = 1;
        y = Number(text.textContent);
        z = (x*y);
        pre.textContent = z;
        text.textContent = z;
        result = 1;
        clicked = 0;
        usedNumber = 0;
        y = 0;
    } else if(timesCount >= 1 && i === 1 && plusCount === 0 && minusCount === 0 && divideCount === 0){
        x = Number(text.textContent);
        y = (x*z);
        text.textContent = y;
        pre.textContent = y;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 2;
    } else if(timesCount >= 1 && i === 2 && plusCount === 0 && minusCount === 0 && divideCount === 0){
        x = Number(text.textContent);
        z = (x*y);
        text.textContent = z;
        pre.textContent = z;
        clicked = 0;
        result = 1;
        usedNumber = 0;
        i = 1;
    }
})