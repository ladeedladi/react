import React,{useEffect,useState} from 'react'
import { API_KEY ,imgUrl} from '../../constants'
import "./Banner.css"
import axios from 'axios'
function Banner() {
const [state,setState]=useState()
 useEffect(()=>{
axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then(res=>{
    console.log(res.data.results[0]);
    setState(res.data.results[1])

}).catch(err=>{
    console.log(err);
})
    
 },[])


    

    return (
        <div className='banner' style={{backgroundImage:`url(${state ?  imgUrl+state.backdrop_path:null})`}}>
           <div className="content">
            <h1 className="title">{state ? state.title:null}</h1>
             
          <div className="banner_buttons">
           <button className="button">play</button>
           <button  className="button">mylist</button>
          </div>
          <h1 className="description">{state ? state.overview : null}</h1>
            
           </div>
           <div className="fade"></div>
        </div>
    )
}

export default Banner
