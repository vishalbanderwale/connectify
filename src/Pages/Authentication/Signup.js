import "./Signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup-main-container">
      <h2>connectify</h2>
      <form>
        <div className="signup-container">
          <div className="signup-header-container">
            <h3>signup</h3>
          </div>

          <div className="signup-full-name-container">
            <label>full name</label>
            <input name="full name" />
          </div>

          <div className="signup-email-address-container">
            <label>email address</label>
            <input name="email" type="password" />
          </div>
          <div className="signup-user-name-container">
            <label>Username</label>
            <input name="user name" />
          </div>
          <div className="signup-password-container">
            <label>password</label>
            <input name="password" />
          </div>
          <div className="signup-confirm-password-container">
            <label>confirmpassword</label>
            <input name="confirm password" />
          </div>

          <div className="signup-btn-container">
            <button className="signup-btn-primary">signup</button>
          </div>

          <div className="login-account-container">
            <span>already have an account ?</span>
            <Link className="login-account-link" to="/login">
              {" "}
              Log in here{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Signup };
