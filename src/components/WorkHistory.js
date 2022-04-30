import React from "react";

const WorkHistory = (prop) => {
  const baseWorkObj = {
    workplace: "",
    fromYear: 0,
    toYear: 0,
  };

  const findIndex = (e) => {
    const activeLI = document.querySelectorAll(".work li");
    let index = 0;
    for (let i = 0; i < activeLI.length; i++) {
      if (activeLI[i] == e.target.parentNode.parentNode) return i;
    }
  };

  const updateWorkName = (e) => {
    console.log('yo');
    prop.setWork((prevState) => {
      let temp = [...prevState];
      // const index = e.target.parentNode.parentNode.title;
      console.log(findIndex(e));
      temp[findIndex(e)].workplace = e.target.value;
      return temp;
    });
  };

  // const updateEduFromYear = (e) => {
  //   console.log("ayo");
  //   prop.setEducation((prevState) => {
  //     let temp = [...prevState];
  //     console.log(findIndex(e));
  //     temp[findIndex(e)].fromYear = e.target.value;
  //     return temp;
  //   });
  // };

  // const updateEduToYear = (e) => {
  //   prop.setEducation((prevState) => {
  //     let temp = [...prevState];
  //     temp[findIndex(e)].toYear = e.target.value;
  //     return temp;
  //   });
  // };


  const appendWorkList = () => {
    prop.setWork((prevState) => {
      console.log(baseWorkObj)
      return [...prevState, baseWorkObj];
    });
  };

  const workContent = (
    <div>
      <label htmlFor="workName">Workplace name</label>
      <input type="text" name="workName" id="workName" />

      <label htmlFor="workPosition">Job Title</label>
      <input
        type="text"
        name="workPosition"
        id="workPosition"
        placeholder="FullTime Jabroni"
        onChange={updateWorkName}
      />

      <label htmlFor="workFrom">From</label>
      <input type="number" name="workFrom" id="workFrom" placeholder="1984" />

      <label htmlFor="workTo">To</label>
      <input type="number" name="workTo" id="workTo" placeholder="2022" />
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
