import React, {Component} from 'react';

import PokeCard from './PokeCard';

class PokeList extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    console.log(this.props.pokemon);

    let pokemonList = this.props.pokemon.map(({ name, base_experience, id }) => <PokeCard key={id} name={name} xp={base_experience} id={id} />);

    return(
      <div>
        {pokemonList}
      </div>
    )
  }
}

export default PokeList;
