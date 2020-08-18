import React, { Component, useReducer } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({
      ingredients: ingredients,
    });
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace('/Checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinued}
          checkoutCancelled={this.checkoutCancelled}
        />
      </div>
    );
  }
}

export default Checkout;