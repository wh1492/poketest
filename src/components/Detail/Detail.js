import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./Detail.scss";

function Detail() {
  let params = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.detalleId}`
    );
    const data = await response.json();
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  if (loading) {
    return <div> Cargando </div>;
  } else {
    return (
      <div className="container pokemon-detail">
        <div className="pokemon-detail--image">
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.species.name}_front`}
          />
          <img
            src={pokemon.sprites.back_default}
            alt={`${pokemon.species.name}_back`}
          />
        </div>
        <div className="pokemon-detail--info">
          <h2 className="pokemon-name">
            {pokemon.species.name} <span>{pokemon.id} </span>{" "}
          </h2>
          <div className="pokemon-info-column">
            <div className="pokemon-info-column-item">
              <h4>Height </h4>
              {pokemon.height}
            </div>
            <div className="pokemon-info-column-item">
              <h4>Weight </h4>
              {pokemon.weight}
            </div>
          </div>

          <div className="pokemon-info-column">
            <div className="pokemon-info-column-item">
              <h4>Type </h4>
              {pokemon.types.map((type) => (
                <div>{type.type.name} </div>
              ))}
            </div>
            <div className="pokemon-info-column-item">
              <h4>Abilities</h4>
              {pokemon.abilities.map((type) => (
                <div>{type.ability.name} </div>
              ))}
            </div>
          </div>

          {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
        </div>

        <Link to="/">Volver</Link>
      </div>
    );
  }
}

export default Detail;
