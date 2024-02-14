import React, { useContext, useState } from "react";
import add from "/assets/add.svg";
import "./Dashboard.css";
import search from "/assets/search.svg";
import dropDown from "/assets/dropDown.png";
import date from "/assets/date.svg";
import { Link } from "react-router-dom";
import sad from "/assets/sad.gif";
import remove from "/assets/delete.svg";
import { ElectionContext } from "./App";

const Dashboard = () => {
  const { elections, electionData, setElections } = useContext(ElectionContext);
  const [electionToDelete, setElectionToDelete] = useState(null);

  const handleDeletion = (electionId) => {
    const updatedElections = elections.filter(election => election.id !== electionId);
    setElections(updatedElections);
    setElectionToDelete(null);
  };

  const handleCancelDeletion = () => {
    setElectionToDelete(null);
  };

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
        {elections.map((election) => (
          <div key={election.id} className="item">
            <h3>{election.title}</h3>
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
            <div className="delete">
              <img
                src={remove}
                alt="delete"
                onClick={() => setElectionToDelete(election.id)}
              />
            </div>
            {electionToDelete === election.id && (
              <div className="deletion">
                <div className="delPopUp">
                  <h4>!!!Dangerous action no recovery on delete</h4>
                  <div className="delOptions">
                    <p className="option" onClick={() => handleDeletion(election.id)}>Delete Anyway</p>
                    <p className="option" onClick={handleCancelDeletion}>
                      Cancel
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {elections.length === 0 ? (
          <section className="empty">
            <img src={sad} alt="voteIcon" className="sad" />
            <div id="animation-container">
              <h3>No elections created yet</h3>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;
