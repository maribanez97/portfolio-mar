
// Construir una página para cada proyecto según su id a partir de la página proyecto.
// Que la url encuentre cual es el id del proyecto al que se clica para crear su página proyecto.html?id=1

// Definir lasconstantes
const divCards = document.getElementById("Cards");
// Construir la url de cada proyecto
const urlParams = new URLSearchParams(window.location.search);
const proyectoId = urlParams.get("id");

// Buscar que el id del proyecto sea igual al id de la url y construir el html en divCard
const proyecto = proyectos.find(proyecto => proyecto.id == proyectoId);

divCards.innerHTML = `<div class="Card">
                        <div class="CardImgs">
                            <img class="CardImgs-img" src="./imgs/${proyecto.imagen2}" alt="${proyecto.alt2}" class="CardImgs-img">
                        </div>
                        <div class="CardListas">
                            <ul class="CardLista EstiloLista">
                                <li class="CardLista-titulo">TÍTULO</li>
                                <li class="CardLista-titulo">AÑO</li>
                                <li class="CardLista-titulo">SERVICIOS</li>
                            </ul>
                            <ul class="CardLista EstiloLista">
                                <li class="CardLista-texto">${proyecto.titulo}</li>
                                <li class="CardLista-texto">${proyecto.año}</li>
                                <li class="CardLista-texto">${proyecto.servicios}</li>
                            </ul> 
                        </div>  
                    </div>`;