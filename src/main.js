// Declaraciones para controlar pantallas
let idPantallaActual = "root";
let pantallaInicial = document.getElementById(idPantallaActual);
pantallaInicial.style.display = "block";

const list = document.getElementById('list');
const home = document.getElementById('home');
list.onclick = ()=> controladorPantallas('screen_1');
home.onclick = ()=> controladorPantallas('root');

// Funcion que controla pantallas
const controladorPantallas = (idPantallaNueva) => {
    const pantallaActual = document.getElementById(idPantallaActual);
    const pantallaNueva = document.getElementById(idPantallaNueva); 
    pantallaActual.style.display = "none";
    pantallaNueva.style.display = "block";
    idPantallaActual = idPantallaNueva;
  };

 