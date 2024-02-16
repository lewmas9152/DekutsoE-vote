import React, { useContext } from "react";
import logo from "/assets/logo.svg";
import { ChoicesContext } from "./App";


const Voting = () => {
  const {selectedPosition, selectedChoices} = useContext(ChoicesContext);

  return (
    <>
      <main>
        <img src={logo} alt="logo" className="logoB" />

        <fieldset>
          <legend>{selectedPosition}</legend>
          <form action="#">
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
                    <td>{choice.choice}</td>
                    <td>{choice.party}</td>
                    <td>
                      <input type="radio" name="vote" value={choice.party} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button>Submit</button>
          </form>
        </fieldset>
      </main>
    </>
  );
};

export default Voting;
