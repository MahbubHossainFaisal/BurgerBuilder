import React from 'react';

import Dux from '../../../hoc/Dux';

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
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to Checkout?</p>
        </Dux>
    );
}

export default orderSummery;