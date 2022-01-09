import { mockService } from '../../public/mockCall'

describe('Fetching data from mock service', () => {
  const data = { "mock": [
      {
        "data": {
          "name": "bulbasaur",
          "height": 7,
          "weight": 69,
          "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "abilities": [
            "chlorophyll","overgrow"
          ],
          "type": "poison"
        }
      },
      {
        "data": {
          "name": "charmander",
          "height": 6,
          "weight": 85,
          "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          "abilities": [
            "solar-power","blaze"
          ],
          "type": "fire"
        }
      },
      {
        "data": {
          "name": "squirtle",
          "height": 5,
          "weight": 90,
          "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          "abilities": [
            "rain-dish","torrent"
          ],
          "type": "water"
        }
      }
    ]
  }
  test('Revisar que la promesa del servicio me está regresando los datos que quiero', () => {
    expect.assertions(1);
    const res = mockService();
    expect(Promise.resolve(res)).resolves.toStrictEqual(data);
  })
})