import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationHistory from "./components/EducationHistory";
import WorkHistory from "./components/WorkHistory";
import Preview from "./components/Preview";

const App = () => {
  //person desc state
  const [personState, setPersonState] = useState({
    firstName: "sir",
    lastName: "dude",
    personalDesc: "jobless nerd",
    email: "ayoyo@you.com",
    phone: "1-800-whaddup",
  });

  const updatePersons = (e) => {
    console.log(e);
    setPersonState((prevState) => {
      return {
        ...prevState,
      };
    });
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>
      <main>
        <form>
          <PersonalInfo onChange={updatePersons} />
          <EducationHistory />
          <WorkHistory />
        </form>

        <Preview person={personState} />
      </main>
    </div>
  );
};
export default App;
