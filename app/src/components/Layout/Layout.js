import React from 'react';
import Dux from '../../hoc/Dux';
import './Layout.css';

const layout = (props) => (

  <Dux>
        <div >Toolbar,Side Drawyer,Backdrop</div>
        <main className='Layout-content'>
            {props.children}
        </main>
  </Dux>
);

export default layout;