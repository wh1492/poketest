
import { useEffect, useState } from "react";
import "./App.scss";

import Card from "./components/Card/Card";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokeList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    setPokeList(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getPokeList();
  }, []);
  if (loading) {
    return <div> Cargando </div>;
  } else {
    return <div className="App">
      <div className="pokemon-list">
      {pokeList.map(pokemon => <Card key={pokemon.name} pokemon={pokemon} />)}
      {/* {JSON.stringify(pokeList)} */}
      </div>
    </div>;
  }
}

export default App;
