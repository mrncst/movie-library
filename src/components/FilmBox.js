import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FilmBox = (props) => {

    const {name, posterPath, averageScore, id} = props;

    return (
        <motion.div 
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}>

            <div className='film'>
                <Link to={`/movie/${id}`}><img  className='film-poster' src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt = 'Movie poster'/></Link>
                <h3 className='film-name'>{name}</h3>
                <p className='film-score'><span className='film-score-highlight'>{averageScore}</span> / 10</p>
            </div>
            
        </motion.div>

)};

export default FilmBox;