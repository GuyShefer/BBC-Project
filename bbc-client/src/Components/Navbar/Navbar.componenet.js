import React from 'react';
import {Link} from 'react-router-dom'
import './navbarstyle.css';
const Navbar = () => {
    return (
        <nav>
          <div className="navbar">
            <h1 className="logo">BBC Translator</h1>
            <div className="links">
              <Link className="link" to="/">HomePage</Link>
              <Link className="link" to="/">About</Link>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;