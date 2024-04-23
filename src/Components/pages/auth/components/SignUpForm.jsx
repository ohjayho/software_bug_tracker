import "./forms.css";
import "./SignUpForm.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUnlock,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignUpForm = (props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [existUser, setExistUser] = useState([]);
  const setRegister = props.setRegister;

  useEffect(() => {
    const existUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users");
        setExistUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    existUsers();
  }, []);

  const isUserExist = (id) => {
    return existUser.some((user) => user.id === id);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (pw !== confirmPw) {
      alert(`Passwords do not match. Please check your passwords`);
    } else {
      if (!isUserExist(id)) {
        const createUser = async () => {
          try {
            await axios.post("http://localhost:8800/users", {
              id: id,
              pw: pw,
              email: email,
              phone: phone
            });
          } catch (err) {
            console.log(err);
          }
        };
        createUser();
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
          <div className="input_container signup_input_container input_email">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              id="signup_email"
              className="input_field signup_input_field"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_container signup_input_container input_phone">
            <FontAwesomeIcon icon={faPhone} />
            <input
              type="tel"
              name="phone"
              id="signup_phone"
              className="input_field signup_input_field"
              title="형식 010-0000-0000"
              placeholder="Phone number"
              required
              pattern="(010)-\d{3,4}-\d{4}"
              onChange={(e) => setPhone(e.target.value)}
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
