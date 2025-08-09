let scroolPosDisplay = window.scrollY
var navList = document.querySelector('#nav-list')
var menuButton = document.querySelector('#menu')
var body = document.querySelector('body')
let headerRetract = document.querySelector('#homePageHeader')
let main = document.querySelector('main')
let voltarCima = document.querySelector('.voltar-cima')


function retract() {
    getState = navList.classList[0]

    if(getState == "extended") {
        menuExtend()
    }

}


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


window.addEventListener('scroll', () => {
    retract()
    const currentposition = window.scrollY

    
    if (currentposition > scroolPosDisplay) {
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

if(body.contains(voltarCima)){
    voltarCima.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

