import React, { useContext } from "react";
import { ElectionContext } from "./App";

const MainSecHeader = () => {
  const { selectedElection } = useContext(ElectionContext);
  return (
    <>
      <div className="mainHeader">
        <h2>{selectedElection.title}</h2>
        <h2>0 Voters</h2>
      </div>
    </>
  );
};

export default MainSecHeader;
