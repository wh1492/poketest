import React, { useState } from "react";
import "./Search.scss";

function Search({pokeSearch}) {
  console.log('props:' , pokeSearch)
  const [pokename, setPokeName] = useState("");

  const handleName = (e) => {
    setPokeName(e.target.value);
    console.log('pokename: ', pokename)
  };
  return (
    <div className="pokemon-search">
      <input onChange={handleName} type="text" value={pokename} placeholder="Search your favorite Pokemon" />
    </div>
  );
}

export default Search;
