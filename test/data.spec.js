require('../src/data.js');

describe('pokemonNotes', ()=>{
  let mockData = [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
  }, {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
  }];

  describe('filter pokemon by type', ()=>{
    let result = [{
      "id": 4,
      "num": "004",
      "name": "Charmander",
      "type": [
        "Fire"
      ],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
    }];
    it('should be a function', ()=>{
      expect(typeof data.typeFilter).toBe('function');
    });

    it('should be defined', () => {
      expect(data.typeFilter).toBeDefined();
    });

       it('should filter by type', () =>{
      expect(data.typeFilter(mockData, 'Fire')).toEqual(result);
    }); 
  });

  describe ('pokemon sorted by name', ()=>{
    let resultOrder=[{
      "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
  }, 
  {
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
  },
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
  }, ];
    it ('should be defined', ()=>{
      expect(data.orderByName).toBeDefined();
    });

    it('should be a function', ()=>{
      expect(typeof data.orderByName).toBe('function');
    });
    it('should order pokemon by name A-Z', ()=>{
      expect(data.orderByName(mockData)).toEqual(resultOrder);
    });
  });

});