//-----------------------------------
// 1. Constantes y variables
//-----------------------------------

const Container = document.getElementById("Container");
const imgMarIcon = document.getElementById("MarIcon-img"); 
const btnMenu = document.getElementById("BtnMenu");
const divMenu = document.getElementById("Menu");
const closeMenu = document.getElementById("Menu-close");
const btnWeb = document.getElementById("BtnWeb");
const btnGrafico = document.getElementById("BtnGrafico");
const seccionGrafico = document.getElementById("Section-graphic");
const seccionWeb = document.getElementById("Section-web");


//----------------------------------
// 2. EventListeners
//----------------------------------

// Cambio estilos y layout al clicar sobre el boton WEB
btnWeb.addEventListener('click',() => {
    Container.style.fontFamily = 'var(--font-web-regular)';
    imgMarIcon.src = './imgs/icon-web.png';
    seccionGrafico.classList.add('u-hide');
    seccionWeb.classList.remove('u-hide');
    btnGrafico.classList.remove('u-selection');
    btnWeb.classList.add('u-selection');
});

// Cambio estilos y layout al clicar sobre el boton WEB
btnGrafico.addEventListener('click',() => {
    Container.style.fontFamily = 'var(--font-graphic-regular)';
    imgMarIcon.src = './imgs/icon-graphic.png';
    seccionWeb.classList.add('u-hide');
    seccionGrafico.classList.remove('u-hide');
    btnWeb.classList.remove('u-selection');
    btnGrafico.classList.add('u-selection');
});

btnMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
});

closeMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
});


//----------------------------------
// 3. Funciones
//----------------------------------

//----------------------------------
// 4. Inicializar nuestro programa
//----------------------------------