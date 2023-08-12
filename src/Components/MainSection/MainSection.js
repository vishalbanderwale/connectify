import { useContext } from "react";
import { AddPost } from "../AddPost/AddPost";
import { FeedPost } from "../FeedPost/FeedPost";
import "./MainSection.css";
import { postContext } from "../../context/PostContext";

import { authContext } from "../../context/AuthContext";
import { trendingPost } from "../../Reducer/PostReducerUtils";

function MainSection() {
  const { post, sort } = useContext(postContext);
  // console.log(post);
  const { mainUser } = useContext(authContext);
  // console.log(mainUser.username);

  const sortedData = trendingPost(post, sort);
  // console.log(sortedData);

  //post.filter 19th line before sorting
  const filteredMain = sortedData?.filter(
    (fi) =>
      mainUser?.following?.find((f) => f?.username === fi?.username) ||
      fi?.username === mainUser?.username //checking its username matching with our username
    // we are taking one post checking twice
  );

  // console.log(post.filter((f) => f.username === mainUser.username));
  // console.log(filteredMain);
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
