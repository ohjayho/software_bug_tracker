import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faChalkboard,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faBug} className="icon" />
        </Link>
      </div>
      <div className="header_container">
        <div className="menu_container">
          <NavLink to="/about" className="menu btn_about">
            <FontAwesomeIcon icon={faCircleInfo} /> About
          </NavLink>
          <NavLink to="/dashboard" className="menu btn_dashboard">
            <FontAwesomeIcon icon={faChalkboard} /> Dashboard
          </NavLink>
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
