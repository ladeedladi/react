import React,{useState} from 'react';
import Navbar from './components/navbar/navbar';
import "./App.css"
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import YouTube from 'react-youtube';
import {API_KEY,netflixUrl,actionUrl,horrerUrl,romanticUrl} from './constants'
import axios from 'axios';
function App() {
  const [Play,setPlay]=useState('')

function WatchVideo(id){
axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
  console.log(res.data.results[0])
  if(res.data.results.length!==0){
    setPlay(res.data.results[0])
  }
  
}).catch(err=>{
  console.log(err);
})
}

  const opts={
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    }
   }

 

  return (
    <div>
      <Navbar />
      <Banner />
      {Play && <YouTube opts={opts} videoId={Play.key} />}
      <Rowpost title={'Netflix Originals' }  axiossrc={netflixUrl} isSmall WatchVideo={WatchVideo}/>
      
      <Rowpost title={'Action'}   axiossrc={actionUrl} WatchVideo={WatchVideo} />
      <Rowpost title={'Horror'}   axiossrc={horrerUrl}  WatchVideo={WatchVideo}/>
      <Rowpost title={'Romantic'}   axiossrc={romanticUrl} WatchVideo={WatchVideo}/>
      
      </div>
  );
}

export default App
