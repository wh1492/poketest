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

  let idNumber = (idPoke) => {
    console.log("length idPoke: ", idPoke);
    console.log("length hola: ", idPoke.length);
    idPoke = Number(idPoke);
    if (idPoke.length === 1) {
      console.log("es 1");
      idPoke = "00" + idPoke;
    } else if (idPoke.length === 2) {
      console.log("es 2");
      idPoke = "0" + idPoke;
    }
    console.log("export");
    return idPoke;
  };

  const pokemonType = () => {};

  useEffect(() => {
    getPokemon();
  }, []);
  //
  if (loading) {
    return <div> Cargando </div>;
  } else {
    return (
      <div className="container">
        <div className=" pokemon-detail">
          <div className="pokemon-detail--image">
            <div className="pokemon-detail--image-anim">
              <img
                className="front"
                src={pokemon.sprites.front_default}
                alt={`${pokemon.species.name}_front`}
              />
              {pokemon.sprites.back_default && (
                <img
                  className="back"
                  src={pokemon.sprites.back_default}
                  alt={`${pokemon.species.name}_back`}
                />
              )}
            </div>
          </div>
          <div className="pokemon-detail--info">
            <h2 className="pokemon-name">
              {pokemon.species.name} <span>{idNumber(pokemon.id)} </span>{" "}
            </h2>
            <div className="pokemon-data">
              <div className="pokemon-data-column">
                <div className="pokemon-data-column-item">
                  <h4>Height </h4>
                  {pokemon.height}
                </div>
                <div className="pokemon-data-column-item">
                  <h4>Weight </h4>
                  {pokemon.weight}
                </div>
              </div>

              <div className="pokemon-data-column">
                <div className="pokemon-data-column-item">
                  <h4>Type </h4>
                  {pokemon.types.map((type) => (
                    <div
                      className={`type ${type.type.name}`}
                      key={type.type.name}
                    >
                      {type.type.name}{" "}
                    </div>
                  ))}
                </div>
                <div className="pokemon-data-column-item">
                  <h4>Abilities</h4>
                  {pokemon.abilities.map((type) => (
                    <span className="ability" key={type.ability.name}>
                      {" "}
                      {type.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
          </div>
        </div>
        <Link className="nav nav-back" to="/">
          Volver
        </Link>
      </div>
    );
  }
}

export default Detail;
