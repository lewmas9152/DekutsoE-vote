import React, { useState } from 'react';

const Voting = () => {


  return (
   <>
   <main className="container" id="main">
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
    
          
        </div>
    </main>
   </>
  );
};

export default Voting;
