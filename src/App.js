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
    personalDesc: "brief description",
    email: "ayoyo@you.com",
    phone: "1-800-whaddup",
  });

  const [personFirst, setPersonFirst] = useState("init");

  const updateFirstName = (e) => {
    console.log("within updateFirstName");
    setPersonFirst(e.target.value);
  };

  const updatePersons = (e) => {
    setPersonState((prevState) => {
      console.log(prevState);

      return {
        ...prevState,
        firstName: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>
      <main>
        <form>
          <PersonalInfo person={personState} update={updatePersons} />
          <EducationHistory />
          <WorkHistory />
          <button type="button" onClick={updatePersons}>
            process
          </button>
        </form>

        <Preview person={personState} />
      </main>
    </div>
  );
};
export default App;
