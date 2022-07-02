import React from "react";
import Card from "../Card/Card";

function List({ pokemoList }) {
  return (
    <div className="container pokemon-list">
      {pokemoList.map((pokemon) => (
        <div className="pokemon-list--column">
          <Card key={pokemon.name} pokemon={pokemon} />
        </div>
      ))}
      {/* {JSON.stringify(pokeList)} */}
    </div>
  );
}

export default List;
