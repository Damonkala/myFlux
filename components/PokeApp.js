import React, {Component} from 'react';

import PokeList from './PokeList';
import PokeReq from './PokeReq';
import {newPokemonAction} from '../action/PokeActions'

class PokeApp extends Component {
	constructor(props){
		super(props)
	}

getNewPokemon(){
	newPokemonAction();
}

	render(){
		return(
			<div>
				<PokeList />
				<PokeReq getNewPokemon={this.getNewPokemon.bind(this)}/>
			</div>
		)
	}
}

export default PokeApp;
