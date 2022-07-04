import React from "react";
import { Link } from "react-router-dom";
import catchemall from "../../assets/pokemon-catch.svg";

function NotFound() {
  return (
    <div className="container">
      <div className="inner not-found">
        <h2>Lo sentimos parece no existir el Pokemon que buscas!!</h2>
        <p>
          <i>intenta volver a la pagina principal y prueba de nuevo:</i>
        </p>
        <Link to="/">
          <img src={catchemall} alt="catch-em-all" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
