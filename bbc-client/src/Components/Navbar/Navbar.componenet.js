import React from "react";
import { Link } from "react-router-dom";
import "./navbarstyle.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img
          className="earthlogo"
          src="https://media3.giphy.com/media/fU4rqm0AHZtqGED9m4/source.gif"
        ></img>
        <div className="links">
          <Link className="link" to="/">
            HomePage
          </Link>

          <Link className="link" to="/translate">
            Translate
          </Link>

          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <h1 className="logo">BBC Science-Environment Translator</h1>
      </div>
    </nav>
  );
};

export default Navbar;
