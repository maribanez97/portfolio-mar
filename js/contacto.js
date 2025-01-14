//-----------------------------------
// 1. Constantes y variables
//-----------------------------------


//----------------------------------
// 2. Funciones
//----------------------------------

// Función para actualizar la hora local de España
function mostrarReloj() {
     // Crear un objeto de fecha con la hora en la zona horaria de España
     const options = { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit"};
     const now = new Date().toLocaleTimeString("es-ES", options);
        // Mostrar la hora en el div con id "Reloj"
        document.getElementById("Reloj").textContent = now;
  }

  function mostrarDisponibilidad() {
    const horaInico = 8; // Diponible a partir de las 8:00
    const horaFinal = 17; // No disponible a partir de las 17:00
    const now = new Date(); // Objeto con la hora y fecha actuales
    const horaActual = now.getHours();
    const circulo = document.getElementById("Icono");
    const Disponibilidad = document.getElementById("Disponibilidad")
    Disponibilidad.innerHTML = "No disponible"

    if (horaActual>=horaInico && horaActual<horaFinal){
        // Mostrar si estoy o no disponible
        Disponibilidad.innerHTML = "Disponible";
        circulo.classList.add('u-disponible');
    }
  }

//----------------------------------
// 3. EventListeners
//----------------------------------


//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------

mostrarDisponibilidad();
// Actualizar el reloj cada segundo
setInterval(mostrarReloj, 1000);
// Llamar a la función inicialmente para evitar el retraso inicial
mostrarReloj();