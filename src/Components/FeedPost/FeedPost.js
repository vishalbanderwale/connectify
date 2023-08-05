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
import { postContext } from "../../context/PostContext";
import { authContext } from "../../context/AuthContext";

function FeedPost({ data }) {
  // const { username, content } = data; we can destruct also
  const { loginData } = useContext(authContext);
  const { username } = loginData;
  const { users } = useContext(userContext);
  const { likePost, addBookmarkPost, dislikePost } = useContext(postContext);

  const fullNameDataFilter = users.filter((f) => f.username === data.username);
  // console.log(fullNameDataFilter[0]);

  // function handleLike() {
  //   likePost(data._id);
  // }

  const likedByUser = () => {
    return (
      data.likes?.likedBy?.filter((f) => f.username === username).length === 0
    );
  };

  console.log(likedByUser());

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
        {likedByUser() ? (
          <FontAwesomeIcon
            icon={faHeart}
            color="blue"
            onClick={() => likePost(data._id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            color="red"
            onClick={() => dislikePost(data._id)}
          />
        )}

        <p>{data?.likes?.likeCount}</p>

        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon
          icon={faBookmark}
          onClick={() => addBookmarkPost(data._id)}
        />

        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
}

export { FeedPost };
