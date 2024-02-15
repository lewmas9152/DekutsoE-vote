import React from "react";
import "./Homepage.css";
import facebook from "/assets/facebook.svg";
import twitter from "/assets/twitter.svg";
import instagram from "/assets/instagram.svg";
import linkedin from "/assets/linkedin.svg";
import phone from "/assets/phone.svg";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <main>
      <div className="homepage">
        <div className="homeTop">
          <section className="slogan">
            <h2>
              TRASPARENT ,SECURE AND CREDIBLE ONLINE BASED SCHOOL ELECTIONS
            </h2>
            <p>
              Revolutionalising the voting experience by creating a safe and
              more secure space for carring out school elections.
            </p>
          </section>
        </div>

        <Testimonials />

        <section className="contacts">
          <div className="lined-text">
            <div className=" line left"></div>
            <h3>Contact us</h3>
            <div className="line right"></div>
          </div>

          <div className="socials">
            <a href="#" className="contLink">
              <img src={facebook} alt="" className="logoIcon" />
              <span className="hiddenText"> Facebook</span>
            </a>
            <a href="#" className="contLink">
              <img src={twitter} alt="" className="logoIcon" />
              <span className="hiddenText"> Twitter</span>
            </a>
            <a href="#" className="contLink">
              <img src={linkedin} alt="" className="logoIcon" />
              <span className="hiddenText">LinkedIn</span>
            </a>
            <a href="#" className="contLink">
              <img src={phone} alt="" className="logoIcon" />
              <span className="hiddenText"> Phone</span>
            </a>
            <a href="#" className="contLink">
              <img src={instagram} alt="" className="logoIcon" />
              <span className="hiddenText"> Instagram</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
