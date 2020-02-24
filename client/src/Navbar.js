import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import "./index.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <Link to='/'>
      <h1>Women's World Cup players </h1>
      </Link>
      

      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          darkmode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
