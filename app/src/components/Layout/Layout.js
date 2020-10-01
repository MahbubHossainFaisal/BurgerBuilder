import React from 'react';
import Dux from '../../hoc/Dux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (

  <Dux>
   
        <Toolbar />
    <SideDrawer />
        <main className='Layout-content'>
            {props.children}
        </main>
  </Dux>
);

export default layout;