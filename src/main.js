
let card = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
let sortEl = document.querySelector('#sort_aphab');
let pokeCard= document.querySelector ('pkInfo_Complete')
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
function pokemonTemplate(singlePokemon, index){
  let pokemonCardTemplate = `
  <div id="${index}" class="singlePokemon">
    <h1 class="namepk">${singlePokemon.num} ${singlePokemon.name}</h1>
    <img src="${singlePokemon.img}">        
  </div>
  `;
  return pokemonCardTemplate;
}

 // Funcion  para mostrar las tarjetitas
const renderer = (data, htmlElement) => {
  let html = '';
  index=0;
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon, index);
    index= index+1; //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML = html;
};
renderer(POKEMON.pokemon, card);

function singlePokemon (completeTemplate){
  let pokemonCardInfo = `
  <div id="completeInfo" class="cardComplete">
  <h1 class="pkname"> ${completeTemplate.num} ${completeTemplate.name}</h1>
  <img src="${completeTemplate.img}"> 
  <h2 class="typepk">${completeTemplate.type}</h2>
  <div class="restInfo">
  <h3 class="secondaryInfo"><span class="height">${completeTemplate.height}</span> <br>
  <span class="weight"> ${completeTemplate.weight}</span><br> 
  <span class="weaknesses"> ${completeTemplate.weaknesses}</span>
  </div>
  </div>
  `;
  return pokemonCardInfo;
}

const pkInfoComplete=(pokemonCardInfo)=>{
  let name= POKEMON.pokemon[pokemonCardInfo.id].name;
  let typepoke= POKEMON.pokemon[pokemonCardInfo.id].type;
  let weakness= POKEMON.pokemon[pokemonCardInfo.id].weaknesses;
  console.log(name, typepoke, weakness );
}
let completeCard = document.getElementsByClassName('singlePokemon');
for(let completeTemplate=0;completeTemplate<completeCard.length; completeTemplate++) {
  let pk_element = completeCard[completeTemplate];
  pk_element.addEventListener('click', function() {
    pkInfoComplete(pk_element)
  }, false)
}

