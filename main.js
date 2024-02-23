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
const operate = function() {
    let input = display.textContent.split(" ");
    let result = 0;
    
    do {
        let num1 = input[0];
        let num2 = input[2];
        let temp = 0
            if (input[1] === '+'){
                temp += add(num1, num2)
                    if(temp % 1 !== 0){
                        temp = temp.toFixed(2)
                    }
            } else if (input[1] === "-"){
                temp += subtract(num1, num2)
                if(temp % 1 !== 0){
                    temp = temp.toFixed(2)
                }
            } else if (input[1] === "*"){
                temp += multiply(num1, num2)
                if(temp % 1 !== 0){
                    temp = temp.toFixed(2)
                }
            } else if (input[1] === "/"){
                temp += divide(num1, num2)
                if(temp % 1 !== 0){
                    temp = temp.toFixed(2)
                }
            }
        input.splice(0, 3, temp)
        result = temp
    } while (input.length >= 3)

    display.textContent = result
}

numBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += e.target.value;
})})

opBtn.forEach((button) => {button.addEventListener('click', (e) => {
    display.textContent += " " + e.target.value + " ";
})})

equalBtn.addEventListener('click', () => {
    operate()
})

clearBtn.addEventListener('click', () => {
    display.textContent = ""
})