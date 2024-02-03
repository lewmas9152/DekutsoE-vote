import React from "react";
import logo from "/assets/logo.svg";
import overview from "/assets/overview.svg";
import settings from "/assets/settings.svg";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import date from "/assets/date.svg";
import copy from "/assets/copy.svg";
import "./MainSec.css";
import "./Ballot.css";

const Ballot = () => {
  return (
    <main className="container">
      <nav className="navMain">
        <img src={logo} alt="logo" className="logo logoMain" />
        <p className="navigate">
          <img src={overview} alt="logo" className="iconNav" />
          Overview
        </p>
        <p className="navigate">
          {" "}
          <img src={settings} alt="Settings" className="iconNav" />
          Settings
        </p>
        <p className="navigate">
          {" "}
          <img src={ballot} alt="Ballot" className="iconNav" />
          Ballot
        </p>
        <p className="navigate">
          {" "}
          <img src={voters} alt="Voters" className="iconNav" />
          Voters
        </p>
        <p className="navigate">
          {" "}
          <img src={launch} alt="Launch" className="iconNav" />
          Launch
        </p>
      </nav>
      <div className="mainCard">
        <div className="mainHeader">
          <h2>School Executive</h2>
          <h2>3 Positions</h2>
        </div>
        <hr />
        <p className="page">
          <img src={ballot} alt="overview" className="iconNav" />
          Ballot
        </p>
        <hr />

        <div className="ballot">
          <section className="positions">
            <table>
              <th>Positions</th>
              <th>No of Candidates</th>

              <tr>
                <td>President</td>
                <td>5</td>
              </tr>

              <tr>
                <td>Secretary</td>
                <td>6</td>
              </tr>

              <tr>
                <td>Treasurer</td>
                <td>3</td>
              </tr>
            </table>
            <button className="addBtn">Create New</button>
          </section>

          <section className="positions">
            <table>
                
              <th>Parties</th>
              <th>No of Candidates</th>

              <tr>
                <td>Comrades Alliance Party</td>
                <td>5</td>
              </tr>

              <tr>
                <td>United Democratic Party</td>
                <td>6</td>
              </tr>

              <tr>
                <td>Utumishi Kwa Wote Party</td>
                <td>3</td>
              </tr>
            </table>
            <button className="addBtn">Register New</button>
          </section>
        </div>
        <section className="tallies">
          <p className="tally">
            {" "}
            <img src={voters} alt="Voters" className="iconNav" />
            <span>0</span> Voters
          </p>

          <p className="tally">
            {" "}
            <img src={ballot} alt="Voters" className="iconNav" />
            <span>0</span>Ballot Quizes
          </p>

          <p className="tally">
            {" "}
            <img src={launch} alt="Voters" className="iconNav" />
            <span>not</span>Launched
          </p>
        </section>
      </div>
    </main>
  );
};

export default Ballot;
