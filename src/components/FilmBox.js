import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilmBox = (props) => {

    const {name, posterPath, averageScore, id} = props;

    return (
        <div className='film'>
            <Link to={`/movie/${id}`}><img  className='film-poster' src={`https://image.tmdb.org/t/p/w500${posterPath}`} /></Link>
            <h3 className='film-name'>{name}</h3>
            <p className='film-score'><span className='film-score-highlight'>{averageScore}</span> / 10</p>
        </div>

)};

export default FilmBox;