let card = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
// let weaknessesFilterEl = document.querySelector('#weaknesses_filter');

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

// Funcion  para mostrar las tarjeticas
const renderer = (data, htmlElement) => {
  let html = '';
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon); //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML = html;
}
renderer(POKEMON.pokemon, card);

// Funcion filtro de tipos pkm
const typeFilter  = (data, type) => {
  let filteredPokemon = data.filter(pokemon => {
   const index = pokemon.type.indexOf(type);
   return index != -1;
  });
  return filteredPokemon;
};

typeFilterEl.addEventListener('change', () => {
 let data = typeFilter(POKEMON.pokemon, typeFilterEl.value);
 renderer(data, card);
});




















