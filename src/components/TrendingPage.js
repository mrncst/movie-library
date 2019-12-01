import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import FilmBox from './FilmBox';
import MainContext from './MainContext';

const TrendingPage = () => {
    
    const key = process.env.REACT_APP_API_KEY;

    const {trending, loading} = useContext(MainContext);

    return (
        <div>
            <h1>TRENDING</h1>
            <div className='loader'>
            {loading ? <Loader type='Grid' 
                        color='#6200EE' 
                        height={100}
                        width={100}
                        timeout={3000}/> :
                        trending.map((item, i) => <FilmBox name = {item.original_title} posterPath = {item.poster_path} averageScore = {item.vote_average} id = {item.id} key={i} />)}
            </div>
        </div>
)};

export default TrendingPage;