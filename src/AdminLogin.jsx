import React from "react";
import logo from "/assets/logo.svg";


const AdminLogin = () => {
  return (
    <main>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>LOGIN</legend>

        <div className="loginOpt">
          <h3 className="opt">Admin</h3>
          <h3 className="opt">Student</h3>
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
            <input type="password" id="password" 
            required
            />
          </div>

          <div className="inputItem">
            <label htmlFor="ID">Reg No</label>
            <input type="password" id="ID" 
            
            required/>
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
