require('../src/data.js');
// require('../src/data/pokemon/pokemon.js');

//const pokemon = require('../src/data/pokemon/pokemon.json');




describe('show Pokemons', ()=>{
 // it('to be defined', () => {
 //   expect(pokemonTemplate).toBeDefined();
 // });

  it('should be a function', () => {
    expect(typeof data.typeFilter).toBe('function');
  });

});

// ideas para test: 

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
























/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
*/