import React, { useContext, useEffect } from "react";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import sad from "/assets/sad.gif";
import "./MainSec.css";
import "./Ballot.css";
import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import MainSecHeader from "./MainSecHeader";
import { ChoicesContext, UserContext, ElectionContext } from "./App";

const Ballot = () => {
  const {
    positions,
    selectedPosition,
    choicesList,
    setSelectedPosition,
    setSelectedChoices,
  } = useContext(ChoicesContext);

  const { userState } = useContext(UserContext);

  const { parties } = useContext(ChoicesContext);

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedPosition("");
  }, [setSelectedPosition]);

  const handlePositionClick = (position, choices) => {
    setSelectedPosition(position);
    setSelectedChoices(choices);

    if (
      userState.signUpStatus === "ADMIN SIGNUP" ||
      userState.loginStatus === "ADMIN LOGIN"
    ) {
      navigate(`/CreateCandidate/${encodeURIComponent(position)}`);
    } else {
      navigate(`/Voting/${encodeURIComponent(position)}`);
    }
  };

  const countChoicesForPosition = (positionName) => {
    return choicesList.filter((choice) => choice.position === positionName)
      .length;
  };

  const countChoicesForParty = (partyName) => {
    return choicesList.filter((choice) => choice.party === partyName).length;
  };

  return (
    <main className="container">
      <MainNav />
      <div className="mainCard">
        <MainSecHeader />
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
                  <th>Position</th>
                  <th>Number Of Candidates</th>
                </tr>
              </thead>

              <tbody>
                {positions.length > 0 ? (
                  positions.map((position, index) => (
                    <tr
                      key={index}
                      className="position"
                      onClick={() =>
                        handlePositionClick(
                          position.positionName,
                          choicesList.filter(
                            (choice) =>
                              choice.position === position.positionName
                          )
                        )
                      }
                    >
                      <td >
                        {position.positionName}
                      </td>
                      <td>{countChoicesForPosition(position.positionName)}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="emptySmall">
                  <td>
                    <img src={sad} alt="voteIcon" className="sad" />
                    <td id="animation-container">
                      <h3>No Positions created yet</h3>
                    </td>
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
                {parties.length > 0 ? (
                  parties.map((party, index) => (
                    <tr key={index} className="position">
                      <td>{party.partyName}</td>
                      <td className="num">
                        {countChoicesForParty(party.partyName)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="emptySmall">
                    <td>
                      <img src={sad} alt="voteIcon" className="sad" />
                      <td id="animation-container">
                        <h3>No Parties created yet</h3>
                      </td>
                    </td>
                   
                
                  </tr>
                )}
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
