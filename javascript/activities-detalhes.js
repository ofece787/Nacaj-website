let imgPrinc = document.querySelector('.visualizacao img')

let imagemPrincipal = document.querySelector('.img-principal')
let imagensAuxiliares = document.querySelectorAll('.item')
let visualizacao = document.querySelector('.visualizacao')
let closeButton = document.querySelector('.close-button')
let backFilter = document.querySelector('.backFilter')




imagemPrincipal.addEventListener('click', () => {
    const imgSrc = imagemPrincipal.innerHTML.split(' ')
    const srcImgAttr = imgSrc[1].split('"')

    let imgPr = document.createElement('img')
    imgPr.setAttribute('src', srcImgAttr[1])

    visualizacao.appendChild(imgPr)

    if(visualizacao.childElementCount > 0) {
            visualizacao.classList.add('.visualizacao-extendida')
            closeButton.classList.remove('closeNone')
            visualizacao.style.height = '100%'
            backFilter.style.height = '100%'
            closeButton.addEventListener('click', () => {
                visualizacao.removeChild(imgPr)
                visualizacao.classList.remove('.visualizacao-extendida')
                closeButton.classList.add('closeNone')
                visualizacao.style.height = '0%'
                backFilter.style.height = '0%'
            })

        }
})

const elemento = imagensAuxiliares.forEach(element => {
    element.addEventListener('click', () => {
        let parts = element.innerHTML.split(' ')
        let srcAttr = parts[1].split('"')
        
        let img = document.createElement('img')
        img.setAttribute('src', srcAttr[1])
        
        visualizacao.appendChild(img)

        if(visualizacao.childElementCount > 0) {
            visualizacao.classList.add('.visualizacao-extendida')
            closeButton.classList.remove('closeNone')
            visualizacao.style.height = '100%'
            backFilter.style.height = '100%'



            closeButton.addEventListener('click', () => {+
                visualizacao.removeChild(img)
                visualizacao.classList.remove('.visualizacao-extendida')
                closeButton.classList.add('closeNone')
                visualizacao.style.height = '0%'
                backFilter.style.height = '0%'

            })

        }      

    })
});






