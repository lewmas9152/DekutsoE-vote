import { useState, createContext } from "react";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import NewElection from "./NewElection";
import MainSec from "./MainSec";
import Ballot from "./Ballot";
import logo from "/assets/logo.svg";
import user from "/assets/user.svg";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateCandidate from "./CreateCandidate";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Voters from "./Voters";
import "./App.css";
import NewParty from "./NewParty";
import Voting from "./Voting";
import NewPosition from "./NewPosition";

export const ElectionContext = createContext({
  elections: [],
  electionData: {},
  setElectionData: () => {},
  handleElectionData: () => {},
  handleAddElection: () => {},
  getElectionsFromDatabase: () => {},
});

export const UserContext = createContext({
  userState: {},
  userInfo: {},
  currentUserEmail: "",
  setCurrentuserEmail: () => {},
  setUserState: () => {},
  handleUserData: () => {},
  handleSignUpStatusChange: () => {},
  handleLoginStatusChange: () => {},
});

export const ChoicesContext = createContext({
  positions:[],
  position: "",
  parties:[],
  choicesList: [],
  choiceInfo: { choices: "", party: "" },
  selectedPosition: "",
  selectedChoices: [],
  setParties:() => {},
  setSelectedPosition: () => {},
  setSelectedChoices: () => {},
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

  // const [positions, setPositions] = useState("");
  const [parties, setParties] = useState([]);
  const [position, setPosition] = useState("");
  const [positions, setPositions] = useState([]);
  const [choiceInfo, setChoiceInfo] = useState({
    choices: "",
    party: "",
  });

  const [choicesList, setChoicesList] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedChoices, setSelectedChoices] = useState([]);

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

    const newChoice = { choice: choiceInfo.choices, party: choiceInfo.party };
    setPositions((prevPositions) => ({
      ...prevPositions,
      [position]: [...(prevPositions[position] || []), newChoice],
    }));
    setChoiceInfo({ choices: "", party: "" });
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

  const [currentUserEmail, setCurrentuserEmail] = useState("");
  console.log(currentUserEmail);

  const getElectionsFromDatabase = async () => {
    try {
      const response = await fetch(
        "https://dekutso-evote-backend.onrender.com/api/elections",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          }
        }
      );
      const data = await response.json();
      const loadedElections = [];

      for (const key in data) {
        loadedElections.push({
          id: key,
          title: data[key].title,
          startDate: data[key].startDate,
          endDate: data[key].endDate,
        });
      }

      setElections(loadedElections);
    } catch (error) {
      console.log(error);
    }
  }
console.log(positions)
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
          getElectionsFromDatabase,
        }}
      >
        <UserContext.Provider
          value={{
            userState,
            currentUserEmail,
            setCurrentuserEmail,
            setUserState,
            handleSignUpStatusChange,
            handleLoginStatusChange,
          }}
        >
          <ChoicesContext.Provider
            value={{
              positions,
              parties,
              choicesList,
              choiceInfo,
              selectedPosition,
              selectedChoices,
              setParties,
              setPositions,
              handleChoiceInfo,
              handleAddChoice,
              setSelectedPosition,
              setSelectedChoices,
            }}
          >
            <nav className="nav routeNav">
              <img src={logo} alt="logo" className="logo" />
              <div className="links">
                <div className="genLinks">
                  <NavLink to="/" className="link">
                    Home
                  </NavLink>

                  <NavLink to="/news" className="link">
                    News
                  </NavLink>

                  <NavLink to="/campaigns" className="link">
                    Campaigns
                  </NavLink>
                </div>

                

                {currentUserEmail ? (
                 
                    <NavLink  key="profile" >
                      <div className="user">
                        <img src={user} alt="user" className="icon" />
                        <p>{currentUserEmail}</p>
                      </div>
                    </NavLink>
                 
                ) : (
                  <div className="regLinks">
                    <NavLink to="/login" className="link">
                      Login
                    </NavLink>
                    <NavLink to="/Signup" className="link">
                      Signup
                    </NavLink>
                  </div>
                )}
              </div>
            </nav>

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/CreateCandidate" element={<CreateCandidate />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/newElection" element={<NewElection />} />
              <Route path="/NewPosition" element={<NewPosition />} />


              <Route path="/main">
                <Route index element={<MainSec />} />
                <Route path="overview" element={<MainSec />} />
                <Route path="ballot" element={<Ballot />} />
                <Route path="voters" element={<Voters />} />
              </Route>
              <Route path="/ballot" element={<Ballot />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup">
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/newElection">
                <Route path="main" element={<MainSec />} />
              </Route>

              <Route path="/CreateCandidate" element={<CreateCandidate />} />
              <Route path="/Voters" element={<Voters />} />
              <Route path="/NewParty" element={<NewParty />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/voting/:position" element={<Voting />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ChoicesContext.Provider>
        </UserContext.Provider>
      </ElectionContext.Provider>
    </>
  );
}

export default App;
