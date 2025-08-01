let scroolPosDisplay = window.scrollY
var navList = document.querySelector('#nav-list')
var menuButton = document.querySelector('#menu')
var body = document.querySelector('body')
let headerRetract = document.querySelector('#homePageHeader')
let main = document.querySelector('main')


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


window.addEventListener('scroll', () => {
    const currentposition = window.scrollY

    if (currentposition > scroolPosDisplay) {
        headerRetract.classList.add('header-invisible')
        if(headerRetract.classList.contains('header-visible')){
            headerRetract.classList.remove('header-visible')
            main.style.marginTop = '0em'
        }
    } else if(currentposition < scroolPosDisplay) {
        if(headerRetract.classList.contains('header-invisible')){
            headerRetract.classList.remove('header-invisible')
            main.style.marginTop = '4em'
        }
        headerRetract.classList.add('header-visible')
    }

    scroolPosDisplay = currentposition;
})

