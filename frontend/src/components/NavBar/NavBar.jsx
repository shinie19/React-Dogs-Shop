import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

NavBar.propTypes = {};

function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/checkout">My Cart</Link>
      </nav>
    </div>
  );
}

export default NavBar;
