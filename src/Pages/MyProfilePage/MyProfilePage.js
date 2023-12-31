import { useContext } from "react";
import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { Footer } from "../../Components/Footer/Footer";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { MyProfile } from "../../Components/MyProfile/MyProfile";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Suggestions } from "../../Components/Suggestions/Suggestions";
import "./MyProfilePage.css";
import { postContext } from "../../context/PostContext";
import { userContext } from "../../context/UserContext";

function MyProfilePage() {
  const { users } = useContext(userContext);
  const { myPost } = useContext(postContext);
  // console.log(filteredMain);
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

        {myPost?.length === 0 ? (
          <h1>no post</h1>
        ) : (
          myPost?.map((postData) => (
            <div key={postData?._id}>
              <FeedPost data={postData} />
            </div>
          ))
        )}
      </div>
      <div className="right-side-bar-container">
        {users?.map((postData) => (
          <div key={postData?._id}>
            <Suggestions data={postData} />
          </div>
        ))}
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { MyProfilePage };
