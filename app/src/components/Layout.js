import React from 'react';
import Dux from './../hoc/Dux';

const layout = (props) => (


   <Dux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
   </Dux>
);

export default layout;