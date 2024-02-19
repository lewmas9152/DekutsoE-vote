import React, { useState, useContext, useEffect } from "react";
import logo from "/assets/logo.svg";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
import Disclaimer from "./Disclaimer";

const SignUp = () => {
  const {
    userState,
    currentUserEmail,
    setCurrentuserEmail,
    handleSignUpStatusChange,
  } = useContext(UserContext);
  const [activeOption, setActiveOption] = useState("ADMIN SIGNUP");

  const navigate = useNavigate();

  const handleOptionClick = (newSignUpStatus) => {
    handleSignUpStatusChange(newSignUpStatus);
    setActiveOption(newSignUpStatus);
  };

  const [signUpUserInfo, setSignUpUserInfo] = useState({
    email: "",
    password: "",
    confPassword: "",
    id: "",
  });

  const handleUserData = (event) => {
    setSignUpUserInfo({
      ...signUpUserInfo,
      [event.target.name]: event.target.value,
    });

    if (
      event.target.name === "password" ||
      event.target.name === "confPassword"
    ) {
      setErrorMessage("");
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  let isValid = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !signUpUserInfo.email ||
      !signUpUserInfo.password ||
      !signUpUserInfo.confPassword ||
      !signUpUserInfo.id
    ) {
      isValid = false;
    } else if (signUpUserInfo.password !== signUpUserInfo.confPassword) {
      isValid = false;
      setErrorMessage("Passwords do not match");
    }

    if (isValid) {
      let url = `https://dekutso-evote-backend.onrender.com/${userState.signUpStatus === "ADMIN SIGNUP" ? "admin/signup" : "signup"}`;

      let data = {
        email : signUpUserInfo.email,
        password : signUpUserInfo.password,
        ...(userState.signUpStatus === "ADMIN SIGNUP" ? {adminId : signUpUserInfo.id} : {regNo : signUpUserInfo.id})
      }
      
      fetch(url , {
        headers : {
          "Content-type" : "application/json",
        },
        method : "post",
        body : JSON.stringify(data)
      }).then(async (res)=>{
        if(res.status !== 201){
          alert("There was an error. Please try again.");
          return;
        }
        alert("Sign up successful");
        let data = await res.json();
        localStorage.setItem("token" , data.token);
        setCurrentuserEmail(signUpUserInfo.email);
        navigate("/dashboard");
        event.target.reset();
      })
    }
  };

  useEffect(() => {
    if (isValid) {
      setErrorMessage("");
    }
  }, [isValid]);

  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>{userState.signUpStatus}</legend>
        <div className="cardParty">
          <div className="loginOpt">
            <a href="#">
              {" "}
              <h3
                className={
                  activeOption === "ADMIN SIGNUP" ? "opt active" : "opt"
                }
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
          <form onSubmit={handleSubmit}>
            <div className="inputItem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signUpUserInfo.email}
                onChange={handleUserData}
                placeholder="e.g johndoe@gmail.com"
                required
              />
            </div>

            <div className="inputItem">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signUpUserInfo.password}
                onChange={handleUserData}
                required
              />
            </div>

            <div className="inputItem">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confPassword"
                required
                name="confPassword"
                value={signUpUserInfo.confPassword}
                onChange={handleUserData}
              />
            </div>

            <div className="error">{errorMessage && <p>{errorMessage}</p>}</div>

            <div className="inputItem">
              <label htmlFor="ID">{userState.identity}</label>
              <input
                type="password"
                id="ID"
                name="id"
                value={signUpUserInfo.id}
                onChange={handleUserData}
                required
              />
            </div>
            <div className="check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <button type="submit"> SIGN IN</button>
          </form>
          <p className="forgot">Forgot password?</p>
        </div>
      </fieldset>

      <Disclaimer />
    </main>
  );
};

export default SignUp;
