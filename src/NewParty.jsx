import React, { useState } from "react";
import logo from "/assets/logo.svg";
import "./NewParty.css";
import Disclaimer from "./Disclaimer";

const NewParty = () => {
  const [partyInfo, setPartyInfo] = useState({
    partyName: "",
    partyLogo: "",
    partySlogan: "",
    partyManifesto: "",
  });

  const handlePartyData = (event) => {
    setPartyInfo({
      ...partyInfo,
      [event.target.name]: event.target.value,
    });
  };

  console.log(partyInfo);
  return (
    <>
      <main>
        <img src={logo} alt="logo" className="logoB" />
        <fieldset>
          <legend>Create New Party</legend>
          <div className="cardParty">
            <hr />
            <form className="form">
              <div className="formGroup">
                <label htmlFor="partyName">Party Name</label>
                <input
                  type="text"
                  id="partyName"
                  className="input"
                  name="partyName"
                  value={partyInfo.partyName}
                  onChange={handlePartyData}
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
                />
              </div>
              <div className="formGroup">
                <label htmlFor="partyManifesto">Party Manifesto</label>
                <textarea
                  id="partyManifesto"
                  className="input"
                  cols={30}
                  rows={10}
                  name="partyManifesto"
                  value={partyInfo.partyManifesto}
                  onChange={handlePartyData}
                />
              </div>
              <button className="addBtn">Create</button>
            </form>
          </div>
        </fieldset>

        <Disclaimer />
      </main>
    </>
  );
};

export default NewParty;
