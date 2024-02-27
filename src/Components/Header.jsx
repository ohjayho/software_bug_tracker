import { Link } from "react-router-dom";
import user from "../assets/user.png";
import "./Header.css";

const Header = () => {
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
            <div className="username">User</div>
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
