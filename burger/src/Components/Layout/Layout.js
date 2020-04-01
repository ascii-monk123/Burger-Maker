import React from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Layout.module.css';
const layout = props => (
  <Aux>
    <div>Toolbar,Sidedrawer,Backdrawer</div>
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
