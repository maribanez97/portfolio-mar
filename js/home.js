//-----------------------------------
// 1. Constantes y variables
//-----------------------------------
const preloader = document.getElementById("Preloader");
const container = document.getElementById("Container");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
const ulProyectos = document.getElementById("ListaProyectos");

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
                                        <a class="EstiloAnchor Proyecto-enlace" href="./proyecto.html?id=${proyecto.id}">
                                            <h3 class="Proyecto-titulo">${titulo}</h3>
                                            <div class="Proyecto-videos">
                                                <video class="Proyecto-video" src="./videos/${video}" type="video/mp4" poster="./imgs/${imagen2}" autoplay muted loop>
                                                </video>
                                            </div>
                                        </a>
                                     </li>`
        } else {
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <a class="EstiloAnchor Proyecto-enlace" href="./proyecto.html?id=${proyecto.id}">
                                                <h3 class="Proyecto-titulo">${titulo}</h3>
                                                <div class="Proyecto-imgs">
                                                    <img class="Proyecto-img Proyecto-imgPrincipal" src="./imgs/${imagen1}" loading="lazy" alt="${alt1}">
                                                    <img class="Proyecto-img Proyecto-imgSecundaria" src="./imgs/${imagen2}" loading="lazy" alt="${alt2}">
                                                </div>
                                            </a>
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



//----------------------------------
// 3. EventListeners
//----------------------------------

// Añadimos un evento de carga para toda la ventana del DOM
document.addEventListener('DOMContentLoaded',() => {
    mostrarPreloader();
});

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



//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------

// Imprime toda la lista de proyectos
imprimirProyectos(proyectos);
