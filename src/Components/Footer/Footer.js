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
          <p>Made with by vishal singh</p>
        </div>
        <div className="footer-icon-container">
          <Link>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
        <div className="footer-year-container">
          <p>© 2023| Connectify</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
