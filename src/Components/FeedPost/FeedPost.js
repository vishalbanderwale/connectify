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
import { PopUpOption } from "../PopUpOption/PopUpOption";
import { EditPopUp } from "../EditPopUp/EditPopUp";

function FeedPost({ data }) {
  // console.log(data);
  // data=feedpost data
  // const { username, content } = data; we can destruct also
  const { loginData } = useContext(authContext);
  const { optionToggle, setoptionToggle, editToggle, handleSinglePost } =
    useContext(postContext);
  // const { mainUser } = useContext(authContext);
  const { username } = loginData;
  // console.log(username);
  // console.log(loginData);
  const { users } = useContext(userContext);

  const {
    likePost,
    addBookmarkPost,
    removeBookmarkPost,
    dislikePost,
    bookmarks,
  } = useContext(postContext);

  const fullNameDataFilter = users?.filter(
    (f) => f?.username === data?.username
  );
  // console.log(fullNameDataFilter[0]);

  // function handleLike() {
  //   likePost(data._id);
  // }

  // const findUser = users.filter((f) => f.username === username);
  // console.log(findUser);

  const likedByUser = () => {
    return (
      data?.likes?.likedBy?.filter((f) => f?.username === username).length === 0
      //data is from post   login username shd match ussername liked by
    );
  };

  // const month = new Date(data.createdAt)
  //   .toDateString()
  //   .split(" ")
  //   .slice(1, 4)
  //   .join(" ");
  // console.log(month);

  const bookmarkedByUser = () => {
    return bookmarks?.filter((f) => f._id === data._id).length === 0;
  };

  // console.log(bookmarkedByUser());

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
                {fullNameDataFilter[0]?.firstName}
                {fullNameDataFilter[0]?.lastName}
              </p>
              <p>@{data?.username}</p>
            </Link>
          </div>
          <div>
            <p>{`${new Date(data?.createdAt)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}`}</p>
          </div>
        </div>

        <div className="feed-post-menu-container">
          {username === data?.username ? (
            <FontAwesomeIcon
              icon={faEllipsis}
              onClick={
                () =>
                  optionToggle
                    ? setoptionToggle(null)
                    : setoptionToggle(data?._id)
                //null is false value
              }
              //saving unquieid
            />
          ) : null}

          {/* // checking card id and set id */}

          {optionToggle === data?._id && (
            <div>
              <PopUpOption data={data} />
            </div>
          )}

          {editToggle && (
            <div className="edit-pop-up">
              <EditPopUp data={data} />
            </div>
          )}
        </div>
      </div>
      <div className="feed-post-section">
        <p onClick={() => handleSinglePost(data?._id)}>{data?.content}</p>
      </div>
      <div className="feed-post-footer">
        {likedByUser() ? (
          <FontAwesomeIcon
            icon={faHeart}
            color="blue"
            onClick={() => likePost(data?._id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            color="red"
            onClick={() => dislikePost(data?._id)}
          />
        )}

        <p>{data?.likes?.likeCount}</p>

        <FontAwesomeIcon icon={faComment} />
        {bookmarkedByUser() ? (
          <FontAwesomeIcon
            icon={faBookmark}
            color="blue"
            onClick={() => addBookmarkPost(data._id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBookmark}
            color="red"
            onClick={() => removeBookmarkPost(data?._id)}
          />
        )}

        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
}

export { FeedPost };
