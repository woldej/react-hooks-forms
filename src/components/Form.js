import React from "react"
import DisplayData from "./DisplayData";

function Form({handleFirstNameChange
,handleLastNameChange,handleNewsletterChange,firstName,lastName,newsletter
}){
return(<form >
  <input type="text" onChange={handleFirstNameChange} value={firstName} />
  <input type="text" onChange={handleLastNameChange} value={lastName} /><br/>
  <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
  <input
    type="checkbox"
    id="newsletter"
    onChange={handleNewsletterChange}
    checked={newsletter}
  /><br/><br/>
    <DisplayData firstName={firstName} lastName={lastName} />
<button type="submit">Submit</button>
</form>)
}

export default Form;
