import { Link, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faChalkboard,
  faCircleInfo,
  faPeopleGroup,
  faTicket
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [authenticated, setAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("authenticated") || false);
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };
  const handleLogut = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("currentUser");
    setAuthenticated(false);
    setUser(null);
    navigate("/auth");
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
          <NavLink to="/tickets" className="menu btn_tickets">
            <FontAwesomeIcon icon={faTicket} /> Tickets
          </NavLink>
          <NavLink to="/administration" className="menu btn_administration">
            <FontAwesomeIcon icon={faPeopleGroup} /> Administration
          </NavLink>
        </div>
        <div className="menu_container">
          <div className="user_container">
            {user && authenticated ? (
              <div className="logged_in">
                <h4 className="logged_user">{`${user.first_name} ${user.last_name}`}</h4>
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
