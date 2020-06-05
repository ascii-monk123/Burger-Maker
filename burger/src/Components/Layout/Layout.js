import React from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
