import React, { useState } from "react";

const PersonalInfo = (prop) => {
  const { firstName, lastName, personalDesc, email, phone } = prop;
  // console.log(prop.updateFirstName);
  return (
    <div className="personal">
      <h2>PersonalInfo</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder={firstName}
        id="firstName"
        onChange={prop.updateFirstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder={lastName}
        id="lastName"
        onChange={prop.updateLastName}
      />

      <label htmlFor="personalDesc">Personal Description</label>
      <input
        type="text"
        placeholder={personalDesc}
        id="personalDesc"
        onChange={prop.updatePersonDesc}
      />

      <label htmlFor="email">e-mail</label>
      <input
        type="email"
        placeholder="sample@here.aol"
        id="email"
        onChange={prop.updateEmail}
      />

      <label htmlFor="phone">Personal Description</label>
      <input
        type="tel"
        placeholder="XXX-XXX-XXXX"
        id="phone"
        onChange={prop.updatePhone}
      />
    </div>
  );
};

export default PersonalInfo;
