import React, { useState } from "react";
import logo from "/assets/logo.svg";
import dateIcon from "/assets/date.svg";
import TimezoneSelect from "react-timezone-select";
import "./NewElection.css";
import vote from "/assets/vote.png";

const NewElection = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("");

  const handleChange = (selected) => {
    setSelectedTimezone(selected);
  };
  return (
    <main className="newMain">
      <img src={logo} alt="logo" className="logoB logoN" />
      <div className="card">
        <form action="" className="formNew">
          <h1 className="title">Create a new election</h1>
          <label htmlFor="title" className="lable">
            Title
          </label>
          <input type="text" id="title" required />
          <div className="dateB">
            <label htmlFor="startDate" className="lable">
              <img src={dateIcon} alt="calender" className="icon" />
              Start Date
            </label>
            <input type="datetime-local" id="startDate"/>
          </div>

          <div className="dateB">
            <label htmlFor="endDate" className="lable">
              <img src={dateIcon} alt="calender" className="icon" />
              End Date
            </label>
            <input type="datetime-local" id="endDate"/>
          </div>

          <TimezoneSelect
            value={selectedTimezone}
            onChange={handleChange}
            placeholder="Select Timezone"
            showFilter
          />
          <button className="continue">Continue</button>
        </form>
        <img src={vote} alt="VoteImg" className="vote" />
      </div>
    </main>
  );
};

export default NewElection;
