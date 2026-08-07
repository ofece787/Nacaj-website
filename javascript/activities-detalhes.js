let imgPrinc = document.querySelector('.visualizacao img')

let imagemPrincipal = document.querySelector('.imagem')
let imagens = document.querySelectorAll('.img-principal img')
let visualizacao = document.querySelector('.visualizacao')
let closeButton = document.querySelector('.close-button')
let backFilter = document.querySelector('.backFilter')


//Funcao complicada que estiver a ler isto por favor melhore este codigo ou qualquer outro neste projecto

//Funcao responsavel por mostrar a imagem principal em tela cheia nos detalhes das atividades
//Principais funcionalidades
// - Mostrar a imagem em tela cheia
// - Embacar o painel de fundo para nao atrapalhar o usuario
// - Fechar a amostragem em tela cheia da imagem pelo click ou rolagem da pagina

imagens.forEach(item => {
    item.addEventListener('click', () => {
        imagemPrincipal.setAttribute('src', item.getAttribute('src'))
        visualizacao.style.height = '100vh'
        backFilter.style.height = '100%' 
        if(imagemPrincipal.clientHeight > imagemPrincipal.clientWidth) {
           // imagemPrincipal.style.height = '100%'
        } else {
           // imagemPrincipal.style.width = '100%'

        }
        
        closeButton.classList.remove('closeNone')
        closeButton.addEventListener('click', () => {
            if(imagemPrincipal.getAttribute('src') == item.getAttribute('src')) {
                imagemPrincipal.setAttribute('src', '')
                visualizacao.style.height = '0%'
                backFilter.style.height = '0%' 
                closeButton.classList.add('closeNone')
            } else {
                console.log('different')
            }
        })
        
    })
})
/*imagemPrincipal.addEventListener('click', () => {

    if(visualizacao.childElementCount > 0) {
            visualizacao.style.display = 'flex'
            closeButton.addEventListener('click', () => {
                if(visualizacao.contains(imgPr)) {
                    visualizacao.removeChild(imgPr)
                    visualizacao.classList.remove('.visualizacao-extendida')
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
*/