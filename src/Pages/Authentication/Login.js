import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { userContext } from "../../context/UserContext";
import { useEffect } from "react";

function LoginPage() {
  const { handleLoginInput, handleLoginSubmit, loginData } =
    useContext(authContext);
  const { getUsers } = useContext(userContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="login-main-container">
      <h2>connectify</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="login-container">
          <div className="login-header-container">
            <h3>login</h3>
          </div>

          <div className="login-user-name-container">
            <label>username</label>
            <input
              name="username"
              type="text"
              value={loginData.username}
              onChange={handleLoginInput}
            />
          </div>

          <div className="login-password-container">
            <label>password</label>

            <input
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleLoginInput}
            />
          </div>

          <div className="login-btn-container">
            <button className="login-btn-primary">login</button>
          </div>
          <div className="login-guest-btn-container">
            <button className="login-btn-secondary">login in as guest</button>
          </div>
          <div className="new-account-container">
            <span> create new account ?</span>
            <Link className="create-account-link" to="/signup">
              Sign up here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export { LoginPage };
