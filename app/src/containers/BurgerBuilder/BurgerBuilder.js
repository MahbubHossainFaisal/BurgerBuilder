import React, { Component } from 'react';
import Dux from '../../hoc/Dux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state ={
        ingredients: {
            salad: 1,
            bacon:1,
            cheese: 2,
            meat:2,
        }
    }
    render() {
        return (
           <Dux>
               <Burger ingredients={this.state.ingredients} />
               <div>Burger Building Controls</div>
           </Dux>
        );
    }
}

export default BurgerBuilder;