import React from "react";

import logo from '../../logo.svg';
import "./Card.scss";

function Card(props) {
  const { pokemon } = props;

  let idPoke = pokemon.url.split("/");
  idPoke = idPoke[6];

  return (
    <div className="card" id={idPoke} data-search={pokemon.name}>
        <div className="card_image">
            <img src={logo} />
        </div>
        <div className="card_info">
      <h3 className="card_name"> {pokemon.name} </h3>
      <br />
      {pokemon.url}
        </div>
    </div>
  );
}

export default Card;
