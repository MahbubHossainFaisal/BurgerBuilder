import React, { Component } from 'react';
import Dux from '../../hoc/Dux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state ={
        ingredients: {
            salad: 0,
            bacon:0,
            cheese: 0,
            meat:1,
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