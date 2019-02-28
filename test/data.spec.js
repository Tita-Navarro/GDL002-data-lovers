
/*require('../src/data.js');
// require('../src/data/pokemon/pokemon.js');

//const pokemon = require('../src/data/pokemon/pokemon.json');
//require('../src/data/pokemon/pokemon.js');
require('../src/data.js')

describe('data', () => {

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
  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });

  describe('data.typeFilter', () => {

    it('debería ser una función', () => {
      assert.equal(typeof data.typeFilter, 'function');
    });

    it('debería retornar "type" con filter data', () => {
      assert.equal(data.typeFilter(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });