import "./LeftSidebar.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBarConfig = [
  { label: "Home", icon: faHome, link: "/" },
  { label: "Explore", icon: faCompass, link: "/explorepage" },
  { label: "Bookmarks", icon: faBookmark, link: "/" },
  { label: "Profile", icon: faUser, link: "/" },
];

function LeftSidebar() {
  return (
    <aside>
      <div className="left-side-bar-main-container">
        {LeftSideBarConfig.map((s) => (
          <NavLink
            to={s.link}
            key={s.label}
            className="left-side-bar-container"
          >
            <div className="left-side-bar-icon-container">
              <FontAwesomeIcon icon={s.icon} />
              <p>{s.label}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export { LeftSidebar };
