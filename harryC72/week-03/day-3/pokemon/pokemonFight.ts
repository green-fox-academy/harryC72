
import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?


function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}


let pokemons: Pokemon[] = initializePokemon();

console.log(pokemons);


function choseFighter(typeToFight: string) {

  let nameOfFighters: string[] = [];
  let result: string = '';
  for (let i: number = 0; i < pokemons.length; i++) {

      console.log(i);
      
      if (pokemons[i].effectiveAgainst === typeToFight) {

        nameOfFighters.push(pokemons[i].name);
      }

    // console.log(nameOfFighters);

  }

  return result = 'Name of the fighter/fighters: ' + nameOfFighters.toString();


}

console.log(choseFighter('leaf'));