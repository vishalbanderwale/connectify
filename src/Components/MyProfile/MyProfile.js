import { Link } from "react-router-dom";
import "./MyProfile.css";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { userContext } from "../../context/UserContext";
import { EditProfile } from "../EditProfile/EditProfile";
function MyProfile() {
  // const { loginData } = useContext(authContext);
  // const { username } = loginData;
  const { editProfileHandler, editProfile, setEditProfile } =
    useContext(userContext);

  const { mainUser } = useContext(authContext);
  console.log(mainUser);

  // const  = users?.filter((f) => f?.username === username);

  return (
    <div className="my-profile-main-container">
      <div className="my-profile-details-container">
        <img
          src={mainUser?.avatarUrl}
          alt="my-profile-img"
          className="my-profile-img"
        />
        <h3>
          {mainUser?.firstName} {mainUser?.lastName}
        </h3>
        <p>@{mainUser?.username}</p>
        <button className="button-primary" onClick={editProfileHandler}>
          edit
        </button>
      </div>

      {editProfile && (
        <div
          onClick={() => setEditProfile(false)}
          className="editprofile_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="editprofile_modal_outer_container"
          >
            {/* we can do e.stopprogragtion or we can take one empty div  */}
            <EditProfile />
          </div>
        </div>
      )}

      <div className="my-profile-info-container">
        <p>{mainUser?.bio}</p>
        <Link>{mainUser?.website}</Link>
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
