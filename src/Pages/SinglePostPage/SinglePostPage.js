import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { postContext } from "../../context/PostContext";
import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Footer } from "../../Components/Footer/Footer";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../Components/Navbar/Navbar";

function SinglePost() {
  const { singlePostId } = useParams();
  console.log(singlePostId);
  const { post } = useContext(postContext);

  console.log(post);

  const filterSinglePost = post.filter((f) => f?._id === singlePostId);
  console.log(filterSinglePost);

  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
        <h1 style={{ textAlign: "center" }}>post</h1>
        {filterSinglePost.map((m) => (
          <div>
            <FeedPost data={m} />
          </div>
        ))}
      </div>
      <div className="right-side-bar-container">
        <RightSidebar />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { SinglePost };
