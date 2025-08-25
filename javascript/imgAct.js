let activitiesImages = document.querySelectorAll('.img')
let landingImagesDiv = document.querySelectorAll('.landingFirstImg')


let images = [
    '../imagens/1749555962025.jpg',
    '../imagens/1749555969642.jpg',
    '../imagens/1749556013214.jpg',
    '../imagens/1749555964931.jpg',
    '../imagens/1749556013214.jpg'
]

let landingImages = [
    'imagens/1749556145269.jpg',
    'imagens/1749556390655.jpg',
    'imagens/1749556013214.jpg', 
    'imagens/1749556142687.jpg',
    'imagens/1749555964931.jpg',
    'imagens/1749556199825.jpg'
]
let imageIterator1 = 0
activitiesImages.forEach((element, ) => {
    element.style.background = `url(${images[imageIterator1]})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    imageIterator1++
})

let landingPageIterator = 0
landingImagesDiv.forEach((element) => {
    element.style.background = `url(${landingImages[landingPageIterator]})`
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    landingPageIterator++
})