import React,{useContext} from "react";
import overview from "/assets/overview.svg";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import date from "/assets/date.svg";
import "./MainSec.css";
import { ElectionContext } from "./App";
import MainNav from "./MainNav";

const MainSec = () => {
  const { electionData } = useContext(ElectionContext);
  return (
    <main className="container" id="main">
     
     <MainNav/>
      <div className="mainCard">
        <div className="mainHeader">
          <h2>School Executive</h2>
          <h2>0 voters</h2>
        </div>
        <hr />
        <p className="page">
          <img src={overview} alt="overview" className="iconNav" />
          Overview
        </p>
        <hr />

        <div className="status">
          <section className="dateSection">
            <div className="date dateMain">
              <h3>
                <img src={date} alt="calender" className="icon" />
                Start Date
              </h3>
              <p>{electionData.startDate}</p>
            </div>

            <div className="date dateMain">
              <h3 className="dateHeader">
                <img src={date} alt="calender" className="icon" />
                End Date
              </h3>
              <p>{electionData.endDate}</p>
            </div>
          </section>
          <div className="URL">
            <section className="url">
              <label htmlFor="URL">Election URL</label>
              <input
                type="url"
                className="input"
                placeholder="e.g. htps://DekutsoE-vote/mainsection/overview"
              />
            </section>

            <section className="url">
              <label htmlFor="URL">Preview URL</label>
              <input
                type="url"
                placeholder="e.g. htps://DekutsoE-vote/mainsection/overview"
              />
            </section>
          </div>
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

export default MainSec;
