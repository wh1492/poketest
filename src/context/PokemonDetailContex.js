import { createContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const PokemonDetailContext = createContext();

export const PokemonDetailProvider = ({ children }) => {
  let params = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.detalleId}`
    );
    const data = await response.json();
    setPokemon(data);
    setPokemonName(data.species.name);
    setLoading(false);
  };

  let idNumber = (idPoke) => {
    if (idPoke.toString().length === 1) {
      idPoke = "00" + idPoke;
    } else if (idPoke.toString().length === 2) {
      idPoke = "0" + idPoke;
    }
    return idPoke;
  };

  useEffect(() => {
    document.title = `Pokemon App - ${pokemonName}`;
    getPokemon();
  }, [params, pokemonName]);

  return (
    <PokemonDetailContext.Provider value={{
        /** STATE */
        params,
        pokemon,
        pokemonName,
        loading,
        /** FUNCTIONS */
        getPokemon,
        idNumber
    }}>
      {children}
    </PokemonDetailContext.Provider>
  );
};

export default PokemonDetailContext;
