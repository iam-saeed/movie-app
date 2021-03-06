import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

const Home = () => {
    const [movieData, setMovieData] = useState([])
    const [search, setSearch] = useState({
        search: 'movie'
    })

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=movie&apikey=6cdea29d`).then((res) => {
            setMovieData(res.data.Search)
          })
      }, [])

      const onClick = (e) => {
        axios.get(`https://www.omdbapi.com/?s=${search.search}&apikey=6cdea29d`).then((res) => {
            setMovieData(res.data.Search)
          })
      }


    return (
        <>
        <div className="main-container">
            <div className="heading">
                <h1>M o v i e s </h1>
            <div className="search">
            <input onChange={handleChange} name="search" className="search_input" type="text" placeholder="Search Movies" onSubmit={onClick}  />
            <button onClick={onClick} type='submit' className="submit_btn">Search</button>
            </div>
            </div>

        <div className="movies">
            {movieData.map((d) => (
                <div className="movies" key={d.imbdID}>
                <img className="mapped_poster_img" src={d.Poster} alt={d.Title} />
                </div>
            ))}
        </div>
            </div>
        </>
    )
}

export default Home
