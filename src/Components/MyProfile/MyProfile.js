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

  // console.log(users);

  function editProfileHandler() {
    setEditProfile(!editProfile);
  }

  const filterProfile = users?.filter((f) => f?.username === username);
  console.log(filterProfile);

  return (
    <>
      <section>
        <img
          src={filterProfile[0]?.avatarUrl}
          alt="my-profile-img"
          className="my-profile-img"
        />
        <p>{filterProfile[0]?.username}</p>
        <p>@{username}</p>
        <button className="button-primary" onClick={editProfileHandler}>
          edit
        </button>
      </section>
      {editProfile && <EditProfile />}
      <section>
        <p>{filterProfile[0]?.bio}</p>
        <Link>{filterProfile[0]?.website}</Link>
      </section>
      <div>
        <p>posts</p>
        <p>followers</p>
        <p>following</p>
      </div>
    </>
  );
}

export { MyProfile };
