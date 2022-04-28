import React from "react";

const EducationHistory = (prop) => {
  const content = (
    <div className="ed">
      <label htmlFor="schoolName">School name</label>
      <input type="text" name="schoolName" className="schoolName" />

      <label htmlFor="schoolFrom">From</label>
      <input
        type="number"
        name="schoolFrom"
        className="schoolFrom"
        placeholder="1984"
      />

      <label htmlFor="schoolTo">To</label>
      <input
        type="number"
        name="schoolTo"
        className="schoolTo"
        placeholder="2022"
      />
    </div>
  );

  let display = [];
  for (let i = 0; i < prop.edu.length; i++) {
    display.push(content);
  }

  let output = display.map((value, index) => {
    return <li key={index}>{value}</li>
  })

  // console.log(prop.edu);
  // console.log(display)

  return (
    <div className="education">
      <h2>Education History</h2>
      {output}
    </div>
  );
};

export default EducationHistory;
