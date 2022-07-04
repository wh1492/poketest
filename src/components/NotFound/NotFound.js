import React from "react";

function NotFound() {
  const pikachu =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  return (
    <div className="no-results">
      <h2>No hay resultados!!</h2>
      <p>
        <i>intenta con otra busqueda como por ejemplo:</i>
        <br />
        <strong>
          <i>Pikachu</i>
        </strong>
      </p>
      <img src={pikachu} alt="pikachu" />
    </div>
  );
}

export default NotFound;
