import React from 'react';

const PokeCard = ({ name, xp, id }) => (
  <div>
    <h1>{ name }</h1>
    <h3>{ xp }</h3>
    <h5>{ id }</h5>
  </div>
);

export default PokeCard;
