// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//const example = () => {
//  return 'example';
//};
//window.example = example;

let card = document.querySelector('#pkList');
let html = '';

function PokemonTemplate(singlePokemon){
    let pokemonCardTemplate = `
    <div class="singlePokemon">
      <h1>${singlePokemon.name}</h1>
      <img src="${singlePokemon.img}">        
    </div>
    `;
    return pokemonCardTemplate;
};

for(let singlePokemon of POKEMON.pokemon) {
    html = html + PokemonTemplate(singlePokemon); //Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  };
    
    
card.innerHTML = html;






















