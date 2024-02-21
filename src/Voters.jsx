import React, { useState } from "react";
import overview from "/assets/overview.svg";
import voters from "/assets/voters.svg";
import "./Voters .css";
import VotersTable from "./VotersTable";
import ImportVotersModal from "./ImportVotersModal";
import MainNav from "./MainNav";
import MainSecHeader from "./MainSecHeader";

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
   <MainNav/>
      <div className="mainCard">
       <MainSecHeader/>
        <hr />
        <p className="page">
          <img src={voters} alt="overview" className="iconNav" />
          Voters
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
