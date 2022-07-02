import { useEffect, useState } from "react";

import List from "./components/List/List";
import Search from "./components/Search/Search";

import "./App.scss";

function App() {
  const [pokemoList, setPokemoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemoList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    setPokemoList(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getPokemoList();
  }, []);
  if (loading) {
    return <div> Cargando </div>;
  } else {
    return (
      <div className="App">
        <div className="container">
          <Search />
          <List pokemoList={pokemoList} />
        </div>
      </div>
    );
  }
}

export default App;
