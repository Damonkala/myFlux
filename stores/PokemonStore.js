import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon;

class PokemonStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      console.log('Inside Store');
      switch(action.type) {
        case 'RECEIVED_A_POKEMON':
          _pokemon = action.pokemon; 
          this.emit('CHANGE');
          break;
      }
    });
  }

  getAPokemon() {
    return _pokemon;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening() {
    this.removeListener('CHANGE', cb);
  }
}


export default new PokemonStore();


