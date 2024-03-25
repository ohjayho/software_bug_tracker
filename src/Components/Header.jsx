import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userImg from "../assets/user.png";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState(localStorage.getItem("currentUser"));
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  const handleLogut = () => {
    localStorage.setItem("authenticated", false);
    localStorage.setItem("currentUser", "");
    location.reload();
  };

  return (
    <header>
      <div className="title">
        <Link to="/dashboard">Software Bug Tracker</Link>
      </div>
      <div className="header_container">
        <div className="menus">
          <div className="menu">
            <Link to="/about">About</Link>
          </div>
          <div className="menu">
            <Link to="/dashboard">Issues</Link>
          </div>
          <div className="menu">
            <Link to="/create">Open Issues</Link>
          </div>
        </div>
        <div className="menus">
          <div className="user_container">
            <div className="username">
              {user && authenticated ? (
                <div className="logged_in">
                  <div className="logged_greeting">Welcome back,</div>
                  <div className="logged_user">{user}</div>
                  <div className="btn_logout" onClick={handleLogut}>
                    Log out
                  </div>
                </div>
              ) : (
                <div className="login_require" onClick={handleLogin}>
                  Login
                </div>
              )}
            </div>
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
