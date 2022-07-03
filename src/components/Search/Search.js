import React, { useState } from "react";
import "./Search.scss";

function Search({ children }) {
  return <div className="pokemon-search">{children}</div>;
}

export default Search;
