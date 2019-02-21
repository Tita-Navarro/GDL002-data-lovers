// Funcion para controlar pantallas
const controladorPantallas = (idPantallaNueva) => {
    const pantallaActual = document.getElementById(idPantallaActual);
    const pantallaNueva = document.getElementById(idPantallaNueva); 
    pantallaActual.style.display = "none";
    pantallaNueva.style.display = "block";
    idPantallaActual = idPantallaNueva;
  };

  const btn1 = document.getElementById('list');
  btn1.onclick = ()=> controladorPantallas('screen_1');