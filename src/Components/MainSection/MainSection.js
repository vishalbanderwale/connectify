import { useContext } from "react";
import { AddPost } from "../AddPost/AddPost";
import { FeedPost } from "../FeedPost/FeedPost";
import "./MainSection.css";
import { postContext } from "../../context/PostContext";

function MainSection() {
  const { post } = useContext(postContext);
  return (
    <>
      <AddPost />
      {post?.map((postData) => (
        <div key={postData._id}>
          <FeedPost data={postData} />
          {/* (//passing prop here)   */}
        </div>
      ))}
    </>
  );
}

export { MainSection };
