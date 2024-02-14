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
import Voters from "./Voters";

export const ElectionContext = createContext({
  elections: [],
  electionData: {},
  setElectionData: () => {},
  handleElectionData: () => {},
  handleAddElection: () => {},
});

export const UserContext = createContext({
  userState: {},
  userInfo: {},
  setUserState: () => {},
  handleUserData: () => {},
  handleSignUpStatusChange: () => {},
  handleLoginStatusChange: () => {},
});

export const ChoicesContext = createContext({
  choicesList: [],
  choiceInfo: {},
  position: "",
  setPosition: () => {},
  handleChoiceInfo: () => {},
  handleAddChoice: () => {},
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

  const [position, setPosition] = useState("");
  const [choiceInfo, setChoiceInfo] = useState({
    choices: "",
    party: "",
  });

  const [choicesList, setChoicesList] = useState([]);

  const handleChoiceInfo = (event) => {
    if (event.target.name === "position") {
      setPosition(event.target.value);
    }
    setChoiceInfo({
      ...choiceInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddChoice = () => {
    if (
      position === "" ||
      choiceInfo.choices === "" ||
      choiceInfo.party === ""
    ) {
      return;
    }

    const newChoice = {
      id: choicesList.length + 1,
      choice: choiceInfo.choices,
      party: choiceInfo.party,
    };

    setChoicesList([...choicesList, newChoice]);
    setChoiceInfo({
      choices: "",
      party: "",
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
          setElections,
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
          <ChoicesContext.Provider
            value={{
              choicesList,
              choiceInfo,
              position,
              setPosition,
              handleChoiceInfo,
              handleAddChoice,
            }}
          >
            <nav className="nav routeNav">
              <img src={logo} alt="logo" className="logo" />
              <div className="links">
                <NavLink to="/" className="link">
                  Home
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
              <Route path="/newPosition" element={<NewPosition />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/newElection" element={<NewElection />} />

              <Route path="/main">
                <Route index element={<MainSec />} />
                <Route path="overview" element={<MainSec />} />
                <Route path="ballot" element={<Ballot />} />
                <Route path="voters" element={<Voters />} />
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

              <Route path="/newPosition" element={<NewPosition />} />
              <Route path="/Voters" element={<Voters />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ChoicesContext.Provider>
        </UserContext.Provider>
      </ElectionContext.Provider>
    </>
  );
}

export default App;
