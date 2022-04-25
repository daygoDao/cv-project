import React, { useState } from "react";

const PersonalInfo = () => {

  return (
    <div className="personal">
      <h2>PersonalInfo</h2>
      <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="first name" id="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" placeholder="last name" id="lastName" />

      <label htmlFor="personalDesc">Personal Description</label>
      <input type="text" placeholder="brief description" id="personalDesc" />

      <label htmlFor="email">e-mail</label>
      <input type="email" placeholder="sample@here.aol" id="email" />

      <label htmlFor="phone">Personal Description</label>
      <input type="tel" placeholder="XXX-XXX-XXXX" id="phone" />
    </div>
  );
};

export default PersonalInfo;
