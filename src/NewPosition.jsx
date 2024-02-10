import React, {  useContext } from "react";
import logo from "/assets/logo.svg";
import vote from "/assets/vote.png";
import "./NewPosition.css";
import { Link } from "react-router-dom";
import { ChoicesContext } from "./App";

const NewPosition = () => {
  const { choicesList, choiceInfo, position, handleChoiceInfo, handleAddChoice } = useContext(ChoicesContext);
  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>CREATE NEW POSITION</legend>

        <form action="">
          <div className="input">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={choiceInfo.position}
              onChange={handleChoiceInfo}
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

            <button type="button" onClick={handleAddChoice}>
              Add Choice
            </button>
          </div>
        </form>

        <div className="candidates">
          <ol className="candidateList">
            <h3>{position}</h3>
            {choicesList.map((choice, index) => (
              <li key={choice.id}>
                {index + 1}. {choice.choice} <span>({choice.party})</span>
              </li>
            ))}
          </ol>

          <img src={vote} alt="vote" className="vote" />
        </div>

        <button>
          <Link to="/ballot">Finish</Link>
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
