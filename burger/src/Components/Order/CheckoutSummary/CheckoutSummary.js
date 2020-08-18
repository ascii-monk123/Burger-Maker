import React from 'react';
import Checkout from '../../../Containers/Checkout/Checkout';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummary.module.css';
const checkoutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
      <h1 style={{ marginTop: '20px' }}>Hope it tastes well !!</h1>
      <div
        style={{
          width: '100%',
          margin: 'auto',
          marginTop: '30px',
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
