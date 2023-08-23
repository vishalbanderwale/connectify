import { useContext } from "react";
import { AddPost } from "../AddPost/AddPost";
import { FeedPost } from "../FeedPost/FeedPost";
import "./MainSection.css";
import { postContext } from "../../context/PostContext";

function MainSection() {
  const { filteredMain } = useContext(postContext);
  // const { post, sort } = useContext(postContext);
  // // console.log(post);
  // const { mainUser } = useContext(authContext);
  // // console.log(mainUser.username);

  // console.log(post.filter((f) => f.username === mainUser.username));
  // console.log(filteredMain);
  return (
    <>
      <AddPost />
      {filteredMain?.length === 0 ? (
        <h1> has there is no post!create a post</h1>
      ) : (
        filteredMain?.map((postData) => (
          <div key={postData._id}>
            {console.log(postData)}
            <FeedPost data={postData} />
            {/* (//passing prop here)   */}
          </div>
        ))
      )}
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
