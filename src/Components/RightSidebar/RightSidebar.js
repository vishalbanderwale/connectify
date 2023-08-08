import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suggestions } from "../Suggestions/Suggestions";
import { faFire, faSort } from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { authContext } from "../../context/AuthContext";
function RightSidebar() {
  const { users } = useContext(userContext);
  const { mainUser } = useContext(authContext);
  // console.log(users);
  console.log(mainUser);

  const filterdFollowData = users.filter(
    (fi) => !mainUser?.following?.find((f) => f._id === fi._id)
  );

  // console.log(filterdFollowData);

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

      {filterdFollowData.map((userData) => (
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
