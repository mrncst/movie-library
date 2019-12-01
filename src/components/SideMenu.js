import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

const SideMenu = () => {

    return (
        <div className="side-menu">
            <Menu left width={ '40%' } className='bm-hamb-menu' >
            <img className='bm-logo' src={require('../images/oculos.svg')} />
                <h2>DISCOVER</h2>
                    <NavLink to='/discover/popular' activeClassName='bm-selected'><img className='bm-icon' src={require('../images/fire.svg')} />Trending</NavLink>
                    <NavLink to='/discover/surprise-me' activeClassName='bm-selected'><img className='bm-icon' src={require('../images/gift.svg')} />Surprise Me</NavLink>
                <h2>GENRES</h2>
                    <NavLink to='/genres' activeClassName='bm-selected'>Action</NavLink>
                    <NavLink to='/genres/animation' activeClassName='bm-selected'>Animation</NavLink>
                    <NavLink to='/genres/comedy' activeClassName='bm-selected'>Comedy</NavLink>
                    <NavLink to='/genres/crime' activeClassName='bm-selected'>Crime</NavLink>
                    <NavLink to='/genres/documentary' activeClassName='bm-selected'>Documentary</NavLink>
                    <NavLink to='/genres/drama' activeClassName='bm-selected'>Drama</NavLink>
                    <NavLink to='/genres/family' activeClassName='bm-selected'>Family</NavLink>
                    <NavLink to='/genres/horror' activeClassName='bm-selected'>Horror</NavLink>
                    <NavLink to='/genres/music' activeClassName='bm-selected'>Music</NavLink>
                    <NavLink to='/genres/mistery' activeClassName='bm-selected'>Mystery</NavLink>
                    <NavLink to='/genres/romance' activeClassName='bm-selected'>Romance</NavLink>
                    <NavLink to='/genres/scifi' activeClassName='bm-selected'>Sci-Fi</NavLink>
                    <NavLink to='/genres/thriller' activeClassName='bm-selected'>Thriller</NavLink>
                    <NavLink to='/genres/war' activeClassName='bm-selected'>War</NavLink>
            </Menu>
        </div>

)};

export default SideMenu;