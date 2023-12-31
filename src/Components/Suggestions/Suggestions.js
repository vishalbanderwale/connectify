import { Link, useNavigate } from "react-router-dom";
import "./Suggestions.css";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";

function Suggestions({ data }) {
  const { followUsers } = useContext(userContext);

  // console.log(data);
  const Navigate = useNavigate();

  return (
    <div className="suggestions-main-container">
      <div
        className="suggestions-account-details"
        onClick={() => {
          Navigate(`/profile/${data.username}`);
        }}
      >
        <div className="suggestions-media-container">
          <Link>
            <img
              src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
              alt="left-side-bar-profile-pic"
              className="suggestions-profile-img"
            />
          </Link>
        </div>
        <div className="suggestions-non-media-container">
          <Link>
            <p>
              {data?.firstName ?? "adrash"} {data?.lastName ?? "balika"}
            </p>
            <p>{data?.username ?? "@adrash"}</p>
          </Link>
        </div>
      </div>

      <div className="suggestions-follow-primary-btn">
        <button
          className="button-primary "
          onClick={() => followUsers(data._id)}
        >
          follow +
        </button>
      </div>
    </div>
  );
}

export { Suggestions };
