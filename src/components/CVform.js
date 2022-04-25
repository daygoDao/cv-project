import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";
import Preview from "./Preview";

const CVform = () => {
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

  // console.log(personState)
  return (
    <form>
      <h1>CV Generator</h1>
      <PersonalInfo onChange={updatePersons} />
      <EducationHistory />
      <WorkHistory />
      <Preview person={personState} />
    </form>
  );
};

export default CVform;
