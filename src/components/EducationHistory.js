import React from "react";

/**
 * this will contain the form for the user to input their data
 * @param {*} prop 
 * @returns 
 */
const EducationHistory = (prop) => {

  const schoolContent = (
    <div className="ed">
      <label htmlFor="schoolName">School name</label>
      <input
        type="text"
        name="schoolName"
        className="schoolName"
        onChange={prop.updateEdu}
      />

      <label htmlFor="schoolFrom">From</label>
      <input
        type="number"
        name="schoolFrom"
        className="schoolFrom"
        placeholder="1984"
        onChange={prop.updateEduFromYear}
      />

      <label htmlFor="schoolTo">To</label>
      <input
        type="number"
        name="schoolTo"
        className="schoolTo"
        placeholder="2022"
        onChange={prop.updateEduToYear}
      />
    </div>
  );

  let schoolsJSX = [];
  for (let i = 0; i < prop.edu.length; i++) {
    schoolsJSX.push(schoolContent);
  }

  let display = schoolsJSX.map((value, index) => {
    return (
      <li key={index}>
        {value}
      </li>
    );
  });

  return (
    <div className="education">
      <h2>Education History</h2>
      {display}
    </div>
  );
};

export default EducationHistory;
