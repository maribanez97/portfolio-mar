//-----------------------------------
// 1. Constantes y variables
//-----------------------------------
const btnTodos = document.getElementById("BtnTodos");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
const ulProyectos = document.getElementById("ListaProyectos");
const filtroEstado = document.getElementById("FiltroEstado");

//----------------------------------
// 2. Funciones
//----------------------------------

// Función para imprimir una lista de proyectos en pantalla
function imprimirProyectos(proyectos){
    ulProyectos.classList.add("ListaProyectos--cambiando");

    requestAnimationFrame(() => {
        // Limpiar lista de proyectos para no duplicar cuando se filtra.
        ulProyectos.innerHTML = "";

        proyectos.forEach((proyecto) => {
            let numProyecto = String(proyecto.id).padStart(2, "0");
            let titulo = proyecto.titulo.toUpperCase();
            let servicios = proyecto.servicios;
            let imagen1 = proyecto.imagen1;
            let alt1 = proyecto.alt1;
            let imagen2 = proyecto.imagen2;
            let alt2 = proyecto.alt2;
            let video = proyecto.video;

            if (video){
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <a class="EstiloAnchor Proyecto-enlace" href="./proyecto.html?id=${proyecto.id}">
                                                <h3 class="Proyecto-titulo">
                                                    <span class="Proyecto-numero">${numProyecto}</span>
                                                    <span class="Proyecto-nombre">${titulo}</span>
                                                    <span class="Proyecto-servicios">${servicios}</span>
                                                </h3>
                                                <div class="Proyecto-videos">
                                                    <video class="Proyecto-video" src="./videos/${video}" type="video/mp4" poster="./imgs/${imagen2}" autoplay muted loop>
                                                    </video>
                                                </div>
                                            </a>
                                         </li>`;
            } else {
                ulProyectos.innerHTML += `<li class="Proyecto">
                                            <a class="EstiloAnchor Proyecto-enlace" href="./proyecto.html?id=${proyecto.id}">
                                                <h3 class="Proyecto-titulo">
                                                    <span class="Proyecto-numero">${numProyecto}</span>
                                                    <span class="Proyecto-nombre">${titulo}</span>
                                                    <span class="Proyecto-servicios">${servicios}</span>
                                                </h3>
                                                <div class="Proyecto-imgs">
                                                    <img class="Proyecto-img Proyecto-imgPrincipal" src="./imgs/${imagen1}" loading="lazy" alt="${alt1}">
                                                    <img class="Proyecto-img Proyecto-imgSecundaria" src="./imgs/${imagen2}" loading="lazy" alt="${alt2}">
                                                </div>
                                            </a>
                                         </li>`;
            }
        });

        filtroEstado.textContent = `${proyectos.length} ${proyectos.length === 1 ? "proyecto" : "proyectos"} mostrados`;

        requestAnimationFrame(() => {
            ulProyectos.classList.remove("ListaProyectos--cambiando");
        });
    });

};

function seleccionarFiltro(botonActivo) {
    [btnTodos, btnWeb, btnGrafico].forEach((boton) => {
        const activo = boton === botonActivo;
        boton.classList.toggle("isSeleccionado", activo);
        boton.setAttribute("aria-pressed", String(activo));
    });
}

function mostrarTodosLosProyectos() {
    imprimirProyectos(proyectos);
}

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

// Llamamos a la función mostrarProyectosWeb al clicar sobre el boton WEB
btnWeb.addEventListener('click',() => {
    seleccionarFiltro(btnWeb);
    // ulProyectos.style.fontFamily = 'var(--font-web-regular)';
    mostrarProyectosWeb();  
});

// Llamamos a la función mostrarProyectosGrafico al clicar sobre el boton GRÁFICO
btnGrafico.addEventListener('click',() => {
    seleccionarFiltro(btnGrafico);
    // ulProyectos.style.fontFamily = 'var(--font-grafico-regular)';
    mostrarProyectosGrafico();  
});



//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------

btnTodos.addEventListener('click', () => {
    seleccionarFiltro(btnTodos);
    mostrarTodosLosProyectos();
});

// Imprime toda la lista de proyectos y deja TODOS como filtro activo
seleccionarFiltro(btnTodos);
mostrarTodosLosProyectos();
