import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import contacts from "./contact"


function dark(contact){
    return(
        <App
        key={contact.id}
         Name={contact.name}
         Emoji={contact.emoji}
         meaning={contact.meaning}
        />
    )
}

ReactDOM.render(<div>
     <div>
      <h1>
        <span>emojipedia</span>
      </h1>
       
        {contacts.map(dark)}
       
  
   
       
    </div>
    </div>, document.getElementById("root"));
 
