import { Link } from "react-router-dom";
import "./ThirdPersonProfile.css";

function ThirdPersonProfile({ data }) {
  console.log(data.username);
  return (
    <div className="my-profile-main-container">
      <div className="my-profile-details-container">
        <img
          src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
          alt="third-person-profile"
          className="my-profile-img"
        />
        <h3>
          {data?.firstName ?? "adrash"} {data?.lastName ?? "balika"}
        </h3>
        <p>@{data?.username ?? "@adrash"}</p>

        <button className="button-primary">follow</button>
      </div>

      <div className="my-profile-info-container">
        <p>{data.bio}</p>
        <Link>{data.website}</Link>
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

export { ThirdPersonProfile };
