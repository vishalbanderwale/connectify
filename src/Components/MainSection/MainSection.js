import { useContext } from "react";
import { AddPost } from "../AddPost/AddPost";
import { FeedPost } from "../FeedPost/FeedPost";
import "./MainSection.css";
import { postContext } from "../../context/PostContext";

import { authContext } from "../../context/AuthContext";

function MainSection() {
  const { post } = useContext(postContext);
  // console.log(post);
  const { mainUser } = useContext(authContext);
  console.log(mainUser.username);

  const filteredMain = post.filter(
    (fi) =>
      mainUser?.following?.find((f) => f?.username === fi?.username) ||
      fi?.username === mainUser?.username
  );

  console.log(post.filter((f) => f.username === mainUser.username));

  return (
    <>
      <AddPost />
      {filteredMain?.map((postData) => (
        <div key={postData._id}>
          <FeedPost data={postData} />
          {/* (//passing prop here)   */}
        </div>
      ))}
    </>
  );
}

export { MainSection };

// {post.map((postData) => (
//   <div key={postData._id}>
//     <FeedPost data={postData} />
//     {/* (//passing prop here)   */}
//   </div>
// ))}
