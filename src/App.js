import { useEffect, useState } from "react";

import List from "./components/List/List";
 import Search from "./components/Search/Search";

import "./App.scss";

function App() {
  const [pokemoList, setPokemoList] = useState([]);
  const [pokeSearch, setPokeSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokename, setPokeName] = useState("");

  const getPokemoList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    setPokemoList(data.results);
    setPokeSearch(data.results);
    setLoading(false);
  };

  const handleName = (e) => {
    setPokeName(e.target.value);
  };

  const searchMod = (pokename) => {
    const newList = pokeSearch.filter((pokemon) =>
      pokemon.name.includes(pokename)
    );
    setPokemoList(newList);
  };

  useEffect(() => {
    getPokemoList();
  }, []);

  useEffect(() => {
    searchMod(pokename);
  }, [pokename]);
  //
  if (loading) {
    return <div> Cargando </div>;
  } else {
    return (
      <div className="App">
        <div className="container">
          <Search >
          <input
              onChange={handleName}
              type="text"
              value={pokename}
              placeholder="Search your favorite Pokemon"
            />
          </Search>
          <List pokemoList={pokemoList} />
        </div>
      </div>
    );
  }
}

export default App;
