import React from 'react';
import './Toolbar.css';
import Sign from '../../Sign/Sign';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (

    <header className="Toolbar">
        <div>Menu</div>

       <Sign height="80%" />
        <nav>
           <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;