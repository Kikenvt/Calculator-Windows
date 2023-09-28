const display1 = document.getElementById('display1')

const buttons = document.querySelectorAll('.number')

buttons.forEach(button =>{

    button.addEventListener('click',()=>{

        display1.value += button.value



    })


}
)
