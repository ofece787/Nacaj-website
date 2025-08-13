var backImage = document.querySelector('#landingMainText')
var seta = document.querySelector('.outline')
seta.addEventListener('click', landingScrollDown)


var list = ["primeira", "segunda", "terceira", "quarta", "quinta"]
backImage.classList.transition = "ease-in"

//Este e o codigo responsavel por trocar as imagens de fundo da landing page
//Ass imagens sao trocadas com base num cronometro de 5.5 segundos para que
//cada imagem tenha um tempo de tela rasuavel.
var i = 0
function changeBackground() {
    backImage.classList.add(list[i])
    if(i > list.length - 1) {
        for (let j = 0; j < list.length; j++) {
            backImage.classList.remove(list[j])
        }
        i = 0
        changeBackground()
    } else{
        i++
    }
}

changeBackground()

//Esta e a funcao embutidade na linguagem que usei para cronometrar a funcao de mudanca de fundo.
setInterval(() => {
    changeBackground();
}, 5500);

//Este e a funcao responsavel pela accao da seta na landing page para rolar para baixo se o usuario
//nao souber se existe algo mais abaixo, a funcao faz uma rolagem de 300 pixels.
function landingScrollDown() {
    window.scrollTo({
        top: 300,
        behavior: "smooth"
    })
}

