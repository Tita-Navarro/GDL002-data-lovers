let pokemonList = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
let sortElAz = document.querySelector('#az-button');
let sortElZa = document.querySelector('#za-button');
let porcEl = document.querySelector('#percent');


// Declaraciones para controlar pantallas
  const list=()=>{
    document.getElementById ("pkList").style.display= 'flex';
    document.getElementById ("lateral_content").style.display="flex";
    document.getElementById ("root").style.display='none';
    document.getElementById ("filterDiv").style.display="flex";
    document.getElementById ("Info_Complete").style.display="none";
  };
  document.getElementById("list").addEventListener('click', list);

  const home=()=>{
    document.getElementById("root").style.display='block';
    document.getElementById ("lateral_content").style.display="none";
    document.getElementById("pkList").style.display='none';
    document.getElementById ("Info_Complete").style.display="none";
  };
  document.getElementById("home").addEventListener('click', home);

// Para mostrar el filtro
typeFilterEl.addEventListener('change', () => {
  let _data = data.typeFilter(POKEMON.pokemon, typeFilterEl.value); //aquí filtro
  let percentage = data.percentage(_data.length, POKEMON.pokemon.length); //medimos el array
  porcEl.innerHTML="El porcentaje de Pokémon de este tipo es: " + percentage;
  renderer(_data, pokemonList);
 });

// para mostrar el ordenado
sortElAz.addEventListener('click', () => {
  let dataSort= data.orderByName(POKEMON.pokemon);
  renderer(dataSort, pokemonList);
});

sortElZa.addEventListener('click', () => {
  let dataSort= data.orderByEndName (POKEMON.pokemon);
  renderer(dataSort, pokemonList);
});

//Template para tarjetitas
function pokemonTemplate(singlePokemon){
  let pokemonCardTemplate = `
  <button id="${singlePokemon.num}" class="singlePokemon">
    <h1 class="namepk">${singlePokemon.num} ${singlePokemon.name}</h1>
    <img src="${singlePokemon.img}">        
  </button>
  `;
  return pokemonCardTemplate;
}

 // Funcion  para mostrar las tarjetitas
const renderer = (data, htmlElement) => {
  let html = '';
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon);
    //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML=html;

  let completeCard = document.getElementsByClassName('singlePokemon');
for(let cardIndex=0;cardIndex<completeCard.length; cardIndex++) {
  let pk_element = completeCard[cardIndex];
  console.log(pk_element);
  pk_element.addEventListener('click', function () {
    document.getElementById("Info_Complete").innerHTML=singlePokemon(pk_element.id);
    document.getElementById ("Info_Complete").style.display="flex";
    document.getElementById ("lateral_content").style.display="block";
    document.getElementById ("root").style.display='none';
    document.getElementById ("filterDiv").style.display="flex";
    document.getElementById ("pkList").style.display="none";
  }, false);
}
};
renderer(POKEMON.pokemon, pokemonList);

function singlePokemon (pokemonId){
  console.log(pokemonId)
  let data = window.data.getPokemonByNum(pokemonId, POKEMON.pokemon);
  let pokemonCardInfo = `
  <div id="completeInfo" class="cardComplete">
  <h1 class="pkname"> ${data.num} ${data.name}</h1>
  <img src="${data.img}"> 
  <h2 class="typepk">Type: ${data.type}</h2>
  <div class="restInfo">
  <h3 class="secondaryInfo"><span class="height">Height: ${data.height}</span> <br>
  <span class="weight">Weight: ${data.weight}</span><br> 
  <span class="weaknesses">Weaknesses: ${data.weaknesses}</span> <br>
  <span class="candy">Candies: ${data.candy} </h3>
  </div>
  </div>
  `;
 console.log(pokemonCardInfo);
 return pokemonCardInfo;
}
