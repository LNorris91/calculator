const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numBtn");
const opBtn = document.querySelectorAll(".opBtn");

numBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += e.target.value;
    let firstNum = display.textContent;
})})

opBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += e.target.value;
    let op = display.textContent;
})})

const add = function(a, b) {
    return a + b
}
const subtract = function(a, b) {
    return a - b
}
const multiply = function(a, b) {
    return a * b
}
const divide = function(a, b) {
    return a / b
}

let num1
let operator
let num2

const operate = function(operator, num1, num2) {
   return operator(num1, num2)
}

//console.log(operate(divide, 10, 20))