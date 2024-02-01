import React from "react";
import logo from "/assets/logo.svg";
import person from "/assets/user.svg";
import add from "/assets/add.svg";
import "./Dashboard.css";
import search from "/assets/search.svg";
import dropDown from "/assets/dropDown.png";
import date from "/assets/date.svg";

const Dashboard = () => {
  return (
    <main>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>News</li>
        </ul>

        <ul className="navigator">
          <li className="user">
            <img src={person} alt="IconUser" className="icon" />
            johndoe@gmail.com
          </li>
        </ul>
      </nav>
      <section className="currentView">
        <h2 className="current">Dashboard</h2>
        <button className="new">
          {" "}
          <img src={add} alt="add" className="icon" />
          CREATE NEW
        </button>
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
        <h2>General Elections</h2>
       <section className="dateSec">
       <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon" />
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
       </section>
      </div>

      <div className="item">
        <h2>Delegate Elections</h2>
    <section className="dateSec">
    <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
    </section>
      </div>
      <div className="item">
        <h2>General Elections</h2>
       <section className="dateSec">
       <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon" />
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
       </section>
      </div>

      <div className="item">
        <h2>Delegate Elections</h2>
    <section className="dateSec">
    <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
    </section>
      </div>
      <div className="item">
        <h2>General Elections</h2>
       <section className="dateSec">
       <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon" />
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
       </section>
      </div>

      <div className="item">
        <h2>Delegate Elections</h2>
    <section className="dateSec">
    <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            Start Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>

        <div className="date">
          <h3>
            <img src={date} alt="calender" className="icon"/>
            End Date
          </h3>
          <p>01/18/2024 12:00</p>
        </div>
    </section>
      </div>
  </div>

    </main>
  );
};

export default Dashboard;
