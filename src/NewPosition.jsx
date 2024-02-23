import React, { useContext } from "react";
import logo from "/assets/logo.svg";
import Disclaimer from "./Disclaimer";
import { ChoicesContext, ElectionContext } from "./App";
import { useNavigate } from "react-router-dom";

const NewPosition = () => {
  const { positions, positionInfo, setPositionInfo, setPositions } =
    useContext(ChoicesContext);
  const { electionId, getPositionFromDatabase } = useContext(ElectionContext);

  const navigate = useNavigate();

  const handlePositionInfo = (e) => {
    setPositionInfo({
      ...positionInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePositionAdd = (e) => {
    e.preventDefault();
    const positionExists = positions.some(
      (position) => position.positionName === positionInfo.positionName
    );

    if (positionExists) {
      alert("Position already exists");
      return;
    }
    let url = `https://dekutso-evote-backend.onrender.com/api/positions/${electionId}`;

    let data = {
      name: positionInfo.positionName,
      maxCandidates: positionInfo.maxCandidates,
    };

    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    };

    fetch(url, fetchOptions).then(async (res) => {
      if (res.status !== 201) {
        alert("There was an error. Please try again.");
        return;
      }
      getPositionFromDatabase();

  console.log(positionInfo);
      setPositionInfo({
        positionName: "",
        maxCandidates: "",
      });
    });
  };


  const handleNavigation = () => {
    navigate("/Ballot");
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
              required
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
              required
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

        <button className="positionBtn" onClick={handleNavigation}>
          Finish
        </button>
      </fieldset>

      <Disclaimer />
    </main>
  );
};

export default NewPosition;
