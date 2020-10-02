import React from 'react';
import Logo from '../../Sign/Sign';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'

const SideDrawer = (props) =>{

    return (
        <div className='SideDrawer'>
            <Logo height="11%" marginBottom="32px" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};
export default SideDrawer;