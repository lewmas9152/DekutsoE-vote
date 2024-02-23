import React, { useState, useContext } from "react";
import logo from "/assets/logo.svg";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
import Disclaimer from "./Disclaimer";
import { ElectionContext } from "./App";

const Login = () => {
  const {
    userState,
    currentUserEmail,
    setCurrentuserEmail,
    handleLoginStatusChange,
  } = useContext(UserContext);

  const { getElectionsFromDatabase } = useContext(ElectionContext);
  const [activeOption, setActiveOption] = useState("ADMIN LOGIN");

  const navigate = useNavigate();

  const handleOptionClick = (newLoginStatus) => {
    handleLoginStatusChange(newLoginStatus);
    setActiveOption(newLoginStatus);
  };

  const [loginUserInfo, setLoginUserInfo] = useState({
    email: "",
    password: "",
    confPassword: "",
    regNo: "",
    id: "",
  });

  const handleUserData = (event) => {
    setLoginUserInfo({
      ...loginUserInfo,
      [event.target.name]: event.target.value,
    });
  };

  const isvalid = () => {
    return (
      loginUserInfo.email &&
      loginUserInfo.password &&
      (userState.identity === "Admin" ? loginUserInfo.adminId : true)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFilled = isvalid();


    if (isFilled) {
      let url = `https://dekutso-evote-backend.onrender.com/${
        userState.loginStatus === "ADMIN LOGIN" ? "admin/login" : "login"
      }`;

      let data = {
        identity: loginUserInfo.email,
        password: loginUserInfo.password,
      };

      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: "post",
        body: JSON.stringify(data),
      }).then(async (res) => {
        if (res.status !== 201) {
          alert("There was an error. Please try again.");
          return;
        }
        alert("Sign up successful");
        let data = await res.json();
        localStorage.setItem("token", data.token);
        setCurrentuserEmail(loginUserInfo.email);
        navigate("/dashboard");
        event.target.reset();
        getElectionsFromDatabase();
      });
    } else {
      alert("Please fill in all the required Details");
    }
  };

  
  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>{userState.loginStatus}</legend>

        <div className="cardParty">
          <div className="loginOpt">
            <a href="#">
              {" "}
              <h3
                className={
                  activeOption === "ADMIN LOGIN" ? "opt active" : "opt"
                }
                onClick={() => handleOptionClick("ADMIN LOGIN")}
              >
                Admin
              </h3>
            </a>

            <a href="#">
              <h3
                className={
                  activeOption === "STUDENT LOGIN" ? "opt active" : "opt"
                }
                onClick={() => handleOptionClick("STUDENT LOGIN")}
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
                value={loginUserInfo.email}
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
                value={loginUserInfo.password}
                onChange={handleUserData}
                required
              />
            </div>

            <div className="check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <button type="submit">LOG IN</button>
          </form>
          <p className="forgot">Forgot password?</p>
        </div>
      </fieldset>

      <Disclaimer />
    </main>
  );
};

export default Login;
