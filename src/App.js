import { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationHistory from "./components/EducationHistory";
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

  // education history
  const [education, setEducation] = useState([
    {
      school: "",
      major: "",
      fromYear: 0,
      toYear: 0,
    },
  ]);

  // work array state
  const [work, setWork] = useState([
    {
      workplace: "",
      workTitle: "",
      workDesc: "",
      fromYear: 0,
      toYear: 0,
    },
  ]);

  return (
    <div className="App">
      <h1>CV Generator</h1>
      <main>
        <form>
          <PersonalInfo person={personState} setPersonState={setPersonState} />

          <EducationHistory education={education} setEducation={setEducation} />

          <WorkHistory work={work} setWork={setWork} />
        </form>

        <Preview person={personState} edu={education} work={work} />
      </main>
    </div>
  );
};
export default App;
