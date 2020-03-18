import React from 'react';
import Aux from '../../HOC/Auxillary';
const layout = props => (
  <Aux>
    <div>Toolbar,Sidedrawer,Backdrawer</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
