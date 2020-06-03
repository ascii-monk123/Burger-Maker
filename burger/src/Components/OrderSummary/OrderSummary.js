import React from 'react';

import Aux from '../../HOC/Auxillary';
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious Burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price :${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button buttonType={'Danger'} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType={'Success'} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
