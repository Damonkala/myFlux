import React, {Component} from 'react';

class PokeReq extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<button onClick={this.props.getNewPokemon}>Get New Pokemon</button>
			</div>
		)
	}
}

export default PokeReq;
