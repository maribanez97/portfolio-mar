//-----------------------------------
// 1. Constantes y variables
//-----------------------------------
const cursor = document.getElementById("Cursor");
const btnMenuMobile = document.getElementById("BtnMenu-mobile");
const btnMenuDesk = document.getElementById("BtnMenu-desk");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");
const menuItems = document.querySelectorAll(".Menu-item");


// Creación de un array de objetos para que los proyectos se creen mediante JavaScript
const proyectos = [
    { 
     id: 1,
     titulo: "Wabi Home",
     año: "2021 - 2024",
     servicios: "Dirección de arte",
     tema: "grafico",
     imagen1:"catalogo-wabi.jpg",
     alt1:"Proyecto 1.1",
     imagen2:"comedor-wabi.jpg",
     alt2:"Proyecto 1.2"
    },
    {
     id: 2, 
     titulo: "Cadal y Lade",
     año: "2023",
     servicios: "Diseño de producto",
     tema: "grafico",
     imagen1:"cadal-lade.jpg",
     alt1:"Proyecto 2.1",
     imagen2:"cadal-lade-textura.jpg",
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
     titulo: "Chef-Conect",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     video:"chef-connect-video.mp4",
     alt1:"Proyecto 5.1",
     imagen2:"chef-connect-1.jpg",
     alt2:"Proyecto 5.2"
    },
    { 
     id: 5,
     titulo: "Tu compartes, ellos también",
     año: "2019",
     servicios: "Photoshop, Illustrator, InDesign",
     tema: "grafico",
     video:"tu-compartes-video.mp4",
     imagen2:"tu-compartes.jpg",
     alt2:"Proyecto 6.1"
    },
    { 
     id: 6,
     titulo: "SOS360",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     imagen1:"web-360-1.jpg",
     alt1:"Proyecto 7.1",
     imagen2:"web-360-2.jpg",
     alt2:"Proyecto 7.2"
    },
    {
     id: 7,
     titulo: "Control Time",
     año: "2019",
     servicios: "Photoshop, Illustrator, InDesign",
     tema: "grafico",
     imagen1:"control-time-1.jpg",
     alt1:"Proyecto 8.1",
     imagen2:"control-time-2.jpg",
     alt2:"Proyecto 8.2"
    }
 ];

//----------------------------------
// 2. Funciones
//----------------------------------

// Agrandar el cursor cuando pasa por los items del menu
menuItems.forEach((menuItem) =>{
    menuItem.addEventListener('mouseenter', ()=> {
        cursor.classList.add("Cursor-crece");
    });
    menuItem.addEventListener('mouseleave', ()=> {
        cursor.classList.remove("Cursor-crece");
    });
});


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

// Agrandar el cursor cuando pasa por el icono de cerrar el menú
cerrarMenu.addEventListener('mouseenter', ()=> {
    cursor.classList.add("Cursor-crece");
});

cerrarMenu.addEventListener('mouseleave', ()=> {
    cursor.classList.remove("Cursor-crece");
});


//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------
