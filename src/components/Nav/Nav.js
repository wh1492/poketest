import React, { useContext } from "react";
import PokemonDetailContext from "../../context/PokemonDetailContex";
import { Link } from "react-router-dom";

function Nav() {
  const { pokemon, idNumber, loading } = useContext(PokemonDetailContext);
  return (
    <nav className="navigation">
      <ul>
        {!loading && (
          <li className="navigation-item page-prev">
            {pokemon.id - 1 !== 0 ? (
              <Link className="nav nav-prev" to={`/detalle/${pokemon.id - 1}/`}>
                #{idNumber(pokemon.id - 1)}
              </Link>
            ) : (
              <span className="nav nav-prev">#{idNumber(pokemon.id - 1)}</span>
            )}
          </li>
        )}

        <li className="navigation-item">
          <Link className="nav nav-back" to="/">
            Volver
          </Link>
        </li>

        {!loading && (
        <li className="navigation-item page-next">
          {pokemon.id + 1 <= 151 ? (
            <Link className="nav nav-next" to={`/detalle/${pokemon.id + 1}/`}>
              #{idNumber(pokemon.id + 1)}
            </Link>
          ) : (
            <span className="nav nav-next">#{idNumber(pokemon.id + 1)}</span>
          )}
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
