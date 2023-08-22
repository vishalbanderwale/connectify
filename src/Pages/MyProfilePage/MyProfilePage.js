import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Footer } from "../../Components/Footer/Footer";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { MyProfile } from "../../Components/MyProfile/MyProfile";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Suggestions } from "../../Components/Suggestions/Suggestions";

function MyProfilePage() {
  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>
      <div className="main-container">
        <MyProfile />
      </div>
      <div className="feed-post-container">
        <FeedPost />
      </div>
      <div className="right-side-bar-container">
        <Suggestions />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { MyProfilePage };
