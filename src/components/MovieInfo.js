import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import MainContext from './MainContext';

const MovieInfo= (props) => {

    const key = process.env.REACT_APP_API_KEY;
    const {setLoading, movieInfo, setMovieInfo} = useContext(MainContext);


    useEffect(() => {
        const fetchData = async () => {
            const id = props.location.pathname.split('/')[2];
            setLoading(true);
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);

            setMovieInfo(() => { 
                return {
                title: result.data.title, 
                overview: result.data.overview,
                genres: result.data.genres,
                runtime: result.data.runtime,
                posterPath: result.data.poster_path,
                voteAverage: result.data.vote_average,
                language: result.data.spoken_languages[0].name,
                year: result.data.release_date.split('-')[0]
            }});

            setLoading(false);

            console.log(result);
        };
        
        fetchData();
        
    }, []);  
    
    console.log(movieInfo);


    return(
        <div>
            <h1>{movieInfo.title}</h1>
        </div>

)};

export default MovieInfo;