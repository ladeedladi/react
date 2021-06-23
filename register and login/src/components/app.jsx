import React from "react";
import Register from "./footer";
import Login from "./note";
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered?<Login/>:<Register/>}
    </div>
  );
}

export default App;
