import "./EditProfile.css";

function EditProfile() {
  return (
    <div className="edit-profile-main-container">
      <header>edit profile</header>
      <form>
        <div className="edit-profile-details">
          <div className="edit-profile-img-details">
            <p>avatar</p>
            <span>
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="edit-profile-img"
                className="edit-profile-img"
              />
            </span>
          </div>
          <div className="edit-profile-name-details">
            <label>name</label>
            <input type="text" value="vishal" />
          </div>
          <div className="edit-profile-username-details">
            <label>username</label>
            <input type="text" />
          </div>
          <div className="edit-profile-bio-details">
            <label>bio</label>
            <input type="text" />
          </div>
          <div className="edit-profile-website-details">
            <label>username</label>
            <input type="text" />
          </div>
          <div className=" update-btn">
            <button className="button-primary">save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { EditProfile };
