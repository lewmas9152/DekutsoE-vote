import React, {  useContext } from "react";
import logo from "/assets/logo.svg";
import vote from "/assets/vote.png";
import sad from "/assets/sad.gif";
import "./NewPosition.css";
import { Link } from "react-router-dom";
import { ChoicesContext } from "./App";
import { useNavigate } from "react-router-dom";

const NewPosition = () => {
  const { positions, choiceInfo, position,setPosition, handleChoiceInfo, handleAddChoice } = useContext(ChoicesContext);
  const navigate = useNavigate();

  const handleNavigation = () => {  
    navigate("/ballot");
  };

  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>CREATE NEW POSITION</legend>

        <form action="#">
          <div className="input">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="inputPos"
            />
          </div>

          <div className="choices">
            <div className="input">
              <label htmlFor="choices">Choices</label>
              <input
                type="text"
                id="choices"
                name="choices"
                value={choiceInfo.choices}
                onChange={handleChoiceInfo}
                required
                className="inputPos"
              />
            </div>

            <div className="input">
              <label htmlFor="party">Party</label>
              <input
                type="text"
                id="party"
                name="party"
                value={choiceInfo.party}
                onChange={handleChoiceInfo}
                required
                className="inputPos"
              />
            </div>

            <button type="submit" onClick={handleAddChoice}>
              Add Choice
            </button>
          </div>
        </form>

        <div className="candidates">
          <ol className="candidateList">
            <h3>{position}</h3>
            {positions[position]&&positions[position].map((choice, index) => (
              <li key={index}>
                {index + 1}. {choice.choice} <span>({choice.party})</span>
              </li>
            ))}
               {!positions[position] && (
          <section className="empty">
            <img src={sad} alt="voteIcon" className="sad" />
            <div id="animation-container">
              <h3>No positions created yet</h3>
            </div>
          </section>
        )}
          </ol>

          <img src={vote} alt="vote" className="vote" />
        </div>

        <button onClick={handleNavigation}>
          Finish
        </button>
      </fieldset>

      <div className="disclaimer">
        <div className="support">
          <p className="disc">Support</p>
          <p className="disc">Terms of service</p>
          <p className="disc">Privacy Policy</p>
        </div>

        <p>A product by DEKUTSO E-vote,inc &copy; 2023</p>
      </div>
    </main>
  );
};

export default NewPosition;
