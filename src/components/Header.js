import React from 'react';
import SideMenu from './SideMenu';
import LateralMenu from './LateralMenu';

const Header = () => {

    return (
        <div className='header'>
            <LateralMenu/>
            <SideMenu />
        </div>
        
)};

export default Header;