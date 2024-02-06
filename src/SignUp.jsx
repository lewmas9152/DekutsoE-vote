import React, { useState } from "react";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpStatus, setSignUpStatus] = useState("ADMIN SIGNUP");
  const [identity, setIdentity] = useState("Admin ID");

  const handleSignUpStatus = (newSignUpStatus) => {
    setSignUpStatus(newSignUpStatus);

    if (newSignUpStatus === "STUDENT SIGNUP") {
      setIdentity("Reg.no");
    } else {
      setIdentity("Admin ID");
    }
  };
  return (
    <main>
      
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>{signUpStatus}</legend>

        <div className="loginOpt">
          <a href="#">
            {" "}
            <h3
              className="opt"
              onClick={() => handleSignUpStatus("ADMIN SIGNUP")}
            >
              Admin
            </h3>
          </a>

          <a href="#">
            <h3
              className="opt"
              onClick={() => handleSignUpStatus("STUDENT SIGNUP")}
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
            <label htmlFor="ID">{identity}</label>
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
