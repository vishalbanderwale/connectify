import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-main-container">
        <div className="footer-heading-container">
          <p>Made by Vishal Singh</p>
        </div>
        <div className="footer-icon-container">
          <Link>
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
