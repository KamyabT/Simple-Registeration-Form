import React, { Component } from "react";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setValidated(true);
    }
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
    <main className="mainDesign">
      <section className="sectionDesign">
        <div className="formContainerDesign">
          <p className="headerDesign">Registeration Form</p>
          <form className="formDesign" onSubmit={handleSubmit}>
            {submitted && validated ? <div className="successAlert">success !!!</div> : null}
            <input
              type="text"
              placeholder="First Name"
              value={value.firstName}
              onChange={handleFirstNameChanges}
              className="inputDesign"
            ></input>
            {submitted && !value.firstName ? (
              <span className="alertDesign">fill the first name</span>
            ) : null}
            <input
              type="text"
              placeholder="Last Name"
              value={value.lastName}
              onChange={handleLastNameChanges}
              className="inputDesign"
            ></input>
            {submitted && !value.lastName ? (
              <span className="alertDesign">fill the last name</span>
            ) : null}
            <input
              type="email"
              placeholder="Email"
              value={value.email}
              onChange={handleEmailChanges}
              className="inputDesign"
            ></input>
            {submitted && !value.email ? <span className="alertDesign">fill the email</span> : null}
            <input
              type="submit"
              value="Submit"
              className="inputDesign submitDesign"
            ></input>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;

{
  /* <form className="formDesign" onSubmit={handleSubmit}>
{submitted && validated ? <div>success !!!</div> : null}
<input
  type="text"
  placeholder="First Name"
  value={value.firstName}
  onChange={handleFirstNameChanges}
></input>
{submitted && !value.firstName ? (
  <span>fill the first name</span>
) : null}
<input
  type="text"
  placeholder="Last Name"
  value={value.lastName}
  onChange={handleLastNameChanges}
></input>
{submitted && !value.lastName ? (
  <span>fill the last name</span>
) : null}
<input
  type="email"
  placeholder="Email"
  value={value.email}
  onChange={handleEmailChanges}
></input>
{submitted && !value.email ? (
  <span>fill the email</span>
) : null}
<input type="submit" value="Submit"></input>
</form> */
}
