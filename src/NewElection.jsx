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
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (selected) => {
    handleElectionData({
      target: { name: "selectedTimezone", value: selected },
    });
  };

  const isTimeDifferenceValid = () => {
    const start = new Date(electionData.startDate);
    const end = new Date(electionData.endDate);
    const timeDifferenceInMilliseconds = end - start;
    const timeDifferenceInHours =
      timeDifferenceInMilliseconds / (1000 * 60 * 60);
    return timeDifferenceInHours >= 2;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        !electionData.title ||
        !electionData.startDate ||
        !electionData.endDate ||
        !electionData.selectedTimezone
      ) {
        setErrorMessage("All fields are required.");
        return;
      }

      const start = new Date(electionData.startDate);

      const currentDate = new Date();

      if (start < currentDate) {
        setErrorMessage("Start date must in the future.");
        return;
      }

      if (!isTimeDifferenceValid()) {
        setErrorMessage(
          "The difference between start and end time must be at least 2 hours."
        );
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
              required
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
              required
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
            required
          />

          <button type="submit" className="continue">
            Continue
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
        <img src={vote} alt="VoteImg" className="vote" />
      </div>
    </main>
  );
};

export default NewElection;
