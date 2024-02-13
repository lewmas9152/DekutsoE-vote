import React, { useState } from "react";
import overview from "/assets/overview.svg";
import ballot from "/assets/ballot.svg";
import voters from "/assets/voters.svg";
import launch from "/assets/launch.svg";
import "./Voters .css";
import { Link } from "react-router-dom";
import VotersTable from "./VotersTable";
import ImportVotersModal from "./ImportVotersModal";

const Voters = () => {
  const [showVotersTable, setShowVotersTable] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedFilePreview, setSelectedFilePreview] = useState(null);

  const handleShowVotersTable = () => {
    setShowVotersTable(!showVotersTable);
  };

  const handleImportClick = () => {
    setShowImportModal(true);
  };

  const handleFilePreview = (previewData) => {
    setSelectedFilePreview(previewData);
  };

  return (
    <main className="container" id="main">
      <nav className="navMain">
        <Link to="/main/overview">
          <p className="navigate">
            <img src={overview} alt="logo" className="iconNav" />
            Overview
          </p>
        </Link>

        <Link to="/main/ballot">
          <p className="navigate">
            {" "}
            <img src={ballot} alt="Ballot" className="iconNav" />
            Ballot
          </p>
        </Link>

        <p className="navigate">
          {" "}
          <img src={voters} alt="Voters" className="iconNav" />
          Voters
        </p>
        <p className="navigate">
          {" "}
          <img src={launch} alt="Launch" className="iconNav" />
          Launch
        </p>
      </nav>
      <div className="mainCard">
        <div className="mainHeader">
          <h2>School Executive</h2>
          <h2>0 voters</h2>
        </div>
        <hr />
        <p className="page">
          <img src={overview} alt="overview" className="iconNav" />
          Overview
        </p>
        <hr />

        {showVotersTable && <VotersTable />}
        {showImportModal && (
          <ImportVotersModal
            onClose={() => setShowImportModal(false)}
            onFilePreview={handleFilePreview}
          />
        )}
        {selectedFilePreview && (
          <div className="selected-file-preview">
            <p>Selected file preview: {selectedFilePreview}</p>
          </div>
        )}
        <div className="entry">
          <button className="btn" onClick={handleImportClick}>
            Import Voters
          </button>

          <button className="btn" onClick={handleShowVotersTable}>
            Create Voters
          </button>
        </div>
      </div>
    </main>
  );
};

export default Voters;
