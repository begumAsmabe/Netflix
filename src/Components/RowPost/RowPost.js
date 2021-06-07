import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'
import './RowPost.css'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => { 
        axios.get(props.url).then(res=>{
            console.log(res.data);
            setMovies(res.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  const handleClick=(id)=>{
               console.log(id);
               axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                   if(response.data.resultslength!==0)

                   {
                       setUrlId(response.data.results[0])
                   }
                   else
                   {
                       console.log('No videos to play');
                   }
               })
  }
    return (
        
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj,i)=>
                
                    < img onClick={()=>handleClick(obj.id)} key={i} className={ props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
                )}
                
                
            </div>
          {urlId && <   Youtube videoId={urlId.key} opts={opts}/>}  
        </div>
       
    )
}

export default RowPost
