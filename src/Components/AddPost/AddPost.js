import { faFaceSmile, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddPost.css";

function AddPost() {
  return (
    <div className="add-post-main-container">
      <div className="add-post-header">
        <span>
          {" "}
          <img
            src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
            alt="add-post-profile"
            className="add-post-profile-img"
          />
        </span>
        <textarea placeholder="what's happening"></textarea>
      </div>
      <div className="add-post-footer">
        <div className="add-post-icons">
          <div className="add-post-media-icon">
            <FontAwesomeIcon icon={faImage} />
          </div>
          <div className="add-post-emoji-icon">
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
        </div>

        <div className="add-post-primary-btn">
          <button>post</button>
        </div>
      </div>
    </div>
  );
}

export { AddPost };
