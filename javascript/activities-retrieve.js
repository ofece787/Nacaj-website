let activitiesLink = document.querySelector('#info')
console.log(activitiesLink)
  async function buscarDados() {
  try {
      const response = await fetch('http://localhost:3000/activitydisplayjson');

      if (!response.ok) {
      throw new Error("Error");
      
      }
      const data = await response.json();
      if(!data.length <= 0) {

        data.forEach(element => {
          const title = element.title.toUpperCase()
          const description = element.description
          const images = element.url
          const link = document.createElement('section');
          link.className = 'activitie'
          const activity = `
            <a class="activities-link" href="activitieDetails/activityDetails.html?title=${element.title}">
                <div class="conpound">
                    <div class="img">

                        <div id="img-description">
                            <div class="description">
                                <h1>${element.title}</h1>
                            </div>
                            <div class="date">
                                <p>12/03/2024</p>
                                <p>09:30</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </a>
          `
          link.innerHTML = activity
          console.log(link.children[0])
          link.children[0].children[0].children[0].style.background = `url(http://localhost:3000/imagens/${element.url[0]})`
          link.children[0].children[0].children[0].style.backgroundSize = 'cover'
          link.children[0].children[0].children[0].style.backgroundPosition = 'center'

          
          activitiesLink.appendChild(link)
          title.innerText = element.title.toUpperCase()
          images.src = `${images[0]}`
          description.innerText = element.description
        });
      } else{
        const div = document.createElement('div')
        div.style.height = '100px'
        div.style.width = '100%'
        div.style.display = 'flex'
        div.style.alignItems = 'center'
        div.style.justifyContent = 'center'
        div.textContent = "Não existem atividades para mostrar"

        activitiesLink.appendChild(div)
      }


      
  } catch (error) {
      if(error){

      console.error('error' + error.message)
      const errorDisplay = document.createElement('p')
      errorDisplay.innerText = 'Não foi possivel comunicar com o servidor'
      activitiesLink.appendChild(errorDisplay)
      }
      
  }
  }

  buscarDados()