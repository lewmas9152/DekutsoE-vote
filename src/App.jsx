import { useState, createContext } from "react";
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

export const ElectionContext = createContext({
  elections: [],
  electionData: {},
  setElectionData: () => {},
  handleElectionData: () => {},
  handleAddElection: () => {},
});

export const UserContext = createContext({
  userState: {},
  setUserState: () => {},
  handleSignUpStatusChange: () => {},
  handleLoginStatusChange: () => {},
});

function App() {
  const [elections, setElections] = useState([]);
  const [electionData, setElectionData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    selectedTimezone: "",
  });

  const handleAddElection = (newElectionData) => {
    setElections([...elections, { ...newElectionData, id: Date.now() }]);
  };

  const [choiceInfo, setChoiceInfo] = useState({
    position: "",
    choice: "",
    party: "",
  });

  const [choices, setChoices] = useState([]);

  const handleChoiceInfo = (event) => {
    setChoiceInfo({
      ...choiceInfo,
      [event.target.name]: event.target.value,
    });
  };
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

  return (
    <>
      <ElectionContext.Provider
        value={{
          elections,
          electionData,
          setElectionData,
          handleElectionData,
          handleAddElection,
        }}
      >
        <UserContext.Provider
          value={{
            userState,
            setUserState,
            handleSignUpStatusChange,
            handleLoginStatusChange,
          }}
        >
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newElection" element={<NewElection />} />

            <Route path="/main">
              <Route index element={<MainSec />} />
              <Route path="overview" element={<MainSec />} />
              <Route path="ballot" element={<Ballot />} />
            </Route>
            <Route path="/ballot" element={<Ballot />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup">
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/newElection">
              <Route path="main" element={<MainSec />} />
            </Route>

            <Route
              path="/newPosition"
              element={
                <NewPosition
                  choiceInfo={choiceInfo}
                  setChoiceInfo={setChoiceInfo}
                  handleChoiceInfo={handleChoiceInfo}
                  choices={choices}
                  setChoices={setChoices}
                />
              }
            />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </UserContext.Provider>
      </ElectionContext.Provider>
    </>
  );
}

export default App;
