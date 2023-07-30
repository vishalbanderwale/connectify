import { useContext } from "react";
import { AddPost } from "../AddPost/AddPost";
import { FeedPost } from "../FeedPost/FeedPost";
import "./MainSection.css";
import { PostContext } from "../../context/PostProvider";

function MainSection() {
  const { post } = useContext(PostContext);
  return (
    <>
      <AddPost />
      {post.map((postData) => (
        <FeedPost data={postData} />
      ))}
    </>
  );
}

export { MainSection };
