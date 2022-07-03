import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  const { pokemon } = props;

  const [imagePoke, setImagePoke] = useState("");

  const getImage = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setImagePoke(data.sprites.front_default);
  };

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

  useEffect(() => {
    getImage(idPoke);
  }, [idPoke]);

  return (
    <div className="card" id={idPoke} data-search={pokemon.name}>
      <Link to={`/detalle/${idPoke}`} key={idPoke}>
        <div className="card_image">
          <img src={imagePoke} alt={pokemon.name} />
        </div>
        <div className="card_info">
          <h3 className="card_name">{pokemon.name}</h3>#{idNumber(idPoke)}
        </div>
      </Link>
    </div>
  );
}

export default Card;
