import React from "react";

const WorkHistory = (prop) => {
  const baseWorkObj = {
    workplace: "",
    workTitle: "",
    workDesc: "",
    fromYear: 0,
    toYear: 0,
  };

  const findIndex = (e) => {
    const activeLI = document.querySelectorAll(".work li");
    for (let i = 0; i < activeLI.length; i++) {
      if (activeLI[i] == e.target.parentNode.parentNode) return i;
    }
  };

  const updateWorkName = (e) => {
    prop.setWork((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].workplace = e.target.value;
      return temp;
    });
  };

  const updateWorkTitle = (e) => {
    prop.setWork((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].workTitle = e.target.value;
      return temp;
    });
  };

  const updateWorkDesc = (e) => {
    prop.setWork((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].workDesc = e.target.value;
      return temp;
    });
  };

  const updateWorkFromYear = (e) => {
    prop.setWork((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].fromYear = e.target.value;
      return temp;
    });
  };

  const updateWorkToYear = (e) => {
    prop.setWork((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].toYear = e.target.value;
      return temp;
    });
  };

  const appendWorkList = () => {
    prop.setWork((prevState) => {
      return [...prevState, baseWorkObj];
    });
  };

  const workContent = (
    <div>
      <label htmlFor="workName">Workplace name</label>
      <input
        type="text"
        name="workName"
        id="workName"
        onChange={updateWorkName}
      />

      <label htmlFor="workPosition">Job Title</label>
      <input
        type="text"
        name="workPosition"
        id="workPosition"
        placeholder="FullTime Jabroni"
        onChange={updateWorkTitle}
      />

      <label htmlFor="workPosition">Job Description</label>
      <input
        type="text"
        name="workDesc"
        id="workDesc"
        placeholder="goofing 24/7"
        onChange={updateWorkDesc}
      />

      <label htmlFor="workFrom">From</label>
      <input
        type="number"
        name="workFrom"
        id="workFrom"
        placeholder="1984"
        onChange={updateWorkFromYear}
      />

      <label htmlFor="workTo">To</label>
      <input
        type="number"
        name="workTo"
        id="workTo"
        placeholder="2022"
        onChange={updateWorkToYear}
      />
    </div>
  );

  const worksJSX = [];
  for (let i = 0; i < prop.work.length; i++) {
    worksJSX.push(workContent);
  }

  const display = worksJSX.map((value, index) => {
    return (
      <li data={index} key={index}>
        {value}
      </li>
    );
  });

  return (
    <div className="work">
      <h2>Work History</h2>
      {display}
      <button onClick={appendWorkList} type="button">
        add another work
      </button>
    </div>
  );
};

export default WorkHistory;
