import { Link } from "react-router-dom";
import "./MyProfile.css";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { userContext } from "../../context/UserContext";
import { EditProfile } from "../EditProfile/EditProfile";
function MyProfile() {
  const { loginData } = useContext(authContext);
  const { username } = loginData;
  const { users } = useContext(userContext);
  const [editProfile, setEditProfile] = useState(false);

  function editProfileHandler() {
    setEditProfile(!editProfile);
  }

  const filterProfile = users?.filter((f) => f?.username === username);

  return (
    <div className="my-profile-main-container">
      <div className="my-profile-details-container">
        <img
          src={filterProfile[0]?.avatarUrl}
          alt="my-profile-img"
          className="my-profile-img"
        />
        <h3>
          {filterProfile[0]?.firstName} {filterProfile[0]?.lastName}
        </h3>
        <p>@{username}</p>
        <button className="button-primary" onClick={editProfileHandler}>
          edit
        </button>
      </div>
      {editProfile && <EditProfile />}

      <div className="my-profile-info-container">
        <p>{filterProfile[0]?.bio}</p>
        <Link>{filterProfile[0]?.website}</Link>
      </div>
      <div className="my-profile-count-container">
        <div>
          <p>0</p>
          <p>posts</p>
        </div>

        <div>
          <p>0</p>
          <p>followers</p>
        </div>
        <div>
          <p>0</p>
          <p>following</p>
        </div>
      </div>
    </div>
  );
}

export { MyProfile };
