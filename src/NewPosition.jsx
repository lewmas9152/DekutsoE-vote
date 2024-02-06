import React from "react";
import logo from "/assets/logo.svg";
import vote from "/assets/vote.png";
import './NewPosition.css'
import { Link } from "react-router-dom";

const NewPosition = () => {
  return (
    <main>
    
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>CREATE NEW POSITION</legend>

        <form action="">
          <div className="input">
            <label htmlFor="position">Position</label>
            <input type="text" id="position" required  className="inputPos"/>
          </div>

          <div className="choices">
            <div className="input">
              <label htmlFor="position">Choices</label>
              <input type="text" id="position" required className="inputPos"/>
            </div>

            <div className="input">
              <label htmlFor="position">Party</label>
              <input type="text" id="position" required className="inputPos"/>
            </div>

            <button>Enter</button>
          </div>
        </form>
        <div className="candidates">
          <ol className="candidateList">
            <li>
              Patrick Njuguna <span>UDA</span>
            </li>

            <li>
              {" "}
              Brian kangi <span>UDM</span>
            </li>
            <li>
              Josphat Kururia <span>Camrades Alliance</span>
            </li>
            <li>
              Nancy Wanjiru <span> Jubilee</span>
            </li>
          </ol>

          <img src={vote} alt="vote" className="vote" />
        </div>

        <button> <Link to ="/ballot">Finish</Link></button>
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

export default NewPosition;
