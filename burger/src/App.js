import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
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
