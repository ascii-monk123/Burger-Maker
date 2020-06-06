import React, { Component } from 'react';
import Classes from './Modal.module.css';
import Aux from '../../HOC/Auxillary';
import Backdrop from '../UI/Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Shoud modal update');
    //here we made sure that we dont unnecessarily update the ordersummary and shall only update it when the modal is to be shown and order summary will not be updated all the times
    //Here the order summary does not rerender cause the modal is the wrapping element which is controlling the behavior and isn't letting it update without any reason.
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    //this is not required here
    console.log('Modal will update');
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={Classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
