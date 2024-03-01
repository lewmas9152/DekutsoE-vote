import PChart from "./PChart";
import Bchart from "./Bchart";
import logo from "/assets/logo.svg";
import MainNav from "./MainNav";
import "./Results.css";
import Disclaimer from "./Disclaimer";

const Results = () => {
  return (
    <>
     <main className="container ">
      <MainNav />
      <div className="resultsContainer">
      <div className="resultSec">
        <img src={logo} alt="logo" className="logoB" />
        <div className="charts">
          <div className="chartContainer">
            <h1>Pie Chart</h1>
            <PChart />
          </div>
          <div className="chartContainer">
            <h1>Bar Chart</h1>
            <Bchart />
          </div>
        </div>
      </div>
      <div className="disclaimer">
      <Disclaimer/>
      </div>
    

      </div>
    
   
    </main>
     
    </>
   
  );
};

export default Results;
