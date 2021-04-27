import React from 'react';

import {Link} from 'react-router-dom'

import './navbarstyle.css';

// import Nav from 'react-bootstrap/Nav';


const Navbar = () => {

    return (
        <>
        <div className="navbarstyle"></div>
         <Link className="navbarlink" to="/">
            Main
          </Link>

       
        

        </>
    )
}

export default Navbar;