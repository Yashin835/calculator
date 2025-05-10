let inputfield = document.getElementById("display")
const buttons = document.querySelectorAll(".button")
let currentInput = "";
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText
        if (value === "C") {
            inputfield.value = ""
        } else if (value === "=") {
        try{
            inputfield.value = eval(inputfield.value)
        }
        catch(err){
            inputfield.value = "Error"
            setTimeout(() => {
                inputfield.value = ""
            },1000)
        }
        }
        else if (value === "DEL") {
            inputfield.value = inputfield.value.slice(0, -1)
        } else {
            let lastChar = inputfield.value.slice(-1)
            let operators = ["+", "-", "*", "/"]
            if (operators.includes(lastChar) && operators.includes(value)) {
                return
            }
            inputfield.value += value
        }
    })
})
