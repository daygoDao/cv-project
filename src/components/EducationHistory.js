import React from "react";

const EducationHistory = (prop) => {
  console.log(prop.edu);
  // const test1 = <div>6o9</div>;
  // const test2 = <div>6o9</div>;
  // console.log({ test1 });
  const content = (
    <div className="ed">
      <label htmlFor="schoolName">School name</label>
      <input type="text" name="schoolName" class="schoolName" />

      <label htmlFor="schoolFrom">From</label>
      <input
        type="number"
        name="schoolFrom"
        class="schoolFrom"
        placeholder="1984"
      />

      <label htmlFor="schoolTo">To</label>
      <input
        type="number"
        name="schoolTo"
        class="schoolTo"
        placeholder="2022"
      />
    </div>
  );

  let display = [];
  for (let i = 0; i < prop.edu.length; i++) {
    display.push(content);
  }
  console.log(display)

  return (
    <div className="education">
      <h2>Education History</h2>
      {display.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </div>
  );
};

export default EducationHistory;
