import { useEffect, useState, useContext } from "react";

import List from "./components/List/List";
import Search from "./components/Search/Search";
import Loader from "./components/Loader/Loader";

import { PokemonProvider } from "./context/PokemonContext";

import "./App.scss";

function App() {
  // const { loading } = useContext(PokemonContext);

  // if (loading) {
  //   return <Loader />;
  // } else {
  return (
    <PokemonProvider>
      <div className="App">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    </PokemonProvider>
  );
  // }
}

export default App;
