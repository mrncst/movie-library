import React from 'react';
import BackButton from './BackButton';

const MovieInfo = (props) => {

    return(
        <div className='movie-info-container'>
            <BackButton />
            <div className='movie-info-container-info'>
                <img className='film-poster' src={`https://image.tmdb.org/t/p/w500${props.posterPath}`} alt='Movie poster'/>
                <h3>{props.title}</h3>
                <p>{props.language} / {props.year}</p>
                <p>{props.averageScore} / 10</p>
                <p>{props.overview}</p>
            </div>
        </div>
)};

export default MovieInfo;