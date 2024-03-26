import { useState } from "react";
import "./LoginForm.css";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = JSON.parse(localStorage.getItem("users"));

  const handleLogin = (e) => {
    e.preventDefault();
    if (users.length !== 0) {
      navigate("/login");
    }
    const account = users.find((user) => user.id === username);
    console.log(account);
    if (account && account.pw === password) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("currentUser", username);
      navigate("/dashboard");
      location.reload();
    }
  };

  return (
    <>
      <form className="login_form" onSubmit={handleLogin}>
        <h1 className="login_title">Software Bug Tracker</h1>
        <div className="login_form_container">
          <div className="input_container">
            <label className="input_label" htmlFor="id">
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
            <label className="input_label" htmlFor="password">
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
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
