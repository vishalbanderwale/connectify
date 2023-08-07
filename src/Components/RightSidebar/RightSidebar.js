import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suggestions } from "../Suggestions/Suggestions";
import { faFire, faSort } from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
function RightSidebar() {
  const { users } = useContext(userContext);
  return (
    <div className="right-side-bar-container">
      <div className="right-side-bar-icon-container">
        <button>
          <FontAwesomeIcon icon={faFire} />
          Trending
        </button>
        <button className="button-primary">
          <FontAwesomeIcon icon={faSort} />
          Latest
        </button>
        <p>suggestions for you</p>
      </div>

      {users.map((userData) => (
        <div key={userData._id}>
          <Suggestions data={userData} />
          <hr />
        </div>
      ))}
    </div>
    // (for returning  more than one component we must use Fragment)
  );
}

export { RightSidebar };
