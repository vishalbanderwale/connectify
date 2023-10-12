import { Link } from "react-router-dom";
import "./ThirdPersonProfile.css";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";

function ThirdPersonProfile({ data }) {
  const [followToggle, setFollowToggle] = useState(false);

  const { followUsers } = useContext(userContext);
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

        <button
          className="button-primary"
          onClick={() => {
            setFollowToggle(!followToggle);
            followUsers(data._id);
          }}
        >
          {followToggle ? "unFollow" : "Follow"}
        </button>
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
