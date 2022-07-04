import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/pokemon-logo.svg";

function Header() {
  return (
    <div className="app-header">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
}

export default Header;
