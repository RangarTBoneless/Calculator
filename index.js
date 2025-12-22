const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.getElementById("clear")
const del = document.getElementById("delete")

const clearNumber = 1

function handleNumbers(button) {
        display.value += button.textContent
}
 
numbers.forEach(button => {
    button.addEventListener("click", () => handleNumbers(button))
})

function handleOperators(button) {
    display.value += button.textContent
}

operators.forEach(button => {
    button.addEventListener("click", () => handleOperators(button))
})

clear.addEventListener("click", function() {
    display.value = display.value.slice(0, -1)
})

del.addEventListener("click", function() {
    display.value = display.value = ""
})
