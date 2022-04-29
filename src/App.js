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

  const appendEduList = () => {
    setEducation((prevState) => {
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
    console.log(e.target.parentNode.parentNode.title);

    setEducation((prevState) => {
      let temp = [...prevState];
      // const index = e.target.parentNode.parentNode.title;
      console.log(findIndex(e));
      temp[findIndex(e)].school = e.target.value;
      return temp;
    });
  };

  useEffect(() => {
    // console.log(education)
  });

  const updateEduFromYear = (e) => {
    console.log("ayo");
    setEducation((prevState) => {
      let temp = [...prevState];
      console.log(findIndex(e));
      temp[findIndex(e)].fromYear = e.target.value;
      return temp;
    });
  };

  const updateEduToYear = (e) => {
    setEducation((prevState) => {
      let temp = [...prevState];
      temp[findIndex(e)].toYear = e.target.value;
      return temp;
    });
  };

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
          <EducationHistory
            edu={education}
            updateEdu={updateEduName}
            updateEduFromYear={updateEduFromYear}
            updateEduToYear={updateEduToYear}
          />
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
