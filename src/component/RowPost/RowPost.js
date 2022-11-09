import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {API_KEY, imageUrl } from '../../constants/constants'
export default function RowPost(props) {
 const [movies, setMovies] = useState([])
 const [movieUrl,setMovieUrl] = useState()
 useEffect(() => {
axios.get(props.url).then((response) => {
  console.log(response.data)
  setMovies(response.data.results)
  console.log(movies)
})
 }, [])
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const watchMovie=(id)=>{
  console.log("clcked",id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log("gaol",response.data)
    setMovieUrl(response.data.results[0])
  })

}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((data,index)=>
          <img onClick={()=>watchMovie(data.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+data.backdrop_path}`} alt="poster" />
  )}
        
        </div>
      {movieUrl ?<Youtube videoId={movieUrl.key} opts={opts} />:''}


    </div>
  )
}
