import React from "react";
import { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";

function List() {
  const { pokemoList, loading } = useContext(PokemonContext);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        {pokemoList.length === 0 ? (
          <NotFound />
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
