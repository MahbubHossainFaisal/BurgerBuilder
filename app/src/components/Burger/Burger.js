import React  from 'react';

import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) =>{

   const transformedIngredients = Object.keys(props.ingredients).map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_,i) =>{
       return  <BurgerIngredients key={igkey+i} type={igkey} />;
      });
   }).reduce((arr,el) => {
      return arr.concat(el);
   },[]);
    return(
       <div className='Burger'>
          <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />

       </div>
    );
};

export default Burger;