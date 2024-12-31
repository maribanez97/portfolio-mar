//-----------------------------------
// 1. Constantes y variables
//-----------------------------------

const Container = document.getElementById("Container");
const imgMarIcon = document.getElementById("MarIcon-img"); 
const btnMenu = document.getElementById("BtnMenu");
const divMenu = document.getElementById("Menu");
const closeMenu = document.getElementById("Menu-close");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
const seccionGrafico = document.getElementById("Section-graphic");
const seccionWeb = document.getElementById("Section-web");
const ulProyectos = document.getElementById("ListaProyectos");

const proyectos = [
   { 
    titulo: "Wabi Home",
    tema: "grafico",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "Real Refresh",
    tema: "grafico",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "Reproductor",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2",
   },
   { 
    titulo: "Chef-Connect",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "Tu compartes, ellos también",
    tema: "grafico",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "SOS360",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "Control Time",
    tema: "grafico",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
]


//----------------------------------
// 2. EventListeners
//----------------------------------

// Cambio estilos y layout al clicar sobre el boton WEB
btnWeb.addEventListener('click',() => {
    Container.style.fontFamily = 'var(--font-web-regular)';
    imgMarIcon.src = './imgs/icon-web.png';
    seccionGrafico.classList.add('u-hide');
    seccionWeb.classList.remove('u-hide');
    btnGrafico.classList.remove('u-selection');
    btnWeb.classList.add('u-selection');
});

// Cambio estilos y layout al clicar sobre el boton WEB
btnGrafico.addEventListener('click',() => {
    Container.style.fontFamily = 'var(--font-graphic-regular)';
    imgMarIcon.src = './imgs/icon-graphic.png';
    seccionWeb.classList.add('u-hide');
    seccionGrafico.classList.remove('u-hide');
    btnWeb.classList.remove('u-selection');
    btnGrafico.classList.add('u-selection');
});

btnMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
});

closeMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
    console.log("Cerrar");
});


//----------------------------------
// 3. Funciones
//----------------------------------

function imprimirProyectos(){
    
    proyectos.forEach((proyecto) => {
        let titulo = proyecto.titulo;
        let imagen1 = proyecto.imagen1;
        let alt1 = proyecto.alt1;
        let imagen2 = proyecto.imagen2;
        let alt2 = proyecto.alt2;
        console.log(proyecto)
        ulProyectos.innerHTML += `<li class="Proyecto">
                                    <p class="Proyecto-titulo">${titulo}</p>
                                    <div class="Proyecto-imgs">
                                        <img class="Proyecto-img" src="./imgs/${imagen1}" alt="${alt1}">
                                        <img class="Proyecto-img" src="./imgs/${imagen2}" alt="${alt2}">
                                    </div>
                                </li>`
    });

};

//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------
imprimirProyectos();