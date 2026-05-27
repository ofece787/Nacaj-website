let noticiaLink = document.querySelector('.info')
console.log(noticiaLink)
  async function buscarDados() {
  try {
      const response = await fetch('http://localhost:3000/newsdisplayjson');

      if (!response.ok) {
      throw new Error("Error");
      
      }
      const data = await response.json();
      if(!data.length <= 0) {

        data.forEach(element => {
          const link = document.createElement('a');
          link.href = `noticiasDetails/noticiaDetails.html?title=${element.title}`
          link.className = 'noticia-link'
          const image = document.createElement('img');
          const section = document.createElement('section');
          section.className = 'noticia noticia-retraida'
          const primeiraDiv = document.createElement('div');
          primeiraDiv.className = 'noticia-componentes';
          const segundaDiv = document.createElement('div');
          segundaDiv.className = 'noticia-imagem';
          const terceiraDIv = document.createElement('div')
          terceiraDIv.className = 'noticia-texto'
          const quartaDiv = document.createElement('div')
          quartaDiv.className = 'texto'
          const description = document.createElement('p');
          const title = document.createElement('h2');
          section.appendChild(primeiraDiv)
          primeiraDiv.appendChild(segundaDiv)
          primeiraDiv.appendChild(terceiraDIv)
          segundaDiv.appendChild(image)
          quartaDiv.appendChild(title)
          terceiraDIv.appendChild(quartaDiv)
          link.appendChild(section)
          noticiaLink.appendChild(link)
          title.innerText = element.title.toUpperCase()
          image.src = `http://localhost:3000/imagens/${element.url}`
          description.innerText = element.description
        });
      } else{
        const div = document.createElement('div')
        div.style.height = '100px'
        div.style.width = '100%'
        div.style.display = 'flex'
        div.style.alignItems = 'center'
        div.style.justifyContent = 'center'
        div.style.background = '#c0c0c0'
        div.textContent = "Não existem noticias para mostrar"

        noticiaLink.appendChild(div)
      }


      
  } catch (error) {
      if(error){

      console.error('error' + error.message)
      const errorDisplay = document.createElement('p')
      errorDisplay.innerText = 'Não foi possivel comunicar com o servidor'
      noticiaLink.appendChild(errorDisplay)
      }
      
  }
  }

  buscarDados()