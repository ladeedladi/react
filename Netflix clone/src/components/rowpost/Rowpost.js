import axios from 'axios'
import {imgUrl } from '../../constants'
import React,{useEffect,useState} from 'react'

import './Rowpost.css'
function Rowpost(props) {
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        axios.get(props.axiossrc).then(res=>{
            console.log(res.data.results)
            setmovie(res.data.results)
        }).catch(err=>{
            console.log(err)
        })
        
    },[])
    
    return (
        <div className="row">
           <h2 >{props.title}</h2>
           <div className="posters">
               {movie.map(obj=>
               <img onClick={()=>{props.WatchVideo(obj.id)}} className={props.isSmall?"poster":"smallposter"} alt='poster' src={`${imgUrl+obj.backdrop_path}`}
               />)}
           
           
           </div>
           
        </div>
    )
}

export default Rowpost
