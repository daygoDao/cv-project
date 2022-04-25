import PersonalInfo from "./PersonalInfo";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

const CVform = () => {
  return (
    <form>
      <h1>CV Generator</h1>
      <PersonalInfo />
      <EducationHistory />
      <WorkHistory />
    </form>
  );
};

export default CVform;
