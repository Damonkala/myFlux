import AppDispatcher from '../AppDispatcher';

const receivedNewPokemon = (pokemon) => {
  console.log('API Data Received Dispatch Event With Data');
  AppDispatcher.dispatch({
    type: 'RECEIVED_A_POKEMON',
    pokemon
  })
}

export {receivedNewPokemon};
