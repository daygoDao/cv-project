import React from "react";

const EducationHistory = () => {
  return (
    <div className="education">
      <h2>Education History</h2>

      <label htmlFor="schoolName">School name</label>
      <input type="text" name="schoolName" id="schoolName" />

      <label htmlFor="schoolFrom">From</label>
      <input
        type="number"
        name="schoolFrom"
        id="schoolFrom"
        placeholder="1984"
      />

      <label htmlFor="schoolTo">To</label>
      <input type="number" name="schoolTo" id="schoolTo" placeholder="2022" />
    </div>
  );
};

export default EducationHistory;
