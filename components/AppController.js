import React, {Component} from 'react';

import PokeApp from './PokeApp';

class AppController extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
			<PokeApp />
			</div>
		)
	}
}

export default AppController;
