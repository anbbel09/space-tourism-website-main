
const navItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('main > section');
const main = document.getElementById('root');

const backgrounds = {
  home: "bg-[url('/starter-code/assets/home/background-home-mobile.jpg')]",
  destination: "bg-[url('/starter-code/assets/destination/background-destination-mobile.jpg')]",
  crew: "bg-[url('/starter-code/assets/crew/background-crew-mobile.jpg')]",
  technology: "bg-[url('/starter-code/assets/technology/background-technology-mobile.jpg')]"
};

function showSection(id) {
  sections.forEach(section => {
    section.classList.add('md:hidden');
    if (section.id === id) section.classList.remove('md:hidden');
  });

  // Resetear clases base del main
  main.className = 'min-h-screen w-full bg-no-repeat bg-cover transition-all duration-500';
  // Agregar la clase de fondo correspondiente
  main.classList.add(backgrounds[id]);
}


navItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-section');
    showSection(target);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  showSection('home');
 
     
      fetch('/starter-code/data.json')
      .then(res => res.json())
      .then(data => {
          let crew = data.crew;
          let destinations = data.destinations;
          let navPlanets = document.querySelectorAll('#planets li');
          let contPlanet = document.getElementById('contPlanet');
          let containerPlanet = document.getElementById('containerPlanet')
          
               
          function planetaPrincipal (index){
            
            navPlanets.forEach(li => {
              li.style.borderBottom = 'none';
            });
        
            destinations.forEach((d, i) => {
  
              if(index === i && navPlanets[index] ){
  
                let navLi = navPlanets[index];
                 navLi.style.borderBottom = 'solid';
  
                contPlanet.innerHTML = `
                  <img data-id="${i}" 
                       src="${d.images.webp}" 
                       alt="${d.name}">
                `;
  
                let title = containerPlanet.querySelector('h3');
                let parraph = containerPlanet.querySelector('#parraph');
                let planetDistance = containerPlanet.querySelector('#planetDistance');
                let planetTravel = containerPlanet.querySelector('#planetTravel');
        
                
                title.textContent = `${d.name}`;
                parraph.textContent = `${d.description}`;
  
                planetDistance.textContent = `${d.distance}`;
                planetTravel.textContent = `${d.travel}`;
  
                
              }
  
  
            });
              
          }
          
  
          planetaPrincipal(0);
  
  
          navPlanets.forEach((li, index) => {
            li.addEventListener('click', () => {
          
              planetaPrincipal(index);
            });
          });
  
  
  
  const sliderImg = document.getElementById("sliderImg");
  const sliderInfo = document.getElementById("sliderInfo");
  const indicatorSpans = document.querySelectorAll("figure span");
  
  // Agregamos las imágenes dinámicamente
  crew.forEach((c, i) => {
    sliderImg.innerHTML += `
      <img data-id="${i}" 
           class="crew-img border-b border-gray-600 snap-center px-14" 
           src="${c.images.webp}" 
           alt="${c.name}">
    `;
  });
  
  // Función para actualizar el contenido
  function updateCrewInfo(index) {
    const person = crew[index]; //posicion cero del array
    sliderInfo.innerHTML = ` 
      <h4 class="text-gray-400 text-light tracking-[0.1rem] md:text-lg">${person.role}</h4>
      <h2 class="font-serif text-3xl md:text-5xl">${person.name}</h2>
      <p class="text-sm md:text-lg">${person.bio}</p>
    `; //datos de la posicion cero del array
  
    // Actualizamos los puntos indicadores
    indicatorSpans.forEach((span, i) => { //span con sus indices
      if (i === index) { 
        span.classList.remove("bg-gray-400");
        span.classList.add("bg-white");
      } else {
        span.classList.remove("bg-white");
        span.classList.add("bg-gray-400");
      }
    });
  }
  
  // Función que detecta cuál imagen está centrada
  sliderImg.addEventListener("scroll", () => {
      const imageWidth = sliderImg.querySelector(".crew-img").offsetWidth;
      const index = Math.round(sliderImg.scrollLeft / imageWidth);
    
      updateCrewInfo(index);
    });
  
  // Inicializar con la primera imagen
  updateCrewInfo(0);
  
  let technology = data.technology;
  
  let tecnologyFigure = document.getElementById('tecnologyFigure');
  let technologyTitle = document.getElementById('technologyTitle');
  let tecnologyParraph= document.getElementById('tecnologyParraph');
  let listTechnology  = document.querySelectorAll('#listTechnology li');
  
  console.log(listTechnology);
  
  
  function mostrarTecnologia(index) {
  
    listTechnology.forEach(li => {
      li.classList.remove('bg-white', 'text-black');
    });
  
    let t = technology[index];
    tecnologyFigure.innerHTML = `<img class="w-full" src="${t.images.landscape}" alt="${t.name}">`;
    technologyTitle.textContent = `${t.name}`;
    tecnologyParraph.textContent = `${t.description}`;
  
  
  }
  
  
  mostrarTecnologia(0)
  
  
  listTechnology[0].classList.add('bg-white', 'text-black'); 
  
  listTechnology.forEach((li, index) => {
    li.addEventListener('click', () => {
      listTechnology.forEach(el => el.classList.remove('bg-white', 'text-black'));
  
      mostrarTecnologia(index);
      li.classList.add('bg-white', 'text-black');
    });
  });
  
      })
      .catch(error =>{
          console.log(error);
          
      })
    }
);
