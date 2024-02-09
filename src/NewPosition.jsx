import React, { useState } from "react";
import logo from "/assets/logo.svg";
import vote from "/assets/vote.png";
import "./NewPosition.css";
import { Link } from "react-router-dom";

const NewPosition = () => {
  const [choiceInfo, setChoiceInfo] = useState({
    position: "",
    choices: "",
    party: "",
  });
  const [choicesList, setChoicesList] = useState([]);

  const handleChoiceInfo = (event) => {
    setChoiceInfo({
      ...choiceInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddChoice = () => {
    if (!choiceInfo.position || choiceInfo.choices.length === 0) {
      alert("Please fill in all fields to add a choice.");
      return;
    }

    const newChoice = {
      id: choicesList.length + 1,
      choice: choiceInfo.choices,
      party: choiceInfo.party,
    };

    setChoicesList([...choicesList, newChoice]);
    setChoiceInfo({
      position: choiceInfo.position,
      choices: "",
      party: "",
    });
  };

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
              Add
            </button>
          </div>
        </form>

        <div className="candidates">
          <ol className="candidateList">
            <h3>{choiceInfo.position}</h3>
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
