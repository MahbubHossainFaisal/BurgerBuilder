import React from 'react';
import Logo from '../../Sign/Sign';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Dux from '../../../hoc/Dux/Dux';

const SideDrawer = (props) =>{

    const opeN="Open";
    const close="Close";
    const sideDrawer="SideDrawer"
    let attachedClasses=[sideDrawer,close];

    if(props.open){
        attachedClasses=[sideDrawer,opeN];
    }
    return (
      <Dux>
          <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
          <Logo height="11%" marginBottom="32px" />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Dux>
    );
};
export default SideDrawer;