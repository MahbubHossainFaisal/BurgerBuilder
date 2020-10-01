import React from 'react';
import './Toolbar.css';
import Sign from '../../Sign/Sign';
import NavigationItems from '../NavigationItems/NavigationItems';
const Toolbar = (props) => (

    <header className="Toolbar">
        <div>Menu</div>

       <Sign />
        <nav>
           <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;