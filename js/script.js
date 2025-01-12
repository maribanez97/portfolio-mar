//-----------------------------------
// 1. Constantes y variables
//-----------------------------------

const preloader = document.getElementById("Preloader");
const container = document.getElementById("Container");
// const btn = document.getElementById("btn");
const btnMenuMobile = document.getElementById("BtnMenu-mobile");
const btnMenuDesk = document.getElementById("BtnMenu-desk");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
const ulProyectos = document.getElementById("ListaProyectos");
const titulosProyecto = document.querySelectorAll(".Proyecto-titulo");
const imgsProyecto = document.querySelectorAll(".Proyecto-imgs");
// const footer = document.getElementById("Footer")
// const oscuroClaro = document.getElementById("OscuroClaro")
// Creación de un array de objetos para que los proyectos secreen mediante JavaScript
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
    alt2:"Proyecto 2.2"
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


//----------------------------------
// 2. Funciones
//----------------------------------

// Muestra y oculta el preloader cuando la web se carga
function mostrarPreloader() { 
    // definimos la variable para verificar si el preloader ya se ejecutó
    const preloaderShown = sessionStorage.getItem("preloaderShown");

    if (preloaderShown) {
        // Si ya se ejecutó, oculta el preloader y muestra el contenido
        preloader.classList.add('isOculto');
        container.classList.remove('isOculto');
      } else {
        // Si no, muestra el preloader y guárdalo en sessionStorage (la sesión actual de la página)
        // Cuando se vuelve a cargar en otra sesión realiza el preloader.
        //Función de callback. Se ejecutan las siguientes acciones 3s después de que inicie nuestro código
        setTimeout(() => {
            // Ejecuta el preloaded con un transition de opacidad
            preloader.classList.add('u-opacidad');
            // Cuando la transición ya está ejecutada...
            preloader.addEventListener('transitionend', () => {
                container.classList.remove('isOculto'); // Oculta el preloaded
                preloader.classList.add('isOculto'); // Muestra el contenido
                // Guarda en el sessionStorage que el preloaded ya se ha mostrado en esta sesión
                sessionStorage.setItem("preloaderShown", "true");
            }, 3000); 
            });
      }

};

// Función para imprimir una lista de proyectos en pantalla
function imprimirProyectos(proyectos){
    
    // Limpiar lista de proyectos para no duplicar cuando se filtra por web o gráfico
    ulProyectos.innerHTML = "";

    proyectos.forEach((proyecto) => {
        let titulo = proyecto.titulo.toUpperCase();
        let imagen1 = proyecto.imagen1;
        let alt1 = proyecto.alt1;
        let imagen2 = proyecto.imagen2;
        let alt2 = proyecto.alt2;
        let video = proyecto.video;
        console.log(proyecto)

        // Si hay vídeo añadir alproyecto, si no poner las dos imágenes
        if (video){
            ulProyectos.innerHTML += `<li class="Proyecto">
                                        <h3 class="Proyecto-titulo">${titulo}</h3>
                                        <div class="Proyecto-imgs">
                                            <img class="Proyecto-img" src="./imgs/${imagen1}" loading="lazy" alt="${alt1}">
                                            <video class="Proyecto-img" autoplay muted loop>
                                                <source src="${video}" type="video/webm">
                                            </video>
                                        </div>
                                     </li>`
        } else {
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <h3 class="Proyecto-titulo">${titulo}</h3>
                                            <div class="Proyecto-imgs">
                                                <img class="Proyecto-img Img--principal" src="./imgs/${imagen1}" loading="lazy" alt="${alt1}">
                                                <img class="Proyecto-img Img--secundaria" src="./imgs/${imagen2}" loading="lazy" alt="${alt2}">
                                            </div>
                                         </li>`
        }

    });

};

// Filtrar solo los proyectos de la temática web e imprimirlos
function mostrarProyectosWeb(){

    const proyectosWeb = proyectos.filter(proyecto => proyecto.tema === "web");
    // console.log(proyectosWeb);
    // Imprimir solo la lista de proyectos web
    imprimirProyectos(proyectosWeb);
};

// Filtrar solo los proyectos de la temática grafico e imprimirlos
function mostrarProyectosGrafico(){

    const proyectosGrafico = proyectos.filter(proyecto => proyecto.tema === "grafico");
    // console.log(proyectosGrafico);
    // Imprimir solo la lista de proyectos grafico
    imprimirProyectos(proyectosGrafico);
};

 // Función para actualizar la hora local de España
 function mostrarReloj() {
    // Crear un objeto de fecha con la hora en la zona horaria de España
    const options = { timeZone: "Europe/Madrid", hour12: false };
    const now = new Date().toLocaleString("es-ES", options);

    // Mostrar la hora en el div con id "clock"
    document.getElementById("clock").textContent = now;
  }



//función para cambio de de Modo de Claro a Oscuro y viceversa
// function modoOscuroClaro(){
//     const html = document.documentElement;

//     html.style.setProperty('--principal-color','#fff');
//     html.style.setProperty('--secundario-color','#000');
//     // container.style.backgroundColor = 'background-color = var(--principal-color);';
//     // btn.style.color  = 'color: var(--principal-color);';
//     // tituloProyecto.style.color = 'color: var(--secundario-color);';
//     // footer.style.color = 'color: var(--principal-color);';
// }



//----------------------------------
// 3. EventListeners
//----------------------------------

// Añadimos un evento de carga para toda la ventana del DOM
document.addEventListener('DOMContentLoaded',() => {
    mostrarPreloader();
});

// Evento para que al pasar el ratón por los titulos de los proyectos aparezca la imagen
// titulosProyecto.forEach(titulo => {
//     titulo.addEventListener('hover', () => {
//         imgsProyecto.forEach(divImgs => {
//             divImgs.classList.toggle('u-mostrar');
//         });
//     });
// });


// Llamamos a la función mostrarProyectosWeb al clicar sobre el boton WEB
btnWeb.addEventListener('click',() => {
    btnGrafico.classList.remove('isSeleccionado');
    btnWeb.classList.add('isSeleccionado');
    // ulProyectos.style.fontFamily = 'var(--font-web-regular)';
    mostrarProyectosWeb();  
});

// Llamamos a la función mostrarProyectosGrafico al clicar sobre el boton GRÁFICO
btnGrafico.addEventListener('click',() => {
    btnWeb.classList.remove('isSeleccionado');
    btnGrafico.classList.add('isSeleccionado');
    // ulProyectos.style.fontFamily = 'var(--font-grafico-regular)';
    mostrarProyectosGrafico();  
});

// Abrimos y cerramos el menu al clicar sobre el boton MENU
btnMenuMobile.addEventListener('click',() => {
    divMenu.classList.toggle("isOculto");
});

btnMenuDesk.addEventListener('click',() => {
    divMenu.classList.toggle("isOculto");
});

// Cerramos el menu al clicar sobre la X
cerrarMenu.addEventListener('click',() => {
    divMenu.classList.toggle("isOculto");
});

// oscuroClaro.addEventListener('click', () => {
//     modoOscuroClaro();
//     // btn.style.color  = 'color: var(--principal-color);';
// });



//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------

// Imprime toda la lista de proyectos al inicializar el programa
imprimirProyectos(proyectos);

// // Actualizar el reloj cada segundo
// setInterval(mostrarReloj, 1000);
// // Llamar a la función inicialmente para evitar el retraso inicial
// mostrarReloj();