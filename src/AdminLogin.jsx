import React, { useState, useContext } from "react";
import logo from "/assets/logo.svg";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { userState, handleLoginStatusChange } = useContext(UserContext);
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
      navigate("/dashboard");
      event.target.reset();
    } else {
      alert("Please fill in all the required Details");
    }
  };
  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>{userState.loginStatus}</legend>

        <div className="loginOpt">
          <a href="#">
            {" "}
            <h3
              className={activeOption === "ADMIN LOGIN" ? "opt active" : "opt"}
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

          <div className="inputItem">
            <label htmlFor="ID">{userState.identity}</label>
            <input
              type="password"
              id="ID"
              name="id"
              value={loginUserInfo.id}
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

export default AdminLogin;
