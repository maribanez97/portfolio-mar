//-----------------------------------
// 1. Constantes y variables
//-----------------------------------

// const Container = document.getElementById("Container");
// const imgMarIcon = document.getElementById("MarIcon-img"); 
const btnMenu = document.getElementById("BtnMenu");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
// const seccionGrafico = document.getElementById("Section-graphic");
// const seccionWeb = document.getElementById("Section-web");
const ulProyectos = document.getElementById("ListaProyectos");
const tituloProyecto = document.getElementById("Proyecto-titulo");

const proyectos = [
   { 
    titulo: "Wabi Home",
    tema: "grafico",
    imagen1:"grid-m-catalogo.jpg",
    alt1:"Proyecto 1.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 1.2"
   },
   { 
    titulo: "Cadal y Lade",
    tema: "grafico",
    imagen1:"grid-dp-cuadros.jpg",
    alt1:"Proyecto 2.1",
    imagen2:"grid-dp-cuadros-2.jpg",
    alt2:"Proyecto 2.2",
    imagen3:"grid-dp-cuadros-3.jpg",
    alt3:"Proyecto 2.3"
   },
   { 
    titulo: "Real Refresh",
    tema: "grafico",
    imagen1:"real-refresh.png",
    alt1:"Proyecto 3.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 3.2"
   },
   { 
    titulo: "Reproductor",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 4.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 4.2",
   },
   { 
    titulo: "Chef-Connect",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 5.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 5.2"
   },
   { 
    titulo: "Tu compartes, ellos también",
    tema: "grafico",
    imagen1:"tu-compartes.png",
    alt1:"Proyecto 6.1",
    video:"https://player.vimeo.com/video/524801664?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
   },
   { 
    titulo: "SOS360",
    tema: "web",
    imagen1:"grid-da-lamparas.jpg",
    alt1:"Proyecto 7.1",
    imagen2:"grid-da-comedor.jpg",
    alt2:"Proyecto 7.2"
   },
   { 
    titulo: "Control Time",
    tema: "grafico",
    imagen1:"control-time-1.jpg",
    alt1:"Proyecto 8.1",
    imagen2:"control-time-2.png",
    alt2:"Proyecto 8.2"
   }
];


// Cambio estilos y layout al clicar sobre el boton WEB
// btnWeb.addEventListener('click',() => {
//     Container.style.fontFamily = 'var(--font-web-regular)';
//     imgMarIcon.src = './imgs/icon-web.png';
//     seccionGrafico.classList.add('u-hide');
//     seccionWeb.classList.remove('u-hide');
//     btnGrafico.classList.remove('u-selection');
//     btnWeb.classList.add('u-selection');
   
// });

// Cambio estilos y layout al clicar sobre el boton WEB
// btnGrafico.addEventListener('click',() => {
//     Container.style.fontFamily = 'var(--font-graphic-regular)';
//     imgMarIcon.src = './imgs/icon-graphic.png';
//     seccionWeb.classList.add('u-hide');
//     seccionGrafico.classList.remove('u-hide');
//     btnWeb.classList.remove('u-selection');
//     btnGrafico.classList.add('u-selection');
// });


//----------------------------------
// 2. Funciones
//----------------------------------

// Imprimir el array de proyectos
function imprimirProyectos(proyectos){
    
    // Limpiar lista de proyectos para no duplicar
    ulProyectos.innerHTML = "";

    proyectos.forEach((proyecto) => {
        let titulo = proyecto.titulo.toUpperCase();
        let imagen1 = proyecto.imagen1;
        let alt1 = proyecto.alt1;
        let imagen2 = proyecto.imagen2;
        let alt2 = proyecto.alt2;
        let imagen3 = proyecto.imagen3;
        let alt3 = proyecto.alt3;
        let video = proyecto.video;
        console.log(proyecto)

        // Añadir videos en los proyectos que lo requieren
        if (video){
            ulProyectos.innerHTML += `<li class="Proyecto">
                                        <div class="Proyecto-imgs">
                                            <img class="Proyecto-img" src="./imgs/${imagen1}" alt="${alt1}">
                                            <video class="Proyecto-img" autoplay muted loop>
                                                <source src="${video}" type="video/webm">
                                            </video>
                                        </div>
                                        <p id="Proyecto-titulo" class="Proyecto-titulo">${titulo}</p>
                                     </li>`
        } else {
            if (imagen3) { 
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <div class="Proyecto-imgs">
                                                <img class="Proyecto-img" src="./imgs/${imagen1}" alt="${alt1}">
                                                <img class="Proyecto-img" src="./imgs/${imagen2}" alt="${alt2}">
                                                <img class="Proyecto-img" src="./imgs/${imagen3}" alt="${alt3}">
                                            </div>
                                            <p id="Proyecto-titulo" class="Proyecto-titulo">${titulo}</p>
                                         </li>`
            } else {
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <div class="Proyecto-imgs">
                                                <img class="Proyecto-img" src="./imgs/${imagen1}" alt="${alt1}">
                                                <img class="Proyecto-img" src="./imgs/${imagen2}" alt="${alt2}">
                                            </div>
                                            <p id="Proyecto-titulo" class="Proyecto-titulo">${titulo}</p>
                                         </li>`
            }
        }
    });

};

// Filtrar solo los proyectos de la temática web e imprimirlos
function mostrarProyectosWeb(){

    const proyectosWeb = proyectos.filter(proyecto => proyecto.tema === "web");
    console.log(proyectosWeb);
    // Imprimir solo la lista de proyectos web
    imprimirProyectos(proyectosWeb);
};

// Filtrar solo los proyectos de la temática grafico e imprimirlos
function mostrarProyectosGrafico(){

    const proyectosGrafico = proyectos.filter(proyecto => proyecto.tema === "grafico");
    console.log(proyectosGrafico);
    // Imprimir solo la lista de proyectos grafico
    imprimirProyectos(proyectosGrafico);
};



//----------------------------------
// 3. EventListeners
//----------------------------------

// Llamamos a la función mostrarProyectosWeb al clicar sobre el boton WEB
btnWeb.addEventListener('click',() => {
    btnGrafico.classList.remove('u-seleccionado');
    btnWeb.classList.add('u-seleccionado');
    // ulProyectos.style.fontFamily = 'var(--font-web-regular)';
    mostrarProyectosWeb();  
});

// Llamamos a la función mostrarProyectosGrafico al clicar sobre el boton GRÁFICO
btnGrafico.addEventListener('click',() => {
    btnWeb.classList.remove('u-seleccionado');
    btnGrafico.classList.add('u-seleccionado');
    // ulProyectos.style.fontFamily = 'var(--font-grafico-regular)';
    mostrarProyectosGrafico();  
});

// Abrimos y cerramos el menu al clicar sobre el boton MENU
btnMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-ocultar");
});

// Cerramos el menu al clicar sobre la X
cerrarMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-ocultar");
    console.log("Cerrar");
});



//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------

// Imprime toda la lista de proyectos al inicializar el programa
imprimirProyectos(proyectos);