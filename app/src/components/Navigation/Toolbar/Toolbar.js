import React from 'react';
import './Toolbar.css';
import Logo from '../../Sign/Sign';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
  <header className="Toolbar">
    <div>Menu</div>
      <Logo height="80%" />

    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;