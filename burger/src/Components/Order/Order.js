import React from 'react';
import Classes from './Order.module.css';
const Order = (props) => {
  const ingredients = Object.keys(props.ingredients).map(
    (ingredientK, index) => {
      return (
        <p key={index} style={{
          border:'1px solid #000',
          width:'20%',
          padding:'5px',
          textAlign:'center'
        }}>
          {ingredientK
            .split('')
            .map((ele, index) => {
              if (index === 0) return ele.toUpperCase();
              else return ele;
            })
            .join('')}{' '}
          : {props.ingredients[ingredientK]}{' '}
        </p>
      );
    }
  );
  return (
    <div className={Classes.Order}>
      <h3>Ingredients:</h3>
      {ingredients}
      <p>
        Price <strong> USD($) {parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
