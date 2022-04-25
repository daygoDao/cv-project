import PersonalInfo from "./PersonalInfo";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

const CVform = () => {
  return (
    <form>
      <PersonalInfo />
      <EducationHistory />
      <WorkHistory />
    </form>
  );
};

export default CVform;
