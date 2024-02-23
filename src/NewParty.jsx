import React, { useState,useContext } from "react";
import logo from "/assets/logo.svg";
import "./NewParty.css";
import Disclaimer from "./Disclaimer";
import { ChoicesContext , ElectionContext} from "./App";
import { useNavigate } from "react-router-dom";

const NewParty = () => {
  const {parties,setParties} = useContext(ChoicesContext)
  const {getPartiesFromDatabase} = useContext(ElectionContext)
  const [partyInfo, setPartyInfo] = useState({
    partyName: "",
    partyLogo: "",
    partySlogan: "",
  });

  const navigate = useNavigate();

  const handlePartyData = (event) => {

    setPartyInfo({
      ...partyInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePartyAdd = (e) => {
    e.preventDefault();
    const partyExists = parties.some(party => party.partyName === partyInfo.partyName);

    if (partyExists) {
      alert("Party already exists");
      return;
    }

    let url = `https://dekutso-evote-backend.onrender.com/api/parties`;

    let data = {
      name: partyInfo.partyName,
      slogan: partyInfo.partySlogan
    }

    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    };

    fetch(url, fetchOptions).then(async (res) => {
      if (res.status !== 201) {
        alert("There was an error. Please try again.");
        return;
      }
      getPartiesFromDatabase();
    });
  
    // setParties([...parties, partyInfo]);

    // setPartyInfo({
    //   partyName: "",
    //   partyLogo: "",
    //   partySlogan: "",
    // });
  };

  const handleNavigation =() => {
    navigate("/Ballot")
  }

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

          <button onClick={handleNavigation}>Finish</button>
        </fieldset>

        <Disclaimer />
      </main>
    </>
  );
};

export default NewParty;
