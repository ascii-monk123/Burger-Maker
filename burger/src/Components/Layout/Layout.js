import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  sideDrawerOpenHandler=()=>{
    this.setState({
      showSideDrawer:true
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={Classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
