import React, { Component } from "react";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleFirstNameChanges = (event) => {
    setValue({ ...value, firstName: event.target.value });
  };

  const handleLastNameChanges = (event) => {
    setValue({ ...value, lastName: event.target.value });
  };

  const handleEmailChanges = (event) => {
    setValue({ ...value, email: event.target.value });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <form className="formDesign" onSubmit={handleSubmit}>
              {submitted ? <div>success !!!</div> : null}
              <input
                type="text"
                placeholder="First Name"
                value={value.firstName}
                onChange={handleFirstNameChanges}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                value={value.lastName}
                onChange={handleLastNameChanges}
              ></input>
              <input
                type="email"
                placeholder="Email"
                value={value.email}
                onChange={handleEmailChanges}
              ></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Form;
