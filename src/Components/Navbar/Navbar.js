import "./Navbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSun,
  faMoon,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { PopSearch } from "../PopSearch/PopSearch";
import { useContext } from "react";

import { userContext } from "../../context/UserContext";

function Navbar() {
  const { users } = useContext(userContext);
  const [mode, setMode] = useState("light");
  const [searchToggle, setsearchToggle] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [searchProfile, setsearchProfile] = useState("");

  const navigate = useNavigate();

  const searchHandler = (event) => {
    if (event.target.value === "") {
      setsearchProfile([]);
    } else {
      const filterProfile = users?.filter((f) =>
        f.username.includes(event.target.value)
      );
      // console.log(filterProfile);
      setsearchProfile(filterProfile);
      setSearchValue(event.target.value);
    }
  };
  // console.log(searchProfile);
  const clearValueHandler = () => {
    setsearchToggle(false);
    setSearchValue("");
  };

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
            value={searchValue}
            onClick={() => setsearchToggle(true)}
            onChange={(event) => searchHandler(event)}
          />

          {searchToggle ? (
            <div onClick={clearValueHandler}>
              <FontAwesomeIcon icon={faXmark} className="fa-Search" />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faSearch} className="fa-Search" />
            </div>
          )}

          {searchToggle && (
            <div className="pop-up-search">
              <PopSearch search={searchProfile} />
            </div>
          )}
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
          <div>
            <button onClick={() => navigate("/login")}>logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
