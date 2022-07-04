import React, { useContext } from "react";
import PokemonListContext from "../../context/PokemonListContext";
import "./Search.scss";

function Search() {
  const { pokename, handleName, loading } = useContext(PokemonListContext);
  return (
    <div className="pokemon-search">
      <input
        onChange={handleName}
        type="text"
        value={pokename}
        placeholder="Search your favorite Pokemon"
        disabled={loading ? "disabled" : ""}
      />
    </div>
  );
}

export default Search;
