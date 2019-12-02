import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {

    return(
        <React.Fragment>
            <Link to='/'><button className='back-button'>BACK</button></Link>
        </React.Fragment>
)};

export default BackButton;