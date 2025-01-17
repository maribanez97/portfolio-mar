const divCards = document.getElementById("Cards");

const urlParams = new URLSearchParams(window.location.search);
const proyectoId = urlParams.get("id");

const proyecto = proyectos.find(proyecto => proyecto.id == proyectoId);

divCards.innerHTML = `<div class="Card">
                        <div class="CardImgs">
                            <img class="CardImg" src="./imgs/${proyecto.imagen2}" alt="${proyecto.alt2}" class="CardImgs-img">
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