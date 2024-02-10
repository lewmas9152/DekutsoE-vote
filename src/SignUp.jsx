import React,{useState, useContext} from "react";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import { UserContext  } from "./App";

const SignUp = () => {
  const { userState, handleSignUpStatusChange } = useContext(UserContext);
  const [activeOption, setActiveOption] = useState(userState.signUpStatus);

  const handleOptionClick = (newSignUpStatus) => {
    handleSignUpStatusChange(newSignUpStatus);
    setActiveOption(newSignUpStatus);
  };
  return (
    <main>
      
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>{userState.signUpStatus}</legend>

        <div className="loginOpt">
          <a href="#">
            {" "}
            <h3
              className={activeOption === "ADMIN SIGNUP" ? "opt active" : "opt"}
              onClick={() => handleOptionClick("ADMIN SIGNUP")}
            >
              Admin
            </h3>
          </a>

          <a href="#">
            <h3
              className={
                activeOption === "STUDENT SIGNUP" ? "opt active" : "opt"
              }
              onClick={() => handleOptionClick("STUDENT SIGNUP")}
            >
              Student
            </h3>
          </a>
        </div>
        <form>
          <div className="inputItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="e.g johndoe@gmail.com"
              required
            />
          </div>

          <div className="inputItem">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>

          <div className="inputItem">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password" required />
          </div>

          <div className="inputItem">
            <label htmlFor="ID">{userState.identity}</label>
            <input type="password" id="ID" required />
          </div>
          <div className="check">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </div>
          <button type="submit">
            {" "}
            <Link to="/signup/dashboard">SIGN IN</Link>
          </button>
        </form>
        <p className="forgot">Forgot password?</p>
      </fieldset>

      <div className="disclaimer">
        <div className="support">
          <p className="disc">Support</p>
          <p className="disc">Terms of service</p>
          <p className="disc">Privacy Policy</p>
        </div>
        <p>A product by DEKUTSO E-vote,inc &copy; 2023-2024</p>
      </div>
    </main>
  );
};

export default SignUp;
