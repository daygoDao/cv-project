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
    school: "test",
    fromYear: 0,
    toYear: 0,
  };

  const [education, setEducation] = useState([baseEduObj]);

  const appendEduList = () => {
    setEducation((prevState) => {
      return [...prevState, baseEduObj];
    });
  };

  const updateEduName = (e) => {
    console.log(e.target.parentNode.parentNode.title);
    setEducation((prevState) => {
      let temp = [...prevState];
      let index = e.target.parentNode.parentNode.title
      temp[index].school = e.target.value;
      // console.log(prevState)
      return temp;
    });
  };

  // useEffect(() => {
  //   setEducation((prevState) => {
  //     console.log(prevState);
  //   });
  // }, [education]);

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
          <EducationHistory edu={education} updateEdu={updateEduName} />
          <button onClick={appendEduList} type="button">
            add another education
          </button>

          <WorkHistory />
        </form>

        <Preview person={personState} edu={education} />
      </main>
    </div>
  );
};
export default App;
