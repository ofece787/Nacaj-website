let scrollPosition = window.scrollY;
let buttonVoltarCima = document.querySelector('.voltar-cima')


function scrolling() {
    if(scrollPosition > 0) {
        buttonVoltarCima.style.opacity = '1'
        
        console.log(buttonVoltarCima.classList.contains('voltar-cima') + scrollPosition)
        
    } else {
        console.log(scrollPosition)
    }

}