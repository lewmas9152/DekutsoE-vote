import React,{useState} from 'react'
const VotersTable = () => {

    const [votersData, setVotersData] = useState([]);

  
    const columns = [
      { name: "Name", key: "name", inputType: "text" },
      { name: "Reg.No", key: "id", inputType: "number" },
      { name: "Email", key: "email", inputType: "email" },
    
    ];
  
    const handleInputChange = (rowIndex, colKey, event) => {
      const updatedVotersData = [...votersData];
      updatedVotersData[rowIndex][colKey] = event.target.value;
      setVotersData(updatedVotersData);
    };
  
    const addNewVoter = () => {
      setVotersData([...votersData, {}]);
    };
  
    const saveVoters = () => {
      console.log("Voters saved:", votersData);
      //  code to save data to server 
    };
  
    return (
        <>
        <div className='table'>
      <div className="votersTable">
        <table>
          <thead className='tableHeader'>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className='th'>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {votersData.map((voter, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.key}>
                    <input
                      type={column.inputType}
                      value={voter[column.key] || ""}
                      onChange={(event) => handleInputChange(rowIndex, column.key, event)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <div className="tableBtns">
       <button onClick={addNewVoter} className='btn'>Add New Voter</button>
        <button onClick={saveVoters} className='btn'>Save Voters</button>
        </div>
       </div>
        </>
    );
  };
  

export default VotersTable