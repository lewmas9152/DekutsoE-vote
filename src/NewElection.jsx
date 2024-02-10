import React, { useState, useEffect, useContext } from "react";
import logo from "/assets/logo.svg";
import dateIcon from "/assets/date.svg";
import TimezoneSelect from "react-timezone-select";
import "./NewElection.css";
import vote from "/assets/vote.png";
import { useNavigate } from "react-router-dom";
import { ElectionContext } from "./App";

const NewElection = () => {
  const { electionData, handleElectionData, handleAddElection } =
    useContext(ElectionContext);

  const navigate = useNavigate();
  const [dataAddedSuccessfully, setDataAddedSuccessfully] = useState(false);
  const handleChange = (selected) => {
    handleElectionData({
      target: { name: "selectedTimezone", value: selected },
    });
  };
  const isValid = () => {
    return (
      electionData.title &&
      electionData.startDate &&
      electionData.endDate &&
      electionData.selectedTimezone
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!isValid()) {
        alert("Fill all fields");
        return;
      }

      await handleAddElection(electionData);
      setDataAddedSuccessfully(true);
      event.target.reset();
      navigate("/newElection/main");
    } catch (error) {
      alert("Error adding election: " + error.message);
    }
  };

  useEffect(() => {
    if (dataAddedSuccessfully) {
      alert("Election added successfully!");
    }
  }, [dataAddedSuccessfully, handleAddElection]);

  return (
    <>
      <main className="newMain">
        <img src={logo} alt="logo" className="logoB logoN" />
        <div className="card">
          <form action="#" className="formNew" onSubmit={handleSubmit}>
            <h1 className="title">Create a new election</h1>
            <label htmlFor="title" className="lable">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={electionData.title}
              onChange={handleElectionData}
              required
            />
            <div className="dateB">
              <label htmlFor="startDate" className="lable">
                <img src={dateIcon} alt="calender" className="icon" />
                Start Date
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={electionData.startDate}
                onChange={handleElectionData}
              />
            </div>

            <div className="dateB">
              <label htmlFor="endDate" className="lable">
                <img src={dateIcon} alt="calender" className="icon" />
                End Date
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={electionData.endDate}
                onChange={handleElectionData}
              />
            </div>

            <TimezoneSelect
              name="timezone"
              value={electionData.selectedTimezone}
              onChange={handleChange}
              placeholder="Select Timezone"
              showFilter
            />

            <button type="submit" className="continue" disabled={!isValid()}>
              Continue
            </button>
          </form>
          <img src={vote} alt="VoteImg" className="vote" />
        </div>
      </main>
    </>
  );
};

export default NewElection;
