import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [user, setUser] = useState(localStorage.getItem("currentUser"));
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogut = () => {
    localStorage.setItem("authenticated", false);
    localStorage.setItem("currentUser", "");
    navigate("/login");
    location.reload();
  };

  return (
    <header>
      <div className="header_logo">
        <Link to="/dashboard">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header_container">
        <div className="menu_container">
          <div className="menu">
            <Link to="/about">About</Link>
          </div>
          <div className="menu">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="menu">
            <Link to="/create">Open Issues</Link>
          </div>
        </div>
        <div className="menu_container">
          <div className="user_container">
            {user && authenticated ? (
              <div className="logged_in">
                <h4 className="logged_user">{user}</h4>
                <div className="btn_logout" onClick={handleLogut}>
                  Logout
                </div>
              </div>
            ) : (
              <div className="login_require" onClick={handleLogin}>
                Login
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
