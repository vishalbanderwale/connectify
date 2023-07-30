import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Navbar } from "../../Components/Navbar/Navbar";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { Footer } from "../../Components/Footer/Footer";
import "./ExplorePage.css";
import { Suggestions } from "../../Components/Suggestions/Suggestions";

function ExplorePage() {
  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
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

export { ExplorePage };
