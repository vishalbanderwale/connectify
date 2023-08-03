import {
  faBookmark,
  faComment,
  faEllipsis,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./FeedPost.css";
import { userContext } from "../../context/UserContext";
import { useContext } from "react";

function FeedPost({ data }) {
  // const { username, content } = data; we can destruct also

  const { users } = useContext(userContext);

  const fullNameDataFilter = users.filter((f) => f.username === data.username);
  console.log(fullNameDataFilter[0]);

  return (
    <div className="feed-post-main-container">
      <div className="feed-post-header">
        <div className="feed-post-profile-details">
          <div className="feed-post-profile-picture">
            <img
              src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
              alt="feed-post-profile"
              className="feed-post-profile-img"
            />
          </div>
          <div className="feed-post-heading">
            <Link>
              <p>
                {fullNameDataFilter[0].firstName}
                {fullNameDataFilter[0].lastName}
              </p>
              <p>@{data?.username}</p>
            </Link>
          </div>
        </div>

        <div className="feed-post-menu-container">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
      <div className="feed-post-section">
        <p>{data?.content}</p>
      </div>
      <div className="feed-post-footer">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
}

export { FeedPost };
