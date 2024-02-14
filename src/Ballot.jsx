import React from "react";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import "./MainSec.css";
import "./Ballot.css";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Ballot = () => {
  return (
    <main className="container">
      <MainNav />
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

            <Link to="/newPosition">
              {" "}
              <button className="addBtn">Create New</button>
            </Link>
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
            <Link to="/NewParty">
              <button className="addBtn">Register New</button>
            </Link>
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
