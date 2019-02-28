//require('../src/data/pokemon/pokemon.js');
require('../src/data.js')

describe('data', () => {

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