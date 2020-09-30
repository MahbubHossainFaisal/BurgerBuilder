import React from 'react';

import Dux from '../../../hoc/Dux';
import Button from '../../UI/Button/Button'

const orderSummery = (props)=> {
    const ingredientSummery= Object.keys(props.ingredients)
    .map(igkey => {
        return (
        <li key={igkey}>
            <span style={{transform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
        </li>);
    });
    return (
      <Dux>
        <h3> Your Order </h3>
        <p> A delicious burger with the following ingredients.</p>
        <ul>{ingredientSummery}</ul>
        <p>
          <strong>Total Price: {props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </Dux>
    );
}

export default orderSummery;