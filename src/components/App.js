import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }
  return (<>
    <Form 
    handleFirstNameChange={handleFirstNameChange}
handleLastNameChange={handleLastNameChange} handleNewsletterChange={handleNewsletterChange}
firstName={firstName} lastName={lastName} newsletter={newsletter}/>
<DisplayData firstName={firstName} lastName={lastName} />
</>
  );
}

export default Form;