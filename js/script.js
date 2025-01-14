//-----------------------------------
// 1. Constantes y variables
//-----------------------------------

const btnMenuMobile = document.getElementById("BtnMenu-mobile");
const btnMenuDesk = document.getElementById("BtnMenu-desk");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");
// const footer = document.getElementById("Footer")
// const oscuroClaro = document.getElementById("OscuroClaro")

// Creación de un array de objetos para que los proyectos se creen mediante JavaScript
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
