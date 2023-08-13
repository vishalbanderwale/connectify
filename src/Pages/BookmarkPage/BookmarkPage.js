import { useContext } from "react";
import { postContext } from "../../context/PostContext";
import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Navbar } from "../../Components/Navbar/Navbar";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { Footer } from "../../Components/Footer/Footer";

function BookmarkPage() {
  const { bookmarks } = useContext(postContext);

  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
        {bookmarks.length === 0 ? (
          <h1>no bookmark post</h1>
        ) : (
          bookmarks.map((m) => (
            <>
              <FeedPost data={m} />
            </>
          ))
        )}
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

export { BookmarkPage };
