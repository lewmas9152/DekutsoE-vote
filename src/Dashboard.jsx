import React from "react";
import logo from "/assets/logo.svg";
import person from "/assets/user.svg";
import add from "/assets/add.svg";
import "./Dashboard.css";
import search from "/assets/search.svg";
import dropDown from "/assets/dropDown.png";
import date from "/assets/date.svg";
import { Link } from "react-router-dom";

const Dashboard = ({ electionData }) => {
  return (
    <main>
      <section className="currentView">
        <h2 className="current">Dashboard</h2>
        <Link to="/newElection">
          {" "}
          <button className="new">
            {" "}
            <img src={add} alt="add" className="icon" />
            CREATE NEW
          </button>
        </Link>
      </section>

      <div className="search">
        <input
          type="text"
          placeholder="Search election by title...."
          className="srcInput"
        />
        <img src={search} alt="searchIcon" className="icon srcIcon" />
        <input
          type="text"
          placeholder="Filter by status..."
          className="srcInput"
        />
        <img src={dropDown} alt="dropDown" className="icon filter" />
      </div>

      <div className="elections">
        <div className="item">
          <h3>{electionData.title}</h3>
          <section className="dateSec">
            <div className="date">
              <h3 className="dateHeader">
                <img src={date} alt="calender" className="icon" />
                Start Date
              </h3>
              <p>{electionData.startDate}</p>
            </div>

            <div className="date">
              <h3 className="dateHeader">
                <img src={date} alt="calender" className="icon" />
                End Date
              </h3>
              <p>{electionData.endDate}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
