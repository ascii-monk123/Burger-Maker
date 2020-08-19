import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import Classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };
  render() {
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your contact data</h4>
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
          <Button buttonType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
