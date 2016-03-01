import {get} from 'jquery';
import {receivedNewPokemon} from './action/ServerActions'

const newPokemonRequest = () => {
  let random = Math.floor(Math.random() * 419);
  get(`http://pokeapi.co/api/v2/pokemon/${random} `)
  .then(res => {
    console.log('Action Called Made Call To API Now Send To ServerActions');
    receivedNewPokemon(res);
  })
}

export {newPokemonRequest};
