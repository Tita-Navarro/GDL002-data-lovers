require('../src/data.js');
// require('../src/data/pokemon/pokemon.js');
//const pokemon = require('../src/data/pokemon/pokemon.json');

describe('filter pokemon', ()=>{
  it('to be defined', () => {
    expect(data.typeFilter).toBeDefined();
  });
  
  it('is a function', ()=>{
    expect(typeof data.typeFilter).toBe('function');
  });
  
  it('return an object', () => {
    expect(typeof data.typeFilter()).toBe('object');
  });
});

describe ('ordered by name pokemon', ()=>{
  it ('to be defined', ()=>{
    expect(data.orderByName).toBeDefined();
  });

  it('is a function', ()=>{
    expect(typeof data.orderByName).toBe('function');
  });

  it('return an object', () =>{
    expect(typeof data.orderByName()).toBe ('object');
  });
});
