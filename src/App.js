import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.scss";
import List from "./components/List/List";

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
          <List pokemoList={pokemoList} />
      </div>
    );
  }
}

export default App;
