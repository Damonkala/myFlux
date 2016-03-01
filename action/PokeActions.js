import {newPokemonRequest} from '../API';

const newPokemonAction = () => {
  console.log('Action Occured, Going To Call');
  newPokemonRequest()
}

export {newPokemonAction};
