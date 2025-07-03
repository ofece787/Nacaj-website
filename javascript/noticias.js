var noticiaSeta = document.querySelector(".noticia-icone .back-icone")
var noticia = document.querySelector(".noticia")

noticiaSeta.addEventListener('click', expandirNoticia)

function expandirNoticia() {
    if(noticia.classList.contains("noticia-retraida") == true) {
        noticia.classList.remove("noticia-retraida")
        noticia.classList.add("noticia-expandida")
        noticiaSeta.style.transform = "rotate(180deg)"
    } else {
        noticia.classList.add("noticia-retraida")
        noticia.classList.remove("noticia-expandida")
        noticiaSeta.style.transform = "rotate(0deg)"
    }
}