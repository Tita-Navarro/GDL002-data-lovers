require('../src/data.js');
// require('../src/data/pokemon/pokemon.js');
//const pokemon = require('../src/data/pokemon/pokemon.json');

describe('filter pokemon', ()=>{
  it('is a function', ()=>{
    expect(typeof data.typeFilter).toBe('function');
  });
});
describe('filter pokemon', ()=>{
  it('to be defined', () => {
    expect(data.typeFilter).toBeDefined();
  });
});

describe ('ordered by name pokemon', ()=>{
  it ('to be defined', ()=>{
    expect(data.orderByName).toBeDefined();
  });
});
describe('ordered by name pokemon', ()=>{
  it('is a function', ()=>{
    expect(typeof data.orderByName).toBe('function');
  });
});