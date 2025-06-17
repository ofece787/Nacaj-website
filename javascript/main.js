var backImage = document.querySelector('#landingMainText')

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

