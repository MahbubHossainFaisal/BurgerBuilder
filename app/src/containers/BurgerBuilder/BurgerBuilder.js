import React, { Component } from 'react';
import Dux from '../../hoc/Dux';

class BurgerBuilder extends Component {

    render() {
        return (
           <Dux>
               <div>Burger</div>
               <div>Burger Building Controls</div>
           </Dux>
        );
    }
}

export default BurgerBuilder;