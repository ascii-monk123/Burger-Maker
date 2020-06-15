import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal';
import Aux from '../Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      //this is a reference to the interceptor
      this.respInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      // console.log(
      //   'will unmount',
      //   this.requestInterceptor,
      //   this.respInterceptor
      // );
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
      //these above will return some ids which are kept by axios for the request and response interceptors
    }
    errorConfirmHander = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHander}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
