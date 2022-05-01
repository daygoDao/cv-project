const Preview = (prop) => {
  const { firstName, lastName, personalDesc, email, phone } = prop.person;

  // edu preview section
  const eduPreview = (edu) => {
    return (
      <div>
        <span>School: {edu.school}</span>
        <span>Major: {edu.major}</span>
        <span>From: {edu.fromYear}</span>
        <span>To: {edu.toYear}</span>
      </div>
    );
  };

  let eduList = [];
  for (let edu of prop.edu) {
    eduList.push(eduPreview(edu));
  }

  let eduOutput = eduList.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  // work preview section
  const workPreview = (work) => {
    return (
      <div>
        <span>{work.workplace}</span>
        <span>Position Title:{work.workTitle}</span>
        <span>Description:{work.workDesc}</span>
        <span>From: {work.fromYear}</span>
        <span>To: {work.toYear}</span>
      </div>
    );
  };

  let workList = [];
  for (let work of prop.work) {
    workList.push(workPreview(work));
  }

  let workOutput = workList.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="cvPreview">
      <section className="cvPersonalDesc">
        <h5>
          {firstName} {lastName}
        </h5>
        <p>email: {email}</p>
        <p>Phone: {phone}</p>
        <p>About me: {personalDesc}</p>
      </section>
      <section className="cvEdu">
        <h6>edu</h6>
        {eduOutput}
      </section>
      <section className="cvWork">
        <h6>work</h6>
        {workOutput}
      </section>
    </div>
  );
};

export default Preview;
