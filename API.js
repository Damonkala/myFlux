import {get} from 'jquery';
import {recievedNewPokemon} from './action/ServerActions'

const newPokemonRequest = () => {
  let random = Math.floor(Math.random() * 419);
  get(`http://pokeapi.co/api/v2/pokemon/${random} `)
  .then(res => {
    console.log('In API');
    recievedNewPokemon(res);
  })
}

export {newPokemonRequest};
