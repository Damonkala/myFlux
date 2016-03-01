import {newPokemonRequest} from '../API';

const newPokemonAction = () => {
  console.log('In Pokemon Actions');
  newPokemonRequest()
}

export {newPokemonAction};
