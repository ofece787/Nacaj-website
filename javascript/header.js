var navList = document.querySelector('#nav-list')
var menuButton = document.querySelector('#menu')
var seta = document.querySelector('#seta-para-baixo')

window.addEventListener('scroll', retract)
seta.addEventListener('click', landingScrollDown)

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

function landingScrollDown() {
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    })
}