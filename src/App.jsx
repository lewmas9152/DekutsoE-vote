import { useState, createContext, useEffect } from "react";
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
import { Routes, Route, NavLink, Navigate, useParams } from "react-router-dom";
import Voters from "./Voters";
import "./App.css";
import NewParty from "./NewParty";
import Voting from "./Voting";
import NewPosition from "./NewPosition";

export const ElectionContext = createContext({
  elections: [],
  electionId: "",
  electionData: {},
  selectedElection:"",
  setSelectedElection:() => {},
  setElectionId: () => {},
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
  const [selectedElection, setSelectedElection] = useState(null);

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

  const [currentUserEmail, setCurrentuserEmail] = useState("");

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

  const token = localStorage.getItem("token");

  // maintaining loginStatus
  // const fetchUserData = async (token) => {
  //   try {
  //     const response = await fetch(`https://dekutso-evote-backend.onrender.com/${
  //       userState.signUpStatus === "ADMIN SIGNUP" ? "admin/signup" : "signup"
  //     }`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch user data");
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     throw new Error("Error fetching user data");
  //   }
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     fetchUserData(token)
  //       .then((userData) => {
  //         setCurrentuserEmail(userData.email);
  //         getElectionsFromDatabase();
  //         Navigate("/dashboard");
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //         localStorage.removeItem("token");
  //       });
  //   }
  // }, []);

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

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ChoicesContext.Provider>
        </UserContext.Provider>
      </ElectionContext.Provider>
    </>
  );
}

export default App;
