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
    <main>
      <img src={logo} alt="logo" className="logoB logoN" />
      <div className="card">
        <form action="" className="formNew">
          < h1 className="title">Create a new election</h1>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
          <div className="date">
            <h3>
              <img src={dateIcon} alt="calender" className="icon" />
              Start Date
            </h3>
            <input type="datetime-local" />
          </div>

          <div className="date">
            <h3>
              <img src={dateIcon} alt="calender" className="icon" />
              End Date
            </h3>
            <input type="datetime-local" />
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
