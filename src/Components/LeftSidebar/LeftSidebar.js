import "./LeftSidebar.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AddPost } from "../AddPost/AddPost";

const LeftSideBarConfig = [
  { label: "Home", icon: faHome, link: "/" },
  { label: "Explore", icon: faCompass, link: "/explorepage" },
  { label: "Bookmarks", icon: faBookmark, link: "/bookmarkpage" },
  { label: "Profile", icon: faUser, link: "/myprofile" },
];

const getActiveStyle = ({ isActive }) => ({
  backgroundColor: isActive ? "blue" : "transparent",
});

function LeftSidebar() {
  const [createPostToggle, setcreatePostToggle] = useState(false);
  return (
    <aside>
      <div className="left-side-bar-main-container">
        {LeftSideBarConfig.map((s) => (
          <NavLink
            to={s.link}
            key={s.label}
            className="left-side-bar-container"
            style={getActiveStyle}
          >
            <div className="left-side-bar-icon-container">
              <FontAwesomeIcon icon={s.icon} />
              <p>{s.label}</p>
            </div>
          </NavLink>
        ))}
        <div>
          <button onClick={() => setcreatePostToggle(!createPostToggle)}>
            create post
          </button>
        </div>
        {createPostToggle && (
          <div className="create-post-main-container">
            <div className="empty-container"></div>
            <div className="create-post-container">
              <AddPost />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export { LeftSidebar };
