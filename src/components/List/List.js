import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import Card from "../Card/Card";

function List() {
  const {pokemoList} = useContext(PokemonContext)
  return (
    <div className="pokemon-list">
      {pokemoList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-list--column">
          <Card pokemon={pokemon} />
        </div>
      ))}
      {/* {JSON.stringify(pokemoList)} */}
    </div>
  );
}

export default List;
