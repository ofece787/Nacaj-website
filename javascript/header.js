var navList = document.querySelector('#nav-list')
var menuButton = document.querySelector('#menu')
var body = document.querySelector('body')

window.addEventListener('scroll', retract)

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


