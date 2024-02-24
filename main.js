const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numBtn");
const opBtn = document.querySelectorAll(".opBtn");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector(".clearBtn");
const decimalBtn = document.querySelector("#decimal");
const backSpaceBtn = document.querySelector(".backSpace");
let tempEquation = {}
let clickCount = 0

const add = function(a, b) {
    return parseFloat(a) + parseFloat(b)
}
const subtract = function(a, b) {
    return parseFloat(a) - parseFloat(b)
}
const multiply = function(a, b) {
    return parseFloat(a) * parseFloat(b)
}
const divide = function(a, b) {
    return parseFloat(a) / parseFloat(b)
}

const execute = function(operator, num1, num2){
    let temp = 0;
    let answer = 0;

    if (operator === "+") {
        temp = add(num1, num2)
    } else if (operator === "-") {
        temp = subtract(num1, num2)
    } else if (operator === "*") {
        temp = multiply(num1, num2)
    } else if (operator === "/") {
        temp = divide(num1, num2)
            if (num2 == 0) {
                temp = 0
                alert("Don't do that")
            }
    }

    if (temp % 1 !== 0){
        answer = Math.round(temp * 10 ** 2) / 10 ** 2;
    } else {
        answer = temp
    }

    return answer
}

numBtn.forEach((button) => {button.addEventListener('click', (e) => {
    if (clickCount == 0) {
        display.textContent = e.target.value;
    } else {
    display.textContent += e.target.value;
    }
    decimalBtn.disabled = false
    if (display.textContent.includes(".")) {
        decimalBtn.disabled = true
    }
    clickCount++
})})

opBtn.forEach((button) => {button.addEventListener('click', (e) => {
    if (Object.keys(tempEquation).length >= 2) {
        tempEquation.num2 = display.textContent;
        display.textContent = execute(tempEquation.operator, tempEquation.num1, tempEquation.num2);
        tempEquation.num1 = display.textContent;
        delete tempEquation.num2;
        tempEquation.operator = e.target.value;
        decimalBtn.disabled = false
        clickCount = 0
        console.log(tempEquation)
    } else {
    tempEquation.num1 = display.textContent;
    tempEquation.operator = e.target.value;
    decimalBtn.disabled = false
    clickCount = 0;
    console.log(tempEquation)
    }
})})

equalBtn.addEventListener('click', () => {
    if (Object.keys(tempEquation).length == 2) {
        tempEquation.num2 = display.textContent;
        display.textContent = execute(tempEquation.operator, tempEquation.num1, tempEquation.num2);
        delete tempEquation.num2;
        delete tempEquation.num1;
        delete tempEquation.operator;
        decimalBtn.disabled = false
        clickCount = 0
    } else {

    }
})

clearBtn.addEventListener('click', () => {
    display.textContent = "";
    delete tempEquation.num2;
    delete tempEquation.num1;
    delete tempEquation.operator;
    decimalBtn.disabled = false
    clickCount = 0
})

backSpaceBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
})