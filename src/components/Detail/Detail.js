import React from "react";
// import { useState, useEffect, useContext } from "react";
import { PokemonDetailProvider } from "../../context/PokemonDetailContex";
import PokemonView from "./PokemonView";
import Nav from "../Nav/Nav";

import "./Detail.scss";

function Detail() {
  //
  // if (loading) {
  //   return <Loader />;
  // } else {
  return (
    <PokemonDetailProvider>
      <div className="container">
        <PokemonView />
        {/*  */}
        <Nav />
      </div>
    </PokemonDetailProvider>
  );
  // }
}

export default Detail;
