const PersonalInfo = ({person,setPersonState}) => {
  const { firstName, lastName, personalDesc, email, phone } = person;

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

  return (
    <div className="personal">
      <h2>PersonalInfo</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder={firstName}
        id="firstName"
        onChange={updateFirstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder={lastName}
        id="lastName"
        onChange={updateLastName}
      />

      <label htmlFor="personalDesc">Personal Description</label>
      <input
        type="text"
        placeholder={personalDesc}
        id="personalDesc"
        onChange={updatePersonDesc}
      />

      <label htmlFor="email">e-mail</label>
      <input
        type="email"
        placeholder="sample@here.aol"
        id="email"
        onChange={updateEmail}
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        placeholder="XXX-XXX-XXXX"
        id="phone"
        onChange={updatePhone}
      />
    </div>
  );
};

export default PersonalInfo;
