import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Card.scss";

function Card(props) {
  const { pokemon } = props;

  let idPoke = pokemon.url.split("/");
  idPoke = idPoke[6];

  let idNumber = (idPoke) => {
    if (idPoke.length === 1) {
      idPoke = "00" + idPoke;
    } else if (idPoke.length === 2) {
      idPoke = "0" + idPoke;
    }
    return idPoke;
  };

  return (
    <div className="card" id={idPoke} data-search={pokemon.name}>
      <Link to={`/detalle/${idPoke}`} key={idPoke}>
        <div className="card_image">
          <img src={logo} />
        </div>
        <div className="card_info">
          <h3 className="card_name">{pokemon.name}</h3>#{idNumber(idPoke)}
          {/* {pokemon.url} */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
