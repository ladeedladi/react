
import React, { useState } from "react";

function CreateArea(props) {
const [details,setdetails]=useState({title:"",content:""})

const [added,setAdd]=useState([])
function Add(event){
  setAdd(details)
  props.dummy(details)
  setdetails({title:"",content:""})
  event.preventDefault()
  
   }
  function change(event){
    
    const {name,value}=event.target
   setdetails(prev=>{
     return{...prev,[name]:value}})
  }
  return (
    <div>
      <form onSubmit={Add}>
        <h1>{details.title}{details.content}</h1>
        <input onChange={change} name="title" placeholder="Title" value={details.title}/>
        <textarea onChange={change} name="content" placeholder="Take a note..." rows="3" value={details.content} />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
 