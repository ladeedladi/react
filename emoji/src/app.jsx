import React from "react";

function App(props) {
  
  return (
   

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.Emoji}
            </span>
            <span>{props.Name}</span>
          </dt>
          <dd>
           {props.meaning}
          </dd>
        </div>
       
      </dl>
   
  );
}

export default App;
