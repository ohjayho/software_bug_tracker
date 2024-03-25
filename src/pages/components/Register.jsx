import { useState } from "react";

const Register = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSignup = (e) => {
    // register user
  };

  return (
    <div className="signupform_container">
      <h1>Make your account</h1>
      <form action="" className="signup_form">
        <div className="signup_inputs input_id">
          <label htmlFor="signup_id">ID</label>
          <input
            type="text"
            name="id"
            id="signup_id"
            value={id || ""}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="signup_inputs input_pw">
          <label htmlFor="signup_pw">Password</label>
          <input
            type="password"
            name="pw"
            id="signup_pw"
            value={pw || ""}
            onChange={(e) => setPw(e.target.value)}
            required
          />
        </div>
        <div className="signup_btns_container">
          <button
            className="signup_btn signup_create_btn"
            onClick={handleSignup}
          >
            Sign up!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
