import "./forms.css";
import "./SignUpForm.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = (props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [existUser, setExistUser] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const setRegister = props.setRegister;

  const isIdExist = (id) => {
    return existUser.some((account) => account.id === id);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (pw !== confirmPw) {
      alert(`Passwords do not match. Please check your passwords`);
    } else {
      if (!isIdExist(id)) {
        localStorage.setItem(
          "users",
          JSON.stringify([...existUser, { id: id, pw: pw }])
        );
        setRegister(false);
      } else {
        alert(`User name '${id}' already exists, please try again`);
      }
    }
  };

  return (
    <>
      <form className="auth_form signup_form" onSubmit={handleSignup}>
        <h2 className="form_title signup_title">Sign Up</h2>
        <div className="form_container signup_form_container">
          <div className="input_container signup_input_container input_id">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="id"
              id="signup_id"
              className="input_field signup_input_field"
              placeholder="ID"
              required
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="input_container signup_input_container input_pw">
            <FontAwesomeIcon icon={faUnlock} />
            <input
              type="password"
              name="pw"
              id="signup_pw"
              className="input_field signup_input_field"
              placeholder="Password"
              required
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <div className="input_container signup_input_container input_pw">
            <FontAwesomeIcon icon={faUnlock} />
            <input
              type="password"
              name="pw"
              id="signup_pw"
              className="input_field signup_input_field"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPw(e.target.value)}
            />
          </div>
          <div className="btn_field signup_btns_container">
            <button className="form_btn signup_btn signup_create_btn">
              Sign up!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
