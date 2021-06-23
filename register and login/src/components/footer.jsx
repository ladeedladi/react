import React from "react";
import Input from "./header";
function Form() {
  return (
    <form className="form">
       <Input t={"text"} u={"username"}/>
      <Input t={"password"} u={"password"}/>
      <Input t={"password"} u={"confirm Password"}/>
     
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
