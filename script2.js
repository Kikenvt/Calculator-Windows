const display1 = document.getElementById("display1")
const equal = document.getElementById("equal")
const numbers = document.querySelectorAll(".number")
 

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display1.value += number.value
  })
})

equal.addEventListener("click", () => {
  display1.value = parseFloat(eval(display1.value))
})