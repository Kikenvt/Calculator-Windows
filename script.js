const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const numbers = document.querySelectorAll("#number")
const sqr = document.getElementById("sqr")
const raiz = document.getElementById("raiz")
const percent = document.getElementById("percent")
const clearAll = document.getElementById("clearAll")
const clearError = document.getElementById("clearError")
const del = document.getElementById("del")
const invert = document.getElementById("invert")
const equal = document.getElementById("equal")
const changeSign = document.getElementById("changeSign")
let resetdisplay2 = false

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (resetdisplay2) {
      display2.value = ""
      resetdisplay2 = false
    }
    display2.value += number.value
  })
})

equal.addEventListener("click", () => {
  try {
    display1.value = parseFloat(eval(display2.value))
    resetdisplay2 = true
  } catch {
    alert("Error")
  }
})

del.addEventListener("click", () => {
  display2.value = display2.value.slice(0, -1)
  
  resetdisplay2 = false
})

clearAll.addEventListener("click", () => {
  display1.value = ""
  display2.value = ""
})

clearError.addEventListener("click", () => {
  resetdisplay2 = false
  display1.value = "0"
})

sqr.addEventListener("click", () => {
  display1.value = Math.pow(eval(display2.value), 2)
  display2.value = `sqr(${display2.value})`
  resetdisplay2 = true
})

raiz.addEventListener("click", () => {
  display1.value = Math.pow(eval(display2.value), 0.5)
  display2.value = `raiz(${display2.value})`
  resetdisplay2 = true
})

percent.addEventListener("click", () => {
  display1.value = parseFloat(display2.value / 100)
  resetdisplay2 = true
})

changeSign.addEventListener("click", () => {
  if (display1.value !== 0){
    display1.value = -1 * (display1.value)
  }else{
    display1.value

  }
})

invert.addEventListener("click", () =>{
 display2.value = parseFloat(1/(display2.value))
 resetdisplay2 = true
})