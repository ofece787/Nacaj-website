let activitiesImages = document.querySelectorAll('.img')


let images = [
    '../imagens/1749555962025.jpg',
    '../imagens/1749555969642.jpg',
    '../imagens/1749556013214.jpg',
    '../imagens/1749555964931.jpg',
    '../imagens/1749556013214.jpg'
]
let i = 0
activitiesImages.forEach((element) => {
    element.style.background = `url(${images[i]})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    i++
})