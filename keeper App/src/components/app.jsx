import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./form";
function App() {
  const [notes,setnotes]=useState([])
  function dummy(note){
   setnotes(prev=>{return[...prev,note]})
  
  }



  function deleted(id){
    setnotes(prevnotes=>{
      return notes.filter((val,index)=>{
        return index !== id
      })
    })
   
}
 
  return (
    <div>
      <Header />
      <CreateArea dummy={dummy} />
       {notes.map((res,idx)=><Note key={idx} id={idx} title={res.title} content={res.content} ondeleted={deleted} notes={notes}/>)}
      <Footer />
    </div>
  );
}

export default App;