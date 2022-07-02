import React from "react";
import Card from "../Card/Card";

function List({ pokemoList }) {
  return (
    <div className="pokemon-list">
      {pokemoList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-list--column">
          <Card pokemon={pokemon} />
        </div>
      ))}
      {/* {JSON.stringify(pokeList)} */}
    </div>
  );
}

export default List;
