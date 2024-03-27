import "./SignUpForm.css";
import { useState } from "react";

const SignUpForm = (props) => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [existUser, setExistUser] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const setRegister = props.setRegister;

  const isIdExist = (id) => {
    return existUser.some((account) => account.id === id);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!isIdExist(id)) {
      localStorage.setItem(
        "users",
        JSON.stringify([...existUser, { id: id, pw: pw }])
      );
      setRegister(false);
    } else {
      alert(`User name '${id}' already exists, please try again`);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setRegister(false);
  };
  return (
    <>
      <form className="signup_form" onSubmit={handleSignup}>
        <h2 className="signup_title">Sign Up</h2>
        <div className="signup_form_container">
          <div className="signup_inputs input_id">
            <label htmlFor="id" className="signup_id signup_input_label">
              ID
            </label>
            <input
              type="text"
              name="id"
              id="signup_id"
              required
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="signup_inputs input_pw">
            <label htmlFor="signup_pw" className="signup_id signup_input_label">
              Password
            </label>
            <input
              type="password"
              name="pw"
              id="signup_pw"
              required
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div className="signup_btns_container">
            <button
              className="signup_btn signup_cancel_btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="signup_btn signup_create_btn">Sign up!</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
