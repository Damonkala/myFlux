import React, {Component} from 'react';

import PokeList from './PokeList';
import PokeReq from './PokeReq';
import {newPokemonAction} from '../action/PokeActions'

import PokemonStore from '../stores/PokemonStore';

let _getAppState = () => ({
  pokemon: PokemonStore.getAPokemon()
});

class PokeApp extends Component {
  constructor(props){
    super(props)

    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getAppState());
    console.log(this.state);
  }

  getNewPokemon(){
    newPokemonAction();
  }

  render(){
    let pokemon = this.state.pokemon;
    console.log('Current State', this.state);
    return(
      <div>
        <PokeList pokemon={pokemon} />
        <PokeReq getNewPokemon={this.getNewPokemon.bind(this)}/>
      </div>
    )
  }
}

export default PokeApp;
