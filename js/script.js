//-----------------------------------
// 1. Constantes y variables
//-----------------------------------
const cursor = document.getElementById("Cursor");
const btnMenuMobile = document.getElementById("BtnMenu-mobile");
const btnMenuDesk = document.getElementById("BtnMenu-desk");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");


// Creación de un array de objetos para que los proyectos se creen mediante JavaScript
const proyectos = [
    { 
     id: 1,
     titulo: "Wabi Home",
     año: "2021 - 2024",
     servicios: "Dirección de arte",
     tema: "grafico",
     imagen1:"grid-m-catalogo.jpg",
     alt1:"Proyecto 1.1",
     imagen2:"grid-da-comedor.jpg",
     alt2:"Proyecto 1.2"
    },
    {
     id: 2, 
     titulo: "Cadal y Lade",
     año: "2023",
     servicios: "Diseño de producto",
     tema: "grafico",
     imagen1:"grid-dp-cuadros.jpg",
     alt1:"Proyecto 2.1",
     imagen2:"grid-dp-cuadros-2.jpg",
     alt2:"Proyecto 2.2"
    },
    { 
     id: 3,
     titulo: "Real Refresh",
     año: "2021",
     servicios: "After Effects",
     tema: "grafico",
     imagen1:"real-refresh.png",
     alt1:"Proyecto 3.1",
     imagen2:"grid-da-comedor.jpg",
     alt2:"Proyecto 3.2"
    },
    { 
     id: 4,
     titulo: "Reproductor",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     imagen1:"grid-da-lamparas.jpg",
     alt1:"Proyecto 4.1",
     imagen2:"grid-da-comedor.jpg",
     alt2:"Proyecto 4.2",
    },
    { 
     id: 5,
     titulo: "Chef-Connect",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     imagen1:"grid-da-lamparas.jpg",
     alt1:"Proyecto 5.1",
     imagen2:"grid-da-comedor.jpg",
     alt2:"Proyecto 5.2"
    },
    { 
     id: 6,
     titulo: "Tu compartes, ellos también",
     año: "2019",
     servicios: "Photoshop, Illustrator, InDesign",
     tema: "grafico",
     imagen1:"tu-compartes.png",
     alt1:"Proyecto 6.1",
     video:"https://player.vimeo.com/video/524801664?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    },
    { 
     id: 7,
     titulo: "SOS360",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     imagen1:"grid-da-lamparas.jpg",
     alt1:"Proyecto 7.1",
     imagen2:"grid-da-comedor.jpg",
     alt2:"Proyecto 7.2"
    },
    {
     id: 8,
     titulo: "Control Time",
     año: "2019",
     servicios: "Photoshop, Illustrator, InDesign",
     tema: "grafico",
     imagen1:"control-time-1-1.jpg",
     alt1:"Proyecto 8.1",
     imagen2:"control-time-2.png",
     alt2:"Proyecto 8.2"
    }
 ];

//----------------------------------
// 2. Funciones
//----------------------------------



//----------------------------------
// 3. EventListeners
//----------------------------------

// Movimiento del cursor personalizado (e es el número de Euler)
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Abrimos y cerramos el menu al clicar sobre el boton MENU
btnMenuMobile.addEventListener('click',() => {
    divMenu.classList.remove("isOculto");
    cursor.style.backgroundColor = "var(--secundario-color)";
});

btnMenuDesk.addEventListener('click',() => {
    divMenu.classList.toggle("isOculto");
});

// Cerramos el menu al clicar sobre la X
cerrarMenu.addEventListener('click',() => {
    divMenu.classList.add("isOculto");
    cursor.style.backgroundColor = "var(--secundario-color)";
});

// oscuroClaro.addEventListener('click', () => {
//     modoOscuroClaro();
//     // btn.style.color  = 'color: var(--principal-color);';
// });



//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------
