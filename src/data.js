// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
//const example = () => {
//  return 'example';
//};
//window.example = example;

let card = document.querySelector('#content');
let html = '';

function PokemonTemplate(singlePokemon){
    let pokemonCardTemplate = `
    <div>
      <h1>${singlePokemon.name}</h1> 
      <h1> N. ${singlePokemon.num}</h1>
      <img src="${singlePokemon.img}">       
    </div>
    `;
    return pokemonCardTemplate;
};















card.innerHTML = html;






















