import { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import NewElection from "./NewElection";
import MainSec from "./MainSec";
import Ballot from "./Ballot";
import logo from "/assets/logo.svg";
import AdminLogin from "./AdminLogin";
import SignUp from "./SignUp";
import NewPosition from "./NewPosition";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

function App() {
  const [electionData, setElectionData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    selectedTimezone: "",
  });
  const handleElectionData = (event) => {
    setElectionData({
      ...electionData,
      [event.target.name]: event.target.value,
    });
  };

  const [userState, setUserState] = useState({
    signUpStatus: "ADMIN SIGNUP",
    identity: "Admin ID",
    loginStatus: "ADMIN LOGIN",
  });

  const handleSignUpStatusChange = (newSignUpStatus) => {
    const newIdentity =
      newSignUpStatus === "ADMIN SIGNUP" ? "Admin ID" : "Reg.no";
    setUserState({
      signUpStatus: newSignUpStatus,
      identity: newIdentity,
    });
  };

  const handleLoginStatusChange = (newLoginStatus) => {
    const newIdentity =
      newLoginStatus === "ADMIN LOGIN" ? "Admin ID" : "Reg.no";
    setUserState({
      loginStatus: newLoginStatus,
      identity: newIdentity,
    });
  };

  const [elections, setElections] = useState([]);

  let counter = 0;

  const addElection = (newElectionData) => {
    counter++;
    setElections([...elections, { ...newElectionData, id: counter }]);
  };

  return (
    <>
      <nav className="nav routeNav">
        <img src={logo} alt="logo" className="logo" />
        <div className="links">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="link">
            Dashboard
          </NavLink>
          <NavLink to="/newElection" className="link">
            {" "}
            NewElection
          </NavLink>
          <NavLink to="/main" className="link">
            Main
          </NavLink>
          <NavLink to="/login" className="link">
            Login
          </NavLink>
          <NavLink to="/Signup" className="link">
            Signup
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard electionData={electionData} elections={elections} />
          }
        />
        <Route
          path="/newElection"
          element={
            <NewElection
              electionData={electionData}
              setElectionData={setElectionData}
              handleElectionData={handleElectionData}
              handleAddElection={addElection}
            />
          }
        />

        <Route path="/main">
          <Route index element={<MainSec electionData={electionData} />} />
          <Route path="overview" element={<MainSec />} />
          <Route path="ballot" element={<Ballot />} />
        </Route>
        <Route path="/ballot" element={<Ballot />} />
        <Route
          path="/login"
          element={
            <AdminLogin
              userState={userState}
              handleLoginStatusChange={handleLoginStatusChange}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              userState={userState}
              handleSignUpStatusChange={handleSignUpStatusChange}
            />
          }
        />
        <Route path="/signup">
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/newElection">
          <Route path="main" element={<MainSec electionData={electionData}/>} />
        </Route>

        <Route path="/newPosition" element={<NewPosition />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
