import React, { useState, useContext } from "react";
import logo from "/assets/logo.svg";
import Disclaimer from "./Disclaimer";
import { ChoicesContext } from "./App";

const NewPosition = () => {
  const { positions, setPositions } = useContext(ChoicesContext);
  const [positionInfo, setPositionInfo] = useState({
    positionName: "",
    maxCandidates: "",
  });

  const handlePositionInfo = (e) => {
    setPositionInfo({
      ...positionInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePositionAdd = (e) => {
    e.preventDefault();
    setPositions([...positions, positionInfo]);

    setPositionInfo({
      positionName: "",
      maxCandidates: "",
    });
  };
  return (
    <main>
      <img src={logo} alt="logo" className="logoB" />
      <fieldset>
        <legend>Create New Position</legend>
        <form className="form" onSubmit={handlePositionAdd}>
          <div className="formGroup">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              className="input"
              name="positionName"
              value={positionInfo.positionName}
              onChange={handlePositionInfo}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="maxCandidates">MaxCandidates</label>
            <input
              type="number"
              id="maxCandidates"
              name="maxCandidates"
              className="input"
              value={positionInfo.maxCandidates}
              onChange={handlePositionInfo}
            />
          </div>

          <button type="submit" className="positionBtn">
            Add
          </button>
        </form>
        <div className="positions">
          <table className="positionsList">
            <thead>
              <tr>
                <th>Positions</th>
                <th>MaxCandidates</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((position, index) => (
                <tr key={index}>
                  <td>{position.positionName}</td>
                  <td>{position.maxCandidates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="positionBtn">Finish</button>
      </fieldset>

      <Disclaimer />
    </main>
  );
};

export default NewPosition;
