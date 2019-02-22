
describe('show Pokemons', ()=>{
  it('to be defined', () => {
    expect(pokemonTemplate).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof pokemonTemplate).toBe('function');
  });

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