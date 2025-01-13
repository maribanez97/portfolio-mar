/* Estilos del Menu */

/* .Blur {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(8px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
} */

.Menu { 
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 3.5em 1.5em;
    color: var(--secundario-color);
    background-color: var(--principal-color);
    border-radius: 0.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
}

.Menu-cerrar {
    position: absolute;
    top: 0.8em;
    right: 0.8em;
    cursor: pointer;
}

.Menu-list {
    font-family: var(--font-grafico-regular);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7em;
}

.Menu-item {
    font-size: 2em;
    cursor: pointer;
}

@media screen and (min-width: 1024px) {
    .Menu { 
        width: 30vw;
        padding: 7em 1.5em;   
    }

    .Menu-list {
        gap: 1.5em;
    }

    .Menu-item {
        font-size: 2.5em;
    }
}



        <div id="Menu" class="Blur isOculto">
            <nav class="Menu">
                <span id="Menu-cerrar" class="Menu-cerrar material-symbols-outlined">close</span>
                <ul class="Menu-list">
                    <li class="Menu-item"><a href="./index.html">proyectos.</a></li>
                    <li class="Menu-item"><a href="./sobre-mi.html">sobre mi.</a></li>
                    <li class="Menu-item"><a href="./contacto.html">contacto.</a></li>
                </ul>
            </nav>
        </div>