
import "./Signup.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";


function Signup() {


const{handleSignUpInput,handleSignUpSubmit,user}=useContext(authContext)

  return (
    <div className="signup-main-container">
      <h2>connectify</h2>
      <form onSubmit={handleSignUpSubmit}>
        <div className="signup-container">
          <div className="signup-header-container">
            <h3>signup</h3>
          </div>

          <div className="signup-full-name-container">
            <label>full name</label>
            <input name="fullName"  type="text"  value={user.fullName} onChange={handleSignUpInput} />
          </div>

          <div className="signup-email-address-container">
            <label>email address</label>
            <input name="email" type="email"  value={user.email} onChange={handleSignUpInput}/>
          </div>
          <div className="signup-user-name-container">
            <label>Username</label>
            <input name="username" type="text"  value={user.username} onChange={handleSignUpInput} />
          </div>
          <div className="signup-password-container">
            <label>password</label>
            <input name="password"  type="password"  value={user.password} onChange={handleSignUpInput}/>
          </div>
          <div className="signup-confirm-password-container">
            <label>confirm password</label>
            <input name="confirmPassword" type="password"  value={user.confirmPassword} onChange={handleSignUpInput}/>
          </div>

          <div className="signup-btn-container">
            <button className="signup-btn-primary">signup</button>
          </div>

          <div className="login-account-container">
            <span>already have an account ?</span>
            <Link className="login-account-link" to="/login">
              Log in here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Signup };
