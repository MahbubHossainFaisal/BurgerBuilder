import React from 'react';
import Dux from '../../hoc/Dux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (

  <Dux>
        <Toolbar />
        <main className='Layout-content'>
            {props.children}
        </main>
  </Dux>
);

export default layout;