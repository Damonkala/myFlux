import AppDispatcher from '../AppDispatcher';

const recievedNewPokemon = (pokemon) => {
  console.log(pokemon);
  AppDispatcher.dispatch({
    type: 'RECIEVED_A_POKEMON'.
    pokemon
  })
}

export {recievedNewPokemon};
