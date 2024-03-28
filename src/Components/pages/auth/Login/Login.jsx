import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./Login.css";

const Login = () => {
  const [register, setRegister] = useState(false);
  return (
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
  );
};

export default Login;
