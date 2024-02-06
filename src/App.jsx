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
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log(title);
  return (
    <>
      <nav className="nav routeNav">
        <img src={logo} alt="logo"  className="logo"/>
        <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/dashboard" className="link">Dashboard</Link>
        <Link to="/newElection" className="link"> NewElection</Link>
        <Link to="/main" className="link">Main</Link>
        <Link to="/login" className="link">Login</Link>
        <Link to="/Signup" className="link">Signup</Link>
        </div>
        
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard title={title} startDate={startDate} endDate={endDate} />
          }
        />
        <Route
          path="/newElection"
          element={
            <NewElection
              title={title}
              startDate={startDate}
              endDate={endDate}
              setTitle={setTitle}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          }
        />
      
        <Route path="/main">
          <Route index element={<MainSec/>}/>
          <Route path="overview" element={<MainSec />} />
          <Route path="ballot" element={<Ballot />} />
        </Route>
        <Route path="/ballot" element={<Ballot />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup">
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/newElection/main" element={<MainSec />} />
        <Route path ="/newPosition" element = {<NewPosition/>}/>
      </Routes>
    </>
  );
}

export default App;
