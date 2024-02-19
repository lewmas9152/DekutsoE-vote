import React, { useContext, useState } from "react";
import add from "/assets/add.svg";
import "./Dashboard.css";
import search from "/assets/search.svg";
import dropDown from "/assets/dropDown.svg";
import date from "/assets/date.svg";
import { Link } from "react-router-dom";
import sad from "/assets/sad.gif";
import remove from "/assets/delete.svg";
import { ElectionContext } from "./App";
import { UserContext } from "./App";

const Dashboard = () => {
  const { elections, electionData, setElections } = useContext(ElectionContext);
  const { userState } = useContext(UserContext);
  const [electionToDelete, setElectionToDelete] = useState(null);
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeletion = (electionId) => {
    const updatedElections = elections.filter(
      (election) => election.id !== electionId
    );
    setElections(updatedElections);
    setElectionToDelete(null);
  };

  const handleCancelDeletion = () => {
    setElectionToDelete(null);
  };

  const handleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };

  const handleFilterOptionClick = (option) => {
    setFilterOption(option);
    setDropDownVisible(false);
  };

  const filteredElections = elections.filter((election) => {
    const currentDate = new Date();
    const startDate = new Date(election.startDate);
    const endDate = new Date(election.endDate);

    if (filterOption === "Ongoing") {
      return currentDate >= startDate && currentDate <= endDate;
    } else if (filterOption === "Pending") {
      return currentDate < startDate;
    } else if (filterOption === "Completed") {
      return currentDate > endDate;
    } else {
      return true;
    }
  });

  const filteredElectionsByTitle = filteredElections.filter((election) =>
    election.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noFilteredElectionsMessage = (
    <section className="empty">
      <img src={sad} alt="voteIcon" className="sad" />
      <div id="animation-container">
        <h3>No {filterOption} elections found</h3>
      </div>
    </section>
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const reversedFilteredElections = filteredElectionsByTitle.reverse();

  return (
    <main>
      <section className="currentView">
        <h2 className="current">Dashboard</h2>
        {userState.loginStatus === "ADMIN LOGIN" ||
        userState.signUpStatus === "ADMIN SIGNUP" ? (
          <Link to="/newElection">
            {" "}
            <button className="new">
              {" "}
              <img src={add} alt="add" className="icon" />
              CREATE NEW
            </button>
          </Link>
        ) : null}
      </section>

      <div className="search">
        <input
          type="text"
          placeholder="Search election by title...."
          className="srcInput"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img src={search} alt="searchIcon" className="icon srcIcon" />
        <input
          type="text"
          defaultValue={filterOption}
          placeholder="Filter by status..."
          className="srcInput"
        />
        <img
          src={dropDown}
          alt="dropDown"
          className="icon filter"
          onClick={handleDropDown}
        />
        {dropDownVisible && (
          <div className="dropDownOptions">
            <p
              className="option"
              onClick={() => handleFilterOptionClick("Ongoing")}
            >
              Ongoing
            </p>
            <p
              className="option"
              onClick={() => handleFilterOptionClick("Pending")}
            >
              Pending
            </p>
            <p
              className="option"
              onClick={() => handleFilterOptionClick("Completed")}
            >
              Completed
            </p>
          </div>
        )}
      </div>
      <div className="elections">
        {elections.length === 0 ? (
          <section className="empty">
            <img src={sad} alt="voteIcon" className="sad" />
            <div id="animation-container">
              <h3>No elections created yet</h3>
            </div>
          </section>
        ) : reversedFilteredElections.length === 0 ? (
          noFilteredElectionsMessage
        ) : (
          reversedFilteredElections.map((election) => (
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

              {userState.loginStatus === "ADMIN LOGIN" ||
              userState.signUpStatus === "ADMIN SIGNUP" ? (
                <div className="delete">
                  <img
                    src={remove}
                    alt="delete"
                    onClick={() => setElectionToDelete(election.id)}
                  />
                </div>
              ) : null}
              {electionToDelete === election.id && (
                <div className="deletion">
                  <div className="delPopUp">
                    <h4>!!!Dangerous action no recovery on delete</h4>
                    <div className="delOptions">
                      <p
                        className="option"
                        onClick={() => handleDeletion(election.id)}
                      >
                        Delete Anyway
                      </p>
                      <p className="option" onClick={handleCancelDeletion}>
                        Cancel
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Dashboard;
