
let card = document.querySelector('#pkList');
let html = '';

function pokemonTemplate(singlePokemon){
    let pokemonCardTemplate = `
    <div id="info" class="singlePokemon">
      <h1 class="namepk">${singlePokemon.name}</h1>
      <img src="${singlePokemon.img}">        
    </div>
    `;
    return pokemonCardTemplate;
}
for(let singlePokemon of POKEMON.pokemon) {
    html = html + pokemonTemplate(singlePokemon); //Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }    
    
card.innerHTML = html;

/*window.data = {
  const alphabetPokemon = () => {
console.log(POKEMON.pokemon.sort);
}
  };*/





















