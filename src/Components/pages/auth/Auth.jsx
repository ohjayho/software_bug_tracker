import "./Auth.css";
import Login from "./Login/Login";

const Auth = () => {
  return (
    <div className="auth_container">
      <h1 className="title_auth">Software Bug Tracker</h1>
      <Login />
    </div>
  );
};

export default Auth;
