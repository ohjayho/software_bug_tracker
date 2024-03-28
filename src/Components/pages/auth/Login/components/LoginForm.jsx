import { useState } from "react";
import "./forms.css";
import "./LoginForm.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = JSON.parse(localStorage.getItem("users"));

  const handleLogin = (e) => {
    e.preventDefault();
    if (!users) {
      alert(`This account doesn't exist. Please check your account.`);
    }
    const account = users.find((user) => user.id === username);
    console.log(account);
    if (account && account.pw === password) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("currentUser", username);
      navigate("/dashboard");
      location.reload();
    } else {
      alert(`This account doesn't exist. Please check your account.`);
    }
  };

  return (
    <>
      <form className="auth_form login_form" onSubmit={handleLogin}>
        <h2 className="form_title login_title">Login</h2>
        <div className="form_container login_form_container">
          <div className="input_container">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              className="input_field input_id"
              id="id"
              placeholder="ID"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input_container">
            <FontAwesomeIcon icon={faUnlock} />
            <input
              type="password"
              className="input_field input_pw"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="btn_field login_field">
            <button className="form_btn login_btn">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
