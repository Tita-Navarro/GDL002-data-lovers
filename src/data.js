window.data = {};

// Funcion filtro de tipos pkm
 data.typeFilter  = (data, type) => {
  let filteredPokemon = data.filter(pokemon => {
   const index = pokemon.type.indexOf(type);
   return index != -1;
  });
  return filteredPokemon;
};

// Funcion de ordenado alfabéticamente
data.orderByName = (data) => {
  let orderedData = data.sort ((pokemon_1, pokemon_2) => {
    if (pokemon_1.name > pokemon_2.name) {
      return 1;
    }
    else if (pokemon_1.name < pokemon_2.name) {
      return -1;
    }
    else{
    return 0;
  }
  });
  return orderedData;
};


