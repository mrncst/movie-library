import React from 'react';
import BackButton from './BackButton';

const MovieInfo = (props) => {

    return(
        <div>
            <BackButton />
            <img  className='film-poster' src={`https://image.tmdb.org/t/p/w500${props.posterPath}`} alt='Movie poster'/>
            <h3>{props.title}</h3>
            <p>{props.language} / {props.runtime} min. / {props.year}</p>
            <p>{props.averageScore} / 10</p>
            <p>{props.overview}</p>
        </div>
)};

export default MovieInfo;