import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

const Home = () => {
    const [movieData, setMovieData] = useState([])
    const [search, setSearch] = useState('spider')

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
        console.log(search)
    }

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=6cdea29d`).then((res) => {
            setMovieData(res.data.Search)
          })
      }, [search])


    return (
        <>
        <h1>Marvel Movies</h1>
        <div className="movies">
            {movieData.map((d) => (
                <div className="movies" key={d.imbdID}>
                <img className="mapped_poster_img" src={d.Poster} alt={d.Title} />
                </div>
            ))}
        </div>
        </>
    )
}

export default Home
