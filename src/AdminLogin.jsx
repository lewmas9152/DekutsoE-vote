import React from "react";
import logo from "/assets/logo.svg";
import dropdown from "/assets/dropDown.png";

const AdminLogin = () => {
  return (
    <main>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <img src={logo} alt="logo" className="logoB" />
      <fieldset>
        <legend>Administrator Login</legend>
        <form>
          <div className="inputItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="e.g johndoe@gmail.com"
            />
          </div>

          <div className="inputItem">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  />
          </div>

          <div className="inputItem">
            <label htmlFor="ID">Admin ID</label>
            <input type="password" id="ID"  />
          </div>
          <button type="submit">Submit</button>
        </form>
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
