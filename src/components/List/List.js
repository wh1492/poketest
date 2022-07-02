import React from "react";
import Card from "../Card/Card";

function List({ pokemoList }) {
  return (
    <div className="container pokemon-list">
      {pokemoList.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
      {/* {JSON.stringify(pokeList)} */}
    </div>
  );
}

export default List;
