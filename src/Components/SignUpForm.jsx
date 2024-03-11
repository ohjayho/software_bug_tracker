import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const navigate = useNavigate();

  const existId = JSON.parse(localStorage.getItem("users"));
  const idValidator = (id) => {
    return existId.some((account) => account.id === id);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const id = document.querySelector("#signup_id").value;
    const pw = document.querySelector("#signup_pw").value;
    if (!idValidator(id)) {
      console.log("트루");
      localStorage.setItem(
        "users",
        JSON.stringify([...existId, { id: id, pw: pw }])
      );
      navigate("/");
    } else {
      // how to display error msg that the account already exists?
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="signupform_container">
      <h1>Make your account</h1>
      <form action="" className="signup_form">
        <div className="signup_inputs input_id">
          <label htmlFor="signup_id">ID</label>
          <input type="text" name="id" id="signup_id" required />
        </div>
        <div className="signup_inputs input_pw">
          <label htmlFor="signup_pw">Password</label>
          <input type="password" name="pw" id="signup_pw" required />
        </div>
        <div className="signup_btns_container">
          <button
            className="signup_btn signup_cancel_btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
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

export default SignUpForm;
