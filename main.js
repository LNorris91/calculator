const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numBtn");
const opBtn = document.querySelectorAll(".opBtn");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector(".clearBtn");

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
const compute = function() {
    let input = display.textContent.split(" ");
    let result = 0;
    let num1 = input[0];
    let num2 = input[2];
        if (input[1] === '+'){
            result = add(num1, num2)
                if(result % 1 !== 0){
                    result = result.toFixed(2)
                }
        } else if (input[1] === "-"){
            result = subtract(num1, num2)
            if(result % 1 !== 0){
                result = result.toFixed(2)
            }
        } else if (input[1] === "*"){
            result = multiply(num1, num2)
            if(result % 1 !== 0){
                result = result.toFixed(2)
            }
        } else if (input[1] === "/"){
            result = divide(num1, num2)
            if(result % 1 !== 0){
                result = result.toFixed(2)
            }
        }
    display.textContent = result
}

numBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += e.target.value;
})})

opBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += " " + e.target.value + " ";
})})

equalBtn.addEventListener('click', () => {
    compute()
})

clearBtn.addEventListener('click', () => {
    display.textContent = ""
})