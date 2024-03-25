import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const AuthPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div>
      <h4>welcome to our site</h4>
      {register ? <Register /> : <Login />}

      {register ? (
        <div>
          <p>
            Already have an account? Click{" "}
            <span onClick={() => setRegister(false)}>here</span>
          </p>
        </div>
      ) : (
        <div>
          <p>
            Need to create an account? Click{" "}
            <span onClick={() => setRegister(true)}>here</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
