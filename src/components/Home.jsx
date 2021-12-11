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

      const onClick = (e) => {
        e.preventDefault()
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=6cdea29d`).then((res) => {
            setMovieData(res.data.Search)
          })
      }


    return (
        <>
        <div className="main-container">
            <div className="heading">
                <h1>M o v i e s</h1>
            <div className="search">
            <input onSubmit={onClick} onChange={handleChange} className="search_input" type="text" placeholder="Search Movies"  />
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
