import { useContext, useState } from "react";
import logo from "/assets/logo.svg";
import { ChoicesContext } from "./App";
import "./Voting.css";
import MainNav from "./MainNav";

const Voting = () => {
  const {
    setVotes,
    selectedPosition,
    selectedChoices,
    position,
    positions,
    handlePositionChange,
  } = useContext(ChoicesContext);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleRadioChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedChoice]: (prevVotes[selectedChoice] || 0) + 1,
    }));
  };

  return (
    <>
      <main className="container">
        <MainNav />

        <div className="cardVote">
          <img src={logo} alt="logo" className="logoB" />

          <fieldset>
            <legend>{selectedPosition}</legend>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="position">Position</label>
                <select
                  name="position"
                  id="position"
                  value={
                    position ||
                    (position.length > 0 ? positions[0].positionName : "")
                  }
                  onChange={(e) => handlePositionChange(e.target.value)}
                  required
                  className="inputPos"
                >
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
              </div>{" "}
              <table>
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Party</th>
                    <th>Vote</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedChoices.map((choice, index) => (
                    <tr key={index}>
                      <td>
                        <label htmlFor={index}>{choice.choice}</label>
                      </td>
                      <td>{choice.party}</td>
                      <td>
                        <input
                          type="radio"
                          name="vote"
                          value={choice.choice}
                          id={index}
                          checked={selectedChoice === choice.choice}
                          onChange={handleRadioChange}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="submit">Submit</button>{" "}
            </form>
          </fieldset>
        </div>
      </main>
    </>
  );
};

export default Voting;
