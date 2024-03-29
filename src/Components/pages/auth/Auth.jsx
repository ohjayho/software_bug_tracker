import "./Auth.css";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

const Auth = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="auth_container">
      <h1 className="title_auth">Software Bug Tracker</h1>
      <div className="login_container">
        {register ? (
          <SignUpForm setRegister={setRegister} />
        ) : (
          <LoginForm setRegister={setRegister} />
        )}
        {register ? (
          <div className="form_msg_container">
            <h5 className="form_msg login_msg">Already have an account?</h5>
            <h5
              className="signup_msg signup_click"
              onClick={() => {
                setRegister(false);
              }}
            >
              Login!
            </h5>
          </div>
        ) : (
          <div className="form_msg_container">
            <h5 className="form_msg signup_msg">Don't have an account?</h5>
            <h5
              className="signup_msg signup_click"
              onClick={() => {
                setRegister(true);
              }}
            >
              Sign up!
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
