var backImage = document.querySelector('#landingMainText')
var seta = document.querySelector('.outline')
seta.addEventListener('click', landingScrollDown)


var list = ["primeira", "segunda", "terceira", "quarta", "quinta"]
backImage.classList.transition = "ease-in"


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

setInterval(() => {
    changeBackground();
}, 5500);

function landingScrollDown() {
    window.scrollTo({
        top: 300,
        behavior: "smooth"
    })
}

