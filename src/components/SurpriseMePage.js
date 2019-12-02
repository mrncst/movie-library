import React, { useContext } from 'react';
import axios from 'axios';
import MovieInfo from './MovieInfo';
import MainContext from './MainContext';
import 'react-dropdown/style.css';

const SurpriseMePage = () => {

    const {setLoading, loading, movieInfo, setMovieInfo} = useContext(MainContext);
    const key = process.env.REACT_APP_API_KEY;
    const options = [
        'action', 'adventure', 'animation', 'comedy', 'crime', 'documentary', 'drama', 
        'family', 'fantasy', 'history', 'horror', 'music', 'mystery', 'romance', 'scifi',
         'thriller', 'war'
      ];

      const handleSurpriseSubmit = (e) => {
        e.preventDefault();
        const selectedGenre = e.target.elements[0].value;
        const inputMovie = [e.target.elements[1].value.split(' ')][0].join('+').toLowerCase();

        const fetchData = async () => {
            const movieFetch = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${inputMovie}`);
            const movieId = movieFetch.data.results[0].id;
            const recommendedMovies = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}}/recommendations?api_key=${key}&language=en-US&page=1`);
            const recommendation = recommendedMovies.data.results[Math.floor(Math.random() * (20 - 1) + 1)];
            setLoading(true);
            setMovieInfo(recommendedMovies.data.results);
            setLoading(false);
            console.log(recommendation);
        };
        fetchData();
        window.scrollTo(0,0);
      };
      
    return(
        <div>
            <h1>SURPRISE ME</h1>
            <form onSubmit={handleSurpriseSubmit}>
                <p className='surprise-me-text'>I wanna watch a </p>
                <select>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="music">Music</option>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Scifi</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                </select>
                <p>movie similar to <input type='text'/>.</p>
                <button>SEARCH</button>
            </form>
            <div className='disabled'>
                <MovieInfo/>
            </div>
        </div>
)};

export default SurpriseMePage;
