import React from "react"
const currentDate=new Date()

function App(){
 

return(
  <div className="header">
  <h1>keeper</h1>
  
  
   </div>
)
}




function Body(){

  return(
    <div className="note">
      <h1>this is a note</h1>
      <p>yes it is</p>
    </div>
  )
}
function Foot(){

  return(
    <div className="footer">
    <p>copyright:{currentDate.getFullYear()}</p>
    </div>
  )
}


export default App
export {Body,Foot}
