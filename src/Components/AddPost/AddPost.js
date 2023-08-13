import { faFaceSmile, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddPost.css";
import { useState } from "react";
import { useContext } from "react";
import { postContext } from "../../context/PostContext";

function AddPost() {
  const [addPost, setaddPost] = useState({ content: "" });
  const contentToken = localStorage.getItem("Token");
  const { Dispatch } = useContext(postContext);

  const contentHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setaddPost({ ...AddPost, [name]: value });
  };

  const addPostHandler = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        authorization: contentToken,
      },
      body: JSON.stringify({
        postData: addPost,
      }),
    });
    const data = await response.json();
    console.log(data);
    Dispatch({ type: "SET_POST", payload: data.posts });
  };

  return (
    <div className="add-post-main-container">
      <div className="add-post-header">
        <span>
          <img
            src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
            alt="add-post-profile"
            className="add-post-profile-img"
          />
        </span>
        <textarea
          placeholder="what's happening"
          name="content"
          value={addPost.content}
          onChange={(e) => contentHandler(e)}
        ></textarea>
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
          <button onClick={addPostHandler}>post</button>
        </div>
      </div>
    </div>
  );
}

export { AddPost };
