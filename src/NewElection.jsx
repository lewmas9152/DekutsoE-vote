import React, { useState } from "react";
import logo from "/assets/logo.svg";
import dateIcon from "/assets/date.svg";
import TimezoneSelect from "react-timezone-select";
import "./NewElection.css";
import vote from "/assets/vote.png";
import { Link } from "react-router-dom";

const NewElection = ({ electionData, handleElectionData }) => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
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

  console.log(electionData.selectedTimezone);

  return (
    <>
      <main className="newMain">
        <img src={logo} alt="logo" className="logoB logoN" />
        <div className="card">
          <form action="#" className="formNew">
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
            <Link to="/newElection/main" disabled={!isValid()}>
              <button className="continue" disabled={!isValid()}>
                Continue
              </button>
            </Link>
          </form>
          <img src={vote} alt="VoteImg" className="vote" />
        </div>
      </main>
    </>
  );
};

export default NewElection;
