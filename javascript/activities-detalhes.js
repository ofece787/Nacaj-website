

let imagemPrincipal = document.querySelectorAll('.item')
let visualizacao = document.querySelector('.visualizacao')
let closeButton = document.querySelector('.close-button')

const elemento = imagemPrincipal.forEach(element => {
    element.addEventListener('click', () => {
        let parts = element.innerHTML.split(' ')
        let srcAttr = parts[1].split('"')
        
        let img = document.createElement('img')
        img.setAttribute('src', srcAttr[1])
        
        visualizacao.appendChild(img)

        if(visualizacao.childElementCount > 0) {
            visualizacao.classList.add('.visualizacao-extendida')
            closeButton.addEventListener('click', () => {
                console.log('closed')
                visualizacao.removeChild(img)
                visualizacao.classList.remove('.visualizacao-extendida')
            })
        } else if(visualizacao.childElementCount <= 0) {
            closeButton.classList.remove('close-button')
            closeButton.classList.add('closeNone')
        }
        
        

    })
});

console.log(visualizacao.childElementCount)


