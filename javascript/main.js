var backImage = document.querySelector('#landingMainText')
var seta = document.querySelector('.outline')
let progress = document.querySelectorAll('.dots')
seta.addEventListener('click', landingScrollDown)


var list = [
    'url(../imagens/primeira_img.jpg)',
    'url(../imagens/1749555959361.jpg)',
    'url(../imagens/1749556013214.jpg)',
    'url(../imagens/1749556152476.jpg)',
    'url(../imagens/1749556265346.jpg)'
]
backImage.classList.transition = "ease-in"
backImage.style.backgroundPosition = 'center'
backImage.style.backgroundSize = 'cover'

//Este e o codigo responsavel por trocar as imagens de fundo da landing page
//Ass imagens sao trocadas com base num cronometro de 5.5 segundos para que
//cada imagem tenha um tempo de tela rasuavel.
var i = 0
function changeBackground() {
    backImage.style.backgroundImage = `${list[i]}`
    
    if(i > list.length - 1) {
        progress.forEach((element) => {
            element.classList.remove('atual')
        })
        for (let j = 0; j < list.length; j++) {
            backImage.style.backgroundImage = `${list[i]}`
        }
        i = 0
        changeBackground()
    } else{
        progress[i].classList.add('atual')
        i++
    }
}

changeBackground()

//Esta e a funcao embutidade na linguagem que usei para cronometrar a funcao de mudanca de fundo.
setInterval(() => {
    changeBackground();
}, 4000);

//Este e a funcao responsavel pela accao da seta na landing page para rolar para baixo se o usuario
//nao souber se existe algo mais abaixo, a funcao faz uma rolagem de 300 pixels.
function landingScrollDown() {
    window.scrollTo({
        top: 300,
        behavior: "smooth"
    })
}

