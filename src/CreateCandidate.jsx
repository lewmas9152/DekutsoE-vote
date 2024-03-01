import React, { useContext } from "react";
import logo from "/assets/logo.svg";
import vote from "/assets/vote.png";
import sad from "/assets/sad.gif";
import "./CreateCandidate.css";
import { ChoicesContext } from "./App";
import { useNavigate } from "react-router-dom";

const CreateCandidate = () => {
  const {
    positions,
    parties,
    choicesList,
    setChoicesList,
    choiceInfo,
    setChoiceInfo,
    position,
    setPosition,
    handleChoiceInfo,
    handlePositionChange,
  } = useContext(ChoicesContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ballot");
  };

  const handleAddChoice = (e) => {
    e.preventDefault();
    if (
      position === "" ||
      choiceInfo.choices === "" ||
      choiceInfo.party === ""
    ) {
      return;
    }

    const newChoice = {
      choice: choiceInfo.choices,
      party: choiceInfo.party,
      position: position,
    };
    setChoicesList([...choicesList, newChoice]);
    setChoiceInfo({ choices: "", party: "" });
  };

  console.log("choiceList", choicesList);

  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />

      <fieldset>
        <legend>ADD CANDIDATE</legend>

        <form onSubmit={handleAddChoice}>
          <div className="input">
            <label htmlFor="position">Position</label>
            <select
              name="position"
              id="position"
              value={position}
              onChange={(e) => handlePositionChange(e.target.value)}
              required
              className="inputPos"
            >
              <option value="">Select a position</option>
              {positions.length === 0 ? (
                <option value="">No positions available</option>
              ) : (
                positions.map((position) => (
                  <option
                    value={position.positionName}
                    key={position.positionName}
                  >
                    {position.positionName}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="choices">
            <div className="input">
              <label htmlFor="choices">Candidate</label>
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
              <select
                name="party"
                id="party"
                value={choiceInfo.party}
                onChange={handleChoiceInfo}
                required
                className="inputPos"
              >
                <option value="">Select a party</option>
                {parties.length === 0 ? (
                  <option key="no-parties" value="">
                    No parties available
                  </option>
                ) : (
                  parties.map((party, index) => (
                    <option value={party.partyName} key={index}>
                      {party.partyName}
                    </option>
                  ))
                )}
              </select>
            </div>

            <button type="submit">Add Choice</button>
          </div>
        </form>

        <div className="candidates">
          <ol className="candidateList">
            <h3>{position}</h3>
            {choicesList.map((choice, index) => (
              <li key={index}>
                {index + 1}. {choice.choice} <span>({choice.party})</span>
              </li>
            ))}
            {choicesList.length === 0 && (
              <section className="empty">
                <img src={sad} alt="voteIcon" className="sad" />
                <div id="animation-container">
                  <h3>No Candidates created yet</h3>
                </div>
              </section>
            )}
          </ol>

          <img src={vote} alt="vote" className="vote" />
        </div>

        <button onClick={handleNavigation}>Finish</button>
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

export default CreateCandidate;
