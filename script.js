const topDisplay = document.getElementById("topDisplay")
const bottomDisplay = document.getElementById("bottomDisplay")
const numbers = document.querySelectorAll("#numOp")
const square = document.getElementById("square")
const squareRoot = document.getElementById("squareRoot")
const percent = document.getElementById("percent")
const clearAll = document.getElementById("clearAll")
const clearError = document.getElementById("clearError")
const del = document.getElementById("delete")
const invert = document.getElementById("invert")
const equal = document.getElementById("equal")
const changeSign = document.getElementById("changeSign")
let isResetBottomDisplay = false

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (isResetBottomDisplay) {
      bottomDisplay.value = ""
      isResetBottomDisplay = false
    }
    bottomDisplay.value += number.value
  })
})

equal.addEventListener("click", () => {
  if(bottomDisplay.value !=="")
  try {
    topDisplay.value = parseFloat(eval(bottomDisplay.value))
    isResetBottomDisplay = true
  } catch {
    bottomDisplay.value = "Syntax ERROR"
    topDisplay.value = ""
    isResetBottomDisplay = true
  }
})

del.addEventListener("click", () => {
  bottomDisplay.value = bottomDisplay.value.slice(0, -1)

  isResetBottomDisplay = false
})

clearAll.addEventListener("click", () => {
  topDisplay.value = ""
  bottomDisplay.value = ""
})

clearError.addEventListener("click", () => {
  topDisplay.value = "0"
  isResetBottomDisplay = false
})

square.addEventListener("click", () => {
  topDisplay.value = Math.pow(eval(bottomDisplay.value), 2)
  bottomDisplay.value = `sqr(${bottomDisplay.value})`
  isResetBottomDisplay = true
})

squareRoot.addEventListener("click", () => {
  topDisplay.value = Math.pow(eval(bottomDisplay.value), 0.5)
  bottomDisplay.value = `raiz(${bottomDisplay.value})`
  isResetBottomDisplay = true
})

percent.addEventListener("click", () => {
  topDisplay.value = parseFloat(eval(bottomDisplay.value) / 100)
  isResetBottomDisplay = true
})

changeSign.addEventListener("click", () => {
  if (topDisplay.value !== 0) {
    topDisplay.value = -1 * topDisplay.value
  } else {
    topDisplay.value
  }
})

invert.addEventListener("click", () => {
  bottomDisplay.value = parseFloat(1 / bottomDisplay.value)
  isResetBottomDisplay = true
})
