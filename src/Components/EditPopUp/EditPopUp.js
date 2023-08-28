import { faFaceSmile, faImage } from "@fortawesome/free-solid-svg-icons";
import "./EditPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useContext } from "react";
import { postContext } from "../../context/PostContext";

function EditPopUp() {
  // const [updatedPost, setUpdatedPost] = useState(data);

  const editToken = localStorage.getItem("Token");

  const { editPostData, seteditPostData, Dispatch, setEditToggle } =
    useContext(postContext);

  const editPostHandler = (e) => {
    const value = e.target.value;

    seteditPostData({ ...editPostData, content: value });
    console.log(editPostData);
  };

  const updatePostHandler = async () => {
    console.log(editPostData.id);
    const response = await fetch(`/api/posts/edit/${editPostData.id}`, {
      method: "POST",

      headers: {
        authorization: editToken,
      },
      body: JSON.stringify({
        postData: { content: editPostData.content },
      }),
    });

    const editData = await response.json();
    if (!editData.error) {
      Dispatch({ type: "SET_POST", payload: editData.posts });
    }

    setEditToggle(false);
  };

  return (
    <div className="edit-pop-up-outer-container">
      <div className="edit-pop-up-main-container">
        <div className="edit-pop">
          <h3>edit post</h3>
          <div className="edit-pop-up-header">
            <span>
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="add-post-profile"
                className="edit-pop-up-post-profile-img"
              />
            </span>
            <textarea
              placeholder=""
              name="content"
              value={editPostData?.content}
              onChange={(e) => editPostHandler(e)}
            ></textarea>
          </div>
          <div className="edit-pop-up-post-footer">
            <div className="edit-pop-up-post-icons">
              <div className="edit-pop-up-post-media-icon">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="edit-pop-up-post-emoji-icon">
                <FontAwesomeIcon icon={faFaceSmile} />
              </div>
            </div>

            <div className="edit-pop-up-post-primary-btn">
              <button onClick={updatePostHandler}>update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { EditPopUp };
