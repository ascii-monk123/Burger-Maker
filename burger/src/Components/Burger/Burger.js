import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //Creates empty array of given size inside the bracket props.ingredient[key] gives object value at the given keyName
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, cur) => {
      return arr.concat(cur);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
