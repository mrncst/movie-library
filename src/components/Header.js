import React from 'react';
import SideMenu from './SideMenu';

const Header = () => {

    const displaySearch = () => {
        console.log('teste');
    };

    return (
        <div className='header'>
            <SideMenu />
            <img className='icon-glass' onClick = {displaySearch} src={require('../images/magnifying-glass.svg')} />
        </div>
        
)};

export default Header;