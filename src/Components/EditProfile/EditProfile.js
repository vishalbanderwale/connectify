import { useContext } from "react";
import "./EditProfile.css";
import { authContext } from "../../context/AuthContext";
import { useState } from "react";
import { userContext } from "../../context/UserContext";

function EditProfile() {
  const { mainUser } = useContext(authContext);
  const { editUser, editProfileHandler, setEditProfile } =
    useContext(userContext);
  const [updatedData, setUpdatedData] = useState(mainUser);
  // console.log(mainUser);

  const updateProfileHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedData((updatedData) => ({ ...updatedData, [name]: value }));
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    console.log(updatedData);
    editUser(updatedData);
    setEditProfile(false);
  };

  return (
    <div className="edit-profile-main-container">
      {/* we can do e.stopprogragtion or we can take one empty div */}
      {/* <div
        className="background-profile"
        onClick={() => setEditProfile(false)}
      ></div> */}
      <div>
        <header>edit profile</header>
      </div>

      <form onSubmit={handleEditProfileSubmit}>
        <div className="edit-profile-img-details">
          <p>avatar</p>
          <span>
            <img
              src={updatedData?.avatarUrl}
              alt="edit-profile-img"
              className="edit-profile-img"
            />
          </span>
        </div>

        <div>
          <table>
            <tr className="edit-profile-name-details">
              <td style={{ textAlign: "left" }}>name</td>
              <td>{updatedData?.firstName + " " + updatedData?.lastName}</td>
            </tr>

            <tr className="edit-profile-username-details">
              <td>username</td>
              <td>{updatedData?.username}</td>
            </tr>

            <tr className="edit-profile-bio-details">
              <td>bio</td>
              <td>
                <input
                  type="text"
                  name="bio"
                  value={updatedData?.bio}
                  onChange={(e) => updateProfileHandler(e)}
                />
              </td>
            </tr>

            <tr>
              <td>website</td>
              <td>
                <input
                  type="text"
                  name="website"
                  value={updatedData?.website}
                  onChange={(e) => updateProfileHandler(e)}
                />
              </td>
            </tr>
          </table>
        </div>

        <div>
          <button className="button-primary" type="submit">
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export { EditProfile };
