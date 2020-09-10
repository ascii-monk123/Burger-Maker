import React, { Component, useReducer } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/Checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutContinued={this.checkoutContinued}
            checkoutCancelled={this.checkoutCancelled}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return <div>{summary}</div>;
  }
}
/***Redux dispatches and actions */
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};
//there's nothing getting dispatched so we don't need that here

export default connect(mapStateToProps)(Checkout);
//but if we had only mapDispatchToProps we had to use connect(null,mdtp) as first argument to the hoc function had to be mapStateToProps

/****************Below is the code that has been depracated from this project */

// state = {
//   ingredients: null,
//   price: 0,
// };
// componentWillMount() {
//   const query = new URLSearchParams(this.props.location.search);
//   const ingredients = {};
//   let price = 0;
//   for (let param of query.entries()) {
//     if (param[0] === 'price') {
//       price = param[1];
//     } else {
//       ingredients[param[0]] = +param[1];
//     }
//   }
//   this.setState({
//     ingredients: ingredients,
//     price: price,
//   });
// }
