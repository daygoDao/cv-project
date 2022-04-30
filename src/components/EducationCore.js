import React, { useState, useEffect } from "react";
import EducationHistory from "./EducationHistory";

/**
 * this component will contain the state for the education section and the
 * appropriate actions when values are updated.
 * 
 * @param {*} prop 
 * @returns 
 */
const EducationCore = (prop) => {
  // education history
  const baseEduObj = {
    school: "",
    fromYear: 0,
    toYear: 0,
  };

  const appendEduList = () => {
    prop.setEducation((prevState) => {
      return [...prevState, baseEduObj];
    });
  };

  const findIndex = (e) => {
    const activeLI = document.querySelectorAll(".education li");
    let index = 0;
    for (let i = 0; i < activeLI.length; i++) {
      if (activeLI[i] == e.target.parentNode.parentNode) return i;
    }
  };

  const updateEduName = (e) => {
    prop.setEducation((prevState) => {
      let temp = [...prevState];
      // const index = e.target.parentNode.parentNode.title;
    //   console.log(findIndex(e));
      temp[findIndex(e)].school = e.target.value;
      return temp;
    });
  };

  const updateEduFromYear = (e) => {
    console.log("ayo");
    prop.setEducation((prevState) => {
      let temp = [...prevState];
      console.log(findIndex(e));
      temp[findIndex(e)].fromYear = e.target.value;
      return temp;
    });
  };

  const updateEduToYear = (e) => {
    prop.setEducation((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].toYear = e.target.value;
      return temp;
    });
  };

  return (
    <div>
      <EducationHistory
        edu={prop.education}
        updateEdu={updateEduName}
        updateEduFromYear={updateEduFromYear}
        updateEduToYear={updateEduToYear}
      />
      <button onClick={appendEduList} type="button">
        add another education
      </button>
    </div>
  );
};

export default EducationCore;
