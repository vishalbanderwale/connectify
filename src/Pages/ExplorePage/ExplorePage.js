import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Navbar } from "../../Components/Navbar/Navbar";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { Footer } from "../../Components/Footer/Footer";
import "./ExplorePage.css";

import { useContext } from "react";
import { postContext } from "../../context/PostContext";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";

function ExplorePage() {
  const { post } = useContext(postContext);
  console.log(post);

  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
        {post?.map((m) => (
          <>
            <FeedPost data={m} />
          </>
        ))}
      </div>

      <div className="right-side-bar-container">
        {/* <Suggestions /> */}
        <RightSidebar />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { ExplorePage };
