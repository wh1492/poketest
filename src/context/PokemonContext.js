import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
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
    document.title = "Pokemon App";
  }, []);

  useEffect(() => {
    searchMod(pokename);
  }, [pokename]);

  return (
    <PokemonContext.Provider
      value={{
        /** STATES */
        pokemoList,
        pokeSearch,
        loading,
        pokename,
        /** FUNCTIONS */
        handleName,
        searchMod,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
