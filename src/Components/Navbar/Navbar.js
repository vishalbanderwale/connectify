import "./Navbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState("light");

  return (
    <nav className="main-navbar">
      <div className="navbar-main-container">
        <div className="navbar-logo-container">
          <Link>
            <img
              src="https://w7.pngwing.com/pngs/920/442/png-transparent-connectify-internet-access-channel-bonding-4g-fast-furious-text-logo-grass.png"
              alt="logopicture"
              className="logo-img"
            />
          </Link>

          <Link className="heading-link">
            <h2>connectify</h2>
          </Link>
        </div>

        <div className="navbar-search-container">
          <input
            type="search"
            placeholder="search here"
            className="input-search"
          />
          <FontAwesomeIcon icon={faSearch} className="fa-Search" />
        </div>
        <div className="navbar-icons-container">
          <div
            onClick={() =>
              setMode((mode) => (mode === "light" ? "dark" : "light"))
            }
            className="fa-Sun"
          >
            {mode === "light" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>

          <Link to="/">
            <span>
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="profilepicture"
                className="profile-img"
              />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
