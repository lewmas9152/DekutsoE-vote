import React, { useState,useContext } from "react";
import logo from "/assets/logo.svg";
import "./NewParty.css";
import Disclaimer from "./Disclaimer";
import { ChoicesContext } from "./App";

const NewParty = () => {
  const {parties,setParties} = useContext(ChoicesContext)
  const [partyInfo, setPartyInfo] = useState({
    partyName: "",
    partyLogo: "",
    partySlogan: "",
  });

  const handlePartyData = (event) => {

    setPartyInfo({
      ...partyInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePartyAdd = (e) => {
    e.preventDefault();
    setParties([...parties, partyInfo]);

    setPartyInfo({
      partyName: "",
      partyLogo: "",
      partySlogan: "",
    });
  };

  return (
    <>
      <main>
        <img src={logo} alt="logo" className="logoB" />
        <fieldset>
          <legend>Create New Party</legend>
          <div className="cardParty">
            <hr />
            <form className="form" onSubmit={handlePartyAdd}>
              <div className="formGroup">
                <label htmlFor="partyName">Party Name</label>
                <input
                  type="text"
                  id="partyName"
                  className="input"
                  name="partyName"
                  value={partyInfo.partyName}
                  onChange={handlePartyData}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="partyLogo">Party Logo</label>
                <input
                  type="file"
                  id="partyLogo"
                  className="input"
                  name="partyLogo"
                  value={partyInfo.partyLogo}
                  onChange={handlePartyData}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="partySlogan">Party Slogan</label>
                <input
                  type="text"
                  id="partySlogan"
                  className="input"
                  name="partySlogan"
                  value={partyInfo.partySlogan}
                  onChange={handlePartyData}
                  required
                />
              </div>
              <button type="submit" className="addBtn positionBtn">
                Create
              </button>
            </form>
            <div className="parties">
              <table className="partyList">
                <thead>
                  <tr>
                    <th>Party</th>
                    <th>Slogan</th>
                  </tr>
                </thead>

                <tbody>
                  {parties.map((party, index) => (
                    <tr key={index}>
                      <td>{party.partyName}</td>
                      <td className="partySlogan">{party.partySlogan} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button>Finish</button>
        </fieldset>

        <Disclaimer />
      </main>
    </>
  );
};

export default NewParty;
