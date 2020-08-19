import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import Classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },

    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Aahan Singh',
        address: {
          street: 'Test Street',
          zipCode: '11456',
          country: 'India',
        },
        email: 'test1234@hotmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className={Classes.input}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className={Classes.input}
        ></input>
        <input
          type="text"
          name="street"
          placeholder="Street"
          className={Classes.input}
        ></input>
        <input
          type="text"
          name="postal"
          placeholder="Postal Code"
          className={Classes.input}
        ></input>
        <Button buttonType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
