import React, { useContext, useState } from "react";
import logo from "/assets/logo.svg";
import { ChoicesContext } from "./App";
import "./Voting.css";

const Voting = () => {
  const { selectedPosition, selectedChoices } = useContext(ChoicesContext);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleRadioChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected choice:", selectedChoice);
  };

  return (
    <>
      <main>
        <img src={logo} alt="logo" className="logoB" />

        <fieldset>
          <legend>{selectedPosition}</legend>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Added onSubmit event handler */}
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
      </main>
    </>
  );
};

export default Voting;
