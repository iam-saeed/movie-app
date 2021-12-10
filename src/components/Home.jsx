import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [movieData, setMovieData] = useState({
        Poster: '',
        Title: '',
        Type: '',
        Year: '',
    })
      let API_KEY = "a0f2b435";
      useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`).then((res) => {
          console.log(res.data.Search)
        })
      }, [])

    return (
        <div>
            
        </div>
    )
}

export default Home
