const form = document.querySelector('form')
const errorMessage = document.querySelector('.error')
const input = document.querySelector('input')

form.addEventListener('submit', function(e){
    e.preventDefault()
    validation()
})

function validation(){
    let value = input.value
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(value.match(pattern)){
        form.classList.remove('active')
        errorMessage.style.display = 'none'
        input.value = ''
    }
    else{
        form.classList.add('active')
        errorMessage.style.display = 'block'
    }
}