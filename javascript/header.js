let scroolPosDisplay = window.scrollY
var navList = document.querySelector('#nav-list')
var menuButton = document.querySelector('#menu')
var body = document.querySelector('body')
let headerRetract = document.querySelector('#homePageHeader')
let main = document.querySelector('main')
let voltarCima = document.querySelector('.voltar-cima')

//Funcao responsavel por observar o estado atual do menu de navegacao
function retractHeader() {
    getState = navList.classList[0]
    
    if(getState == "extended") {
        menuExtend()
    }
    
}


// Esta e a funcao que tem como unica responsabilidade mostrar o menu de paginas navegaveis
//Principais comportamentos
// - Mostrar menu
// -Esconder menu
menuButton.addEventListener('click', menuExtend)
function menuExtend() {
    var className = navList.classList[0]

    if(className == 'retracted') {
        navList.classList.remove('retracted')
        navList.classList.add('extended')
    } else {
        navList.classList.remove('extended')
        navList.classList.add('retracted')
    }
    
}

//Funcao responsavel por desencadear alguns comportamentos na pagina quando detecta a rolagem da pagina.
//As principais funcoes que sao chamadas sao:
// -Mostrar cabecalho
// -Esconder cabecalho
// - Mostrar o botao voltar para cima
// -Esconder o botao voltar para cima
window.addEventListener('scroll', () => {
    retractHeader()
    const currentposition = window.scrollY

    
    if (currentposition > scroolPosDisplay) {
        //Condicional que permite  esconder o cabecalho
        if(body.contains(headerRetract)) {
            if(headerRetract.classList.contains('header-visible')){
                headerRetract.classList.add('header-invisible')
                headerRetract.classList.remove('header-visible')
                main.style.marginTop = '0em'
                if(body.contains(voltarCima)) {
                    voltarCima.classList.remove('voltar-cima-visivel')
                }
    
            }
        }
    } else if(currentposition < scroolPosDisplay) {
        //Condicional que permite expor o cabecalho
        if(body.contains(headerRetract)) {
            if(headerRetract.classList.contains('header-invisible')){
                headerRetract.classList.remove('header-invisible')
                main.style.marginTop = '4em'
                headerRetract.classList.add('header-visible')
                if(body.contains(voltarCima)) {
                    voltarCima.classList.add('voltar-cima-visivel')
                }
            }
        }
    }

    scroolPosDisplay = currentposition;
})

//Checagem da presenca ou nao do botao voltar para cima
//Funcao voltar para cima e sua implementacao apos o click.
if(body.contains(voltarCima)){
    voltarCima.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
