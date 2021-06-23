import React from "react"
import Input from "./header"

function login(){
    return(
<form className="form">
    
<Input t={"text"} u={"username"}/>
<Input t={"password"} u={"password"}/>
<button type="submit">login</button>
</form>
    )

}

export default login