import React from "react";
import { useContext } from "react";
import PokemonListContext from "../../context/PokemonListContext";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import NoResults from "../NoResults/NoResults";

function List() {
  const { pokemoList, loading } = useContext(PokemonListContext);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        {pokemoList.length === 0 ? (
          <NoResults />
        ) : (
          <div className="pokemon-list">
            {pokemoList.map((pokemon) => (
              <div key={pokemon.name} className="pokemon-list--column">
                <Card pokemon={pokemon} />
              </div>
            ))}
            {/* {JSON.stringify(pokemoList)} */}
          </div>
        )}
      </>
    );
  }
}

export default List;
