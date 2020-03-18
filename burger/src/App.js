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
