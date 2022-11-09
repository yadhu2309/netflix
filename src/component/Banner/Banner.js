import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'

export default function Banner() {
    const [movie, setMovie] = useState()

useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        const newIndex = Math.floor(Math.random()*response.data.results.length)
        console.log("super",newIndex)
        setMovie(response.data.results[newIndex]);
    })
},[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title || movie.name:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>
                    Play
                </button>
                <button className='button'>
                    My List
                </button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
            <div className="fade"></div>

    </div>
  )
}
