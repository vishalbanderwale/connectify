import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingpage-main-container">
      <div className="media-container">
        <img src="https://placehold.co/500x500/png" alt="landingPage-img" />
      </div>
      <div className="non-media-container">
        <div className="landingpage-header-container">
          <h2>connectify</h2>
        </div>

        <div className="tag-lines-container">
          <h2>
            <span>follow</span> Your Interests.
          </h2>
          <h2>
            {" "}
            <span>connect</span> for Meaningful Relationships.
          </h2>
          <h2>
            {" "}
            <span>share</span> Your Journey. Connect with Others.
          </h2>
        </div>
        <div className="access-container">
          <button className="primary-btn">join now</button>
          <p onClick={() => navigate("/login")}>Already have an account?</p>
        </div>
      </div>
    </div>
  );
}
export { LandingPage };
