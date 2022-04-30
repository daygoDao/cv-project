import { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
// import EducationHistory from "./components/EducationHistory";
import EducationCore from "./components/EducationCore";
import WorkHistory from "./components/WorkHistory";
import Preview from "./components/Preview";

const App = () => {
  //person desc state
  const [personState, setPersonState] = useState({
    firstName: "sir",
    lastName: "dude",
    personalDesc: "brief description",
    email: "ayoyo@you.com",
    phone: "1-800-whaddup",
  });

  const updateFirstName = (e) => {
    setPersonState((prevState) => {
      return {
        ...prevState,
        firstName: e.target.value,
      };
    });
  };

  const updateLastName = (e) => {
    setPersonState((prevState) => {
      return {
        ...prevState,
        lastName: e.target.value,
      };
    });
  };

  const updatePersonDesc = (e) => {
    setPersonState((prevState) => {
      return {
        ...prevState,
        personalDesc: e.target.value,
      };
    });
  };

  const updateEmail = (e) => {
    setPersonState((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };

  const updatePhone = (e) => {
    setPersonState((prevState) => {
      return {
        ...prevState,
        phone: e.target.value,
      };
    });
  };

  // education history
  const baseEduObj = {
    school: "",
    fromYear: 0,
    toYear: 0,
  };

  const [education, setEducation] = useState([
    {
      school: "",
      fromYear: 0,
      toYear: 0,
    },
  ]);

  return (
    <div className="App">
      <h1>CV Generator</h1>
      <main>
        <form>
          <PersonalInfo
            person={personState}
            updateFirstName={updateFirstName}
            updateLastName={updateLastName}
            updatePersonDesc={updatePersonDesc}
            updateEmail={updateEmail}
            updatePhone={updatePhone}
          />
          {/* <EducationHistory
            edu={education}
            updateEdu={updateEduName}
            updateEduFromYear={updateEduFromYear}
            updateEduToYear={updateEduToYear}
          />
          <button onClick={appendEduList} type="button">
            add another education
          </button> */}
          <EducationCore education={education} setEducation={setEducation} />
          <WorkHistory />
        </form>

        <Preview person={personState} edu={education} />
      </main>
    </div>
  );
};
export default App;
