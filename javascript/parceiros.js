let links = document.querySelectorAll('.links')
let botaoExpansorParceiros = document.querySelectorAll('.seta-parceiro-expansor')

botaoExpansorParceiros.forEach(element => {
    element.addEventListener('click', () => {
        let parent = element.parentElement
        if(parent.parentElement.classList.contains('blue') == true){
            parent.parentElement.classList.remove('blue')

        } else{

            parent.parentElement.classList.add('blue')
        }

    })
})