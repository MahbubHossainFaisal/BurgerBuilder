import React, { Component } from 'react';
import Dux from '../../hoc/Dux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';


const INGREDIENT_PRICES = {
    salad: 40,
    bacon: 45,
    cheese: 35,
    meat: 80
};
class BurgerBuilder extends Component {


  
    state ={
        ingredients: {
            salad: 0,
            bacon:0,
            cheese: 0,
            meat:0,
        },
        totalPrice: 20,
        purchasable:false,
       purchasing:false,
    }

    updatePurchaseState(ingredients){
       
        const sum=Object.keys(ingredients)
        .map(igkey =>{
            return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) =>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice+priceAddition;
        
        this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - priceDeduction;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        alert("You continue!");
    }
  
    render() {
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]<=0;
        }

        return (
           <Dux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   <OrderSummery 
                   purchaseCancelled = {this.purchaseCancelHandler}
                   purchaseContinued = {this.purchaseContinueHandler}
                   ingredients={this.state.ingredients} />
               </Modal>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
               disabled={disabledInfo}
               purchasable={this.state.purchasable}
               ordered={this.purchaseHandler}
               price={this.state.totalPrice}

               />
           </Dux>
        );
    }
}

export default BurgerBuilder;