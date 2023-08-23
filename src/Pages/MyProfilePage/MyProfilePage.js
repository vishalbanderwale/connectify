import { useContext } from "react";
import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Footer } from "../../Components/Footer/Footer";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { MyProfile } from "../../Components/MyProfile/MyProfile";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Suggestions } from "../../Components/Suggestions/Suggestions";

import { postContext } from "../../context/PostContext";

function MyProfilePage() {
  const { filteredMain } = useContext(postContext);
  console.log(filteredMain);
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
        {filteredMain?.length === 0 ? (
          <h1>no post</h1>
        ) : (
          filteredMain?.map((postData) => (
            <div key={postData?._id}>
              <FeedPost data={postData} />
            </div>
          ))
        )}
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
