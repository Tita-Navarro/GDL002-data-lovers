let card = document.querySelector('#pkList');
let typeFilterEl = document.querySelector('#type_filter');
let sortElAz = document.querySelector('#az-button');
let sortElZa = document.querySelector('#za-button');
// let weaknessesFilterEl = document.querySelector('#weaknesses_filter');


// Declaraciones para controlar pantallas
  const list=()=>{
    document.getElementById ("pkList").style.display= 'flex';
    document.getElementById ("lateral_content").style.display="block";
    document.getElementById ("root").style.display='none';
    document.getElementById ("filterDiv").style.display="flex";
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
sortElAz.addEventListener('click', () => {
  let dataSort= data.orderByName(POKEMON.pokemon);
  renderer(dataSort, card);
});

sortElZa.addEventListener('click', () => {
  let dataSort= data.orderByEndName (POKEMON.pokemon);
  renderer(dataSort, card);
});

//Template para tarjetitas
function pokemonTemplate(singlePokemon, index){
  let pokemonCardTemplate = `
  <button id="${index}" class="singlePokemon">
    <h1 class="namepk">${singlePokemon.num} ${singlePokemon.name}</h1>
    <img src="${singlePokemon.img}">        
  </button>
  `;
  return pokemonCardTemplate;
}

 // Funcion  para mostrar las tarjetitas
const renderer = (data, htmlElement) => {
  let html = '';
  let index=0;
  for(let singlePokemon of data) {
    html = html + pokemonTemplate(singlePokemon, index);
    index= index+1; //html + Es para que junte las tarjetitas cada vez q se cumpla el ciclo, para que las vaya sumando en pantalla
  }        
  htmlElement.innerHTML = html;
};
renderer(POKEMON.pokemon, card);

function singlePokemon (completeTemplate){
  let data = POKEMON.pokemon[completeTemplate];
  let pokemonCardInfo = `
  <div id="completeInfo" class="cardComplete">
  <h1 class="pkname"> ${data.num} ${data.name}</h1>
  <img src="${data.img}"> 
  <h2 class="typepk">${data.type}</h2>
  <div class="restInfo">
  <h3 class="secondaryInfo"><span class="height">${data.height}</span> <br>
  <span class="weight"> ${data.weight}</span><br> 
  <span class="weaknesses"> ${data.weaknesses}</span>
  </div>
  </div>
  `;
 console.log(pokemonCardInfo);
 return pokemonCardInfo;
}

let completeCard =Array.from(document.getElementsByClassName('singlePokemon'));
for(let completeTemplate=0;completeTemplate<completeCard.length; completeTemplate++) {
  let pk_element = completeCard[completeTemplate];
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

