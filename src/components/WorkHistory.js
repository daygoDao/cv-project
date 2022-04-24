import React from "react";

const WorkHistory = () => {
  return (
    <div className="work">
      <h2>Work History</h2>

      <label htmlFor="workName">Workplace name</label>
      <input type="text" name="workName" id="workName" />

      <label htmlFor="workPosition">Job Title</label>
      <input
        type="text"
        name="workPosition"
        id="workPosition"
        placeholder="FullTime Jabroni"
      />

      <label htmlFor="workFrom">From</label>
      <input type="number" name="workFrom" id="workFrom" placeholder="1984" />

      <label htmlFor="workTo">To</label>
      <input type="number" name="workTo" id="workTo" placeholder="2022" />
    </div>
  );
};

export default WorkHistory;
