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

console.log(operate(divide, 10, 20))