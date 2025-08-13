let imgPrinc = document.querySelector('.visualizacao img')

let imagemPrincipal = document.querySelector('.img-principal')
let imagensAuxiliares = document.querySelectorAll('.item')
let visualizacao = document.querySelector('.visualizacao')
let closeButton = document.querySelector('.close-button')
let backFilter = document.querySelector('.backFilter')


//Funcao complicada que estiver a ler isto por favor melhore este codigo ou qualquer outro neste projecto

//Funcao responsavel por mostrar a imagem principal em tela cheia nos detalhes das atividades
//Principais funcionalidades
// - Mostrar a imagem em tela cheia
// - Embacar o painel de fundo para nao atrapalhar o usuario
// - Fechar a amostragem em tela cheia da imagem pelo click ou rolagem da pagina
imagemPrincipal.addEventListener('click', () => {
    const imgSrc = imagemPrincipal.innerHTML.split(' ')
    const srcImgAttr = imgSrc[1].split('"')

    let imgPr = document.createElement('img')
    imgPr.setAttribute('src', srcImgAttr[1])

    visualizacao.appendChild(imgPr)

    if(visualizacao.childElementCount > 0) {
            visualizacao.classList.add('.visualizacao-extendida')
            closeButton.classList.remove('closeNone')
            visualizacao.style.height = '100vh'
            backFilter.style.height = '100vh'
            closeButton.addEventListener('click', () => {
                if(visualizacao.contains(imgPr)) {
                    visualizacao.removeChild(imgPr)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }
            })
            window.addEventListener('scroll', () => {
                if(visualizacao.contains(imgPr)) {
                    visualizacao.removeChild(imgPr)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }
            })
            backFilter.addEventListener('click', () => {
                if(visualizacao.contains(imgPr)) {
                    visualizacao.removeChild(imgPr)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }
            })

        }
})

//Funcao responsavel por mostrar as imagens secundarias em tela cheia nos detalhes das atividades
//Principais funcoes:
// - Mostrar cada uma das iamgens secundarias em tela cheia
// - Embacar o painel de fundo para nao distrair o usuario
// - Fechar a amostragem em tela cheia atraves do click ou rolagem da pagina
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



            closeButton.addEventListener('click', () => {
                if(visualizacao.contains(img)) {
                    visualizacao.removeChild(img)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }

            })
            backFilter.addEventListener('click', () => {
                if(visualizacao.contains(img)) {
                    visualizacao.removeChild(img)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }
            })

            window.addEventListener('scroll', () => {
                if(visualizacao.contains(img)) {
                    visualizacao.removeChild(img)
                    visualizacao.classList.remove('.visualizacao-extendida')
                    closeButton.classList.add('closeNone')
                    visualizacao.style.height = '0%'
                    backFilter.style.height = '0%'
                }
            })
        }      

    })
});

