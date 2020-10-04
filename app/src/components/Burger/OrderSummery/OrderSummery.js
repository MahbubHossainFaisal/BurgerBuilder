import React, {Component} from 'react';

import Dux from '../../../hoc/Dux';
import Button from '../../UI/Button/Button'

class OrderSummery extends Component{


  render(){

    const ingredientSummery= Object.keys(this.props.ingredients)
    .map(igkey => {
        return (
        <li key={igkey}>
            <span style={{transform:'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}
        </li>);
    });
    return (
       <Dux>
        <h3> Your Order </h3>
        <p> A delicious burger with the following ingredients.</p>
        <ul>{ingredientSummery}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Dux>
    );
  }
} 

export default OrderSummery;