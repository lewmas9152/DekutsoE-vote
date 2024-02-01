import React from "react";
import "./Homepage.css";
import logo from "/assets/logo.svg";
import dropdown from "/assets/dropDown.png";

const Homepage = () => {
  return (
    <main>
   <div className="homepage">
   <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Campaigns</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>

        <ul className="navigator">
          <li>
            login
            <select name="login-options">
              
              <option value="studentLogin" className="option">Student</option>
              <option value="adminLogin"  className="option">Admin</option>
            </select>
          </li>

          <li>Signup</li>
        </ul>
      </nav>

      <section className="slogan">
        <h2>TRASPARENT ,SECURE AND CREDIBLE ONLINE BASED SCHOOL ELECTIONS</h2>
        <p>
          Revolutionalising the voting experience by creating a safe and more
          secure space for carring out school elections.
        </p>
      </section>

      <div className="footer">
        <p>&copy; 2023-2024 DEKUTSO E-VOTE, Inc. All Rights Reserved</p>
      </div>
   </div>
    </main>
  );
};

export default Homepage;
