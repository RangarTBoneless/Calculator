const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.getElementById("clear")
const del = document.getElementById("delete")

let operator = ""
let firstNumber = ""
let currentInput = ""
let expression = ""

function handleNumbers(button) {
        currentInput += button.textContent
        display.value = expression + currentInput
}
 
numbers.forEach(button => {
    button.addEventListener("click", () => handleNumbers(button))
})

function handleOperators(button) {
    const op= button.textContent
    if (op === "=") {
    if (firstNumber && operator && currentInput) {
        display.value = calculate(firstNumber, operator, currentInput)
        currentInput = display.value
        firstNumber = ""
        operator = ""
        expression = ""
}
} else {  
    if (currentInput) {
        firstNumber = currentInput
        operator = op
        expression += currentInput + " " + operator + " "
        currentInput = ""
        display.value = expression
        }
    }
}

function calculate(a, op, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    switch (op) {
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        case "/": return b === 0 ? "error": a/b
    }
}

operators.forEach(button => {
    button.addEventListener("click", () => handleOperators(button));
})


clear.addEventListener("click", function() {
    currentInput = ""
    firstNumber = ""
    operator = ""
    expression = ""
    display.value = ""
})

del.addEventListener("click", function() {
    currentInput = currentInput.slice(0, -1)
    display.value = expression + currentInput
    
})
