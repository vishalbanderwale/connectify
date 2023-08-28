import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Suggestions } from "../../Components/Suggestions/Suggestions";
import { ThirdPersonProfile } from "../../Components/ThirdPersonProfile/ThirdPersonProfile";

import { userContext } from "../../context/UserContext";
import { useContext } from "react";
import { FeedPost } from "../../Components/FeedPost/FeedPost";
import { postContext } from "../../context/PostContext";

function ThirdPersonProfilePage() {
  const { users } = useContext(userContext);
  const { post } = useContext(postContext);

  const { username } = useParams();

  const thirdPersonFilter = users.filter((f) => f.username === username);

  const feedPostFilter = post.filter((f) => f.username === username);

  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
        <div>
          {thirdPersonFilter.map((thirdPersonData) => (
            <div key={thirdPersonData.username}>
              <ThirdPersonProfile data={thirdPersonData} />
            </div>
          ))}
        </div>

        <div className="feed-post-container">
          {feedPostFilter.map((feedPostData) => (
            <div key={feedPostData._id}>
              <FeedPost data={feedPostData} />
            </div>
          ))}
        </div>
      </div>

      <div className="right-side-bar-container">
        {users.map((usersData) => (
          <div key={usersData.username}>
            <Suggestions data={usersData} />
          </div>
        ))}
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { ThirdPersonProfilePage };
