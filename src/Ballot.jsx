import React, { useContext, useEffect } from "react";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import sad from "/assets/sad.gif";
import "./MainSec.css";
import "./Ballot.css";
import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import { ChoicesContext, UserContext } from "./App";

const Ballot = () => {
  const {
    positions,
    selectedPosition,
    setSelectedPosition,
    setSelectedChoices,
  } = useContext(ChoicesContext);

  const { userState } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedPosition("");
  }, []);

  const handlePositionClick = (position, choices) => {
    setSelectedPosition(position);
    setSelectedChoices(choices);
  };

  useEffect(() => {
    if (selectedPosition) {
      navigate(`/voting/${encodeURIComponent(selectedPosition)}`);
    }
  }, [selectedPosition, navigate]);

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
              <thead>
                <tr>
                  <th>Positions</th>
                  <th>No of Candidates</th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(positions).map(([position, choices], index) => (
                  <tr
                    key={index}
                    className="navTd"
                    onClick={() => handlePositionClick(position, choices)}
                  >
                    <td>{position}</td>
                    <td>{choices.length}</td>
                  </tr>
                ))}

                {!positions && (
                  <tr>
                    <td colSpan="2">
                      <section className=" emptySmall">
                        <img src={sad} alt="voteIcon" className="sad" />
                        <div id="animation-container">
                          <h3>No positions created yet</h3>
                        </div>
                      </section>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {userState.signUpStatus === "ADMIN SIGNUP" ||
            userState.loginStatus === "ADMIN LOGIN" ? (
              <Link to="/newPosition">
                {" "}
                <button className="addBtn">Create New</button>
              </Link>
            ) : null}
          </section>

          <section className="positions">
            <table>
              <thead>
                <tr>
                  <th>Parties</th>
                  <th>No of Candidates</th>
                </tr>
              </thead>

              <tbody>
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

                <tr>
                  <td>Utumishi Kwa Wote Party</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>Utumishi Kwa Wote Party</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>Utumishi Kwa Wote Party</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Utumishi Kwa Wote Party</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Utumishi Kwa Wote Party</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>

            {userState.signUpStatus === "ADMIN SIGNUP" ||
            userState.loginStatus === "ADMIN LOGIN" ? (
              <Link to="/NewParty">
                <button className="addBtn">Register New</button>
              </Link>
            ) : null}
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
