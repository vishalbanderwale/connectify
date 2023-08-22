import { Link } from "react-router-dom";
import "./MyProfile.css";
function MyProfile() {
  return (
    <>
      <section>
        <img
          src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
          alt="my-profile-img"
          className="my-profile-img"
        />
        <p>vishal singh</p>
        <p>@vishal</p>
        <button className="button-primary">edit</button>
      </section>
      <section>
        <p>bio</p>
        <Link>website</Link>
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
