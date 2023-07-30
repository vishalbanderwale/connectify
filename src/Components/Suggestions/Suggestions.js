import { Link } from "react-router-dom";
import "./Suggestions.css";

function Suggestions({ data }) {
  return (
    <div className="suggestions-main-container">
      <div className="suggestions-account-details">
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
              {data.firstName} {data.lastName}
            </p>
            <p>{data.username}</p>
          </Link>
        </div>
      </div>

      <div className="suggestions-follow-primary-btn">
        <button className="button-primary ">follow</button>
      </div>
    </div>
  );
}

export { Suggestions };
