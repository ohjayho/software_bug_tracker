import { useState } from "react";
import "./LoginForm.css";
import { useNavigate, Navigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const users = [{ username: "admin", password: "123" }];
  console.log("helo!");
  const handleLogin = (e) => {
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  if (authenticated === "true") {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <form className="login_form" onSubmit={handleLogin}>
        <h1 className="login_title">Software Bug Tracker</h1>
        <div className="login_container">
          <div className="input_container">
            <label className="input_label" for="id">
              ID
            </label>
            <input
              type="text"
              className="input_field input_id"
              id="id"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input_container">
            <label className="input_label" for="password">
              Password
            </label>
            <input
              type="password"
              className="input_field input_pw"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="login_field">
            <button className="login_btn">Login</button>
            <div className="signup_container">
              <h5 className="signup_msg">Don't have an account?</h5>
              <h5 className="signup_msg signup_click">Sign up!</h5>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
