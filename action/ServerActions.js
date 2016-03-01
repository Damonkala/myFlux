import AppDispatcher from '../AppDispatcher';

const recievedNewPokemon = (pokemon) => {
  console.log('In Server Actions');
  AppDispatcher.dispatch({
    type: 'RECIEVED_A_POKEMON'.
    pokemon
  })
}

export {recievedNewPokemon};
