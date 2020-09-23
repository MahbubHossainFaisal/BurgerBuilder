import React, { Component } from 'react';
import Dux from '../../hoc/Dux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render() {
        return (
           <Dux>
               <Burger />
               <div>Burger Building Controls</div>
           </Dux>
        );
    }
}

export default BurgerBuilder;