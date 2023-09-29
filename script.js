const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const equal = document.getElementById("equal")
const numbers = document.querySelectorAll("#number")
const del = document.getElementById("del")
const clearAll = document.getElementById('clearAll')
const clearError = document.getElementById('clearError')


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
  try{display1.value = parseFloat(eval(display2.value))
  resetdisplay2 = true
  }catch{
    alert('Error')
  }
})

del.addEventListener("click", () => {
  display2.value = display2.value.slice(0, -1)
  console.log(display2.value)
})

clearAll.addEventListener('click', ()=>{
  display1.value=''
  display2.value=''
})

clearError.addEventListener('click', ()=>{
  resetdisplay2=false
  display1.value = '0'
})