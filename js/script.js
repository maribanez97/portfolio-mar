/*----------------------------------
DECLARAMOS CONSTANTES Y VARIABLES
------------------------------------*/
const btnMenu = document.getElementById("BtnMenu");
const divMenu = document.getElementById("Menu");
const closeMenu = document.getElementById("Menu-close");

btnMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
});

closeMenu.addEventListener('click',() => {
    divMenu.classList.toggle("u-hide");
});