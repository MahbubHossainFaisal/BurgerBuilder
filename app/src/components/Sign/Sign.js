import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import './Sign.css';

 const Sign = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default Sign;