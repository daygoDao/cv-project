import React from "react";

const Preview = (prop) => {
  const { firstName, lastName, personalDesc, email, phone } = prop.person;

  const eduPreview = (edu) => {
    // console.log(edu)
    return (
      <div>
        <p>{edu.school}</p>
      </div>
    );
  };

  let eduList = [];
  for (let edu of prop.edu) {
    eduList.push(eduPreview(edu));
  }

  let output = eduList.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="cvPreview">
      <section className="cvPersonalDesc">
        <h4>teset</h4>
        <h5>
          {firstName} {lastName}
        </h5>
        <p>email: {email}</p>
        <p>Phone: {phone}</p>
        <p>About me: {personalDesc}</p>
      </section>
      <section className="cvEdu">
      <h6>edu</h6>
      {output}</section>
    </div>
  );
};

export default Preview;
