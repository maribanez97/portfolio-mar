//-----------------------------------
// 1. Constantes y variables
//-----------------------------------
const cursor = document.getElementById("CursorId");
const btnMenuMobile = document.getElementById("BtnMenu-mobile");
const btnMenuDesk = document.getElementById("BtnMenu-desk");
const divMenu = document.getElementById("Menu");
const cerrarMenu = document.getElementById("Menu-cerrar");
const menuItems = document.querySelectorAll(".Menu-item");


/**Creación de un array de objetos para cada proyecto
 * Objeto: proyectos
 * @typedef {object} proyecto
 * @property {number} id
 * @property {string} titulo        titulo del proyecto.
 * @property {string} año           año en el que se realizó.
 * @property {string} servicios     tipo de proyecto y programas utilizados.
 * @property {string} tema          temática del proyecto.
 * @property {string} imagen1       Imagen principal.
 * @property {string} alt1          texto alternativo de la imagen principal.
 * @property {string} imagen2       Imagen secundaria.
 * @property {string} alt2          Texto alternativo de la imagen secundaria.
 * @property {string} video         video en algunos proyectos.
 */
const proyectos = [
    { 
     id: 1,
     titulo: "Wabi Home",
     año: "2021 - 2024",
     servicios: "Dirección de arte",
     tema: "grafico",
     imagen1:"catalogo-wabi.jpg",
     alt1:"Imagen catálogo",
     imagen2:"comedor-wabi.jpg",
     alt2:"Imagen comedor"
    },
    {
     id: 2, 
     titulo: "Cadal y Lade",
     año: "2023",
     servicios: "Diseño de producto",
     tema: "grafico",
     imagen1:"cadal-lade.jpg",
     alt1:"Imagen cuadros",
     imagen2:"cadal-lade-textura.jpg",
     alt2:"Imagen textura cuadro"
    },
    { 
     id: 3,
     titulo: "Real Refresh",
     año: "2021",
     servicios: "After Effects",
     tema: "grafico",
     imagen1:"real-refresh.png",
     alt1:"Imagen logo",
     imagen2:"real-refresh-phones.png",
     alt2:"Imagen campaña"
    },
    { 
     id: 4,
     titulo: "Chef-Conect",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     video:"chef-connect-video.mp4",
     imagen2:"chef-connect-1.jpg",
     alt2:"Imagen ordenador"
    },
    { 
     id: 5,
     titulo: "Tu compartes, ellos también",
     año: "2019",
     servicios: "Photoshop, Illustrator",
     tema: "grafico",
     video:"tu-compartes-video.mp4",
     imagen2:"tu-compartes.jpg",
     alt2:"Imagen póster"
    },
    { 
     id: 6,
     titulo: "SOS360",
     año: "2024",
     servicios: "HTML, CSS y JavaScript",
     tema: "web",
     imagen1:"web-360-1.jpg",
     alt1:"Imagen web",
     imagen2:"web-360-2.jpg",
     alt2:"Imagen móvil"
    },
    {
     id: 7,
     titulo: "Control Time",
     año: "2019",
     servicios: "Maqueración con InDesign",
     tema: "grafico",
     imagen1:"control-time-1.jpg",
     alt1:"Portada Control",
     imagen2:"control-time-2.jpg",
     alt2:"Revista Control"
    }
 ];

//----------------------------------
// 2. Funciones
//----------------------------------

// Agrandar el cursor cuando pasa por los items del menu
// Para cada item del menu escuchar cuando el ratón para sobre el y añadir la clase para crecer, cuando el cursor se va, se quita la clase y vuelve altamaño inicial.
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
    // control de la distancia en vertical y horizontal del ratón
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
