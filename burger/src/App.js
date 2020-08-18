import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/Checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}
export default App;

/**
 * This below is just for testing purposes
 */
// state = {
//   show: true,
// };
// componentDidMount() {
//   setTimeout(() => {
//     this.setState({
//       show: false,
//     });
//   }, 5000);
// }//just for testing purposes
