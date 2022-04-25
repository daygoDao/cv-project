import { useState } from "react";
import CVform from "./components/CVform";
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

  // const updatePersons = (e) => {
  //   console.log(e);
  //   setPersonState((prevState) => {
  //     return {
  //       ...prevState,
  //     };
  //   });
  // };

  return (
    <div className="App">
      <CVform />
      <Preview person={personState} />
    </div>
  );
};
export default App;
