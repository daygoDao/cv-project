/**
 * this will contain the form for the user to input their data
 * @param {*} prop
 * @returns
 */
const EducationHistory = (prop) => {
  // education history
  const baseEduObj = {
    school: "",
    major: "",
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
    for (let i = 0; i < activeLI.length; i++) {
      if (activeLI[i] == e.target.parentNode.parentNode) return i;
    }
  };

  const updateEduName = (e) => {
    prop.setEducation((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].school = e.target.value;
      return temp;
    });
  };

  const updateEduMajor = (e) => {
    prop.setEducation((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].major = e.target.value;
      return temp;
    });
  };

  const updateEduFromYear = (e) => {
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

  const schoolContent = (
    <div className="ed">
      <label htmlFor="schoolName">School name</label>
      <input
        type="text"
        name="schoolName"
        className="schoolName"
        onChange={updateEduName}
      />

      <label htmlFor="schoolMajor">Major</label>
      <input
        type="text"
        name="schoolMajor"
        className="schooMajor"
        onChange={updateEduMajor}
      />

      <label htmlFor="schoolFrom">From</label>
      <input
        type="number"
        name="schoolFrom"
        className="schoolFrom"
        placeholder="1984"
        onChange={updateEduFromYear}
      />

      <label htmlFor="schoolTo">To</label>
      <input
        type="number"
        name="schoolTo"
        className="schoolTo"
        placeholder="2022"
        onChange={updateEduToYear}
      />
    </div>
  );

  let schoolsJSX = [];
  for (let i = 0; i < prop.education.length; i++) {
    schoolsJSX.push(schoolContent);
  }

  let display = schoolsJSX.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="education">
      <h2>Education History</h2>
      {display}

      <button onClick={appendEduList} type="button">
        add another education
      </button>
    </div>
  );
};

export default EducationHistory;
