import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    
    return (
        <div className="side-menu">
            <h2>Discover</h2>
            <ul>
                <li><NavLink to='/popular' activeClassName='selected'>Popular</NavLink></li>
                <li><NavLink to='/top-rated'>Top Rated</NavLink></li>
            </ul>
            <h2>Genres</h2>
            <ul>
                <li><NavLink to='/popular'>Action</NavLink></li>
                <li><NavLink to='/popular'>Adventure</NavLink></li>
                <li><NavLink to='/popular'>Animation</NavLink></li>
                <li><NavLink to='/popular'>Comedy</NavLink></li>
                <li><NavLink to='/popular'>Crime</NavLink></li>
                <li><NavLink to='/popular'>Documentary</NavLink></li>
                <li><NavLink to='/popular'>Drama</NavLink></li>
                <li><NavLink to='/popular'>Family</NavLink></li>
                <li><NavLink to='/popular'>Fantasy</NavLink></li>
                <li><NavLink to='/popular'>History</NavLink></li>
                <li><NavLink to='/popular'>Horror</NavLink></li>
                <li><NavLink to='/popular'>Music</NavLink></li>
                <li><NavLink to='/popular'>Mystery</NavLink></li>
                <li><NavLink to='/popular'>Romance</NavLink></li>
                <li><NavLink to='/popular'>Science Fiction</NavLink></li>
                <li><NavLink to='/popular'>TV Movie</NavLink></li>
                <li><NavLink to='/popular'>Thriller</NavLink></li>
                <li><NavLink to='/popular'>War</NavLink></li>
                <li><NavLink to='/popular'>Western</NavLink></li>
            </ul>
        </div>

)};

export default SideMenu;