let links = document.querySelectorAll('.links')
let botaoExpansorParceiros = document.querySelectorAll('.seta-parceiro-expansor')

botaoExpansorParceiros.forEach(element => {
    element.addEventListener('click', () => {
        if(element.parentElement.classList.contains('blue') == true){
            element.parentElement.classList.remove('blue')

        } else{

            element.parentElement.classList.add('blue')
            console.log(botaoExpansorParceiros.entries())
        }

    })
})