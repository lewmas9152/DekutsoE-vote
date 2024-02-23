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
  electionId: "",
  electionData: {},
  selectedElection: "",
  setSelectedElection: () => {},
  setElectionId: () => {},
  setElectionData: () => {},
  handleElectionData: () => {},
  handleAddElection: () => {},
  getElectionsFromDatabase: () => {},
  getPartiesFromDatabase: () => {},
  getPositionFromDatabase: () => {},
  getCandidatesFromDatabase: () => {},
  getVotersFromDatabase: () => {},
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
  positions: [],
  position: "",
  positionInfo: "",
  parties: [],
  choicesList: [],
  choiceInfo: { choices: "", party: "" },
  selectedPosition: "",
  selectedChoices: [],
  setParties: () => {},
  setPositionInfo: () => {},
  setChoicesList: () => {},
  setSelectedPosition: () => {},
  setSelectedChoices: () => {},
  setPosition: () => {},
  setPositions: () => {},
  handleChoiceInfo: () => {},
  handleAddChoice: () => {},
});

function App() {
  const [elections, setElections] = useState([]);
  const [electionData, setElectionData] = useState({
    _id: "",
    title: "",
    startDate: "",
    endDate: "",
    selectedTimezone: "",
  });

  const [positionInfo, setPositionInfo] = useState({
    positionName: "",
    maxCandidates: "",
  });

  const handleAddElection = (newElectionData) => {
    setElections([...elections, { ...newElectionData }]);
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
  const [selectedElection, setSelectedElection] = useState("");
  const [votersList, setVotersList] = useState([]);

  const handleChoiceInfo = (event) => {
    if (event.target.name === "position") {
      setPosition(event.target.value);
    }
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

  const [currentUserEmail, setCurrentuserEmail] = useState(
    localStorage.getItem("email") || ""
  );

  localStorage.setItem("email", currentUserEmail);

  const getElectionsFromDatabase = async () => {
    try {
      const response = await fetch(
        "https://dekutso-evote-backend.onrender.com/api/elections",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const loadedElections = [];

      for (const key in data) {
        loadedElections.push({
          _id: data[key]._id,
          title: data[key].title,
          startDate: data[key].startDate,
          endDate: data[key].endDate,
        });
      }

      setElections(loadedElections);
    } catch (error) {
      console.log(error);
    }
  };

  const getPositionFromDatabase = async () => {
    try {
      const response = await fetch(
        `https://dekutso-evote-backend.onrender.com/api/positions/${electionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();

      const loadedPositions = [];

      for (const key in data) {
        loadedPositions.push({
          positionName: data[key].name,
          maxCandidates: data[key].maxCandidates,
        });
      }

      setPositions(loadedPositions);
    } catch (error) {
      console.log(error);
    }
  };

  const getPartiesFromDatabase = async () => {
    try {
      const response = await fetch(
        "https://dekutso-evote-backend.onrender.com/api/parties",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const loadedParties = [];

      for (const key in data) {
        loadedParties.push({
          partyName: data[key].name,
          partySlogan: data[key].slogan,
        });
      }

      setParties(loadedParties);
    } catch (error) {
      console.log(error);
    }
  };

  const getCandidatesFromDatabase = async () => {
    try {
      const response = await fetch(
        "https://dekutso-evote-backend.onrender.com/api/candidates",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const loadedCandidates = [];

      for (const key in data) {
        loadedCandidates.push({
          candidateName: data[key].candidateName,
          position: data[key].position,
          party: data[key].party,
        });
      }

      setChoicesList(loadedCandidates);
    } catch (error) {
      console.log(error);
    }
  };

  const getVotersFromDatabase = async () => {
    try {
      const response = await fetch(
        "https://dekutso-evote-backend.onrender.com/api/voters",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      const loadedVoters = [];

      for (const key in data) {
        loadedVoters.push({
          voterName: data[key].voterName,
          regNo: data[key].regNo,
          email: data[key].email,
          voted: data[key].voted,
        });
      }

      setVotersList(loadedVoters);
    } catch (error) {
      console.log(error);
    }
  };

  const token = localStorage.getItem("token");
  window.onload = () => {
    if (token && currentUserEmail) {
      getElectionsFromDatabase();
    }
  };

  const [electionId, setElectionId] = useState("");

  return (
    <>
      <ElectionContext.Provider
        value={{
          elections,
          electionData,
          electionId,
          selectedElection,
          setSelectedElection,
          setElectionId,
          setElections,
          setElectionData,
          handleElectionData,
          handleAddElection,
          getElectionsFromDatabase,
          getPartiesFromDatabase,
          getPositionFromDatabase,
          getCandidatesFromDatabase,
          getVotersFromDatabase,
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
              positionInfo,
              parties,
              position,
              choicesList,
              choiceInfo,
              selectedPosition,
              selectedChoices,
              setChoicesList,
              setPositionInfo,
              setParties,
              setPositions,
              setPosition,
              setChoiceInfo,
              handleChoiceInfo,
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

                  {token && (
                    <NavLink to="/dashboard" className="link">
                      Dashboard
                    </NavLink>
                  )}
                </div>

                <NavLink to="/login" className="link">
                      Login
                    </NavLink>

                {currentUserEmail ? (
                  <NavLink key="profile">
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
              <Route path="/main/:electionId" element={<MainSec />} />
              <Route
                path="/CreateCandidate/:position"
                element={<CreateCandidate />}
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ChoicesContext.Provider>
        </UserContext.Provider>
      </ElectionContext.Provider>
    </>
  );
}

export default App;
