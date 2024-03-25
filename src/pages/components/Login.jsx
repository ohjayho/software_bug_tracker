import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    // log user in
  };

  return (
    <>
      <form className="login_form" onSubmit={handleLogin}>
        <h1 className="login_title">Software Bug Tracker</h1>
        <div className="login_container">
          <div className="input_container">
            <label className="input_label" htmlFor="id">
              ID
            </label>
            <input
              type="text"
              className="input_field input_id"
              id="id"
              required
              value={username}
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
              value={password}
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

export default Login;
