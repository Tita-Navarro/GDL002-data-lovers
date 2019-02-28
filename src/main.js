
let card = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
let sortEl = document.querySelector('#sort_aphab');
// let weaknessesFilterEl = document.querySelector('#weaknesses_filter');


// Declaraciones para controlar pantallas
  const list=()=>{
    document.getElementById ("pkList").style.display= 'flex';
    document.getElementById ("lateral_content").style.display="block";
    document.getElementById ("root").style.display='none';
  };
  document.getElementById("list").addEventListener('click', list);

  const home=()=>{
    document.getElementById("root").style.display='block';
    document.getElementById ("lateral_content").style.display="none";
    document.getElementById("pkList").style.display='none';
  };
document.getElementById("home").addEventListener('click', home);

// Para mostrar el filtro
typeFilterEl.addEventListener('change', () => {
  let _data = data.typeFilter(POKEMON.pokemon, typeFilterEl.value); //aquí
  renderer(_data, card);
 });


// para mostrar el ordenado
sortEl.addEventListener('change', () => {
  let dataSort= data.orderByName(POKEMON.pokemon, sortEl.value );
  renderer(dataSort, card);

});

//Template para tarjetitas
function pokemonTemplate(singlePokemon){
  let pokemonCardTemplate = `
  <div id="info" class="singlePokemon">
    <h1 class="namepk">${singlePokemon.name}</h1>
    <img src="${singlePokemon.img}">        
  </div>
  `;
  return pokemonCardTemplate;
}

 // Funcion  para mostrar las tarjetitas
const renderer = (data, htmlElement) => {
  let html = '';
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon); //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML = html;
};
renderer(POKEMON.pokemon, card);

