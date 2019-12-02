import React from 'react';
import SideMenu from './SideMenu';

const Header = () => {

    const displaySearch = () => {
        
    };

    return (
        <div className='header'>
            <SideMenu />
            <img className='icon-glass' onClick = {displaySearch} src={require('../images/magnifying-glass.svg')} alt='Search Icon'/>
        </div>
        
)};

export default Header;