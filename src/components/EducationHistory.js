import React from "react";

const EducationHistory = (prop) => {
  // console.log(prop.edu)

  const content = (
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

  let display = [];
  for (let i = 0; i < prop.edu.length; i++) {
    display.push(content);
  }

  let output = display.map((value, index) => {
    return (
      <li data={index} key={index}>
        {value}
      </li>
    );
  });

  return (
    <div className="education">
      <h2>Education History</h2>
      {output}
    </div>
  );
};

export default EducationHistory;
