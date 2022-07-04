import React, { useContext } from "react";
import PokemonDetailContext from "../../context/PokemonDetailContex";
// import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function PokemonView() {
  const { pokemon, pokemonName, loading, idNumber } =
    useContext(PokemonDetailContext);
  if (loading) {
    return <Loader />;
  } else {
    return (
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
                {"'  "} ({(pokemon.height / 3.281).toFixed(2)}mt)
              </div>
              <div className="pokemon-data-column-item">
                <h4>Weight </h4>
                {pokemon.weight} lbs ({(pokemon.weight / 2.205).toFixed(2)}Kg)
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
        </div>
        {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
      </div>
    );
  }
}

export default PokemonView;
