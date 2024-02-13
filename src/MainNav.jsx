import React from 'react'
import { Link } from "react-router-dom";
import overview from "/assets/overview.svg";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";


const MainNav = () => {
  return (
    <>
      <nav className="navMain">
        <Link to="/main/overview">
          <p className="navigate">
            <img src={overview} alt="logo" className="iconNav" />
            Overview
          </p>
        </Link>

      
        <Link to="/main/ballot">
          <p className="navigate">
            {" "}
            <img src={ballot} alt="Ballot" className="iconNav" />
            Ballot
          </p>
        </Link>

        <Link to = "/main/voters">
        <p className="navigate">
          {" "}
          <img src={voters} alt="Voters" className="iconNav" />
          Voters
        </p>
        </Link>

      
        <p className="navigate">
          {" "}
          <img src={launch} alt="Launch" className="iconNav" />
          Launch
        </p>
      </nav>
    </>
  )
}

export default MainNav